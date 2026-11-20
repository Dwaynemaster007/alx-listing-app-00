import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md px-4 py-3 flex flex-wrap gap-3 justify-between items-center">
      <Link href="/" className="text-xl font-bold">LuxStay</Link>
      <input
        type="text"
        placeholder="Search..."
        className="border rounded-md px-3 py-1 w-full sm:w-1/2"
      />
      <div className="space-x-4">
        <Link href="/booking" className="text-gray-700 hover:text-blue-600">Booking</Link>
        <button className="text-blue-600">Sign In</button>
        <button className="bg-blue-600 text-white px-4 py-1 rounded-md">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
