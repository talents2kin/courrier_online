import MobileNavBar from "@/components/MobileNavBar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Tonny' , lastName : 'NSENGA'} ;
  return (
    <main className="flex h-screen w-full dont-inter">
     <Sidebar user ={loggedIn}/>
     <div className="flex size-full flex-col">
      <div className="root-layout">
        <Image src="/icons/logo.svg" width={30} height={30} alt="Logo" />
       <div>
        <MobileNavBar user={loggedIn} />
       </div>
      </div> 
      {children}
     </div>
   
    </main>
  );
}
