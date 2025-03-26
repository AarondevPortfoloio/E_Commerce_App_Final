import { BrowserRouter as Router, Link, Routes, Route, useLocation } from 'react-router-dom';
import Signup from './signUp';
import Home from './Home';
import './App.css';
import Test from './test';
import Checkout from './Checkout';
import ChristmasTrees from './ChristmasTrees';
import ChristmasLights from './ChristmasLights';
import ChristmasDecorations from './ChristmasDecorations';
import Dashboard from './Dashboard';
import { CartProvider } from './Cartcontext';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  const location = useLocation(); // Get the current path

  return (
    <CartProvider>
      <div className="App">
        {/* Conditionally render the h1 only on the /login path */}
        {location.pathname === '/login' && <h1 id='frontHeader'>Aaron's Christmas Store</h1>}

        {location.pathname !== '/login' && (
        <>
            <Link to="/dashboard" id="frontTag">Home</Link>
            <Link to="/login">Account</Link>
        </>
    )}

        <Routes>
          <Route path="/login" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/christmas-trees" element={<ChristmasTrees />} />
          <Route path="/christmas-lights" element={<ChristmasLights />} />
          <Route path="/christmas-decorations" element={<ChristmasDecorations />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

// Wrap App with Router to provide useLocation
function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default WrappedApp;

////
 /*
<Link to="/dashboard" id="frontTag">Home</Link>
<Link to="/login">Account</Link>

*/