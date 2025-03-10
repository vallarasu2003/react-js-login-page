
import './App.css';
import Sigin from './Loginpage/Sigin';
import { Routes, Route } from "react-router-dom"; // Import Routes & Route
import Login from './Loginpage/Login';
import { Provider } from "react-redux";
import { store } from '../src/Redux/Store'
function App() {
  return (
    <div>
  <Provider store={store}>
    <Routes>
      {/* Route for Signin Page */}
      <Route path="/" element={<Sigin />} />
      
      {/* Route for Login Page */}
      <Route path="/login" element={<Login />} />
    </Routes>
  </Provider>
  </div>
  );
}

export default App;
