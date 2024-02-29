
import './App.css';
import Invoice from './components/Invoice';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import View from './components/View';
import FrontPage from './components/FrontPage';

function App() {
  return (
    <>
    
    <div>
    
   <Router>
      <Routes>
      <Route path="/" element={<FrontPage/>}></Route>
          <Route path="/invoice" element={<Invoice/>}></Route>
          <Route path="/View" element={<View/>}></Route>
	    </Routes>
      </Router>
      </div>
    </>
  );
}

export default App;
