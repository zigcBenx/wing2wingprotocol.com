import { CheckCircle, Clock, Send, Zap, Mail, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import WaitlistForm from "@/components/waitlist-form"
import CoreValues from "@/components/core-values"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-slate-800">
        <Link className="flex items-center justify-center" href="/">
          <Image
            src="/pigeonlogo.png"
            alt="Wing2Wing Protocol Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <div>
            <span className="font-bold text-xl text-sky-400">Wing2Wing</span>
            <span className="text-xs block text-slate-400">PROTOCOL</span>
          </div>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-sky-400 transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-sky-400 transition-colors" href="#how-it-works">
            How It Works
          </Link>
          <Link
            className="text-sm font-medium px-3 py-1 rounded-full bg-sky-500 hover:bg-sky-600 transition-all shadow-lg shadow-sky-900/20 hover:shadow-sky-900/40"
            href="#waitlist"
          >
            Join Waitlist
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(74,128,226,0.1),transparent_60%)]"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center space-x-2 rounded-full bg-slate-800 px-3 py-1 text-sm text-sky-400 mb-4 w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                  </span>
                  <span>Now in alpha testing</span>
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Wing2Wing Protocol
                    <span className="block text-2xl sm:text-3xl text-sky-400 mt-2">Timeless Communication</span>
                  </h1>
                  <p className="text-slate-400 md:text-xl max-w-[600px]">
                    Embracing the spirit of timeless communication by reinventing connection with playful innovation and
                    simplicity.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Link
                    className="inline-flex h-12 items-center justify-center rounded-md bg-sky-500 px-8 text-sm font-medium text-white shadow-lg shadow-sky-900/20 hover:shadow-sky-900/40 transition-all hover:bg-sky-600 hover:scale-105"
                    href="#waitlist"
                  >
                    Join Waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    className="inline-flex h-12 items-center justify-center rounded-md border border-slate-700 bg-slate-800 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-slate-700 hover:border-slate-600 hover:text-sky-400"
                    href="#how-it-works"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-sky-900/10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(74,128,226,0.1),transparent_70%)]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      alt="Wing2Wing Protocol Illustration"
                      className="w-3/4 h-3/4 object-contain animate-float"
                      height={300}
                      width={300}
                      src="/pigeonlogo.png"
                      style={{
                        animation: "float 6s ease-in-out infinite",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-slate-950 relative">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden border-2 border-slate-800 shadow-xl shadow-sky-900/10 bg-slate-900">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-slate-900 relative">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block rounded-full bg-slate-800 px-4 py-1.5 text-sm text-sky-400 mb-4">
                Our Mission
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Embracing Timeless Communication</h2>
              <p className="text-slate-400 md:text-lg leading-relaxed">
                Wing2Wing Protocol embraces the spirit of timeless communication by reinventing connection with playful
                innovation and simplicity, empowering users to value authenticity and reliability over complexity. We
                champion clarity, creativity, and a touch of nostalgia to inspire meaningful connections in a fast-paced
                digital world.
              </p>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-slate-950 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(74,128,226,0.1),transparent_70%)]"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-slate-800 px-4 py-1.5 text-sm text-sky-400">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Wing2Wing?</h2>
                <p className="max-w-[900px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Because sometimes, modern technology is just <span className="line-through">too reliable</span>{" "}
                  <span className="text-sky-400">boring</span>.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all hover:border-sky-900/50 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-sky-900/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-900/20 text-sky-400">
                  <Clock className="h-7 w-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Nostalgic Delivery</h3>
                  <p className="text-slate-400">
                    Will your message arrive in 5 minutes or 5 days? It's part of the charm!
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all hover:border-sky-900/50 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-sky-900/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-900/20 text-sky-400">
                  <Send className="h-7 w-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Authentic Encryption</h3>
                  <p className="text-slate-400">
                    Our proprietary encryption method is as straightforward as it is effective.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all hover:border-sky-900/50 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-sky-900/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-900/20 text-sky-400">
                  <Zap className="h-7 w-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Playful Innovation</h3>
                  <p className="text-slate-400">We blend modern technology with the charm of simpler times.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 relative bg-[#E9C9A3]/10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(74,128,226,0.1),transparent_70%)]"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-slate-800 px-4 py-1.5 text-sm text-sky-400">
                    How It Works
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Embracing Simplicity in Communication
                  </h2>
                  <p className="max-w-[600px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    <span className="text-sky-400 font-semibold">Wing2Wing Protocol</span> reimagines digital
                    communication by introducing the charming simplicity of carrier pigeons to the digital age.
                  </p>
                </div>
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-900/20 text-sky-400">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Draft Your Message</h3>
                      <p className="text-slate-400">Compose your thoughts with clarity and authenticity.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-900/20 text-sky-400">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Attach to Pigeon</h3>
                      <p className="text-slate-400">
                        Our virtual pigeons carry your message with the same reliability as their real-world
                        counterparts.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-900/20 text-sky-400">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Enjoy the Journey</h3>
                      <p className="text-slate-400">
                        Embrace the nostalgia of waiting for a message to arrive, just like in simpler times.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-sky-900/10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(74,128,226,0.1),transparent_70%)]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      alt="Wing2Wing Process Illustration"
                      className="w-3/4 h-3/4 object-contain"
                      height={300}
                      width={500}
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pigeonLogoTip-GzQXGOHN1Cz9517qNbW1ptzwGSAWIn.jpeg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="values" className="w-full py-12 md:py-24 bg-slate-900 relative">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-block rounded-full bg-slate-800 px-4 py-1.5 text-sm text-sky-400 mb-4">
                Core Values
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">What We Believe</h2>
              <p className="text-slate-400 md:text-lg">
                Our core values guide decisions, define culture, and signal what matters most.
              </p>
            </div>
            <CoreValues />
          </div>
        </section>
        <section id="waitlist" className="w-full py-12 md:py-24 lg:py-32 bg-slate-950 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,128,226,0.1),transparent_70%)]"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Early Adopters</h2>
                <p className="max-w-[600px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Be among the first to experience the delightful simplicity of{" "}
                  <span className="text-sky-400 font-semibold">Wing2Wing Protocol</span>.
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 relative bg-[#7D8890]/10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(74,128,226,0.1),transparent_70%)]"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What People Are Saying</h2>
                <p className="max-w-[900px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Testimonials from our friendly companions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all hover:border-sky-900/50 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-sky-900/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-900/20 text-sky-400 mb-2">
                  <Mail className="h-5 w-5" />
                </div>
                <p className="text-slate-400 italic">
                  "I sent a birthday message to my friend. It arrived three weeks later, which was perfect because I had
                  forgotten her birthday anyway!"
                </p>
                <p className="font-medium text-sky-400">- Sarah T.</p>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all hover:border-sky-900/50 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-sky-900/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-900/20 text-sky-400 mb-2">
                  <Mail className="h-5 w-5" />
                </div>
                <p className="text-slate-400 italic">
                  "I proposed to my girlfriend via Wing2Wing. We're still waiting for the message to arrive, but the
                  anticipation has been great for our relationship!"
                </p>
                <p className="font-medium text-sky-400">- Michael R.</p>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all hover:border-sky-900/50 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-sky-900/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-900/20 text-sky-400 mb-2">
                  <Mail className="h-5 w-5" />
                </div>
                <p className="text-slate-400 italic">
                  "I sent myself a reminder about an important meeting. It never arrived. 10/10 would forget again."
                </p>
                <p className="font-medium text-sky-400">- Alex K.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-slate-800">
        <p className="text-xs text-slate-500">
          {new Date().getFullYear()} Wing2Wing Protocol. All rights reserved. No pigeons were harmed in the making of
          this website.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:text-sky-400 transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:text-sky-400 transition-colors" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
