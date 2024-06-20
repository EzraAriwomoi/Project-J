import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';


//Components
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Savingpage from './Pages/savingpage';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

//Pages
import Homepage from './Pages/homepage';
import Aboutus from './Pages/aboutus';
import Contact from './Pages/contact';
import Expense from './Pages/expense';
import Loans from './Pages/loans';
import Signup from './Pages/signup';
import Signin from './Pages/signin';
import SPForm from './Pages/SPForm';

function App() {
  return (
    <>
      <HelmetProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/expenses" element={<Expense />} />
            <Route path="/savings" element={<Savingpage />} />

            <Route path="/SPForm" element={<SPForm />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
          <ScrollToTop />
          <Footer />
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
