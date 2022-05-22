import React from 'react'

const Orders = () => {

   const orderInfo= [
       {dayy: "01 Jun 2020" , timee: "12:37 AM", firstname: "Lydia" , lastname: "Stone", status:"Completed", total:"$4,878"},
       {dayy: "02 Jun 2020" , timee: "11:37 PM", firstname: "Paul" , lastname: "Allen", status:"Completed", total:"$5,678"},
       {dayy: "02 Jun 2020" , timee: "10:37 AM", firstname: "Joyce" , lastname: "Stewards", status:"Completed", total:"$3,878"},
       {dayy: "02 Jun 2020" , timee: "10:37 PM", firstname: "Ken" , lastname: "Murray", status:"Completed", total:"$6,878"},
       {dayy: "04 Jun 2020" , timee: "11:37 PM", firstname: "Frank" , lastname: "Ellen", status:"Completed", total:"$4,878"}
   ]

  return (
    <div className='orderbox'>
        <div className='head'>
            <h3>Recent Orders</h3>
            <p>...</p>
        </div>

      
          <div className='topp'>
                 
             <p>Date</p>
             <p>Customer</p>
             <p>Status</p>
             <p>Total</p>
          </div>

         
         {
       orderInfo && orderInfo.map((order, idx) =>(
        <div className='bodyy' key={idx}>
     
       
        <p>
           <span> {order.dayy}</span>
            <span> {order.timee}</span>
           </p>
       
        
        <p>
           <span> {order.firstname}</span>
            <span> {order.lastname}</span>
           </p>
          
        <p>{order.status}</p>
        <p>{order.total}</p>
       
         </div>
        )
       )
    }
   
            

      


    </div>
  )
}

export default Orders