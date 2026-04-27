"use client";
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';


type Product={
    id:number;
    product_name:string;
    price:number;
}

const Order = () => {
    const {id}=useParams();
    const [product, setProduct] = useState<Product | null>(null);

    const orderproduct = (e) =>{
        e.preventDefault();

        console.log(id);

    }


    useEffect(() => {
  fetch(`http://localhost:8000/singleproduct/${id}`)
    .then((res) => res.json())
    .then((data) => setProduct(data));
}, [id]);
    return (
        <div className='flex flex-col gap-7 justify-center items-center min-h-screen text-3xl text-blue-700 font-extrabold'>
            
                
                   
                        <div className='text-center bg-amber-500 p-17'>

                            <p>{product?.product_name}</p>
                             <p>{product?.price}</p>


                        </div>

                        <div className=''>
                            <form onSubmit={orderproduct}>
                                <div className='flex flex-col'>

                                     <label className='text-center mb-2'>Username</label>
                                <input type='text' className='bg-amber-300 rounded-2xl pl-4'/>

                                </div>

                                <button className='rounded-xl bg-amber-900 hover:scale-110 transition-transform duration-200 text-white p-2 block mx-auto mt-3 text-2xl cursor-pointer hover-110' type='submit'>Order</button>
                               
                            </form>
                        </div>
                    
              
           
            
        </div>
    );
};

export default Order;