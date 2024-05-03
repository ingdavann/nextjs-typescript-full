'use client'
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks"; 
import { useEffect } from "react";
import { fetchUserProfile } from "@/redux/features/userProfile/userProfileSlice";
// change this to null to see the error page
// const session = null;

const session = "some session data";
export default function Home() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserProfile());
  },[])

  // error.tsx will be replaced rerendered if session is null
  if(!session) {
    throw new Error("Auth is required to access this resource")
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl">Home page ទំព័រដើម</h1> 
      <button className="rounded-lg bg-blue-500 text-slate-50 p-3" onClick={()=>router.push('/enroll')}>
        Go to Enroll ចុចមើល
      </button>
    </main>
  );
}
