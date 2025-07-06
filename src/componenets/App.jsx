
import '../styles/App.css';
import MainBody from './MainBody';
import Navbar from './Navbar';
import TopUser from './TopUser';
import TopOrganization from './TopOrganization';
import TopRepos from './TopRepos';

import Users from './Users';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
      
         <Navbar/>
   
   <Routes>
      <Route path="/" element={ <MainBody/>}></Route>
      <Route path="/topuser" element={ <TopUser/>}></Route>
      <Route path="/toprepos" element={ <TopRepos/>}></Route>
      <Route path="/toporganization" element={ <TopOrganization/>}></Route>
      {/* <Route path="/conact" element={ <Contact/>}></Route> */}
      <Route path="/users/:id" element={<Users/>}></Route>
       
   
   </Routes>
    </>
  );
}

export default App;
