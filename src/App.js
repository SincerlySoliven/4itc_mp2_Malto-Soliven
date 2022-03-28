import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import './App.css';

  // const background = new URL("../images/bg.jpg",import.meta.url)

function App() {
  return (
    <Router>
      <Routes>
        {/* <div>
          <img src={background}/>
        </div> */}
        <Route exact path = '/' element = {<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
