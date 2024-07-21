import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Prefooter from './Components/PreFooter';
import Livarae from './Components/Livrare';

function App() {
  return (
    <div className="App">
      <Livarae/>
      <Prefooter/>
      <Footer/>
    </div>
  );
}

export default App;
