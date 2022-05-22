import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/sidebar';
import '../Team/Team.css';

function Clients() {

  const [memberInfo, setTeam] = useState([]);

  useEffect(() => {
    fetch("https://fakerapi.it/api/v1/companies?_quantity=8")
      .then(response => response.json())
      .then(data => setTeam(data.data));
  }, []);

  return (
    <div className='team-members'>
      <Sidebar />
      <div className="team-members-table">
        <p className='Team-text'>CLIENTS</p>

        <div className="team-members-table-main">
          <table>
            <thead>
              <tr>

                <th>COMPANY-NAME</th>
                <th>E-MAIL</th>
                <th>PHONE NO</th>
                <th>COUNTRY</th>
                {/* <th>IMAGE</th> */}

              </tr>

            </thead>

            <tbody>
              {memberInfo ? memberInfo.map((member, idx) => (
                <tr key={idx}>

                  <td>
                    <p>
                      <span> {member.name}</span>
                      <span> {member.lastname}</span>
                    </p>
                  </td>
                  <td>{member.email}</td>
                  <td>{member.phone}</td>
                  <td>{member.country}</td>
                  {/* <td>
                     <div className='imag'>
                       <img src={member.image} alt="image"/>
                     </div>
                   </td> */}
                </tr>
              )) : null}

            </tbody>


          </table>

        </div>
      </div>
    </div>
  );
}

export default Clients