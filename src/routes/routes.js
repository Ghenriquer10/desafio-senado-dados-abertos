import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Header from '../components/Header';
import Home from '../Pages/Home';

const HandleRoutes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default HandleRoutes;