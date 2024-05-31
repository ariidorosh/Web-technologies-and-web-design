import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationForm from './pages/Register';
import LoginForm from './pages/Login';

const App = () => {
    return (
        <Router>
            <div className="App">
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/register" element={<RegistrationForm />} />
                        <Route path="/login" element={<LoginForm />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
