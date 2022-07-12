import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/mainPage/MainPage';

const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/Brand/:id' element={<>Brand Page</>} />
                <Route path='*' element={<>Not Found</>} />
            </Routes>    
        </BrowserRouter>
    );
}

export default PageRoutes;
