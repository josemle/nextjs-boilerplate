// Footer.tsx (app/RefTSX)
import Image from "next/image";
import Contact from "./Contact";
import React from "react";

interface FooterProps {
    className?: string;
}

export default function Footer({ className }: FooterProps) {
    return (
        (<footer className={`flex flex-col items-center justify-center z-10 ${className}`}>
            <Contact />
            <div style={{ margin: '10px 0' }} /> {/* This creates space */}
            <div className="flex gap-6 flex-wrap items-center justify-center">
                <a
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#1b1b1b] text-[#f5f5f5] gap-2 hover:bg-[#555555] dark:hover:bg-[#121212] hover:text-gray-500 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                    href="https://github.com/josemle/nextjs-boilerplate/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/svgs/icons8-github.svg"
                        alt="GitHub icon"
                        width={35}
                        height={35}
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                    Source Code
                </a>
            </div>
            <br />
            <div className="text-white p-4 text-center font-bold">
                <p>&copy; {new Date().getFullYear()} josemle (Arcane). All Rights Reserved.</p>
            </div>
        </footer>)
    );
}