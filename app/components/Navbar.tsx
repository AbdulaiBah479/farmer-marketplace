export default function Navbar() {
    return (
      <nav className="flex items-center justify-between bg-white px-10 py-5 shadow">
        <h1 className="text-2xl font-bold text-green-700">
          Farmer Marketplace
        </h1>
  
        <div className="flex gap-6">
          <a href="#" className="hover:text-green-700">
            Home
          </a>
  
          <a href="#" className="hover:text-green-700">
            Products
          </a>
  
          <a href="#" className="hover:text-green-700">
            Farmers
          </a>
  
          <a href="#" className="hover:text-green-700">
            Contact
          </a>
        </div>
      </nav>
    );
  }