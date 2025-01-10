import React from 'react';
function Edit_Product() {

    
    return ( 
       <div className="container">
         <div className="row offset-2  p-5">
            <h1 className='fs-2 mb-4' style={{fontWeight:"bolder"}}><i>"Revamp Your Product: Elevate Your Style Today!"</i></h1>
           <form>
           <div class="mb-3 col-7">
               <label htmlFor="title" class="form-label"><strong>Title:</strong></label>
               <input type="text" class="form-control" name='title'/>
            </div>

            <div class="mb-3 col-7">
               <label htmlFor="description" class="form-label"><strong>Description:</strong></label>
               <input type="text" class="form-control" name='description'/>
            </div>

            <div class="mb-3 col-7">
               <label htmlFor="image" class="form-label"><strong>Image Link:</strong></label>
               <input type="file" class="form-control" name='image'/>
            </div>
           

          <div className="row ">
            <div class="mb-3 col-4">
               <label htmlFor="price" class="form-label"><strong>Price:</strong></label>
               <input type="Number" class="form-control" name='price'/>
            </div>
            

           
            <div class="mb-3 col-4">
               <label htmlFor="price" class="form-label"><strong>Quantity:</strong></label>
               <input type="Number" class="form-control" name='price'/>
            </div>

           

            </div>  

            <div className="row ">
            <div class="mb-3 col-4">
               <label htmlFor="category" class="form-label"><strong>Category:</strong></label>
               <input type="text" class="form-control" name='category'/>
            </div>
            

           
            <div class="mb-3 col-4">
               <label htmlFor="subCategory" class="form-label"><strong>SubCategory:</strong></label>
               <input type="text" class="form-control" name='subCategory'/>
            </div>
            </div>  

            <div className="col-8 mt-4">
              <label htmlFor="bestSeller" className="form-label"><strong>BestSeller:</strong></label>
             <input type="text" name="bestSeller" className="form-control" placeholder="BestSeller"  />
            {/* //  value={bestSeller} onChange={(e)=> setBestSeller(e.target.value)} /> */}
            </div>

               <br></br><br></br>
            <button className='btn btn-dark' type='submit'>Submit</button>

           </form>

            </div>
            </div>
        )
}

export default Edit_Product;