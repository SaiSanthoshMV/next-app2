import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
       <Image
          src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Web photo"
          width={580}
          height={68}
          priority
        />
      <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
      <footer>
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={10}
            height={10}
          />
      </footer>
    </div>
  );
}

/*
server component and client component are different
only client components can use hooks and browser interactivity

*/ 
// This is a server component by default.
// " use client" for client component