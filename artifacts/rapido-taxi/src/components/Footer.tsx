import React from 'react';
import { Link } from 'wouter';
import { Zap } from 'lucide-react';
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-black p-1.5 rounded-md flex items-center justify-center">
                <Zap className="h-5 w-5 fill-current" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                Rapido<span className="text-primary">Ride</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Premium urban bike taxi booking service. Beat traffic, save money, and ride safe in your city.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-colors" data-testid="social-twitter">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-colors" data-testid="social-instagram">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-colors" data-testid="social-facebook">
                <FaFacebookF className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="/#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="/#how-it-works" className="hover:text-primary transition-colors">How it Works</a></li>
              <li><a href="/#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="/#safety" className="hover:text-primary transition-colors">Safety</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-white">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Driver Agreement</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>support@rapidoride.com</li>
              <li>1-800-RAPIDO-RIDE</li>
              <li className="pt-2">
                <p className="mb-2">Download our App</p>
                <div className="flex gap-2">
                  <div className="bg-gray-900 border border-gray-800 px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer hover:border-primary transition-colors">App Store</div>
                  <div className="bg-gray-900 border border-gray-800 px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer hover:border-primary transition-colors">Google Play</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} RapidoRide Technologies Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-gray-400 text-xs">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}