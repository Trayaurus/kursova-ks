import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import HorizontalCheckV2 from './pages/horizontal-v2/Horizontal-v2';
import VerticalCheck from './pages/vertical-check/VerticalCheck';
import Noise from './pages/noise/Noise';
import Cycle from './pages/decode/Cycle';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/home" element={<Main />} />
                <Route path="horizontal-check" element={<HorizontalCheckV2 />} />
                <Route path="vertical-check" element={<VerticalCheck />} />
                <Route path="noise" element={<Noise />} />
                <Route path="decode" element={<Cycle />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
