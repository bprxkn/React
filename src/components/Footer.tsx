import React from 'react';
import { Facebook, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-lg">&copy; 6401136 ปิยพงษ์ รักผาสุข</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="flex items-center hover:text-green-200 transition-colors">
              <Facebook size={24} className="mr-2" />
              Facebook
            </a>
            <a href="#" className="flex items-center hover:text-green-200 transition-colors">
              <MessageCircle size={24} className="mr-2" />
              Line
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;