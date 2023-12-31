import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';


const Container=styled.div`
margin:0 10px;
margin-top:10px;`
const Div=styled.div`
text-align: center;
font-size: 50px;
font-family: "Exo 2";
font-weight: bolder;
padding: 20px;
color: white;
border-radius: 7px;
background-color: #171a21;
@media only screen and (max-width: 600px){
    font-size: 37px;}
`
const Span=styled.span`
color:#66c0f4;`
const Navbar = () => {
  return (<Container>
   <Div><FontAwesomeIcon icon={faMagnifyingGlass} /> <Span>Steam</Span>-LookUp</Div>
</Container>  )
}

export default Navbar