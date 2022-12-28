import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Footer = () => {
    const Container = styled.div`
    flex:1;
    display: flex;
    ${mobile({flexDirection:"column"})}
    `
    const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    `
    const Logo = styled.h1``
    const Desc = styled.p`
    margin: 20px 0px;
    `
    const SocialContainer = styled.div`
    display: flex;;
    `
    const SocialIcon = styled.h1`
    
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

    `

    const Center = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({display:"none"})}
    `

    const Title = styled.h3`
    margin-bottom: 30px;
    `
    const List = styled.ul`
    margin:0px;
    padding: 0px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    `
    const ListItem = styled.li`
    width: 50%;

    `

    const Right = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({backgroundColor:"lightgray"})}
    `

    const ContactItem = styled.div`
    margin-bottom: 20px;
   display: flex;
   align-items: center; 
    `
    const Payment = styled.img``
  return (
    <Container>
        <Left>
            <Logo>Onarman</Logo>
            <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, vel reiciendis doloremque cum aspernatur rerum doloribus repudiandae nisi porro inventore iusto perferendis, eaque corporis odit?

            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Instagram/>
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
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wish List</ListItem>
                <ListItem>Term</ListItem>
                <ListItem>Info</ListItem>
                
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>
                622 Dixie PAth, South Tobinchester 98798
            </ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>
                +1 987 65 43
            </ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/>
                onarman@hotmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer