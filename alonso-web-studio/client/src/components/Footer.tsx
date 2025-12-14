import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-white/10">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link href="/">
            <a className="flex items-center gap-2 font-serif text-2xl font-bold text-white mb-4">
              <span className="text-secondary">Alonso</span> Web Studio
            </a>
          </Link>
          <p className="text-slate-300 max-w-md">
            Helping small business owners build professional, automated websites in days, not months. Stop stressing about tech and start growing your business.
          </p>
        </div>
        
        <div>
          <h4 className="font-serif text-lg font-semibold mb-4 text-white">Platform</h4>
          <ul className="space-y-2">
            <li><Link href="/#how-it-works"><a className="text-slate-300 hover:text-secondary transition-colors">How It Works</a></Link></li>
            <li><Link href="/showcase"><a className="text-slate-300 hover:text-secondary transition-colors">Showcase</a></Link></li>
            <li><Link href="/pricing"><a className="text-slate-300 hover:text-secondary transition-colors">Pricing</a></Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-semibold mb-4 text-white">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-slate-300 hover:text-secondary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-slate-300 hover:text-secondary transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      
      <div className="container mt-12 pt-8 border-t border-white/10 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} Alonso Web Studio. All rights reserved.
      </div>
    </footer>
  );
}
