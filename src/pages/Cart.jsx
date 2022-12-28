import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from"../components/Announcment"
import Footer from "../components/Footer"
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../responsive'

const Cart = () => {
    const Container = styled.div``
    const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding:"10px"})}
    `
    const Title = styled.h1`
    font-weight: 400;
    text-align: center;
    `
    const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    `
    
    const TopButton = styled.button`
    padding: 10px;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid darkgray;
    border: ${props=>props.type === "filled" &&  "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" &&  "white"};
    `
    const TopTexts = styled.div`
    ${mobile({display:"none"})}`
    const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
    `

const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection:"column"})}
`
const Info = styled.div`
flex: 3;
`


const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection:"column"})}

`
const ProductDetail = styled.div`
flex:2;
display: flex;
`
const Image = styled.img`
width: 200px;

`
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
`
const ProductSize = styled.span``
const PriceDetail = styled.span`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${mobile({margin:"10px 15px"})}

`


const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
${mobile({marginBottom:"20px"})}

`

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
padding: 20px;
border-radius: 10px;
height: 50vh;
`
const SummaryTitle = styled.h1`
font-weight: 400;
`
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const SummaryButton = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
border-radius: 10px;
cursor: pointer;
`




  return (
    <Container>
        <Navbar/>
        <Announcement />
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist</TopText>
                </TopTexts>
                <TopButton type='filled'>CHECKOUT NOW</TopButton>
                
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80"/>
                            <Details>
                                <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                                <ProductId><b>ID:</b>9856464624464226</ProductId>
                                <ProductColor color="red"/>
                                <ProductSize><b>Size:</b>36</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add style={{cursor:"pointer"}}/>
                                <ProductAmount>2</ProductAmount>
                                <Remove style={{cursor:"pointer"}} />
                            </ProductAmountContainer>
                            <ProductPrice>$30</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw6ggg0ijDpEs7waWkRSlUdlAhmkcU5vJKiQ&usqp=CAU"/>
                            <Details>
                                <ProductName><b>Product:</b> MARRY JUMPER </ProductName>
                                <ProductId><b>ID:</b>9856464624484448</ProductId>
                                <ProductColor color="gray"/>
                                <ProductSize><b>Size:</b>M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add style={{cursor:"pointer"}} />
                                <ProductAmount>2</ProductAmount>
                                <Remove style={{cursor:"pointer"}} />
                            </ProductAmountContainer>
                            <ProductPrice>$10</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>SUBTOTAL</SummaryItemText>
                        <SummaryItemPrice>$3 0</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>$ 30</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryButton>CHECKOUT NOW</SummaryButton>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart