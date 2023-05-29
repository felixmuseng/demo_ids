import { Outlet, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div>
        <NavLink to="/">Logo</NavLink>
          <NavLink to="/" >Home</NavLink>
          <NavLink to="/service">Services</NavLink>
          <NavLink>Offers</NavLink>
          <NavLink>About Us</NavLink>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Navbar