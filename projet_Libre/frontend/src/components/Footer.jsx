import { Email, Facebook, Instagram, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import { mobile } from "../Responsive";


const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    ${mobile({ Alignitems: "center",justifyContent: "center" })}
`;

const Logo = styled.h1``;

const Desc = styled.p`
 margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`;

const Title = styled.h3`
   margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;


const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "lightgray"})}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 40%;
    height: 15%;
`;

const Footer = () => {
  return (
    <Container>
      
      <Left>
            <Logo>BookShop </Logo>
            <Desc>there are many variations .</Desc>
            <SocialContainer>
                <SocialIcon color="385999">
                        <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                        <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                        <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                        <Pinterest/>
                </SocialIcon>
            </SocialContainer>
      </Left>
      <Center>
            <Title>Useful Links</Title>
            <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Business & Money</ListItem>
                    <ListItem>Education & Teaching</ListItem>
                    <ListItem>Science & Math</ListItem>
                    <ListItem>Health, Fitness & Dieting</ListItem>
                    <ListItem>Engineering & Transportation</ListItem>
                    <ListItem>Medical Books</ListItem>
                    <ListItem>Humor & Entertainment</ListItem>
                    <ListItem>Law</ListItem>
                    <ListItem>History</ListItem>

            </List>
      </Center>
      <Right>
            <Title>Contact</Title>
            <ContactItem> 
                <Room style={{marginRight:"10px"}}/>
            622 rue Riad, Casablanca, Morocco 
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/>
                +212 678901012
                </ContactItem>
                <ContactItem>
                    <Email style={{marginRight:"10px"}}/>
                contact@eBooks.com
                </ContactItem>
               <Payment src="https://fliesenbonn.de/media/03/87/2a/1656329773/card.png"/> 
      </Right>
    </Container>
  )
}

export default Footer;
