import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dictionary from './dictionary';
import Ramayana from './ramayana';
import Links from './link';
import Mockingbird from './Mockingbird';
import Invisible from './invisibleman'; 
import Anaa from './annakarenina';
import Lord from './lordofthefiles';
export default function App(){
    return(
        <BrowserRouter>
            
            <Routes>
                <Route path='/' element={<Links/>}></Route>
                <Route path='/ramayana' element={<Ramayana/>}></Route>
                <Route path='/dictionary' element={<Dictionary/>}></Route>
                <Route path='/Mockingbird' element={<Mockingbird/>}></Route>
                <Route path='/invisibleman' element={<Invisible/>}></Route>
                <Route path='/annakarenina' element={<Anaa/>}></Route>
                <Route path='/lordofthefiles' element={<Lord/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
