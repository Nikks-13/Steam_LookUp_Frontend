import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
margin:0 10px ;
margin-bottom:10px;`
const Div=styled.div`
background-color: #171a21;
padding: 20px;
text-align: center;
border-radius: 6px;`
const NameDiv=styled.div`
font-size: 20px;
    margin-bottom: 10px;
    color: white;
    font-family: 'Yatra One';
    @media only screen and (max-width: 600px){
      font-size:15px;
    
    }`
const CopyrightDiv=styled.div`
color: white;
font-family: 'Laila';
    font-size: 18px;
    margin-top: 10px;

    @media only screen and (max-width: 600px){
      font-size:13px;
    
    }    `
const NoteDiv=styled.div`
font-size: 16px;
margin-top: 10px;
color: white;
font-family: 'Laila';
@media only screen and (max-width: 600px){
  font-size:14px;

}`

const Span=styled.span`
color:red;`
const Footer = () => {
  return (
    <Container>
    <Div>
      <NameDiv > Made with  <Span >&hearts;</Span> BY Nixx </NameDiv>
      <CopyrightDiv >© 2023 Steam Lookup</CopyrightDiv>
      <NoteDiv >
        Steam Lookup is not affiliated, associated, authorized, endorsed by,or in anyway officially
        connected with Steam, or
        any of its subsidiaries or its affiliates.
      </NoteDiv>
    </Div>
  </Container>
  )
}

export default Footer