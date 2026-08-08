import Link from "next/link";
import  ThemeToggle  from "@/components/theme-toggle";

export default function Header(){
    return (   
      <header className="bg-gray-800 text-white py-4 px-8">
        <nav className="flex space-x-4">
            <div>
                <Link href="/" className="text-white hover:text-gray-300">Portfolio</Link>
            </div>
            <div>
                <Link href="/" className="text-white hover:text-gray-300">Home</Link>
                <Link href="/about" className="text-white hover:text-gray-300 ml-4">Projects</Link>
                <Link href="/contact" className="text-white hover:text-gray-300 ml-4">Contact</Link>
            </div>
            <div className="ml-auto">
                <ThemeToggle />
            </div>

        
        </nav>
      </header>
    )
}

