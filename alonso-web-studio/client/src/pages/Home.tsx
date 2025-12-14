import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Rocket, Brain, FileText, Clock, Code2, Users } from "lucide-react";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/20 z-10" />
          <img 
            src="/images/hero-background.png" 
            alt="Modern digital workspace" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        <div className="container relative z-20 grid lg:grid-cols-2 gap-12 items-center pt-20">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={stagger}
            className="space-y-8"
          >
            <motion.h1 
              variants={fadeIn}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Is your website costing you <span className="text-secondary">customers?</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl text-slate-300 max-w-xl leading-relaxed"
            >
              Stop feeling overwhelmed by technology and left behind by competitors. Get a professional, AI-powered website that works as hard as you do—in just 7 days.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Link href="/intake">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6 h-auto rounded-full shadow-lg shadow-secondary/20 transition-all hover:scale-105">
                  Get Your Free Instant Mockup
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div variants={fadeIn} className="flex items-center gap-4 text-sm text-slate-400">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-primary flex items-center justify-center text-xs">
                    <Users className="w-4 h-4" />
                  </div>
                ))}
              </div>
              <p>Trusted by 500+ small business owners</p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-2xl">
              <img 
                src="/images/template-consultant.png" 
                alt="Website Preview" 
                className="rounded-lg shadow-lg w-full"
              />
              
              {/* Floating UI Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 bg-white text-primary p-4 rounded-xl shadow-xl border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Performance</p>
                    <p className="text-lg font-bold">98/100</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              Professional websites without the headache
            </h2>
            <p className="text-lg text-muted-foreground">
              We've stripped away the complexity. No code, no drag-and-drop confusion. Just a simple process designed for busy owners.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

            {[
              {
                icon: FileText,
                title: "1. Tell Us About Your Business",
                desc: "Fill out our simple 'Vibe Code' form. No technical jargon, just questions about your goals and style."
              },
              {
                icon: Brain,
                title: "2. AI Crafts Your Design",
                desc: "Our AI analyzes your needs and builds a custom, professional structure in minutes, not months."
              },
              {
                icon: Rocket,
                title: "3. Launch Your New Website",
                desc: "Review your site, request tweaks, and go live. Start capturing leads immediately."
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center mb-6 group hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-secondary group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Comparison */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-primary mb-8">
                Stop settling for the "Old Way"
              </h2>
              <div className="space-y-6">
                {[
                  {
                    old: "Months of waiting for a developer",
                    new: "A live, professional site in 7 days",
                    icon: Clock
                  },
                  {
                    old: "Confusing technical jargon & hosting",
                    new: "Zero code, zero technical stress",
                    icon: Code2
                  },
                  {
                    old: "Freelancers who ghost you",
                    new: "A reliable, always-on partner",
                    icon: Users
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-red-400 line-through text-sm mb-1">{item.old}</p>
                      <p className="text-primary font-bold text-lg flex items-center gap-2">
                        {item.new}
                        <CheckCircle2 className="w-5 h-5 text-secondary" />
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/10 rounded-3xl transform rotate-3" />
              <img 
                src="/images/feature-ai.png" 
                alt="AI Technology" 
                className="relative rounded-3xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Template Showcase */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-6">Built for your industry</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Whether you're a consultant, a local shop, or a service provider, we have a professional foundation ready for you.
            </p>
          </div>

          <div className="flex gap-8 overflow-x-auto pb-12 snap-x">
            {[
              { img: "/images/template-ecommerce.png", title: "E-commerce", desc: "Clean, conversion-focused design for products." },
              { img: "/images/template-consultant.png", title: "Consulting", desc: "Authority-building layout for professionals." },
              { img: "/images/template-consultant.png", title: "Local Services", desc: "Trust-building design for trades & services." } // Reusing image for demo
            ].map((template, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="min-w-[300px] md:min-w-[400px] snap-center"
              >
                <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                  <img src={template.img} alt={template.title} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-bold mb-2">{template.title}</h3>
                    <p className="text-slate-400">{template.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/feature-rocket.png')] opacity-10 bg-center bg-no-repeat bg-cover mix-blend-overlay" />
        <div className="container relative z-10 text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to grow your business?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join hundreds of business owners who have upgraded their online presence. It takes less than 5 minutes to start.
          </p>
          <Link href="/intake">
            <Button size="lg" className="bg-white text-secondary hover:bg-slate-100 text-xl px-12 py-8 h-auto rounded-full shadow-2xl font-bold">
              Get Your Free Instant Mockup
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
