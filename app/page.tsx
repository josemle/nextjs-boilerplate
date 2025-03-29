import Image from "next/image";
import Header from "@/TSXReferences/Header";
import Footer from "@/TSXReferences/Footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Header />

        <main
            className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-10"> {/* Ensure main content is above the background */}

            <div className="flex justify-center items-center w-full">

                <Image
                    className="dark"
                    src="/homepage/josemle_pfp.jpg"
                    alt="Profile Picture"
                    width={180}
                    height={38}
                    priority
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                        borderRadius: "50%",
                    }} />

            </div>

            <div className="flex justify-center items-center w-full text-center font-extrabold">
                <div className="relative inline-block p-4 bg-gray-700 bg-opacity-50 rounded-lg backdrop-blur-md">
                    Hello people! My name is Jose. I am an experienced and<br/>
                    senior Smart Contract Engineer with over 6 years of <br/>
                    experience blockchain technology, specializing in <br/>
                    Solidity, Rust, and Move (Aptos). <br />
                </div>
            </div>
        </main>

        <Footer />
    </div>
  );
}
