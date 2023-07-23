import React from 'react'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import "./Navbar.css"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom'; 
import { Button } from '@mui/material';


export default function Navbar() {
    const navbarStyle = {
        backgroundColor: 'white', 
        color:"black",
      };
      const toolbarStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      
      };
      const navigate = useNavigate();

      const handleCartClick = () => {
        navigate('/cart');
      };
      const handalToProductPage=() => {
        navigate('/');
      };
      
  return (
    <div>
      <AppBar style={navbarStyle}>
        <Toolbar style={toolbarStyle}>
          <Typography variant="h6">TeeRex Store</Typography>
          <div style={toolbarStyle}>
          <Button variant='contained' style={{marginRight:"20px"}} onClick={()=>handalToProductPage()}> Product</Button>
            <Typography>
              <ShoppingCartOutlinedIcon  onClick={()=>handleCartClick()} />
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
