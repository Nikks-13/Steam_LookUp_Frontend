import styled from 'styled-components'

export const Div = styled.div`
min-height:67vh;
margin :20px;

`
export const Container = styled.div`
margin :20px;



`
export const H4 = styled.h4`
color:white;
text-align:center;
padding-top:60px;

@media only screen and (max-width: 700px){
  padding-top:5px;
  margin:5px;
  font-size:15px;
  
}
`
export const InputDiv = styled.div`
text-align:center;

`
export const Lable= styled.label`
display :block;
color: white;
font-family: 'Chakra Petch', sans-serif;
padding:20px 0px;
font-size:32px;
@media only screen and (max-width: 700px){
  font-size:28px;
  padding:10px 0px;

}
`
export const InputBox = styled.input`
color:black;
text-align:center;
font-size:28px;
padding:0 10px;
  border:2px solid #66c0f4;
  border-radius: 15px;
  @media only screen and (max-width: 700px){
    font-size:22px;
  }
  
  
`

export const Button = styled.button`
display: block;
    margin: auto;
    margin-top: 25px;
    font-family: 'Chakra Petch', sans-serif;
    font-weight: 300;
    font-size: 30px;
    padding:2px 20px;
    border-radius: 4px;
    border:2px;
    color:#ffffff;
    background-color:#66c0f4;
    &:hover {
      background-color: #2a475e;
      color: 
    }
    @media only screen and (max-width: 700px){
      font-size:28px;
    }
`
export const OutputDiv = styled.div`
background-color:#171a21;
min-height:200px;
border:2px solid #66c0f4;
border-radius:20px;
display :flex;
justify-content:space-evenly;
max-width:670px;
min-width:620px;
margin:auto;
margin-top:40px;
box-shadow: 0 0 5px 5px rgba(52, 152, 219, 0.4);

@media only screen and (max-width: 700px){
margin-bottom:60px;
flex-direction:column;
max-width:300px;
min-width:180px;
}

`
export const ImgDiv = styled.div`
display: grid;

    align-content: space-evenly;
    padding: 10px;
    font-size: 20px;
    @media only screen and (max-width: 700px){
      padding: 1px;
    }
`
export const Img = styled.img`
height:200px;
width:200px;
padding:20px;
border-radius:30px;

@media only screen and (max-width: 700px){
  margin:auto;
  margin-top: 20px;
  margin-bottom:1px;
}

`
export const InfoDiv = styled.div`
padding :20px;
align-content: space-evenly;
@media only screen and (max-width: 700px){
  padding :5px;
  align-content: space-evenly;
   margin:auto;
}


`
export const P = styled.p`
color:#66c0f4;
font-weight:500;
font-size:16px;

@media only screen and (max-width: 700px){
  text-align:center;
}

`
export const Span = styled.span`

color:#c7d5e0;
@media only screen and (max-width: 700px){
 display:block; 
}
`


export const ErrorP = styled.p`
color:red;
font-family: 'Chakra Petch', sans-serif;
font-size:30px;
font-weight:900;
@media only screen and (max-width: 700px){
  font-size:20px;
}

`

export const ErrorDiv = styled.div`
text-align:center;



`


