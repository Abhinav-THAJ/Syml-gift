'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Check, Package, Gift, Sparkles, CreditCard } from 'lucide-react';
import Image from 'next/image';

const steps = [
  { id: 1, title: 'Choose Box', icon: Package },
  { id: 2, title: 'Add Products', icon: Gift },
  { id: 3, title: 'Decoration', icon: Sparkles },
  { id: 4, title: 'Checkout', icon: CreditCard },
];

const boxOptions = [
  { id: 'b1', name: 'Luxury Wooden Trunk', price: 1299, image: '/photos/30.jpeg' },
  { id: 'b2', name: 'Elegant Velvet Box', price: 899, image: '/photos/31.jpeg' },
  { id: 'b3', name: 'Minimalist Matte Box', price: 499, image: '/photos/32.jpeg' },
];

export default function BuildHamperPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedBox, setSelectedBox] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">Build Your Own Hamper</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Create a perfectly customized gifting experience. Choose your packaging, handpick the products, and add a personal touch.
          </p>
        </div>

        {/* Progress Stepper */}
        <div className="flex items-center justify-center mb-16 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center relative z-10">
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    currentStep > step.id 
                      ? 'bg-primary border-primary text-primary-foreground' 
                      : currentStep === step.id 
                        ? 'bg-background border-primary text-primary' 
                        : 'bg-background border-border text-muted-foreground'
                  }`}
                >
                  {currentStep > step.id ? <Check className="w-5 h-5" /> : <step.icon className="w-5 h-5" />}
                </div>
                <span className={`absolute top-14 text-sm font-medium whitespace-nowrap ${currentStep >= step.id ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {step.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`w-16 sm:w-24 md:w-32 h-[2px] mx-2 transition-colors duration-300 ${
                  currentStep > step.id ? 'bg-primary' : 'bg-border'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Builder Content Area */}
        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {/* Main Selection Area */}
          <div className="lg:col-span-2 bg-white p-8 rounded-[2rem] shadow-sm border border-border/50 min-h-[500px]">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-heading font-semibold">Step 1: Select Your Box</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {boxOptions.map(box => (
                      <div 
                        key={box.id}
                        onClick={() => setSelectedBox(box.id)}
                        className={`cursor-pointer group relative rounded-2xl overflow-hidden border-2 transition-all ${
                          selectedBox === box.id ? 'border-primary ring-4 ring-primary/10' : 'border-transparent hover:border-border'
                        }`}
                      >
                        <div className="relative h-48 w-full bg-muted">
                          <Image src={box.image} alt={box.name} fill className="object-cover" />
                        </div>
                        <div className="p-4 bg-background">
                          <h4 className="font-semibold">{box.name}</h4>
                          <p className="text-primary font-medium mt-1">₹{box.price}</p>
                        </div>
                        {selectedBox === box.id && (
                          <div className="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                            <Check className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col items-center justify-center h-full text-center space-y-4 pt-12"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Gift className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="text-2xl font-heading font-semibold">Add Products</h2>
                  <p className="text-muted-foreground">Select items from our curated collection to fill your hamper.</p>
                  <p className="text-sm text-primary font-medium">(Interactive product grid would go here)</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-12 flex justify-between items-center pt-6 border-t border-border">
              <button 
                onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                className={`px-6 py-2.5 rounded-full font-medium transition-colors ${currentStep === 1 ? 'opacity-50 cursor-not-allowed text-muted-foreground' : 'text-foreground hover:bg-muted'}`}
                disabled={currentStep === 1}
              >
                Back
              </button>
              <button 
                onClick={() => setCurrentStep(prev => Math.min(steps.length, prev + 1))}
                disabled={currentStep === 1 && !selectedBox}
                className="flex items-center gap-2 px-8 py-2.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next Step <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Live Preview Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white p-6 rounded-[2rem] shadow-sm border border-border/50">
              <h3 className="font-heading text-xl font-bold mb-6">Hamper Preview</h3>
              
              <div className="aspect-square w-full bg-muted/30 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center border border-border">
                {selectedBox ? (
                  <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-full h-full relative">
                    <Image src={boxOptions.find(b => b.id === selectedBox)?.image || ''} alt="Preview" fill className="object-cover" />
                  </motion.div>
                ) : (
                  <div className="text-center text-muted-foreground p-6">
                    <Package className="w-12 h-12 mx-auto mb-2 opacity-20" />
                    <p className="text-sm">Select a box to start building your hamper</p>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Packaging</span>
                  <span className="font-medium">{selectedBox ? boxOptions.find(b => b.id === selectedBox)?.name : 'Not selected'}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Items (0)</span>
                  <span className="font-medium">₹0</span>
                </div>
                <div className="pt-4 border-t border-border flex justify-between items-center">
                  <span className="font-semibold text-foreground">Estimated Total</span>
                  <span className="font-bold text-primary text-xl">
                    ₹{selectedBox ? boxOptions.find(b => b.id === selectedBox)?.price : 0}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
