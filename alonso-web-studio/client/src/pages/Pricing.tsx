import { Button } from "@/components/ui/button";
import { CheckCircle2, HelpCircle } from "lucide-react";
import { Link } from "wouter";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-muted-foreground">
            No hidden fees. No surprise bills. Choose the plan that fits your business stage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* One-Time Project */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-slate-300" />
            <h3 className="font-serif text-2xl font-bold text-primary mb-2">Complete Build</h3>
            <p className="text-muted-foreground mb-6">For a professional, one-and-done launch.</p>
            
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-bold text-primary">$1,000</span>
              <span className="text-slate-400 font-medium">- $5,000</span>
              <span className="text-sm text-slate-400 ml-2">one-time</span>
            </div>

            <Link href="/intake">
              <Button variant="outline" className="w-full text-lg py-6 mb-8 border-2 hover:bg-slate-50">
                Get Started
              </Button>
            </Link>

            <div className="space-y-4">
              <p className="font-bold text-sm text-slate-900 uppercase tracking-wider">What's Included:</p>
              {[
                "Custom AI-Driven Design",
                "5-Page Professional Website",
                "Mobile Responsive Layout",
                "Basic SEO Setup",
                "Contact Form Integration",
                "3 Rounds of Revisions",
                "Full Ownership of Code"
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span className="text-slate-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Subscription */}
          <div className="bg-white rounded-2xl shadow-2xl border-2 border-secondary p-8 relative overflow-hidden transform md:-translate-y-4">
            <div className="absolute top-0 left-0 w-full h-2 bg-secondary" />
            <div className="absolute top-4 right-4 bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full">
              MOST POPULAR
            </div>
            
            <h3 className="font-serif text-2xl font-bold text-primary mb-2">Growth Partner</h3>
            <p className="text-muted-foreground mb-6">For ongoing support, updates & automation.</p>
            
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-bold text-primary">$15</span>
              <span className="text-slate-400 font-medium">- $50</span>
              <span className="text-sm text-slate-400 ml-2">/ month</span>
            </div>

            <Link href="/intake">
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white text-lg py-6 mb-8 shadow-lg shadow-secondary/20">
                Start Free Trial
              </Button>
            </Link>

            <div className="space-y-4">
              <p className="font-bold text-sm text-slate-900 uppercase tracking-wider">Everything in Build, Plus:</p>
              {[
                "AI Chatbot for Lead Capture",
                "Monthly Content Updates",
                "Advanced SEO Monitoring",
                "Priority Support (24h response)",
                "Hosting & SSL Included",
                "Weekly Performance Reports",
                "Cancel Anytime"
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Not sure which plan is right for you? 
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="w-4 h-4 text-slate-400 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Most businesses start with the Growth Partner plan<br/>to ensure their site stays fresh and secure.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </p>
        </div>
      </div>
    </div>
  );
}
