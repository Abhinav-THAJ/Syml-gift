'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
import { useAppContext } from '@/context/AppContext';

export default function SignInModal() {
  const { isSignInOpen, setIsSignInOpen, login } = useAppContext();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email && name) {
      login(email, name);
    }
  };

  return (
    <AnimatePresence>
      {isSignInOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSignInOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-card shadow-2xl z-[60] rounded-3xl overflow-hidden border border-border"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-heading font-bold">Welcome Back</h2>
                <button onClick={() => setIsSignInOpen(false)} className="p-2 hover:bg-muted rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl border border-border focus:ring-2 focus:ring-primary/50 outline-none bg-background" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">Email</label>
                  <input 
                    type="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl border border-border focus:ring-2 focus:ring-primary/50 outline-none bg-background" 
                    placeholder="john@example.com" 
                  />
                </div>
                <button type="submit" className="w-full h-12 mt-4 bg-primary text-primary-foreground rounded-full font-bold shadow-xl shadow-primary/20 hover:-translate-y-0.5 transition-transform">
                  Sign In
                </button>
              </form>
              <p className="text-center text-sm text-muted-foreground mt-6">
                Don't have an account? <span className="text-primary font-medium cursor-pointer">Sign up</span>
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
