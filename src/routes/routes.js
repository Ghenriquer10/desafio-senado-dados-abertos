import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Header from '../components/Header';
import Home from '../Pages/Home';
import SenatorDetail from '../Pages/SenatorDetail';

const HandleRoutes = ({toggleTheme}) => {
    return(
        <BrowserRouter>
            <Header 
                toggleTheme={toggleTheme}
            />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='senator/:id' element={<SenatorDetail/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default HandleRoutes;