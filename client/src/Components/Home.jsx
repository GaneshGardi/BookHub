import React, { useEffect, useState } from "react";
import axios from 'axios'

function Home() {

  return (
    <div className="bg-sky-200 w-full h-screen flex flex-col md:flex-row items-center justify-center p-6">
      <div className="md:w-1/2 w-full order-2 md:order-1 text-center md:text-left">
        <h1 className="text-3xl font-bold">BookHub</h1>
        <h2 className="text-xl mt-4">Learn something <span className="text-pink-500">new everyday</span></h2>
        <p className="text-sm mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos possimus hic earum ipsa fuga reiciendis quidem maiores!</p>
      </div>
      <div className="md:w-1/2 w-full order-1 mt-12 md:mt-0 flex justify-center">
        <img className="w-64 h-64 md:w-80 md:h-80" src="./public/bookstore_front.png" alt="Bookstore Front"></img>
      </div>
    </div>
  );
}

export default Home;
