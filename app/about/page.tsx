import Image from "next/image";
import RootLayout from "../layout";
import Header from "@/TSXReferences/Header";
import Footer from "@/TSXReferences/Footer";

export const metadata = {
    title: "Jose | About Me",
    description: "About Me",
};

export default function About() {
    return (
        (<RootLayout>
            <div
                className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <Header className="z-10"/>

                <main
                    className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-10">
                    <div className="flex justify-center items-center w-full gap-8 sm:flex-row flex-col">
                        <div className="flex justify-center items-center w-full text-center font-bold">
                            Curious by nature and driven by innovation, I’m Jose Neto - a senior<br/>
                            developer passionate about pushing the boundaries of technology. With<br/>
                            a deep-rooted enthusiasm for blockchain tech, I specialize in building<br/>
                            smart contracts, decentralized applications, and scalable web solutions.<br/>
                        </div>

                        <div className="w-[2px] h-full bg-gray-300 sm:h-40" />

                        <Image
                            src="/homepage/josemle_pfp.jpg"
                            alt="Jose Neto"
                            width={200}
                            height={200}
                            className="rounded-lg"
                        />
                    </div>

                    <div className="flex flex-col items-center sm:items-start gap-4 w-full text-center sm:text-left">
                        <h2 className="text-xl font-bold">Smart Contract Languages</h2>
                        <p>Solidity, Rust, Move (Aptos)</p>

                        <h2 className="text-xl font-bold">Blockchain Platforms</h2>
                        <p>Ethereum, Aptos, Solana, Polkadot, Polygon, Binance Smart Chain, Cosmos</p>

                        <h2 className="text-xl font-bold">Frameworks & Tools</h2>
                        <p>Hardhat, Truffle, Foundry, Move Framework (Aptos), Anchor</p>

                        <h2 className="text-xl font-bold">Security & Testing</h2>
                        <p>MythX, OpenZeppelin, Gas Optimization, Unit Tests, Smart Contract Audits</p>

                        <h2 className="text-xl font-bold">Web3 Tools</h2>
                        <p>Web3.js, Ethers.js, Metamask, IPFS, The Graph</p>

                        <h2 className="text-xl font-bold">Databases & Storage</h2>
                        <p>MongoDB, PostgreSQL, IPFS, Arweave</p>

                        <h2 className="text-xl font-bold">DevOps/CI-CD</h2>
                        <p>Docker, Kubernetes, CircleCI, GitHub Actions</p>

                        <h2 className="text-xl font-bold">Programming Languages</h2>
                        <p>JavaScript, TypeScript, Python, Go, NodeJs</p>
                    </div>
                </main>

                <br/>

                <Footer className="z-10"/>
            </div>
        </RootLayout>)
    )
}
