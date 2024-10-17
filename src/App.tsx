import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar';
import PetCard from './components/PetCard';
import Footer from './components/Footer';
import './App.css';

const queryClient = new QueryClient();

const pets = [
  {
    id: 1,
    name: "แมวส้ม",
    image: "https://i.imgur.com/bGWyFAA.jpeg",
    price: 4500
  },
  {
    id: 2,
    name: "สุนัขโกลเด้น",
    image: "https://i.imgur.com/fSgnUKW.jpeg",
    price: 5000
  },
  {
    id: 3,
    name: "กระต่ายขาว",
    image: "https://i.imgur.com/lzwM4bX.jpeg",
    price: 2500
  },
  {
    id: 4,
    name: "ซามอยด์",
    image: "https://i.imgur.com/6IOknOs.jpeg",
    price: 3500
  },
  {
    id: 5,
    name: "แมวดำ",
    image: "https://i.imgur.com/uZ117ol.jpeg",
    price: 5000
  }
];

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-green-700">ยินดีต้อนรับสู่ PetShop</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {pets.map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default App;