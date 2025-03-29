class HeaderProps {
    className?: string;
}

export default function Header({ className }: HeaderProps) {
    return (
        <header className={`row-start-1 flex gap-6 flex-wrap items-center justify-center ${className}`}>
            <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#1b1b1b] text-[#f5f5f5] gap-2 hover:bg-[#555555] dark:hover:bg-[#121212] hover:text-gray-500 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href="/"
            >
                Home
            </a>
            <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#1b1b1b] text-[#f5f5f5] gap-2 hover:bg-[#555555] dark:hover:bg-[#121212] hover:text-gray-500 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href="/about"
            >
                About Me
            </a>
        </header>
    )
}