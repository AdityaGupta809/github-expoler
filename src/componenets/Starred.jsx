import React ,{useState,useEffect} from 'react'
import '../styles/Star.css'
import share from '../assets/share.png'
import {Link} from 'react-router-dom'
import {fetchstarredrepo} from '../api/index.js'


import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const Starred = ({username}) => {
  const [starred, setstarred] = useState(null);
   const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    fetchstarredrepo(username).then((data)=>{
        setstarred(data);
       
    }).catch(e=> console.log(e)).finally(()=>{setLoading(false)})
  
  }, [username])
  
  console.log(username);
  return (
    <>
    <div className="starbox">

      {
        loading ?
                  <Box sx={{ display: 'flex' ,justifyContent:'center',alignItems:'center',alignContent:'center',margin:'auto',marginTop:'200px'}}>
                        <CircularProgress size="100px"/>
                        </Box>

        :
        starred&& starred.map((e,i)=>(
              <div className="rcard" style={{width:"30%"}} key={i}>
            <div className="starleft">
              <h1>{e.name}</h1>
              <div className="bottomleft">
              <h1>{e.owner.login}</h1>

              <img src={e.owner.avatar_url} alt="img" width={'40px'} height={'40px'} />
              </div>
            </div>

            <div className="starright">
               <Link to={e.owner.html_url} target="_blank"> <img src={share} alt="" /></Link>
                  <p style={{marginTop: '39px'}}>  &#9734; {e.stargazers_count}</p>
            </div>

          </div>

        ))
      }
     
    </div>
    
    </>
  )
}

export default Starred