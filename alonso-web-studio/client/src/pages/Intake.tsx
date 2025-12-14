import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ChevronRight, ChevronLeft, Upload, Sparkles } from "lucide-react";
import { Link } from "wouter";

const steps = [
  { id: 1, title: "The Basics", desc: "Tell us who you are" },
  { id: 2, title: "The Vibe", desc: "Define your brand personality" },
  { id: 3, title: "The Goal", desc: "What's your main objective?" },
  { id: 4, title: "Look & Feel", desc: "Choose your style" },
  { id: 5, title: "Content", desc: "Add your raw materials" }
];

export default function Intake() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, trigger } = useForm();

  const nextStep = async () => {
    const isValid = await trigger();
    if (isValid) setCurrentStep((prev) => Math.min(prev + 1, steps.length + 1));
  };

  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const onSubmit = (data: any) => {
    console.log(data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-lg w-full text-center p-8 shadow-2xl border-secondary/20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Sparkles className="w-10 h-10 text-green-600" />
          </motion.div>
          <h2 className="font-serif text-3xl font-bold text-primary mb-4">Magic in Progress!</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Thank you! We have everything we need. We're now working our magic and will be in touch with your first draft within 48 hours.
          </p>
          <Link href="/">
            <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
              Return Home
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-4">
            {steps.map((step) => (
              <div 
                key={step.id}
                className={`flex flex-col items-center w-1/5 ${
                  step.id <= currentStep ? "text-secondary" : "text-slate-300"
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 mb-2 transition-colors ${
                  step.id < currentStep ? "bg-secondary border-secondary text-white" :
                  step.id === currentStep ? "border-secondary text-secondary bg-white" :
                  "border-slate-200 text-slate-300 bg-white"
                }`}>
                  {step.id < currentStep ? <CheckCircle2 className="w-5 h-5" /> : step.id}
                </div>
                <span className="text-xs font-medium hidden sm:block">{step.title}</span>
              </div>
            ))}
          </div>
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-secondary"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            />
          </div>
        </div>

        <Card className="shadow-xl border-0 overflow-hidden">
          <div className="bg-primary p-6 text-white">
            <h1 className="font-serif text-2xl font-bold">
              {steps[currentStep - 1]?.title || "Review"}
            </h1>
            <p className="text-slate-300">
              {steps[currentStep - 1]?.desc || "Review your details"}
            </p>
          </div>

          <CardContent className="p-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <Label>Business Name</Label>
                      <Input {...register("businessName", { required: true })} placeholder="e.g. Acme Consulting" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Your Name</Label>
                        <Input {...register("name", { required: true })} placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label>Email Address</Label>
                        <Input {...register("email", { required: true })} type="email" placeholder="john@example.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Industry</Label>
                      <Select onValueChange={(val) => register("industry").onChange({ target: { value: val } })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="consulting">Consulting</SelectItem>
                          <SelectItem value="ecommerce">E-commerce</SelectItem>
                          <SelectItem value="local-service">Local Service</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>What does your business do?</Label>
                      <Textarea {...register("description")} placeholder="Briefly describe your services..." />
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <Label>Brand Personality (3 words)</Label>
                      <Input {...register("personality")} placeholder="e.g. Professional, Friendly, Bold" />
                    </div>
                    <div className="space-y-2">
                      <Label>Main Competitors</Label>
                      <Input {...register("competitors")} placeholder="List 1-3 competitors" />
                    </div>
                    <div className="space-y-2">
                      <Label>What makes you different?</Label>
                      <Textarea {...register("differentiation")} placeholder="Your unique selling point..." />
                    </div>
                    <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Upload your logo (optional)</p>
                    </div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <Label>#1 Goal for New Website</Label>
                      <Select onValueChange={(val) => register("goal").onChange({ target: { value: val } })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your main goal" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="leads">Get more calls/leads</SelectItem>
                          <SelectItem value="showcase">Showcase my work</SelectItem>
                          <SelectItem value="sales">Sell products online</SelectItem>
                          <SelectItem value="info">Provide information</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Ideal Customer Description</Label>
                      <Textarea {...register("idealCustomer")} placeholder="Describe your perfect client..." />
                    </div>
                  </motion.div>
                )}

                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <Label>Choose a Starting Point</Label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { id: "modern", name: "Modern & Clean", img: "/images/template-ecommerce.png" },
                        { id: "bold", name: "Bold & Professional", img: "/images/template-consultant.png" }
                      ].map((template) => (
                        <div key={template.id} className="relative group cursor-pointer">
                          <input 
                            type="radio" 
                            value={template.id} 
                            {...register("template")} 
                            className="peer sr-only" 
                            id={template.id}
                          />
                          <label 
                            htmlFor={template.id}
                            className="block rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-secondary peer-checked:ring-2 peer-checked:ring-secondary/20 transition-all"
                          >
                            <img src={template.img} alt={template.name} className="w-full h-40 object-cover" />
                            <div className="p-3 bg-slate-50 font-medium text-center">{template.name}</div>
                          </label>
                          <div className="absolute top-2 right-2 opacity-0 peer-checked:opacity-100 transition-opacity">
                            <CheckCircle2 className="w-6 h-6 text-secondary fill-white" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {currentStep === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="bg-blue-50 text-blue-800 p-4 rounded-lg flex gap-3 items-start">
                      <Sparkles className="w-5 h-5 shrink-0 mt-0.5" />
                      <p className="text-sm">Don't worry about getting this perfect! Just give us the raw materials. Our AI will help refine and polish your content.</p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Homepage Welcome Message</Label>
                      <Textarea {...register("homeContent")} placeholder="Welcome to our business..." className="h-32" />
                    </div>
                    <div className="space-y-2">
                      <Label>About Us</Label>
                      <Textarea {...register("aboutContent")} placeholder="Our story began..." className="h-32" />
                    </div>
                    <div className="space-y-2">
                      <Label>Services / Products</Label>
                      <Textarea {...register("servicesContent")} placeholder="We offer..." className="h-32" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-between mt-8 pt-6 border-t">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="w-32"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" /> Back
                </Button>
                
                {currentStep < steps.length ? (
                  <Button 
                    type="button" 
                    onClick={nextStep}
                    className="w-32 bg-secondary hover:bg-secondary/90 text-white"
                  >
                    Next <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button 
                    type="submit" 
                    className="w-32 bg-secondary hover:bg-secondary/90 text-white"
                  >
                    Submit <Sparkles className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
