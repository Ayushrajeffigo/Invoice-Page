
import './App.css';
import Invoice from './components/Invoice';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import View from './components/View';
function App() {
  return (
    <>
     <Router>
      <Routes>
          <Route path="/" element={<Invoice/>}></Route>
          <Route path="/View" element={<View/>}></Route>
	    </Routes>
      </Router>
      
    </>
  );
}

export default App;
