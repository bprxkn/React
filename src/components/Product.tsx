import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Pet {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface PetCardProps {
  pet: Pet;
}

const PetCard: React.FC<PetCardProps> = ({ pet }) => {
  return (
    <Card className="overflow-hidden transition-transform duration-300 hover:scale-105 shadow-lg">
      <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover" />
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-green-700">{pet.name}</h2>
        <p className="text-gray-600 font-medium">ราคา {pet.price.toLocaleString()}฿</p>
      </CardContent>
      <CardFooter className="bg-gray-50 p-4">
        <Button className="w-full bg-green-500 hover:bg-green-600 text-white transition-colors">
          เพิ่มลงตะกร้า
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PetCard;