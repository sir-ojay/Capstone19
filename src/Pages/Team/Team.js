import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar/sidebar'
import './Team.css'



const Team = () => {

  const[memberInfo , setTeam]  = useState([])

useEffect(() => {
     fetch("https://fakerapi.it/api/v1/persons?_quantity=10")
     .then(response => response.json())
     .then(data => setTeam(data.data))
}, [])



  return (
    <div className='team-members'>
      <Sidebar/>
      <div className="team-members-table">
      <p className='Team-text'>TEAM MEMBERS</p>
        
       <div className="team-members-table-main">
       <table>
         <thead>
           <tr>
             
             <th>FULL-NAME</th>
             <th>E-MAIL</th>
             <th>PHONE NO</th>
             <th>GENDER</th>
             {/* <th>IMAGE</th> */}
            
           </tr>
           
         </thead>
          
         
         <tbody>
           {
             memberInfo? memberInfo.map((member, idx) =>(
              <tr key={idx}>
            
              <td>
               <p>
                 <span> {member.firstname}</span>
                  <span> {member.lastname}</span>
                 </p>
              </td>
              <td>{member.email}</td>
              <td>{member.phone}</td>
              <td>{member.gender}</td>
               {/* <td>
                <div className='imag'>
                  <img src={member.image} alt="image"/>
                </div>
              </td> */}
            </tr>
             )) : null
           }
          
         </tbody>
         

       </table>

       </div>
      </div>
  </div>
  )



}

export default Team;