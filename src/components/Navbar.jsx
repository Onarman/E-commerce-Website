import React from 'react'
import styled from "styled-components"
import {Search, ShoppingCartOutlined} from "@material-ui/icons"
import { Badge } from '@material-ui/core'

const Container = styled.div`
    height:60px;
    /* background-color:pink; */
`
const Wrapper =styled.div`
    padding:10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    

`
    const Left = styled.div`
    flex:1;
    display:flex;
    align-items: center;
    `

    const Language = styled.span`
    font-size: 14;
    cursor: pointer;
    `

    const SearchContainer = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    `

    const Input = styled.input`
    border: none;
    `
    const Center = styled.div`
    flex:1;
    text-align:center;
    `

    const Logo= styled.h1`
    font-weight: bold;
    `
    const Right = styled.div`
    flex:1;
    display: flex;
    justify-content: flex-end;
    `
    
    const MenuItem = styled.div`
    font-size: 14px;
    margin-left: 25px;
    cursor: pointer;
    `

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color:"gray",fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>Onarman</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
     
    
  )
}

export default Navbar