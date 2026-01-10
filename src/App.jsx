import React from "react";
import SearchBar from "./SearchBar";
import Slider from "./Slider";
import ProductCard from "./ProductCards";

function App() {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
      <header className="
        w-full
        bg-[#2D3C59]
        px-9
        py-6
        flex
        flex-col
        gap-2
        sm:flex-row
        sm:items-center
      ">
        
        {/* Logo */}
        <h1 className="text-xl sm:text-3xl text-white font-bold">
          AMAZON.com
        </h1>

        {/* Location */}
        <div className="text-white sm:ml-6">
          <p className="text-base text-white/80 mb-1 pb-0 leading-none">Deliver to Rahul</p>
          <p className="text-lg font-bold mt-0 pt-0 leading-none">Raipur-492001</p>
        </div>

        {/* Search */}
        <div className="sm:ml-4">
          <SearchBar />
        </div>

        <h2 className="sm:ml-2 text-base text-white font-bold">🇮🇳 EN ▼</h2>
        <div className="text-white sm:ml-6">
          <p className="text-base text-white/80 mb-1 pb-0 leading-none">Hello, Rahul</p>
          <p className="text-lg font-bold mt-0 pt-0 leading-none">Account & lists</p>
        </div>
        <div className="text-white sm:ml-6">
          <p className="text-base text-white/80 mb-1 pb-0 leading-none">Returns</p>
          <p className="text-lg font-bold mt-0 pt-0 leading-none">& Orders</p>
        </div>
        <h2 className="sm:ml-2 text-white font-bold text-2xl">CART</h2>
      </header>
      <div className="relative">
        <Slider />
        <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="flex flex-row gap-19 px-18 justify-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        </div>
      </div>
      <div className="flex flex-row gap-19 px-150 py-8 bg-black">
        <ProductCard />
        <ProductCard />
      </div>
      <div className="flex flex-row gap-19 px-18 py-1 bg-black">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default App;