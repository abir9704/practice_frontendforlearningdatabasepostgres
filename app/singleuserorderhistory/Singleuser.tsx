"use client";
import React, { useEffect, useState } from 'react';

const Singleuser = () => {

    const [opt,setOption] = useState([]);

    const [orders,setOrders] = useState([]);

    useEffect(()=>{

        fetch('http://localhost:8000/userlist')
        .then(res=>res.json())
        .then(data=>setOption(data))

    },[])

    const handlesubmit=(e)=>{
      e.preventDefault();
      const username= e.target.username.value;

      const d = new Date();
console.log(d);

    

       fetch(`http://localhost:8000/singleorderhistory/${username}`)
  .then(res => res.json())
  .then(data => setOrders(data));
      
    }
    return (
        <div className='mt-20 flex justify-center'>

     <form onSubmit={handlesubmit}>
        <select name="username">
            {
                opt.map((singleoption,index)=>{
                    return(
                        

                             <option value={singleoption.username} key={index}>{singleoption.username}</option>

                       
                       
                    )
                })
            }
        </select>

        <input type="submit" value="Send Request" />
     </form>


     <div>
        {
            orders.map((singleorder,index)=>{
                return(
                    <div key={index}>

                        <p>
  {singleorder.username} ordered at{" "}
  {new Date(singleorder.created_at).toLocaleString()}
</p>

                    </div>
                )
            })
        }
     </div>

      
        </div>
    );
};

export default Singleuser;