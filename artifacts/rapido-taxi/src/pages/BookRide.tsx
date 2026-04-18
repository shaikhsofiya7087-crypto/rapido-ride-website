import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MapPin, Navigation, Zap, CarFront, CheckCircle2, ChevronRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

// Fake pricing calculation logic
const BASE_FARE = { bike: 20, auto: 40, cab: 80 };
const PER_KM = { bike: 8, auto: 12, cab: 18 };

const bookingSchema = z.object({
  pickup: z.string().min(3, "Pickup location is required"),
  drop: z.string().min(3, "Drop location is required"),
});

export default function BookRide() {
  const [selectedRide, setSelectedRide] = useState<'bike' | 'auto' | 'cab'>('bike');
  const [isCalculating, setIsCalculating] = useState(false);
  const [distance, setDistance] = useState<number | null>(null);
  const [isBooking, setIsBooking] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { pickup: "", drop: "" },
  });

  const watchPickup = form.watch("pickup");
  const watchDrop = form.watch("drop");

  // Simulate calculating distance when both inputs have values
  React.useEffect(() => {
    if (watchPickup.length > 2 && watchDrop.length > 2) {
      setIsCalculating(true);
      const timer = setTimeout(() => {
        // Generate random fake distance between 2 and 15 km
        setDistance(Math.round((Math.random() * 13 + 2) * 10) / 10);
        setIsCalculating(false);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      setDistance(null);
    }
  }, [watchPickup, watchDrop]);

  const price = distance ? Math.round(BASE_FARE[selectedRide] + (distance * PER_KM[selectedRide])) : 0;

  const onSubmit = (data: z.infer<typeof bookingSchema>) => {
    setIsBooking(true);
    // Simulate API call
    setTimeout(() => {
      setIsBooking(false);
      setBookingSuccess(true);
    }, 2000);
  };

  const rideTypes = [
    { id: 'bike', name: 'Bike', icon: <Zap className="w-6 h-6" />, time: '2 min', capacity: 1 },
    { id: 'auto', name: 'Auto', icon: <span className="font-bold text-lg">A</span>, time: '4 min', capacity: 3 },
    { id: 'cab', name: 'Cab', icon: <CarFront className="w-6 h-6" />, time: '5 min', capacity: 4 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row relative">
      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {bookingSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold mb-2 font-heading">Ride Confirmed!</h2>
              <p className="text-gray-600 mb-8">
                Your captain is on the way to <span className="font-semibold text-black">{form.getValues("pickup")}</span>.
              </p>
              
              <div className="bg-gray-50 rounded-xl p-4 mb-8 border border-gray-100 flex items-center gap-4 text-left">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                   <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">R</div>
                </div>
                <div className="flex-1">
                  <p className="font-bold">Rahul K.</p>
                  <p className="text-sm text-gray-500">4.8 ★ • White Honda Activa</p>
                </div>
                <div className="bg-black text-white px-3 py-1 rounded font-bold text-sm">
                  KA 01 AB 1234
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Estimated Fare</span>
                  <span className="font-bold">₹{price}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">OTP</span>
                  <span className="font-bold text-lg tracking-widest text-primary bg-black px-2 rounded">4921</span>
                </div>
              </div>

              <Button 
                onClick={() => {
                  setBookingSuccess(false);
                  form.reset();
                  setDistance(null);
                }}
                className="w-full mt-8 bg-black hover:bg-gray-800 text-white font-bold h-12"
              >
                Track Ride
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* LEFT PANEL - BOOKING FORM */}
      <div className="w-full md:w-[450px] lg:w-[500px] bg-white border-r border-gray-200 shadow-[20px_0_40px_rgba(0,0,0,0.03)] z-10 flex flex-col h-[calc(100vh-64px)] overflow-y-auto">
        <div className="p-6 md:p-8">
          <h1 className="text-2xl font-bold font-heading mb-6">Where to?</h1>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              
              {/* Location Inputs */}
              <div className="relative space-y-4">
                <div className="absolute left-6 top-7 bottom-7 w-0.5 bg-gray-200 z-0"></div>
                
                <FormField
                  control={form.control}
                  name="pickup"
                  render={({ field }) => (
                    <FormItem className="relative z-10">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                      </div>
                      <FormControl>
                        <Input 
                          placeholder="Pickup location" 
                          className="pl-12 bg-gray-50 border-gray-200 h-14 rounded-xl text-base font-medium shadow-none focus-visible:ring-primary" 
                          {...field} 
                          data-testid="input-pickup"
                        />
                      </FormControl>
                      <FormMessage className="ml-12 text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="drop"
                  render={({ field }) => (
                    <FormItem className="relative z-10">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                        <div className="w-2.5 h-2.5 bg-red-500 rounded-sm"></div>
                      </div>
                      <FormControl>
                        <Input 
                          placeholder="Destination" 
                          className="pl-12 bg-gray-50 border-gray-200 h-14 rounded-xl text-base font-medium shadow-none focus-visible:ring-primary" 
                          {...field} 
                          data-testid="input-drop"
                        />
                      </FormControl>
                      <FormMessage className="ml-12 text-xs" />
                    </FormItem>
                  )}
                />
              </div>

              {/* Ride Selection (Only show if distance is calculated) */}
              <div className={`transition-all duration-300 ${distance ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4 pointer-events-none'}`}>
                <h3 className="font-semibold text-sm text-gray-500 mb-3 uppercase tracking-wider">Available Rides</h3>
                
                {isCalculating ? (
                  <div className="flex items-center justify-center h-40 bg-gray-50 rounded-xl border border-gray-100">
                    <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
                  </div>
                ) : (
                  <div className="space-y-3">
                    {rideTypes.map((type) => {
                      const isSelected = selectedRide === type.id as any;
                      const ridePrice = Math.round(BASE_FARE[type.id as keyof typeof BASE_FARE] + ((distance || 0) * PER_KM[type.id as keyof typeof PER_KM]));
                      
                      return (
                        <div 
                          key={type.id}
                          onClick={() => setSelectedRide(type.id as any)}
                          className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all
                            ${isSelected 
                              ? 'border-black bg-black text-white shadow-lg' 
                              : 'border-gray-100 bg-white hover:border-gray-300'}`}
                          data-testid={`ride-option-${type.id}`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center
                              ${isSelected ? 'bg-primary text-black' : 'bg-gray-100 text-black'}`}>
                              {type.icon}
                            </div>
                            <div>
                              <p className="font-bold text-lg flex items-center gap-2">
                                {type.name}
                                {type.id === 'bike' && <span className="bg-primary text-black text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Fastest</span>}
                              </p>
                              <div className={`flex items-center gap-2 text-xs ${isSelected ? 'text-gray-300' : 'text-gray-500'}`}>
                                <span>{type.time} away</span>
                                <span>•</span>
                                <span>{type.capacity} {type.capacity > 1 ? 'seats' : 'seat'}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-black text-xl">₹{ridePrice}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Action Area */}
              <div className="pt-4 pb-8">
                <Button 
                  type="submit" 
                  disabled={!distance || isBooking}
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-black font-bold text-lg rounded-xl shadow-[0_10px_20px_rgba(255,214,0,0.3)] disabled:opacity-50 disabled:shadow-none transition-all"
                  data-testid="btn-confirm-ride"
                >
                  {isBooking ? (
                    <span className="flex items-center gap-2"><Loader2 className="w-5 h-5 animate-spin" /> Confirming...</span>
                  ) : distance ? (
                    <span className="flex items-center justify-center gap-2">Confirm {rideTypes.find(r => r.id === selectedRide)?.name} <ChevronRight className="w-5 h-5" /></span>
                  ) : (
                    "Enter destinations"
                  )}
                </Button>
              </div>

            </form>
          </Form>
        </div>
      </div>

      {/* RIGHT PANEL - FAKE MAP */}
      <div className="hidden md:block flex-1 bg-black relative overflow-hidden">
        {/* Abstract Dark Map Design */}
        <div className="absolute inset-0 bg-[#0a0a0a]">
          {/* Roads pattern */}
          <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-dark" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#333" strokeWidth="1"/>
                <path d="M 40 0 L 40 80 M 0 40 L 80 40" fill="none" stroke="#222" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-dark)" />
          </svg>
          
          {/* Glowing intersections / fake POIs */}
          <div className="absolute top-[20%] left-[30%] w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-[30%] right-[20%] w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          {/* Main Route line (visible only when distance is calculated) */}
          <AnimatePresence>
            {distance && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0"
              >
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1000 1000">
                  <path 
                    d="M 200 400 C 300 400, 400 300, 500 500 S 700 700, 800 600" 
                    fill="none" 
                    stroke="#FFD600" 
                    strokeWidth="6" 
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_10px_rgba(255,214,0,0.8)] animate-[dash_20s_linear_infinite]"
                    strokeDasharray="15 10"
                  />
                  
                  {/* Pickup Pin */}
                  <g transform="translate(200, 400)">
                    <circle cx="0" cy="0" r="12" fill="#10B981" />
                    <circle cx="0" cy="0" r="4" fill="#fff" />
                    <rect x="20" y="-15" width="80" height="30" rx="4" fill="#111" />
                    <text x="60" y="4" fill="#fff" fontSize="12" textAnchor="middle" fontWeight="bold">Pickup</text>
                  </g>

                  {/* Drop Pin */}
                  <g transform="translate(800, 600)">
                    <circle cx="0" cy="0" r="12" fill="#EF4444" />
                    <circle cx="0" cy="0" r="4" fill="#fff" />
                    <rect x="20" y="-15" width="80" height="30" rx="4" fill="#111" />
                    <text x="60" y="4" fill="#fff" fontSize="12" textAnchor="middle" fontWeight="bold">Drop</text>
                  </g>
                </svg>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Dummy map markers if no route */}
          {!distance && (
            <div className="absolute inset-0 pointer-events-none">
               <div className="absolute top-[20%] left-[30%]"><MapPin className="w-8 h-8 text-gray-700" /></div>
               <div className="absolute top-[50%] left-[60%]"><MapPin className="w-8 h-8 text-gray-700" /></div>
               <div className="absolute top-[70%] left-[20%]"><MapPin className="w-8 h-8 text-gray-700" /></div>
               
               {/* Moving fake drivers */}
               <motion.div 
                 animate={{ x: [0, 100, 200, 100, 0], y: [0, -50, 0, 50, 0] }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute top-[40%] left-[40%]"
               >
                 <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(255,214,0,0.8)] border-2 border-black"></div>
               </motion.div>
               <motion.div 
                 animate={{ x: [0, -100, -200, -100, 0], y: [0, 100, 0, -100, 0] }}
                 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                 className="absolute top-[60%] left-[50%]"
               >
                 <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(255,214,0,0.8)] border-2 border-black"></div>
               </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}