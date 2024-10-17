import React from 'react';
import { useQuery } from '@tanstack/react-query';
import PetCard from './PetCard';

interface Pet {
  id: number;
  name: string;
  image: string;
  price: number;
}

const fetchPets = async (): Promise<Pet[]> => {
  
  return [
    { id: 1, name: 'แมวส้ม', image: 'https://i.imgur.com/bGWyFAA.jpeg', price: 4500 },
    { id: 2, name: 'สุนัขโกลเด้น', image: 'https://i.imgur.com/fSgnUKW.jpeg', price: 5000 },
    { id: 3, name: 'กระต่ายขาว', image: 'https://i.imgur.com/lzwM4bX.jpeg', price: 2500 },
    { id: 4, name: 'ซามอยด์', image: 'https://i.imgur.com/6IOknOs.jpeg', price: 3500 },
    { id: 5, name: 'แมวดำ', image: 'https://i.imgur.com/uZ117ol.jpeg', price: 5000 },
  ];
};

const PetList: React.FC = () => {
  const { data: pets, isLoading, error } = useQuery({
    queryKey: ['pets'],
    queryFn: fetchPets,
  });

  if (isLoading) return <div className="text-center text-2xl">กำลังโหลด...</div>;
  if (error) return <div className="text-center text-2xl text-red-500">เกิดข้อผิดพลาดในการโหลดข้อมูล</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {pets?.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
};

export default PetList;