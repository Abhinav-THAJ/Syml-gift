'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Check, Package, Calendar, List, MessageCircle, Maximize } from 'lucide-react';
import Image from 'next/image';

const steps = [
  { id: 1, title: 'Choose Box', icon: Package },
  { id: 2, title: 'Box Size', icon: Maximize },
  { id: 3, title: 'Occasion Details', icon: Calendar },
  { id: 4, title: 'Items Preferred', icon: List },
  { id: 5, title: 'Connect', icon: MessageCircle },
];

const boxOptions = [
  { id: 'b1', name: 'Ribbon Boxes', price: 499, image: '/photos/ribbon_boxes.png' },
  { id: 'b2', name: 'Mini Trolleys', price: 899, image: '/photos/mini_trolleys.png' },
  { id: 'b3', name: 'Heart Boxes', price: 599, image: '/photos/heart_boxes.png' },
  { id: 'b4', name: 'Rectangle Boxes', price: 449, image: '/photos/rectangle_boxes.png' },
  { id: 'b5', name: 'Square Gift Boxes', price: 399, image: '/photos/square_gift_boxes.png' },
  { id: 'b6', name: 'Hamper Bags', price: 299, image: '/photos/hamper_bags.png' },
  { id: 'b7', name: 'Foldable Hamper Boxes', price: 699, image: '/photos/foldable_hamper_boxes.png' },
  { id: 'b8', name: 'Engagement Hampers', price: 1499, image: '/photos/engagement_hampers.png' },
];

export default function BuildHamperPage() {
  const [customizationMode, setCustomizationMode] = useState<'website' | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedBox, setSelectedBox] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState('');
  
  // Form state
  const [occasion, setOccasion] = useState('');
  const [budget, setBudget] = useState('');
  const [date, setDate] = useState('');
  const [place, setPlace] = useState('');
  const [items, setItems] = useState('');

  const handleWhatsAppRedirect = () => {
    const box = boxOptions.find(b => b.id === selectedBox);
    const boxName = box ? box.name : 'No Box Selected';
    const message = `Hello! I'd like to build a custom hamper.
*Box:* ${boxName}
*Size:* ${selectedSize}
*Occasion:* ${occasion}
*Budget:* ${budget}
*Date:* ${date}
*Place:* ${place}
*Preferred Items:* ${items}`;
    
    // Replace with the actual WhatsApp number
    const phoneNumber = "918129272580"; 
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-background pb-20" style={{ paddingTop: '120px' }}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">Build Your Own Hamper</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Create a perfectly customized gifting experience. Choose your packaging, tell us the details, and we will bring it to life!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 pt-4">
            <button 
              onClick={() => {
                const phoneNumber = "918129272580"; 
                const message = "Hello! I'd like to build a custom hamper.";
                window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="px-8 py-3 rounded-full bg-[#25D366] text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#20bd5a] hover:scale-105 transition-all shadow-lg w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              Customize on WhatsApp
            </button>
            <div className="text-muted-foreground text-sm font-medium px-4">OR</div>
            <button
              onClick={() => setCustomizationMode('website')}
              className={`px-8 py-3 rounded-full font-semibold transition-all shadow-lg border-2 w-full sm:w-auto ${customizationMode === 'website' ? 'bg-primary border-primary text-primary-foreground' : 'bg-white border-primary text-primary hover:bg-primary/5 hover:scale-105'}`}
            >
              Customize Here
            </button>
          </div>
        </div>

        <div className={`transition-all duration-700 ease-in-out relative ${customizationMode !== 'website' ? 'opacity-40 blur-[5px] pointer-events-none select-none' : ''}`}>
          {/* Mobile Step Counter */}
          <div className="sm:hidden flex items-center justify-between bg-primary/10 text-primary px-4 py-2.5 rounded-full mb-6 text-sm font-semibold">
            <span>Step {currentStep} of {steps.length}: {steps[currentStep - 1]?.title}</span>
            <div className="flex gap-1">
              {steps.map(s => (
                <div
                  key={s.id}
                  className={`w-2 h-2 rounded-full ${s.id <= currentStep ? 'bg-primary' : 'bg-primary/30'}`}
                />
              ))}
            </div>
          </div>

          {/* Progress Stepper */}
          <div className="flex items-center justify-center mb-16 max-w-3xl mx-auto hidden sm:flex">
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
          <div className="grid lg:grid-cols-3 gap-8 mt-6 sm:mt-20">
            {/* Main Selection Area */}
            <div className="lg:col-span-2 bg-white p-4 sm:p-8 rounded-[2rem] shadow-sm border border-border/50 min-h-[450px]">
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="text-xl sm:text-2xl font-heading font-semibold">Step 1: Select Your Box</h2>
                    <div className="grid grid-cols-2 gap-3 sm:gap-6">
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
                  key="step2_size"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-heading font-semibold">Step 2: Box Size</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {['Small', 'Medium', 'Large'].map(size => (
                      <div
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`cursor-pointer p-6 rounded-2xl border-2 text-center transition-all ${
                          selectedSize === size ? 'border-primary bg-primary/5 ring-4 ring-primary/10' : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <h3 className="font-semibold text-lg">{size}</h3>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3_occasion"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-heading font-semibold">Step 3: Occasion Details</h2>
                  <div className="space-y-4 max-w-lg">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Occasion</label>
                      <select 
                        value={occasion} 
                        onChange={e => setOccasion(e.target.value)}
                        className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      >
                        <option value="">Select an occasion</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Corporate">Corporate Event</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Preferred Budget (₹)</label>
                      <input 
                        type="text" 
                        value={budget}
                        onChange={e => setBudget(e.target.value)}
                        placeholder="e.g. 1500 - 3000"
                        className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Date of Occasion</label>
                      <input 
                        type="date" 
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Place to be delivered</label>
                      <input 
                        type="text" 
                        value={place}
                        onChange={e => setPlace(e.target.value)}
                        placeholder="City, State"
                        className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div
                  key="step4_items"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-heading font-semibold">Step 4: Items Preferred</h2>
                  <p className="text-muted-foreground">List out the kind of items you'd love to see in the hamper. For example: chocolates, perfumes, photos, snacks, custom mugs, etc.</p>
                  <div>
                    <textarea 
                      value={items}
                      onChange={e => setItems(e.target.value)}
                      placeholder="I would like 2 chocolates, a personalized mug, and some dry fruits..."
                      className="w-full h-40 p-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                    />
                  </div>
                </motion.div>
              )}

              {currentStep === 5 && (
                <motion.div
                  key="step5_connect"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col items-center justify-center text-center space-y-6 py-12"
                >
                  <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-2">
                    <MessageCircle className="w-12 h-12 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-heading font-semibold">Ready to Create!</h2>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    You've designed a beautiful base for your hamper. To ensure everything is perfect, let's complete your order on WhatsApp. Our team will verify availability and send you a payment link.
                  </p>
                  <button 
                    onClick={handleWhatsAppRedirect}
                    className="flex items-center gap-2 px-10 py-4 rounded-full bg-green-600 text-white font-medium text-lg shadow-lg hover:bg-green-700 hover:scale-105 transition-all"
                  >
                    Send to WhatsApp <ChevronRight className="w-5 h-5" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            {currentStep < 5 && (
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
                  disabled={
                    (currentStep === 1 && !selectedBox) || 
                    (currentStep === 2 && !selectedSize) ||
                    (currentStep === 3 && (!occasion || !budget || !date || !place))
                  }
                  className="flex items-center gap-2 px-8 py-2.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Step <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
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
                  <span className="font-medium text-right">{selectedBox ? boxOptions.find(b => b.id === selectedBox)?.name : 'Not selected'}</span>
                </div>
                {selectedSize && (
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Size</span>
                    <span className="font-medium">{selectedSize}</span>
                  </div>
                )}
                {occasion && (
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Occasion</span>
                    <span className="font-medium">{occasion}</span>
                  </div>
                )}
                {budget && (
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Budget</span>
                    <span className="font-medium">{budget}</span>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-border/50">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-medium shadow-sm hover:bg-[#20bd5a] hover:shadow-md transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Customize on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
