import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Coins, LineChart, Lock, Users, Banknote, BarChart3, ShieldCheck, Handshake } from 'lucide-react'

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <header className="px-4 lg:px-6 h-14 flex items-center border-b">
                <Link className="flex items-center justify-center" href="/">
                    <Building2 className="h-6 w-6 text-black" />
                    <span className="ml-2 text-2xl font-bold text-black">TokenEstate</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium text-gray-600 hover:text-black" href="/">
                        Home
                    </Link>
                    <Link className="text-sm font-medium text-gray-600 hover:text-black" href="#features">
                        Features
                    </Link>
                    <Link className="text-sm font-medium text-gray-600 hover:text-black" href="#challenges">
                        Challenges
                    </Link>
                    <Link className="text-sm font-medium text-gray-600 hover:text-black" href="/contact">
                        Contact
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 relative">
                    <div className="container px-4 md:px-6 relative z-10">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-[90px] mb-8 text-black">
                            About TokenEstate
                        </h1>
                        <p className="max-w-[700px] text-gray-600 md:text-xl mb-12">
                            TokenEstate is revolutionizing real estate investment through blockchain technology. Our platform leverages Solana&apos;s blockchain to tokenize properties, enabling fractional ownership and democratizing access to real estate markets.
                        </p>
                        <Button asChild className=" text-white hover:bg-gray-800">
                            <Link href="/">Back to Home</Link>
                        </Button>
                    </div>
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/3d-city.png"
                            alt="3D City Landscape"
                            layout="fill"
                            objectFit="cover"
                            className="opacity-10"
                        />
                        
                    </div>
                </section>
                <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 relative">
                    <div className="container px-4 md:px-6 relative z-10">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-black">Key Features</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                { title: "Property Tokenization", icon: Coins, description: ["Divide properties into smaller fractional tokens", "Create fungible or non-fungible assets on Solanas blockchain"] },
                                { title: "Micro-Investment Opportunities", icon: Users, description: ["Invest with as little as $10 worth of Solana tokens", "Democratically accessible for small investors"] },
                                { title: "Transparent Transactions", icon: LineChart, description: ["Smart contracts manage token sales, purchases, and transfers", "All transactions recorded on the blockchain for security"] },
                                { title: "Rental Income Distribution", icon: Banknote, description: ["Proportional distribution to token holders via smart contracts", "Real-time updates on rental earnings"] },
                                { title: "Secondary Market for Tokens", icon: BarChart3, description: ["Marketplace for buying, selling, or trading property tokens", "Enables liquidity for real estate investments"] },
                                { title: "KYC and Compliance Integration", icon: ShieldCheck, description: ["Built-in tools for KYC and AML compliance", "Smart contracts enforce jurisdictional regulations"] },
                                { title: "Decentralized Escrow Services", icon: Lock, description: ["Secure and tamper-proof escrow solutions", "Funds released only when pre-defined conditions are met"] },
                                { title: "Property Management Partnerships", icon: Handshake, description: ["Collaborations with local property management companies", "Ensures operational support and maintenance"] },
                            ].map((feature, index) => (
                                <Card key={index} className="bg-white border-gray-100">
                                    <CardHeader>
                                        <feature.icon className="h-6 w-6 mb-2 text-black" />
                                        <CardTitle className="text-black">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="list-disc pl-4 space-y-2 text-gray-600">
                                            {feature.description.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/solana-3d.png"
                            alt="Solana 3D Logo"
                            layout="fill"
                            objectFit="cover"
                            className="opacity-5"
                        />
                    </div>
                </section>
                <section id="challenges" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-black">Challenges and Solutions</h2>
                        <div className="grid gap-6 lg:grid-cols-3">
                            {[
                                {
                                    title: "Regulatory Hurdles",
                                    challenge: "Navigating complex and varying real estate regulations across different jurisdictions.",
                                    solution: "Implement region-specific compliance mechanisms, including automated tax reporting and KYC processes tailored to local requirements."
                                },
                                {
                                    title: "Market Adoption",
                                    challenge: "Encouraging traditional real estate stakeholders to embrace blockchain technology.",
                                    solution: "Partner with property developers and real estate agents to onboard high-quality assets, demonstrating the benefits of tokenization through successful case studies."
                                },
                                {
                                    title: "Trust in Decentralized Systems",
                                    challenge: "Building trust in blockchain technology among traditional real estate investors.",
                                    solution: "Ensure transparency by open-sourcing smart contracts, conducting regular third-party audits, and providing clear, accessible documentation on our security measures."
                                },
                            ].map((item, index) => (
                                <Card key={index} className="bg-white border-gray-100">
                                    <CardHeader>
                                        <CardTitle className="text-black">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="mb-2 font-semibold text-gray-700">Challenge:</p>
                                        <p className="mb-4 text-gray-600">{item.challenge}</p>
                                        <p className="mb-2 font-semibold text-gray-700">Solution:</p>
                                        <p className="text-gray-600">{item.solution}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
                <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
                    <div className="container px-4 md:px-6 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-[90px] md:pb-4 mb-8 text-black">Get in Touch</h2>
                        <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mb-12">
                            Have questions about TokenEstate or want to learn more about how you can get involved? We&apos;d love to hear from you.
                        </p>
                        <Button asChild size="lg" className=" text-white hover:bg-gray-800">
                            <Link href="mailto:contact@tokenestate.com">Contact Us</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <footer className="w-full py-6 bg-gray-50">
                <div className="container flex flex-col gap-2 sm:flex-row items-center px-4 md:px-6">
                    <p className="text-xs text-gray-600">© 2024 TokenEstate. All rights reserved.</p>
                    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                        <Link className="text-xs text-gray-600 hover:text-black" href="#">
                            Terms of Service
                        </Link>
                        <Link className="text-xs text-gray-600 hover:text-black" href="#">
                            Privacy
                        </Link>
                    </nav>
                </div>
            </footer>
        </div>
    )
}

