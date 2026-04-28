"use client";
import React, { useEffect, useState } from 'react';
import { Oswald } from 'next/font/google';


type Orders={
    username:string,
    product_name:string;
    price:number;
}

const oswald = Oswald({
  subsets: ['latin'],
  weight:'700',
})


const OrderHistory = () => {

    const [orders,setOrders]=useState<Orders[]>([]);

    useEffect(()=>{
        fetch("http://localhost:8000/orderhistory")
        .then(res=>res.json())
        .then(data=>setOrders(data))
    })
    return (
        <div className='max-w-8/12 mx-auto grid grid-cols-2 gap-10 mt-10 mb-10'>

        {
            orders?.map((singleproduct,index)=>{
                return(
                    <div className={`bg-gradient-to-r from-[#000000] to-[#0f9b0f] flex justify-center p-10 rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer ${oswald.className} text-[20px]`} key={index}>


                        <div className='text-center text-[#F7F7F7]'>

                        <p className='mb-2'>{singleproduct.product_name} is ordered by {singleproduct.username}</p>
                        <p>Price:{singleproduct.price}</p>

                        </div>

                        
                         


                    </div>
                )
            })
        }
            
        </div>
    );
};

export default OrderHistory;