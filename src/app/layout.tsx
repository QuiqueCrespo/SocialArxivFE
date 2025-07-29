import "../globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Upload, User, LogIn, Sun, Moon } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 min-h-screen`}>
        <div className="flex flex-col min-h-screen">
          {/* Header/Navbar */}
          <div className="bg-red-500 text-white p-4">If this is red, Tailwind is working!</div>
          <header className="flex items-center justify-between px-6 py-3 bg-white shadow-sm sticky top-0 z-10">
            <div className="flex items-center gap-3">
              <Menu className="w-6 h-6 mr-2" />
              <Link href="/" className="font-bold text-xl tracking-tight">SocialArxiv</Link>
            </div>
            <div className="flex-1 flex justify-center">
              <input type="text" placeholder="Search papers, channels..." className="w-full max-w-md px-3 py-2 border rounded" />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon"><Sun className="w-5 h-5" /></Button>
              <Button variant="outline" asChild><Link href="/login"><LogIn className="w-4 h-4 mr-1" />Sign In</Link></Button>
              <Button variant="default" asChild><Link href="/submit"><Upload className="w-4 h-4 mr-1" />Upload</Link></Button>
              <Button variant="ghost" asChild><Link href="/u/me"><User className="w-4 h-4" /></Link></Button>
            </div>
          </header>

          {/* Main content with sidebar */}
          <div className="flex flex-1">
            {/* Sidebar */}
            <aside className="hidden md:block w-64 bg-white border-r p-4 space-y-4">
              <div className="font-semibold text-lg mb-2">Top Channels</div>
              <ul className="space-y-2">
                <li><Link href="/c/machine-learning" className="hover:underline"># Machine Learning</Link></li>
                <li><Link href="/c/quantum-biology" className="hover:underline"># Quantum Biology</Link></li>
                <li><Link href="/c/neuroscience" className="hover:underline"># Neuroscience</Link></li>
              </ul>
              <Button variant="default" className="w-full mt-4">Create Channel</Button>
            </aside>
            {/* Main content */}
            <main className="flex-1 p-4 md:p-8 max-w-3xl mx-auto w-full">
              {children}
            </main>
          </div>
        </div>
        {/* Floating upload button for mobile */}
        <Button variant="default" className="fixed bottom-6 right-6 md:hidden rounded-full shadow-lg p-4" asChild>
          <Link href="/submit"><Upload className="w-6 h-6" /></Link>
        </Button>
      </body>
    </html>
  );
}
