import React from "react";

function ProductCard() {
  return (
    <div className="w-full bg-white/10 backdrop-blur-xl shadow-lg rounded-lg p-6 border border-white/10">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-4 text-white">Products</h2>

      {/* 4 Equal Boxes */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-yellow-400 h-24 flex items-center justify-center rounded-md text-white font-semibold">
          Product 1
        </div>
        <div className="bg-blue-500 h-24 flex items-center justify-center rounded-md text-white font-semibold">
          Product 2
        </div>
        <div className="bg-green-500 h-24 flex items-center justify-center rounded-md text-white font-semibold">
          Product 3
        </div>
        <div className="bg-red-500 h-24 flex items-center justify-center rounded-md text-white font-semibold">
          Product 4
        </div>
      </div>

      {/* Paragraph */}
      <p className="text-blue-300 text-lg">
        see more...
      </p>
    </div>
  );
}

export default ProductCard;
