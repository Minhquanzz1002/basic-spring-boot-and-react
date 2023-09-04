import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Home/>
        </div>
    );
}

export default App;
