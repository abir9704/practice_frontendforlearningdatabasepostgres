"use client";
import React, { useEffect, useState } from 'react';

const Singleuser = () => {

    const [opt,setOption] = useState([]);

    useEffect(()=>{

        fetch('http://localhost:8000/userlist')
        .then(res=>res.json())
        .then(data=>setOption(data))

    },[])

    const handlesubmit=(e)=>{
      e.preventDefault();
      const username= e.target.username.value;
      console.log(username);
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

      
        </div>
    );
};

export default Singleuser;