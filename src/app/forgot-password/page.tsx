"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate password reset
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 2000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icons.logo className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-2xl font-semibold text-center">
            {isSubmitted ? "Check your email" : "Reset your password"}
          </CardTitle>
          <CardDescription className="text-center text-muted-foreground">
            {isSubmitted
              ? "We've sent a password reset link to your email address."
              : "Enter your email address and we'll send you a link to reset your password."}
          </CardDescription>
        </CardHeader>

        {!isSubmitted ? (
          <>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading && <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />}
                  Send Reset Link
                </Button>
              </form>
            </CardContent>

            <CardFooter>
              <p className="text-center text-sm text-muted-foreground w-full">
                Remember your password?{" "}
                <Link href="/login" className="text-primary hover:underline font-medium">
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </>
        ) : (
          <CardFooter className="flex flex-col space-y-4">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full">
              <Icons.check className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Didn't receive the email? Check your spam folder or{" "}
              <button onClick={() => setIsSubmitted(false)} className="text-primary hover:underline font-medium">
                try again
              </button>
            </p>
            <Link href="/login" className="w-full">
              <Button variant="outline" className="w-full bg-transparent">
                Back to Sign In
              </Button>
            </Link>
          </CardFooter>
        )}
      </Card>
    </div>
  )
}
