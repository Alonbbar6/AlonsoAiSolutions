import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Quote } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Arabica Coffee Co.",
    industry: "E-commerce",
    image: "/images/template-ecommerce.png",
    testimonial: "I was losing sales because my old site was impossible to use on mobile. Momentum built me a beautiful shop in 5 days. Sales are up 40%.",
    author: "Sarah Jenkins, Owner",
    stats: "40% increase in mobile sales"
  },
  {
    id: 2,
    name: "Vance Wealth Management",
    industry: "Consulting",
    image: "/images/template-consultant.png",
    testimonial: "My previous developer ghosted me. Momentum gave me control back. The site looks incredibly professional and the automated booking system saves me hours.",
    author: "Michael Vance, CFP",
    stats: "15+ new leads per month"
  },
  {
    id: 3,
    name: "GreenLeaf Landscaping",
    industry: "Local Service",
    image: "/images/template-consultant.png", // Reusing for demo
    testimonial: "I'm good at landscaping, not computers. This was exactly what I needed. Simple, fast, and it actually brings in customers.",
    author: "David Miller, Founder",
    stats: "Ranked #1 in local search"
  },
  {
    id: 4,
    name: "Urban Boutique",
    industry: "Retail",
    image: "/images/template-ecommerce.png", // Reusing for demo
    testimonial: "The AI design suggestions were spot on. It felt like they really understood my brand vibe immediately.",
    author: "Jessica Chen, Director",
    stats: "Launched in 4 days"
  },
  {
    id: 5,
    name: "TechFlow Solutions",
    industry: "B2B Service",
    image: "/images/template-consultant.png", // Reusing for demo
    testimonial: "Professional, fast, and affordable. The ROI was clear from the first week.",
    author: "Robert Chang, CEO",
    stats: "2x lead conversion rate"
  },
  {
    id: 6,
    name: "Pure Yoga Studio",
    industry: "Wellness",
    image: "/images/template-ecommerce.png", // Reusing for demo
    testimonial: "My students love the new site. It's calm, clean, and easy to book classes.",
    author: "Emma Wilson, Instructor",
    stats: "Zero downtime since launch"
  }
];

export default function Showcase() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Real Results for Real Businesses
          </h1>
          <p className="text-lg text-muted-foreground">
            See how we've helped business owners like you transform their online presence and grow their bottom line.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group border border-slate-100"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-primary">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">{project.industry}</p>
                  </div>
                </div>
                <div className="relative pl-6">
                  <Quote className="w-4 h-4 text-secondary absolute left-0 top-0 opacity-50" />
                  <p className="text-slate-600 text-sm italic line-clamp-3">
                    "{project.testimonial}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {selectedProject && (
            <div className="grid md:grid-cols-2">
              <div className="bg-slate-100">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.name} 
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <DialogHeader>
                  <DialogTitle className="font-serif text-2xl font-bold text-primary mb-1">
                    {selectedProject.name}
                  </DialogTitle>
                  <DialogDescription className="text-secondary font-medium">
                    {selectedProject.industry}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="my-8 space-y-6">
                  <div className="relative pl-8">
                    <Quote className="w-6 h-6 text-secondary absolute left-0 top-0 opacity-30" />
                    <p className="text-lg text-slate-700 italic">
                      "{selectedProject.testimonial}"
                    </p>
                    <p className="mt-4 font-bold text-primary text-sm">
                      — {selectedProject.author}
                    </p>
                  </div>

                  <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                    <p className="text-green-800 font-bold flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Result: {selectedProject.stats}
                    </p>
                  </div>
                </div>

                <Button className="w-full bg-primary text-white hover:bg-primary/90">
                  View Live Site <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
