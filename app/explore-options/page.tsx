"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getUserDetails } from "@/lib/firebase-service"
import { toast } from "sonner"

export default function ExploreRedirectPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [loadingMessage, setLoadingMessage] = useState("Loading explore page...")

  useEffect(() => {
    let isMounted = true;
    
    const checkAuth = async () => {
      try {
        if (isMounted) setLoadingMessage("Checking authentication...");
        
        const auth = getAuth();
        
        // Wait for auth state to initialize
        await new Promise((resolve) => {
          const unsubscribe = onAuthStateChanged(auth, (user) => {
            unsubscribe();
            resolve(user);
          });
        });
        
        // Check current user
        const user = auth.currentUser;
        console.log("Current user:", user?.uid);
        
        if (!user) {
          console.log("No user logged in");
          if (isMounted) {
            toast.error("Please login first");
            router.push("/login");
          }
          return;
        }
        
        if (isMounted) setLoadingMessage("Fetching your role...");
        
        try {
          // Add a short delay to ensure Firebase is fully initialized
          await new Promise(r => setTimeout(r, 500));
          
          const userDetails = await getUserDetails(user.uid);
          console.log("User details:", userDetails);
          
          if (!isMounted) return;
          
          if (userDetails.Role?.toLowerCase() === "recruiter") {
            router.push("/explore/recruiters"); // Direct to recruiter explore page
          } else if (userDetails.Role?.toLowerCase() === "student") {
            router.push("/explore/students"); // Direct to student explore page
          } else {
            console.error("Unknown role:", userDetails.Role);
            toast.error(`Invalid user role: ${userDetails.Role || "none"}`);
            // Redirect to login as fallback
            setTimeout(() => {
              if (isMounted) router.push("/login");
            }, 3000);
          }
        } catch (error: any) {
          console.error("Error fetching user details:", error);
          
          if (!isMounted) return;
          
          toast.error(error.message || "Failed to fetch user details");
          
          // Create a fallback route to prevent being stuck
          setTimeout(() => {
            if (isMounted) {
              router.push("/login");
            }
          }, 3000);
        }
      } catch (error) {
        console.error("Authentication error:", error);
        
        if (isMounted) {
          toast.error("Authentication error");
          router.push("/login");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };
    
    checkAuth();
    
    return () => {
      isMounted = false;
    };
  }, [router]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-white via-violet-50/30 to-white text-violet-950 dark:from-black dark:via-zinc-900/50 dark:to-black dark:text-white">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-violet-200 border-t-violet-600"></div>
      <p className="mt-4 text-lg font-medium">{loadingMessage}</p>
      <p className="mt-2 text-sm text-gray-500">This may take a moment...</p>
    </div>
  )
}