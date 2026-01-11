import React from "react";

function ProductCard() {
  return (
    <div className="w-full bg-white/10 backdrop-blur-xl shadow-lg rounded-lg p-1 sm:p-5 border border-white/10">
      {/* Heading */}
      <h2 className="text-xs sm:text-xl font-bold mb-1 sm:mb-3 text-white">Products</h2>

      {/* 4 Equal Boxes */}
      <div className="grid grid-cols-2 gap-1 sm:gap-3 mb-1 sm:mb-3">
        <div className="bg-yellow-400 h-6 sm:h-20 flex items-center justify-center rounded text-white font-semibold text-xs sm:text-base">
          1
        </div>
        <div className="bg-blue-500 h-6 sm:h-20 flex items-center justify-center rounded text-white font-semibold text-xs sm:text-base">
          2
        </div>
        <div className="bg-green-500 h-6 sm:h-20 flex items-center justify-center rounded text-white font-semibold text-xs sm:text-base">
          3
        </div>
        <div className="bg-red-500 h-6 sm:h-20 flex items-center justify-center rounded text-white font-semibold text-xs sm:text-base">
          4
        </div>
      </div>

      {/* Paragraph */}
      <p className="text-blue-300 text-xs sm:text-base">
        see more...
      </p>
    </div>
  );
}

export default ProductCard;
