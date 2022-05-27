import React from 'react'
import Orders from '../../components/Overview/Orders'
import Overview from '../../components/Overview/Overview'
import Sidebar from '../../components/Sidebar/sidebar'
import './Home.css'

const Home = () => {
  return (
    <div id='home'>
      <Sidebar/>
     <div className='home'>
       <div className='top'>
        <Overview/>
       </div>

        <div className='order'>
         <Orders/>
        </div>
      </div>
    
    </div>
  )
}

export default Home