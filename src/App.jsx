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
        px-7
        py-5
        flex
        flex-col
        gap-2
        sm:flex-row
        sm:items-center
      ">
        
        {/* Logo */}
        <h1 className="text-lg sm:text-2xl text-white font-bold">
          AMAZON.com
        </h1>

        {/* Location */}
        <div className="text-white sm:ml-5">
          <p className="text-sm text-white/80 mb-1 pb-0 leading-none">Deliver to Rahul</p>
          <p className="text-base font-bold mt-0 pt-0 leading-none">Raipur-492001</p>
        </div>

        {/* Search */}
        <div className="sm:ml-3">
          <SearchBar />
        </div>

        <h2 className="sm:ml-2 text-sm text-white font-bold">🇮🇳 EN ▼</h2>
        <div className="text-white sm:ml-5">
          <p className="text-sm text-white/80 mb-1 pb-0 leading-none">Hello, Rahul</p>
          <p className="text-base font-bold mt-0 pt-0 leading-none">Account & lists</p>
        </div>
        <div className="text-white sm:ml-5">
          <p className="text-sm text-white/80 mb-1 pb-0 leading-none">Returns</p>
          <p className="text-base font-bold mt-0 pt-0 leading-none">& Orders</p>
        </div>
        <h2 className="sm:ml-2 text-white font-bold text-xl">CART</h2>
      </header>
      <div className="relative">
        <Slider />
        <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="flex flex-row gap-15 px-14 justify-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        </div>
      </div>
      <div className="flex flex-row gap-15 px-120 py-6 pb-0 bg-black">
        <ProductCard />
        <ProductCard />
      </div>
      <div className="bg-gradient-to-b from-black via-[#1f2a3f] to-[#2D3C59] pt-8 pb-8">
      <div className="flex flex-row gap-15 px-14 py-1">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="text-center text-white h-100 flex justify-center gap-20 px-40 py-12">
        <div className="text-white sm:ml-5">
          <p className="text-base font-bold mb-2 text-left">Get to Know Us</p>
          <p className="text-sm text-white/80 mb-1 pb-0 leading-none text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe possimus, ipsam, explicabo similique iure sunt consectetur optio perspiciatis sed impedit doloremque corrupti animi aliquid ipsa molestias. Iure eveniet deleniti consequuntur numquam impedit cumque cum eum. Corrupti voluptatibus cum mollitia voluptates fuga adipisci illo facilis sequi nisi nostrum libero vero labore fugit quos beatae quo, nihil dignissimos, praesentium, distinctio sapiente. Dolorem dicta non tempora totam commodi exercitationem quos autem soluta, obcaecati distinctio cupiditate quam natus ex aliquam quod quis odit asperiores rem facere cum alias odio. Assumenda possimus ut, modi totam sint, laudantium facilis minus, molestias eaque consectetur ex non sed!</p>
        </div>
        <div className="text-white sm:ml-5 text-left">
          <p className="text-base font-bold mb-2">Connect with Us</p>
          <p className="text-sm text-white/80 mb-1 pb-0 leading-none">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe possimus, ipsam, explicabo similique iure sunt consectetur optio perspiciatis sed impedit doloremque corrupti animi aliquid ipsa molestias. Iure eveniet deleniti consequuntur numquam impedit cumque cum eum. Corrupti voluptatibus cum mollitia voluptates fuga adipisci illo facilis sequi nisi nostrum libero vero labore fugit quos beatae quo, nihil dignissimos, praesentium, distinctio sapiente. Dolorem dicta non tempora totam commodi exercitationem quos autem soluta, obcaecati distinctio cupiditate quam natus ex aliquam quod quis odit asperiores rem facere cum alias odio. Assumenda possimus ut, modi totam sint, laudantium facilis minus, molestias eaque consectetur ex non sed!</p>
        </div>
        <div className="text-white sm:ml-5 text-left">
          <p className="text-base font-bold mb-2">Make Money with Us</p>
          <p className="text-sm text-white/80 mb-1 pb-0 leading-none">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe possimus, ipsam, explicabo similique iure sunt consectetur optio perspiciatis sed impedit doloremque corrupti animi aliquid ipsa molestias. Iure eveniet deleniti consequuntur numquam impedit cumque cum eum. Corrupti voluptatibus cum mollitia voluptates fuga adipisci illo facilis sequi nisi nostrum libero vero labore fugit quos beatae quo, nihil dignissimos, praesentium, distinctio sapiente. Dolorem dicta non tempora totam commodi exercitationem quos autem soluta, obcaecati distinctio cupiditate quam natus ex aliquam quod quis odit asperiores rem facere cum alias odio. Assumenda possimus ut, modi totam sint, laudantium facilis minus, molestias eaque consectetur ex non sed!</p>
        </div>
        <div className="text-white sm:ml-5 text-left">
          <p className="text-base font-bold mb-2">Let Us Help You</p>
          <p className="text-sm text-white/80 mb-1 pb-0 leading-none">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe possimus, ipsam, explicabo similique iure sunt consectetur optio perspiciatis sed impedit doloremque corrupti animi aliquid ipsa molestias. Iure eveniet deleniti consequuntur numquam impedit cumque cum eum. Corrupti voluptatibus cum mollitia voluptates fuga adipisci illo facilis sequi nisi nostrum libero vero labore fugit quos beatae quo, nihil dignissimos, praesentium, distinctio sapiente. Dolorem dicta non tempora totam commodi exercitationem quos autem soluta, obcaecati distinctio cupiditate quam natus ex aliquam quod quis odit asperiores rem facere cum alias odio. Assumenda possimus ut, modi totam sint, laudantium facilis minus, molestias eaque consectetur ex non sed!</p>
        </div>
      </div>
      </div>
      <hr className="border border-black/60 w-full " />
      <div className="flex justify-center gap-32 bg-[#2D3C59] text-white pt-6 mt-0 pb-6">
        <h2 className="text-2xl pt-2">AMAZON.com</h2>
        <div className="flex flex-row gap-3">
        <div className="border-2 border-black/30 rounded-lg px-5 py-3 flex items-center">
          <h3 className="m-0 leading-none text-white/70 font-bold text-sm">
            🌏 ENGLISH
          </h3>
        </div>
        <div className="border-2 border-black/30 rounded-lg px-5 py-3 flex items-center mr-0">
          <h3 className="m-0 leading-none text-white/70 font-bold text-sm">
            INDIA
          </h3>
        </div>
        </div>
      </div>
      <hr className="border border-black/60 w-full " />
      <div className="bg-[#2D3C59]">
        <p className="text-center text-white pb-5 pt-2 mt-0">© 2026, created by: Rahul Rao</p>
      </div>
    </div>
  );
}

export default App;
