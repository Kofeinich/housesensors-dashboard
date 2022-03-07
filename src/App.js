import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './default_files/App.css';
import LogPage from "./head_components/LogPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LogPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
