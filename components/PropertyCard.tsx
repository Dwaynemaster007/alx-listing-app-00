import Image from "next/image";
import { PropertyProps } from "@/interfaces";

const PropertyCard = ({ property }: { property: PropertyProps }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <div className="relative h-48 w-full">
        <Image src={property.image} alt={property.name} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{property.name}</h3>
        <p className="text-sm text-gray-500">{property.address.city}, {property.address.country}</p>
        <p className="text-yellow-500">⭐ {property.rating}</p>
        <p className="text-gray-800 font-bold mt-2">${property.price}/night</p>
      </div>
    </div>
  );
};

export default PropertyCard;
