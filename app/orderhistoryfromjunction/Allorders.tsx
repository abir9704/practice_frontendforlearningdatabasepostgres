"use client";
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Allorders = () => {
      const { data, isPending, error } = useQuery({
    queryKey: ['order-history'],
    queryFn: async () => {
      const res = await fetch('http://localhost:8000/orderhistoryfromjunction')
      return res.json()
    },
  })

    if (isPending) return <span>Loading...</span>
  if (error) return <span>Oops!</span>
    return (
        <div className='grid grid-cols-1 gap-4 max-w-4xl mx-auto mt-10 mb-10'>

           {
            data?.map((singlepro,index)=>{
                return(
                    <div className='p-14 bg-gradient-to-r from-[#373B44] to-[#4286f4] text-white text-2xl font-bold text-center hover:scale-110 cursor-pointer transition-transform duration-300 rounded-xl hover:bg-gradient-to-r hover:transition-transform hover:duration-300  hover:from-[#EB5757] hover:to-[#000000]' key={index}>

                        <p>{singlepro.username} ordered {singlepro.product_name}</p>

                    </div>
                )
            })
           }
            
        </div>
    );
};

export default Allorders;