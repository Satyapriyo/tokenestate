'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Building2, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from '@/components/ui/toaster'

export default function ContactPage() {
    const { toast } = useToast()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData)
        toast({
            title: "Message Sent",
            description: "We've received your message and will get back to you soon.",
        })
        setFormData({ name: '', email: '', message: '' })
    }

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
                    <Link className="text-sm font-medium text-gray-600 hover:text-black" href="/about">
                        About
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
                            Contact Us
                        </h1>
                        <p className="max-w-[700px] text-gray-600 md:text-xl mb-12">
                            Have questions about TokenEstate or want to learn more? We&apos;re here to help. Reach out to us using the form below or through our contact information.
                        </p>
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
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-black">Get in Touch</h2>
                                <p className="text-gray-600">
                                    Fill out the form and our team will get back to you within 24 hours.
                                </p>
                                <div className="space-y-2 text-gray-600">
                                    <div className="flex items-center">
                                        <Mail className="w-5 h-5 mr-2 text-black" />
                                        <span>contact@tokenestate.com</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Phone className="w-5 h-5 mr-2 text-black" />
                                        <span>+1 (555) 123-4567</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="w-5 h-5 mr-2 text-black" />
                                        <span>123 Blockchain Street, Crypto City, CC 12345</span>
                                    </div>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-4 max-w-[400px]">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Enter your message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                                    />
                                </div>
                                <Button type="submit" className="w-full text-white hover:bg-gray-800">Send Message</Button>
                            </form>
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
            <Toaster />
        </div>
    )
}

