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
          <motion.div className="mb-20 md:mb-24" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold mb-5 text-foreground">
              get in touch
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              have a question or want to collaborate? reach out via the form or my contact details.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="flex">
              <Card className="h-full w-full flex flex-col border border-border bg-card hover:border-primary/30 hover:shadow-card-hover transition-all duration-300">
                <CardHeader className="p-6 md:p-8">
                  <CardTitle className="text-xl md:text-2xl text-foreground font-bold mb-1">contact information</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">other ways to reach me</CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8 pt-0 space-y-5 flex-grow">
                  <a href="mailto:hello@junaidirfan.com" className="flex items-center gap-3 group" aria-label="Email Junaid Irfan">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                    </div>
                    <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors break-all">
                      hello@junaidirfan.com
                    </span>
                  </a>
                  <a href="tel:+18738785419" className="flex items-center gap-3 group" aria-label="Call Junaid Irfan">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    </div>
                    <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                      +1 (473) 707-0535
                    </span>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-muted">
                      <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    </div>
                    <span className="text-sm text-muted-foreground">Greater Toronto Area, ON, CA</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="flex">
              <Card className="h-full w-full flex flex-col border border-border bg-card hover:border-primary/30 hover:shadow-card-hover transition-all duration-300">
                <CardHeader className="p-6 md:p-8">
                  <CardTitle className="text-xl md:text-2xl text-foreground font-bold mb-1">send a message</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">i usually respond within 24–48 hours.</CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8 pt-0 flex-grow flex flex-col">
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center text-center flex-grow rounded-lg border border-border bg-muted/20 p-8">
                      <div className="p-3 rounded-full bg-primary/15 mb-5">
                        <CheckCircle className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">Message sent!</h3>
                      <p className="text-muted-foreground mb-6 text-sm">thanks for reaching out — i&apos;ll reply soon!</p>
                      <Button variant="outline" onClick={resetForm} className="text-sm">
                        send another message
                      </Button>
                    </div>
                  ) : (
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                      <div className="space-y-1.5">
                        <Label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</Label>
                        <Input id="name" name="name" placeholder="Your name" required aria-label="Your Name" className="border-border bg-input/50 focus:border-primary/50 transition-colors" />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="your@email.com" required aria-label="Your Email" autoComplete="email" inputMode="email" pattern="[^\s@]+@[^\s@]+\.[^\s@]{2,}" title="Enter a valid email like name@example.com" className="border-border bg-input/50 focus:border-primary/50 transition-colors" />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</Label>
                        <Textarea id="message" name="message" placeholder="Type your message here..." rows={4} required aria-label="Your Message" className="border-border bg-input/50 focus:border-primary/50 transition-colors resize-none" />
                      </div>
                      {error && (
                        <div className="flex items-center gap-2.5 text-sm text-destructive border border-destructive/30 bg-destructive/10 rounded-lg p-3">
                          <AlertCircle className="h-4 w-4 flex-shrink-0" />
                          <span>{error}</span>
                        </div>
                      )}
                      <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" disabled={isSubmitting}>
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