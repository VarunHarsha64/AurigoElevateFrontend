import React from 'react'

const products = [
    { name: "Stone", quantity: "1000 tons", basePrice: "$5000" },
    { name: "Clay", quantity: "500 tons", basePrice: "$3000" },
    { name: "Gravel", quantity: "2000 tons", basePrice: "$7000" },
    { name: "Asphalt", quantity: "800 tons", basePrice: "$6000" },
    { name: "Cement", quantity: "1500 tons", basePrice: "$4000" },
    { name: "Sand", quantity: "1200 tons", basePrice: "$3500" },
    { name: "Limestone", quantity: "600 tons", basePrice: "$4500" },
    { name: "Bricks", quantity: "900 tons", basePrice: "$5500" },
    { name: "Sandstone", quantity: "1500 tons", basePrice: "$4000" },
    { name: "Quick lime", quantity: "1200 tons", basePrice: "$3500" },
    { name: "Steel", quantity: "1100 tons", basePrice: "$4500" },
    { name: "Wood", quantity: "900 tons", basePrice: "$5500" },
    { name: "Steel", quantity: "900 tons", basePrice: "$5500" },
    { name: "Asphalt", quantity: "800 tons", basePrice: "$6000" },
    { name: "Cement", quantity: "1500 tons", basePrice: "$4000" },
    { name: "Sand", quantity: "1200 tons", basePrice: "$3500" },
    { name: "Limestone", quantity: "600 tons", basePrice: "$4500" },
    { name: "Bricks", quantity: "900 tons", basePrice: "$5500" },

    


  ];
  
  const Bid = () => {
    return (
      <div className="flex h-screen bg-gray-900 text-gray-100">
        {/* Sidebar */}
        <aside className="w-1/6 bg-gray-800 p-6 flex flex-col space-y-6">
          <h2 className="text-xl font-semibold text-gray-300 mb-4">Menu</h2>
          <button className="w-full py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition">Add Product</button>
          <button className="w-full py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition">Bid</button>
        </aside>
  
        {/* Main Content */}
        <main className="flex-1 bg-gray-200 p-8 overflow-y-auto">
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Product Marketplace</h1>
            <span className="text-red-500 font-bold">aurigo elevate</span>
          </header>
  
          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500"
              >
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mt-2">Quantity: <span className="font-medium">{product.quantity}</span></p>
                <p className="text-gray-600 mt-1">Base Price: <span className="font-medium">{product.basePrice}</span></p>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  };
  
  export default Bid;