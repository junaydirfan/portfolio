"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import emailjs from '@emailjs/browser'

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 }) // Adjusted amount
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.02,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
  }

  // EmailJS Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    if (!formRef.current) return

    // Basic email validation
    const emailInput = (formRef.current.elements.namedItem('email') as HTMLInputElement | null)
    const email = emailInput?.value.trim() || ""
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    if (!emailRegex.test(email)) {
      setIsSubmitting(false)
      setError("Please enter a valid email address.")
      emailInput?.focus()
      return
    }

    // Ensure these IDs/Keys are correct and ideally stored in environment variables
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_hfnz2g9';
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_12986mm';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'XlhxDPXVWT_qlb0bg';

    if (!serviceID || !templateID || !publicKey) {
        setError("Email service configuration is missing.");
        setIsSubmitting(false);
        console.error("EmailJS environment variables missing");
        return;
    }

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        formRef.current?.reset(); // Reset form fields on success
      })
      .catch((error: unknown) => { // Catch unknown type
        console.error('Email sending failed:', error)
        setIsSubmitting(false)
        // Provide a user-friendly error message
        setError("Sorry, the message could not be sent. Please try again later or contact me directly via email.");
      })
  }

  // Reset form view function
  const resetForm = () => {
      setIsSubmitted(false);
      setError("");
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isMounted && isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Bauhaus Section Header - left aligned */}
          <motion.div className="mb-20 md:mb-24" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              get in touch
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              have a question or want to collaborate? feel free to reach out using the form below or my contact details
            </p>
          </motion.div>

          {/* Bauhaus Grid for Contact Info & Form */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto">
            {/* Contact Info Card - Bauhaus style */}
            <motion.div variants={itemVariants} className="flex">
              <Card className="h-full w-full flex flex-col border border-border bg-card hover:border-foreground transition-colors">
                <CardHeader className="p-8 md:p-10">
                  <CardTitle className="text-2xl md:text-3xl text-foreground font-bold uppercase tracking-wide mb-2">contact information</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">other ways to connect with me</CardDescription>
                </CardHeader>
                <CardContent className="p-8 md:p-10 pt-0 space-y-6 flex-grow">
                   <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-foreground flex-shrink-0" />
                    <a
                       href="mailto:hello@junaidirfan.com"
                       className="text-foreground hover:text-muted-foreground transition-colors break-all text-base font-medium"
                       aria-label="Email Junaid Irfan"
                     >
                      hello@junaidirfan.com
                    </a>
                  </div>
                   <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-foreground flex-shrink-0" />
                    <a
                       href="tel:+18738785419"
                       className="text-foreground hover:text-muted-foreground transition-colors text-base font-medium"
                       aria-label="Call Junaid Irfan"
                     >
                       +1 (873) 878-5419
                    </a>
                  </div>
                   <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-foreground flex-shrink-0" />
                    <span className="text-muted-foreground text-base">Greater Toronto Area, ON, CA</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form Card - Bauhaus style */}
            <motion.div variants={itemVariants} className="flex">
              <Card className="h-full w-full flex flex-col border border-border bg-card hover:border-foreground transition-colors">
                <CardHeader className="p-8 md:p-10">
                  <CardTitle className="text-2xl md:text-3xl text-foreground font-bold uppercase tracking-wide mb-2">send me a message</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">i usually respond within 24-48 hours.</CardDescription>
                </CardHeader>
                <CardContent className="p-8 md:p-10 pt-0 flex-grow flex flex-col">
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center text-center flex-grow border border-border bg-muted/30 p-8">
                      <div className="bg-background border border-foreground p-3 mb-6">
                        <CheckCircle className="h-8 w-8 text-foreground" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground uppercase tracking-wide">message sent!</h3>
                      <p className="text-muted-foreground mb-6 text-base">thanks for reaching out, i&apos;ll reply soon!</p>
                      <Button
                        variant="outline"
                        onClick={resetForm}
                        className="border-border font-bold uppercase tracking-wide"
                      >
                        send another message
                      </Button>
                    </div>
                  ) : (
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-base font-bold uppercase tracking-wide">name</Label>
                        <Input id="name" name="name" placeholder="your name" required aria-label="Your Name" className="border-border"/>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-base font-bold uppercase tracking-wide">email</Label>
                        <Input id="email" name="email" type="email" placeholder="your.email@example.com" required aria-label="Your Email" autoComplete="email" inputMode="email" pattern="[^\s@]+@[^\s@]+\.[^\s@]{2,}" title="Enter a valid email like name@example.com" className="border-border"/>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-base font-bold uppercase tracking-wide">message</Label>
                        <Textarea id="message" name="message" placeholder="type your message here..." rows={4} required aria-label="Your Message" className="border-border"/>
                      </div>
                      {error && (
                         <div className="flex items-center gap-3 text-foreground text-sm border border-border bg-muted/30 p-4">
                            <AlertCircle className="h-5 w-5 flex-shrink-0" />
                            <span>{error}</span>
                         </div>
                       )}
                      <Button type="submit" className="w-full border-border bg-foreground text-background hover:bg-muted-foreground font-bold uppercase tracking-wide" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            send message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}