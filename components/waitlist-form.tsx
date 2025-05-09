"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react"
import { supabase } from "@/lib/supabase"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Simple email validation
    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address")
      setIsSubmitting(false)
      return
    }

    try {
      const { error } = await supabase.from("wing2wing").insert([{ email }])

      if (error) {
        if (error.code === "23505") {
          setError("You're already on the waitlist!")
        } else {
          setError("Something went wrong. Please try again.")
        }
        return
      }


      // Send welcome email (you'll implement this API route)
      const emailResponse = await fetch('/api/send-welcome-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      })

      if (!emailResponse.ok) {
        throw new Error('Failed to send welcome email')
      }

      setIsSubmitted(true)
    } catch (err) {
      console.error(err)
      setError("Unexpected error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-900/20">
          <CheckCircle className="h-7 w-7 text-sky-400" />
        </div>
        <div className="space-y-2 text-center">
          <h3 className="text-xl font-bold">You're on the list!</h3>
          <p className="text-slate-400">
            We'll send you an invitation when a pigeon is available for your region. (Delivery time may vary based on
            wind conditions and hawk migration patterns.)
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col gap-2 sm:flex-row">
        <Input
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 bg-slate-800 border-slate-700 focus:border-sky-500 focus:ring-sky-500"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-sky-500 hover:bg-sky-600 transition-all shadow-lg shadow-sky-900/20 hover:shadow-sky-900/40 hover:scale-105"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending pigeon...
            </>
          ) : (
            <>
              Join Wing2Wing
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <p className="text-xs text-slate-500">
        By joining, you agree to receive occasional messages delivered at completely random intervals.{" "}
        <span className="text-sky-400">Pigeon availability not guaranteed.</span>
      </p>
    </form>
  )
}
