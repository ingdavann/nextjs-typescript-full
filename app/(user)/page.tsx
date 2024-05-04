'use client'
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react";
import { fetchUserProfile } from "@/redux/features/userProfile/userProfileSlice";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  // extracting data from usesession as session
  const { data: session } = useSession()
  console.log(session)
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [])

  // if user not singin
  if (!session) {
    return (
      <main className="w-full h-screen flex flex-col justify-center items-center">
        <p className="text-2xl mb-2">Not Signed In</p>
        <button className="bg-blue-600 py-2 px-6 rounded-md text-white mb-2" onClick={() => signIn('google')}>Sign in with google</button>
        <button className="bg-none border-gray-300 border py-2 px-6 rounded-md mb-2" onClick={() => signIn('github')}>Sign in with github</button>
      </main>)
  }
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-44 h-44 relative mb-4">
        <Image src={session.user?.image as string} fill alt="" className="object-cover rounded-full" /></div>
      <p className="text-2xl mb-2">Welcome <span className="font-bold">{session.user?.name}</span>. Signed In As</p>
      <p className="font-bold mb-4">{session.user?.email}</p>
      <button className="bg-red-600 py-2 px-6 rounded-md" onClick={() => signOut()}>Sign out</button>
    </main>
  );
}
