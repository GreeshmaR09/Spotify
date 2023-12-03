import React from 'react'
import { Link } from 'react-router-dom'

function Navinplay() {
  return (
    <div class="side-box">
    <ul>
        <strong>

        <li className="logo-name">
            <img src="home.png " alt="home" className="icon"/>
            <span>
             <Link to='/backtomain' className='link-btn' >Home</Link>
            </span>


        </li>
        <li className="logo-name">
            <img src="search.png " alt="home" className="icon"/>
            <span ><Link to='/search-btn-after' className='lightgrey-clr' > Search</Link></span>
        </li>
        </strong>
    </ul>
</div>
  )
}

export default Navinplay