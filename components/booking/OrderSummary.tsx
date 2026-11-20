import Image from "next/image";

export interface BookingDetails {
  propertyName: string;
  image: string;
  price: number; // per night
  bookingFee: number;
  totalNights: number;
  startDate: string;
}

const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({ bookingDetails }) => {
  const subtotal = bookingDetails.price * bookingDetails.totalNights;
  return (
    <div className="bg-white p-6 shadow-md rounded-lg h-fit">
      <h2 className="text-xl font-semibold">Review Order Details</h2>
      <div className="flex items-center mt-4">
        <div className="relative w-32 h-32 shrink-0 overflow-hidden rounded-md">
          <Image src={bookingDetails.image} alt={bookingDetails.propertyName} fill sizes="128px" className="object-cover" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
          <p className="text-sm text-gray-500">4.76 (345 reviews)</p>
          <p className="text-sm text-gray-500">
            {bookingDetails.startDate} • {bookingDetails.totalNights} Nights
          </p>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="mt-6">
        <div className="flex justify-between">
          <p>${bookingDetails.price.toLocaleString()} × {bookingDetails.totalNights} nights</p>
          <p>${subtotal.toLocaleString()}</p>
        </div>
        <div className="flex justify-between mt-2">
          <p>Booking Fee</p>
          <p>${bookingDetails.bookingFee}</p>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t font-semibold">
          <p>Grand Total</p>
          <p>${(subtotal + bookingDetails.bookingFee).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
