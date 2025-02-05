import React from 'react';
import { useNavigate } from 'react-router-dom';
function About() {
    const navigate = useNavigate();
    return (  
        //  <div className="container  " style={{backgroundColor :"#FFEDFA" }}>
           <div className="row ">
                <div className="col-12 text-center " style={{color:"purple" , height:"150px" ,backgroundColor :"#FFEDFA" , width:"100%"}}>
                    <h1 className='fs-2 mt-5'>Picky? Absolutely. Your style deserves the best  💖✨!</h1>
                </div>

                <div className="col-12 container">
                {/* <img src='../font-awesome/images/aboutimg.jpg' alt="ABOUT" style={{height:"700px" , width:"100%" , opacity:"0.7"}} className='object-fit-fill'></img> */}
                 <h1 style={{backgroundImage:"url('../font-awesome/images/aboutimg.jpg')" , width:"100%" , height:"900px" , alignContent:"center" , opacity:"0.7" , color:"#4B164C" }}
                   className='text-center object-fit-scale '> <span>Wear the vibe, own the moment 💖✨ </span>
                   <br></br>
                    <button className='btn btn-dark' onClick={()=>navigate("/bestSeller")} style={{borderRadius:"50%"}}>BEST-SELLER</button></h1>
                   {/* <button className='btn btn-dark'>BEST-SELLER</button> */}
                
                </div>
            {/* </div> */}
         </div>
    );
}

export default About;