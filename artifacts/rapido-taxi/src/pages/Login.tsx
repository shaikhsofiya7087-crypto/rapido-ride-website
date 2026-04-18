import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Zap, Loader2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useLocation } from 'wouter';

const loginSchema = z.object({
  contact: z.string().min(10, "Valid phone or email required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const signupSchema = z.object({
  name: z.string().min(2, "Name is required"),
  contact: z.string().min(10, "Valid phone or email required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function Login() {
  const [, setLocation] = useLocation();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { contact: "", password: "" },
  });

  const signupForm = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: "", contact: "", password: "" },
  });

  const onSubmitLogin = (data: z.infer<typeof loginSchema>) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setLocation('/book');
    }, 1500);
  };

  const onSubmitSignup = (data: z.infer<typeof signupSchema>) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsLogin(true); // Switch to login after signup
    }, 1500);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex">
      {/* LEFT PANEL - BRANDING */}
      <div className="hidden lg:flex w-1/2 bg-black text-white flex-col justify-between p-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4"></div>
        
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <pattern id="diagonal-stripes" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="40" stroke="#FFD600" strokeWidth="2"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#diagonal-stripes)" />
        </svg>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-16">
            <div className="bg-primary text-black p-2 rounded-md flex items-center justify-center">
              <Zap className="h-6 w-6 fill-current" />
            </div>
            <span className="font-heading font-bold text-3xl tracking-tight">
              Rapido<span className="text-primary">Ride</span>
            </span>
          </div>

          <h1 className="text-6xl font-heading font-black leading-[1.1] mb-6">
            Your City.<br/>
            Your Rules.<br/>
            <span className="text-primary">Zero Traffic.</span>
          </h1>
          
          <p className="text-gray-400 text-xl max-w-md">
            Join thousands of daily commuters who save time and money with India's fastest urban mobility network.
          </p>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-4 text-gray-400">
            <div className="flex -space-x-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center text-xs font-bold text-white">
                  U{i}
                </div>
              ))}
            </div>
            <p>Over <strong className="text-white">10 Million+</strong> rides completed</p>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL - FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
            <div className="bg-primary text-black p-1.5 rounded-md flex items-center justify-center">
              <Zap className="h-5 w-5 fill-current" />
            </div>
            <span className="font-heading font-bold text-2xl tracking-tight">
              Rapido<span className="text-primary">Ride</span>
            </span>
          </div>

          <div className="flex bg-gray-100 p-1 rounded-xl mb-8">
            <button 
              className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${isLogin ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-black'}`}
              onClick={() => setIsLogin(true)}
              data-testid="tab-login"
            >
              Login
            </button>
            <button 
              className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${!isLogin ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-black'}`}
              onClick={() => setIsLogin(false)}
              data-testid="tab-signup"
            >
              Sign Up
            </button>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold font-heading mb-2">
              {isLogin ? 'Welcome back' : 'Create an account'}
            </h2>
            <p className="text-gray-500 text-sm">
              {isLogin ? 'Enter your details to access your account' : 'Join us to start riding smarter today'}
            </p>
          </div>

          {isLogin ? (
            <Form {...loginForm}>
              <form onSubmit={loginForm.handleSubmit(onSubmitLogin)} className="space-y-5">
                <FormField
                  control={loginForm.control}
                  name="contact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Phone or Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter phone or email" className="h-12 bg-gray-50 border-gray-200 focus-visible:ring-primary" {...field} data-testid="input-login-contact" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={loginForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex justify-between items-center">
                        <FormLabel className="text-gray-700">Password</FormLabel>
                        <a href="#" className="text-xs font-semibold text-primary hover:underline">Forgot password?</a>
                      </div>
                      <FormControl>
                        <Input type="password" placeholder="Enter password" className="h-12 bg-gray-50 border-gray-200 focus-visible:ring-primary" {...field} data-testid="input-login-password" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full h-12 bg-black hover:bg-gray-800 text-white font-bold mt-4 text-base rounded-xl transition-all" data-testid="btn-submit-login">
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign In"}
                </Button>
              </form>
            </Form>
          ) : (
            <Form {...signupForm}>
              <form onSubmit={signupForm.handleSubmit(onSubmitSignup)} className="space-y-4">
                <FormField
                  control={signupForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="h-12 bg-gray-50 border-gray-200 focus-visible:ring-primary" {...field} data-testid="input-signup-name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={signupForm.control}
                  name="contact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Phone or Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter phone or email" className="h-12 bg-gray-50 border-gray-200 focus-visible:ring-primary" {...field} data-testid="input-signup-contact" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={signupForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Create a strong password" className="h-12 bg-gray-50 border-gray-200 focus-visible:ring-primary" {...field} data-testid="input-signup-password" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-start gap-2 pt-2">
                  <input type="checkbox" id="terms" className="mt-1 accent-primary rounded border-gray-300" required />
                  <label htmlFor="terms" className="text-xs text-gray-500">
                    By creating an account, I agree to the <a href="#" className="font-bold text-black hover:underline">Terms of Service</a> and <a href="#" className="font-bold text-black hover:underline">Privacy Policy</a>
                  </label>
                </div>
                <Button type="submit" disabled={isLoading} className="w-full h-12 bg-primary hover:bg-primary/90 text-black font-bold mt-2 text-base rounded-xl transition-all" data-testid="btn-submit-signup">
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Create Account"}
                </Button>
              </form>
            </Form>
          )}

          <div className="mt-8 pt-6 border-t border-gray-100">
             <Button variant="outline" className="w-full h-12 border-gray-200 font-semibold text-gray-700 flex items-center justify-center gap-3 rounded-xl hover:bg-gray-50">
               <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                 <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                 <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                 <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                 <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
               </svg>
               Continue with Google
             </Button>
          </div>
        </div>
      </div>
    </div>
  );
}