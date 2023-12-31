import React,{ useState } from 'react'
import {Span,Div,ImgDiv,Button,InputBox,InputDiv,Lable,OutputDiv,H4,Container,Img,InfoDiv,P,ErrorP,ErrorDiv } from './styledcomponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFingerprint} from '@fortawesome/free-solid-svg-icons';

const Body = () => {
  const [steamId, setSteamId] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSteamIdChange = (e) => {
    setSteamId(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://steam-api-rxno.onrender.com/api/getSteamUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ steamId }),
      });
      const data = await response.json();

      if (response.ok) {
        console.log('API Response:', data); 
        setUserData(data);
        setError(null);
      } else {
        setError(data.error || 'Unknown error');
        setUserData(null);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      setError('Error fetching user data. Please try again.');
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Div>
      
    <Container>
        <H4>Note : This site is not affiliated with Steam.</H4>
        <InputDiv>
        <Lable>Enter Steam-ID</Lable>
        
        <InputBox type= "text"  onChange={handleSteamIdChange} value={steamId} Placeholder ="76561198869191933 " ></InputBox>
      
        <Button type='button' onClick={handleSubmit} disabled={loading}>  {loading ? 'Loading...' : 'Search'}
        </Button>
     
        </InputDiv>
        {userData && (
        <OutputDiv>
          <ImgDiv>
          <Img className="avatar"
              src={userData.ProfileImage}
              alt="User Avatar" >
          </Img></ImgDiv>
          <InfoDiv>
          <P><FontAwesomeIcon icon={faFingerprint}/> User Name : <Span>{userData.Username}</Span></P>
          <P><FontAwesomeIcon icon={faFingerprint}/> Account ID : <Span>{userData.Account_ID}</Span></P>
          <P><FontAwesomeIcon icon={faFingerprint}/> Steam   ID : <Span>{userData.User}</Span></P>
          <P><FontAwesomeIcon icon={faFingerprint}/> Steam2  ID : <Span>{userData.Steam2_ID}</Span></P>
          <P><FontAwesomeIcon icon={faFingerprint}/> Steam3  ID : <Span>{userData.Steam3_ID}</Span></P>
          <P><FontAwesomeIcon icon={faFingerprint}/> FiveM-HEX : <Span>{userData.FiveM_Hex_id}</Span></P>
          </InfoDiv>
        </OutputDiv>)}
        {error && (
        <ErrorDiv>
          <ErrorP>{"Invalid Steam ID! Try Again"}</ErrorP>
        </ErrorDiv>
      )}
  
    </Container>
    </Div>
  );
};
export default Body;

