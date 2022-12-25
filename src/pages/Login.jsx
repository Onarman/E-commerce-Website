import React from 'react'
import styled from 'styled-components'

const Login = () => {
    const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:linear-gradient(
        rgba(255,255,255,0.3),
        rgba(255,255,255,0.3)
        ),
        url("https://img.freepik.com/free-photo/young-woman-yellow-leather-jacket-copy-space_23-2148674153.jpg?w=2000") ;
        background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center; 
    `
    const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    border-radius: 20px;
    `
    const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
    `
    const Form = styled.form`
    display: flex;
    flex-direction: column;
    `
    const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 10px 10px ;
    padding: 10px;
    border-radius: 10px;
    `

    const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    `
   

    const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    margin-left:10px;
    `
  return (
    <Container>
    <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="username" />
            <Input placeholder="password" />
            <Button>LOGIN</Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD</Link> 
            <Link>CREATE A NEW ACCOUNT</Link> 
        </Form>
    </Wrapper>
</Container>
  )
}

export default Login