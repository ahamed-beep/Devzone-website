import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
             <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dezone_logo-removebg-preview-cIwjanzAf7Q7pNAscxie6zaxt6mz3t.webp"              className="h-15 w-auto object-contain" alt="" />
            </div>

            <div className="space-y-2 text-gray-300 text-sm">
              <p>20619 Torrence Chapel Rd</p>
              <p>Suite 116 #1040</p>
              <p>Cornelius, NC 28031</p>
              <p>United States</p>
            </div>

            <div className="mt-6 space-y-2">
              <div>
                <span className="text-gray-400 text-sm">Phone number</span>
                <p className="text-white">1-800-201-1019</p>
              </div>
              <div>
                <span className="text-gray-400 text-sm">Email</span>
                <p className="text-white">support@devzone.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-6">Quick links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-medium mb-6">Social</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/facebook" className="text-gray-300 hover:text-white transition-colors">
                  Facebook
                </Link>
              </li>
              <li>
                <Link to="/instagram" className="text-gray-300 hover:text-white transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link to="/linkedin" className="text-gray-300 hover:text-white transition-colors">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link to="/twitter" className="text-gray-300 hover:text-white transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link to="/youtube" className="text-gray-300 hover:text-white transition-colors">
                  Youtube
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-medium mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-300 hover:text-white transition-colors">
                  Cookie policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © 2024 Devzone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
