import './App.css';
import Body from './components/body';
import Footer from './components/footer';
import Navbar from './components/navbar';
import styled from 'styled-components';
const Container=styled.div`
`

function App() {
  return (
    <Container>
      <Navbar/>
      <Body/>
      <Footer/>
    </Container>
  );
}

export default App;
