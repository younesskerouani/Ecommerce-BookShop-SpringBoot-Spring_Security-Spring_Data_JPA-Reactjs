import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import styled from 'styled-components';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import { mobile } from "../Responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { logout } from '../service/redx/userRedux';
import { NotificationsNone, Settings } from "@material-ui/icons";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    height: 50px;
    position: relative;
    ${mobile({ height: "40px", width: "30px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items:center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "15px" })}
`;

const MenuRight = styled.div`
display: flex;
`;

const Setting = styled.div`
  position:absolute;
  top: 45px;
  right: 0;
  background-color: white;
  color: black;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  padding: 5px;
  border: 1px solid ;
  border-color: teal;
  border-radius: 6px;
`;

const SettingMenu = styled.div`
padding: 5px;
font-size: 14px;
`;

const Navbar = () => {
  let navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);
  const quantity = useSelector(state => state.cart.quantity);
  const [open, setOpen] = useState(false);

  console.log(quantity);

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    dispatch(logout());
    navigate("/");

  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center><Link to="/" className='link'><Logo>BookShop</Logo></Link></Center>

        <Right>

          {user ?
            <>
              <MenuItem onClick={() => setOpen(!open)}><Settings /></MenuItem>

            </> :

            <><Link to="/register" className="link"><MenuItem >Register</MenuItem></Link>
              <Link to="/login" className="link"> <MenuItem>Sign In</MenuItem></Link></>
          }


          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>

          </Link>

        </Right>

      </Wrapper>
      {
        open &&
        <Setting>
          <Link to="/sellerOverview" className="link"><SettingMenu>MyOverview</SettingMenu></Link>
          <Link className="link" onClick={handleLogout} ><SettingMenu>Logout </SettingMenu></Link>
        </Setting>

      }
    </Container>

  )
}

export default Navbar;
