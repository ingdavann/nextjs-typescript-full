'use client'
import { useRouter } from "next/navigation";

// change this to null to see the error page
// const session = null;

const session = "some session data";
export default function Home() {
  const router = useRouter();

  // error.tsx will be replaced rerendered if session is null
  if(!session) {
    throw new Error("Auth is required to access this resource")
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home page</h1>
      <button className="rounded-lg bg-blue-500 text-slate-50 p-3" onClick={()=>router.push('/enroll')}>
        Go to Enroll
      </button>
    </main>
  );
}
