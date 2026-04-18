import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { 
  Zap, ShieldCheck, MapPin, CheckCircle2, 
  Smartphone, CreditCard, Clock, Activity, AlertCircle, UserCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* HERO SECTION */}
      <section id="hero" className="relative bg-black min-h-[90vh] flex items-center overflow-hidden pt-16 lg:pt-0">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/30 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4"></div>
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 214, 0, 0.15)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          {/* Decorative speed lines */}
          <div className="absolute bottom-[20%] left-[10%] w-64 h-1 bg-primary/40 -rotate-12"></div>
          <div className="absolute bottom-[25%] left-[5%] w-32 h-1 bg-primary/60 -rotate-12"></div>
          <div className="absolute top-[30%] right-[15%] w-96 h-1 bg-primary/30 -rotate-12"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 text-sm py-1 px-3 w-fit">
                #1 Bike Taxi in India
              </Badge>
              <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-[1.1] tracking-tight">
                Book Bike Taxi <br/>
                in <span className="text-primary relative inline-block">
                  Seconds
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10C50 2 150 2 198 10" stroke="#FFD600" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-[500px]">
                Beat the traffic. Save your money. Reach your destination safely with RapidoRide's premium urban commute service.
              </p>
            </div>

            <Card className="bg-white border-0 shadow-2xl p-2 rounded-2xl max-w-md">
              <CardContent className="p-4 space-y-4">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full z-10"></div>
                  <Input 
                    placeholder="Enter pickup location" 
                    className="pl-10 bg-gray-50 border-gray-200 h-14 rounded-xl focus-visible:ring-primary text-base"
                  />
                  <div className="absolute left-[1.1rem] top-[calc(50%+10px)] h-8 w-0.5 bg-gray-200 z-0 hidden md:block"></div>
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-sm z-10"></div>
                  <Input 
                    placeholder="Enter drop location" 
                    className="pl-10 bg-gray-50 border-gray-200 h-14 rounded-xl focus-visible:ring-primary text-base"
                  />
                </div>
                <Link href="/book" className="block w-full pt-2">
                  <Button className="w-full h-14 bg-primary hover:bg-primary/90 text-black font-bold text-lg rounded-xl shadow-lg shadow-primary/20">
                    Book Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center relative"
          >
            {/* Decorative app showcase mockup */}
            <div className="relative w-[300px] h-[600px] bg-black border-[8px] border-gray-800 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col">
              <div className="absolute top-0 inset-x-0 h-6 bg-black z-20 flex justify-center rounded-t-3xl">
                <div className="w-1/3 h-4 bg-gray-800 rounded-b-xl"></div>
              </div>
              <div className="flex-1 bg-gray-50 relative">
                {/* Fake Map */}
                <div className="absolute inset-0 bg-[#e5e3df]">
                  <svg className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="street-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#000" strokeWidth="2"/>
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#street-grid)" />
                  </svg>
                  {/* Route Line */}
                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 150 150 C 150 250, 200 300, 100 400" fill="none" stroke="#111" strokeWidth="6" strokeDasharray="10 5" className="animate-[dash_20s_linear_infinite]" />
                    <circle cx="150" cy="150" r="8" fill="#10B981" stroke="#fff" strokeWidth="2" />
                    <circle cx="100" cy="400" r="8" fill="#EF4444" stroke="#fff" strokeWidth="2" />
                  </svg>
                </div>
                {/* Fake UI Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-white rounded-t-3xl p-5 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
                  <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-bold text-lg mb-1">Driver arriving in 3 min</h3>
                  <p className="text-gray-500 text-sm mb-4">Rahul • KA 01 AB 1234</p>
                  <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl mb-4 border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/20 p-2 rounded-lg">
                        <Zap className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Bike Ride</p>
                        <p className="text-xs text-gray-500">₹45 • 4.2 km</p>
                      </div>
                    </div>
                    <div className="bg-black text-white px-3 py-1 rounded-md font-bold text-sm">
                      OTP: 4921
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold h-12 rounded-xl">
                    Contact Driver
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 -left-16 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 border border-gray-100"
            >
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm">Verified Driver</p>
                <p className="text-xs text-gray-500">Background checked</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-32 -right-12 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 border border-gray-100"
            >
              <div className="bg-primary/20 p-2 rounded-full text-black">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm">Lightning Fast</p>
                <p className="text-xs text-gray-500">Reach 50% faster</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Why Choose RapidoRide?</h2>
            <p className="text-gray-600 text-lg">Experience the fastest, most affordable, and safest way to navigate the urban jungle.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Fast Booking", desc: "Book a ride in seconds with our optimized algorithms.", icon: <Zap className="w-8 h-8 text-black" /> },
              { title: "Affordable Price", desc: "Up to 50% cheaper than standard cabs. No hidden surges.", icon: <CreditCard className="w-8 h-8 text-black" /> },
              { title: "Safe Rides", desc: "Helmets provided, speed tracked, and secure routing.", icon: <ShieldCheck className="w-8 h-8 text-black" /> },
              { title: "Verified Drivers", desc: "Rigorous background checks for every single driver.", icon: <UserCheck className="w-8 h-8 text-black" /> }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all"
                data-testid={`feature-card-${i}`}
              >
                <div className="bg-primary w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">How It Works</h2>
              <p className="text-gray-600 text-lg mb-12">Getting around your city has never been this simple. Four taps and you're on your way.</p>
              
              <div className="space-y-8 relative">
                <div className="absolute left-[23px] top-[40px] bottom-[40px] w-0.5 bg-gray-100"></div>
                
                {[
                  { title: "Enter Location", desc: "Open the app and set your pickup & drop destinations.", icon: <MapPin className="w-5 h-5" /> },
                  { title: "Choose Ride", desc: "Select Bike, Auto, or Cab depending on your need.", icon: <Smartphone className="w-5 h-5" /> },
                  { title: "Confirm", desc: "Get an instant price estimate and confirm your booking.", icon: <CheckCircle2 className="w-5 h-5" /> },
                  { title: "Ride Arrives", desc: "Your captain arrives in minutes. Share OTP and go!", icon: <Zap className="w-5 h-5" /> }
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="flex gap-6 relative z-10"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-black font-bold flex-shrink-0 shadow-md">
                      {i + 1}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="bg-black rounded-3xl p-8 relative overflow-hidden text-center h-[500px] flex items-center justify-center">
                 <div className="absolute inset-0 opacity-10">
                   <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="lines" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                          <line x1="0" y1="0" x2="0" y2="20" stroke="#FFD600" strokeWidth="2"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#lines)" />
                   </svg>
                 </div>
                 <div className="relative z-10 space-y-6">
                    <div className="w-24 h-24 bg-primary rounded-2xl mx-auto flex items-center justify-center mb-6 animate-pulse">
                      <Zap className="w-12 h-12 text-black" />
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-white">Ready to ride?</h3>
                    <Link href="/book">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-bold text-lg h-14 px-8 rounded-xl w-full max-w-xs mx-auto">
                        Book a Ride Now
                      </Button>
                    </Link>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Transparent Pricing</h2>
            <p className="text-gray-600 text-lg">No hidden fees, no surprise surges. Know what you pay before you ride.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
            {/* Auto */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-gray-500">Auto</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Auto</h3>
                <p className="text-gray-500 mb-6">For comfortable everyday commutes</p>
                <div className="text-4xl font-black mb-6">₹12<span className="text-lg text-gray-500 font-normal">/km</span></div>
                <ul className="space-y-3 text-sm text-gray-600 mb-8 text-left">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Max 3 passengers</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Wait time ₹2/min</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Weather protection</li>
                </ul>
                <Link href="/book">
                  <Button variant="outline" className="w-full font-bold h-12">Choose Auto</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Bike (Highlighted) */}
            <Card className="bg-black text-white border-primary shadow-2xl relative transform md:-translate-y-4">
              <div className="absolute top-0 inset-x-0 transform -translate-y-1/2 flex justify-center">
                <span className="bg-primary text-black font-bold text-sm px-4 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
              </div>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Bike Taxi</h3>
                <p className="text-gray-400 mb-6">Fastest way to beat the traffic</p>
                <div className="text-4xl font-black mb-6 text-primary">₹8<span className="text-lg text-gray-400 font-normal">/km</span></div>
                <ul className="space-y-3 text-sm text-gray-300 mb-8 text-left">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Max 1 passenger</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Wait time ₹1/min</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Helmet provided</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Insurance included</li>
                </ul>
                <Link href="/book">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold h-12">Choose Bike</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Cab */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-gray-500">Cab</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Cab</h3>
                <p className="text-gray-500 mb-6">Premium AC comfort rides</p>
                <div className="text-4xl font-black mb-6">₹18<span className="text-lg text-gray-500 font-normal">/km</span></div>
                <ul className="space-y-3 text-sm text-gray-600 mb-8 text-left">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Max 4 passengers</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Wait time ₹3/min</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> AC included</li>
                </ul>
                <Link href="/book">
                  <Button variant="outline" className="w-full font-bold h-12">Choose Cab</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SAFETY SECTION */}
      <section id="safety" className="py-24 bg-black text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Your Safety is Our Priority</h2>
            <p className="text-gray-400 text-lg">We've built safety into every step of your journey, ensuring peace of mind from pickup to drop.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Helmet Mandatory", icon: <ShieldCheck className="w-10 h-10 text-primary" />, desc: "Both driver and passenger are required to wear helmets." },
              { title: "OTP Verification", icon: <Smartphone className="w-10 h-10 text-primary" />, desc: "Ride won't start until the driver enters the secure PIN." },
              { title: "Live Tracking", icon: <Activity className="w-10 h-10 text-primary" />, desc: "Share your live trip status with friends and family." },
              { title: "SOS Button", icon: <AlertCircle className="w-10 h-10 text-primary" />, desc: "24/7 emergency support just one tap away in the app." }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-gray-900/50 rounded-2xl border border-gray-800 backdrop-blur-sm hover:border-primary/50 transition-colors">
                <div className="mx-auto w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4 border border-gray-800">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}