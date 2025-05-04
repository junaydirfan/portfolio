"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react" // Added AlertCircle
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
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  // EmailJS Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    if (!formRef.current) return

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
    // Consistent background, adjusted padding
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto"> {/* Adjusted max-width */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isMounted && isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-12 md:mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
                Get In Touch
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              Have a question or want to collaborate? Feel free to reach out using the form below or my contact details.
            </p>
          </motion.div>

          {/* Grid for Contact Info & Form */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto"> {/* Increased gap, adjusted max-width */}
            {/* Contact Info Card */}
            <motion.div variants={itemVariants} className="flex"> {/* Added flex for equal height */}
              {/* Consistent Card Styling */}
              <Card className="h-full w-full flex flex-col border border-border/50 shadow-md bg-card">
                <CardHeader className="p-6 md:p-8">
                  <CardTitle className="text-xl md:text-2xl text-foreground">Contact Information</CardTitle>
                  <CardDescription>Other ways to connect with me.</CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8 pt-0 space-y-5 flex-grow"> {/* Increased spacing */}
                   {/* Email */}
                  <div className="flex items-center gap-4"> {/* Increased gap */}
                    <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0" /> {/* Monochrome icon */}
                    <a
                       href="mailto:junaid.irfan@hotmail.com"
                       className="text-foreground hover:text-foreground/80 transition-colors break-all" /* Monochrome link */
                       aria-label="Email Junaid Irfan"
                     >
                      junaid.irfan@hotmail.com
                    </a>
                  </div>
                   {/* Phone */}
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    <a
                       href="tel:+18738785419"
                       className="text-foreground hover:text-foreground/80 transition-colors"
                       aria-label="Call Junaid Irfan"
                     >
                       +1 (873) 878-5419
                    </a>
                  </div>
                   {/* Location */}
                  <div className="flex items-center gap-4">
                    <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                     {/* Updated Location based on previous context */}
                    <span className="text-muted-foreground">Sherbrooke, QC, Canada</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form Card */}
            <motion.div variants={itemVariants} className="flex"> {/* Added flex for equal height */}
              <Card className="h-full w-full flex flex-col border border-border/50 shadow-md bg-card">
                <CardHeader className="p-6 md:p-8">
                  <CardTitle className="text-xl md:text-2xl text-foreground">Send me a Message</CardTitle>
                  <CardDescription>I usually respond within 24-48 hours.</CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8 pt-0 flex-grow flex flex-col"> {/* Use flex-grow */}
                  {isSubmitted ? (
                    // Improved Success State
                    <div className="flex flex-col items-center justify-center text-center flex-grow border border-border/50 rounded-lg bg-muted/50 p-6">
                      <div className="rounded-full bg-background border border-green-500/30 p-2 mb-4">
                        <CheckCircle className="h-8 w-8 text-green-500" /> {/* Kept icon green */}
                      </div>
                      <h3 className="text-xl font-medium mb-2 text-foreground">Message Sent!</h3>
                      <p className="text-muted-foreground mb-4">Thanks for reaching out. I&apos;ll reply soon.</p>
                      <Button
                        variant="outline"
                        onClick={resetForm} // Use reset function
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    // Form State
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5"> {/* Increased spacing */}
                      <div className="space-y-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" placeholder="Your Name" required aria-label="Your Name"/>
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="your.email@example.com" required aria-label="Your Email"/>
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" name="message" placeholder="Type your message here..." rows={4} required aria-label="Your Message"/>
                      </div>
                      {/* Improved Error Display */}
                      {error && (
                         <div className="flex items-center gap-2 text-red-600 text-sm border border-red-500/20 bg-red-500/10 p-3 rounded-md">
                            <AlertCircle className="h-4 w-4 flex-shrink-0" />
                            <span>{error}</span>
                         </div>
                       )}
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
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