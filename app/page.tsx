import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Coins, LineChart, Lock, Users } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Building2 className="h-6 w-6 text-black" />
          <span className="ml-2 text-2xl font-bold text-black">TokenEstate</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium text-gray-600 hover:text-black" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium text-gray-600 hover:text-black" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium text-gray-600 hover:text-black" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium text-gray-600 hover:text-black" href="/contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter sm:text-4xl  lg:text-[90px] text-black">
                  Revolutionize Real Estate Investment with Blockchain
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Tokenize properties, invest with as little as $10, and enjoy the benefits of fractional ownership on the Solana blockchain.
                </p>
              </div>
              <div className="space-x-4">
                <Button className=" text-white hover:bg-gray-800">Get Started</Button>
                <Button variant="outline" className="border-gray-600 text-black hover:bg-gray-50">Learn More</Button>
              </div>
            </div>
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 relative">
          <div className="container px-4 md:px-6 relative z-10">
            <h2 className="text-[100px] font-bold tracking-tighter sm:text-5xl text-center mb-12 text-black">Key Features</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Property Tokenization", icon: Coins, description: "Convert real estate into digital tokens on Solana, enabling fractional ownership and easy trading." },
                { title: "Micro-Investments", icon: Users, description: "Invest in prime real estate with as little as $10, democratizing access to property markets." },
                { title: "Transparent Transactions", icon: LineChart, description: "Every transaction is recorded on the blockchain, ensuring complete transparency and security." },
                { title: "Rental Income Distribution", icon: Coins, description: "Automatically distribute rental income to token holders via smart contracts." },
                { title: "Secondary Market", icon: LineChart, description: "Trade property tokens on our built-in marketplace, providing liquidity to your investments." },
                { title: "KYC and Compliance", icon: Lock, description: "Built-in KYC and AML tools ensure regulatory compliance across jurisdictions." },
              ].map((feature, index) => (
                <Card key={index} className="bg-white border-gray-100">
                  <CardHeader>
                    <feature.icon className="h-6 w-6 mb-2 text-black" />
                    <CardTitle className="text-black">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <Image
                src="/3d-tokenized-building.png"
                width={550}
                height={550}
                alt="Tokenized Real Estate"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">How It Works</h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our platform leverages the power of Solana blockchain to revolutionize real estate investment. Here's how:
                  </p>
                </div>
                <ul className="grid gap-2 py-4 text-gray-600">
                  <li className="flex items-center">
                    <Coins className="mr-2 h-5 w-5 text-black" />
                    Properties are tokenized and divided into fractional shares
                  </li>
                  <li className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-black" />
                    Investors can buy tokens representing ownership in properties
                  </li>
                  <li className="flex items-center">
                    <LineChart className="mr-2 h-5 w-5 text-black" />
                    Smart contracts manage transactions and income distribution
                  </li>
                  <li className="flex items-center">
                    <Lock className="mr-2 h-5 w-5 text-black" />
                    KYC and compliance tools ensure regulatory adherence
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className=" text-white hover:bg-gray-800">Start Investing</Button>
                  <Button variant="outline" asChild className="border-gray-600 text-black hover:bg-gray-50">
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
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

