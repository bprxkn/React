import React from 'react';
import { ShoppingCart, PawPrint, User } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-green-500 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <PawPrint className="text-white" size={32} />
          <span className="text-2xl font-bold">PetShop</span>
        </div>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-green-200 transition-colors">หน้าหลัก</a></li>
          <li><a href="#" className="hover:text-green-200 transition-colors">สัตว์เลี้ยง</a></li>
          <li><a href="#" className="hover:text-green-200 transition-colors">ร้านค้า</a></li>
          <li><a href="#" className="hover:text-green-200 transition-colors">เกี่ยวกับเรา</a></li>
        </ul>
        <div className="flex items-center space-x-4">
          <User className="cursor-pointer hover:text-green-200 transition-colors" size={24} />
          <ShoppingCart className="cursor-pointer hover:text-green-200 transition-colors" size={24} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;