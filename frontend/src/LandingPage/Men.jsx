import React, { useEffect, useState } from 'react';
import EveryThing from './EveryThingDenim';
import axios from 'axios';
function Men() {
     
    const [ category , setCategory] = useState(null);
       useEffect( ()=>{
        const fetchCateg = async()=>{
            try{
          const res = await axios.get("http://localhost:4000/getWomCategory")
              
          if(res.data.success){
            alert("Category exist");
            setCategory("Women")
          }
          else{
            alert("Category doesn't exist");
            setCategory(null);
          }
        }catch(err){
            alert("Category doesn't exist");
            setCategory(null);
        }


        }
        fetchCateg();
       },[]) 
      
    return ( 
        <>
        {
           ( category === "Women")
         ?<EveryThing /> : <h1>No Men category found</h1>
        }
        </>
     );
}

export default Men;