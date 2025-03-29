import Image from "next/image";

export default function Contact() {
    const contacts = [
        {
            href: "https://github.com/josemle/",
            icon: "/svgs/icons8-github.svg",
            alt: "GitHub icon",
            label: "@josemle",
        },
        {
            href: "https://linkedin.com/in/jose-c-neto/",
            icon: "/svgs/icons8-linkedin-64.png",
            alt: "LinkedIN icon",
            label: "@jose-c-neto",
        }
    ];

    return (
        (<footer>
            <main className="flex flex-row gap-4 row-start-2 items-center justify-center">
                {contacts.map((contact, index) => (
                    <a
                        key={index}
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#1b1b1b] text-[#f5f5f5] gap-2 hover:bg-[#555555] dark:hover:bg-[#121212] hover:text-gray-500 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                    >
                        <Image
                            className="dark"
                            src={contact.icon}
                            alt={contact.alt}
                            width={35}
                            height={35}
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                        {contact.label}
                    </a>
                ))}
            </main>
        </footer>)
    );
}