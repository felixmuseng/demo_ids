import { Outlet, NavLink } from 'react-router-dom'
import Box from '@mui/material/Box'

const Navbar = () => {
  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    '&.active': {
      fontWeight: 'bold',
    },
  };
  return (
    <div>
      <Box sx={{display: 'flex', p:2, bgcolor:"primary.main"}} >
        <Box sx={{mr:2}}>
          <NavLink to="/" style={navLinkStyle}>Home</NavLink>
        </Box>
        <Box>
          <NavLink to="/add" style={navLinkStyle}>Add</NavLink>
        </Box>
      </Box>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Navbar