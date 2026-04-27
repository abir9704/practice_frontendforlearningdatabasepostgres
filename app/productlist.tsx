"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

// here i am using typescript. so i need to define state with proper type. actually i need to tell which kind of data will be stored in the state.

type Products={
    id:number;
    product_name:string;
    price:number;
}

const Productlist = () => {

    const [products,setProducts] = useState<Products[]>([]);

    useEffect(()=>{

        fetch('http://localhost:8000/productlist')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])
    return (
        <div className='grid grid-cols-4 gap-10 w-10/12 mt-20 mx-auto'>
            {

                products.map((singleproduct,index)=>{
                    return(
                        <Link href={`/singleproduct/${singleproduct.id}`} key={index}>

                             <div className='bg-green-600 hover:scale-110 transition-transform duration-200 text-white font-extrabold rounded-2xl text-center p-10 cursor-pointer ' >

                            <p>{singleproduct?.product_name}</p>
                            <p>{singleproduct?.price}</p>


                        </div>
                        </Link>
                      
                    )
                })

            }
            
        </div>
    );
};

export default Productlist;