import { useEffect,useState,useRef} from 'react'
import manimg from '../assets/manimg.png'; // Import your image
import "../styles/MainBody.css"; // Import your CSS file for styling
import Card from './Card.jsx';
import {fetchUserData} from '../api/index.js'; // Import the fetchUserData function
// import {Link} from 'react-router-dom'

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const MainBody = () => {

    const [loading, setloading] = useState(false)
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState({});
    const inputref = useRef(null);
    useEffect(() => {
      if (inputref.current) {
          inputref.current.focus();
        }
    
     
      
    }, [])
    
    useEffect(() => {
        if (username.length!==0) {
            
            setloading(true);
        }
        let timerId=setTimeout(() => {
               fetchUserData(username).then((data) => {
                setUserData((prevdata) => { return {...prevdata,...data} });
           
                }).catch((error) => {
                    console.error('Error fetching user data:', error);
                }).finally(()=>{
                    setloading(false);
                })

        },1000)
     
         return () => clearTimeout(timerId); // Cleanup the timer on unmount or when username changes

    }, [username]);
  return (
    <>
    <div className="container">
        <div className="left">

            <h5>Hi githubers,</h5>

            <div className="ex">

            <h1>Explore GitHub in Summarized way</h1>
            </div>
        </div>
        <div className="right">

            <img src={manimg} alt="logo" width={'720px'} height={'700px'}/>
        </div>

    </div>
        <div className="search-bar">
        <input type="search" ref={inputref} onChange={(e)=>setUsername(e.target.value)} name="search" id="search" placeholder='Enter username'  autoComplete='off' value={username}/>
        </div>


        {
            userData && userData.items && userData.items.length > 0 ?  <h3 style={{color:"#ffffff" ,margin:'70px',fontFamily: 'Fira Code'}}> Result for {username}</h3>: <h3 style={{color:"#ffffff",margin:'70px',fontFamily: 'Fira Code'}}> No Result Found </h3>

        }
  
        <div className="user-data">
            {
                    loading ?
                    <Box sx={{ display: 'flex' ,justifyContent:'center',alignItems:'center',alignContent:'center',margin:'auto',marginBottom:'40px'}}>
                        <CircularProgress size="80px"/>
                        </Box>

                    :
                 
                        userData.items && userData.items.map((e,i)=>(
                            
                            //  <div className="card" key={i}>
                            //         <div className="card-item" >
                            //                 <img  src={e.avatar_url} alt="user profile" width={'100px'} height={'100px'}/>
                            //                 <h2 className="text-xl font-bold mt-2">{e.login}</h2>
                            //                 <p className="text-gray-600">No bio</p>
                            //                 <p>Followers: </p>
                            //                 <p>Following: </p>
                                
                          
                            //       </div>
                            //  </div>
                         //  
                       <Card  key={i} name={e.login} />
                          
                        ))
                 
             
            }
           



            </div>
    </>
  )
}

export default MainBody