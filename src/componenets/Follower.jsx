import {useState,useEffect} from 'react'
import '../styles/Follower.css'
import share from '../assets/share.png'
import {fetchfollower} from '../api/index.js'
import {Link} from 'react-router-dom'

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Follower = ({url}) => {
  const [follwer, setfollwer] = useState(null);
    const [loading, setLoading] = useState(false);


  useEffect(() => {
      setLoading(true)

    fetchfollower(url).then((data)=>{
  
      setfollwer(data);
    }).catch((e)=>{
      console.group(e);

    }).finally(()=>{
      setLoading(false)
    })

  
   
  }, [url])
  

  return (
    <>
      <div className="followercontainer">
        {
          loading ? 
                        <Box sx={{ display: 'flex' ,justifyContent:'center',alignItems:'center',alignContent:'center',margin:'auto',marginTop:'200px'}}>
                        <CircularProgress size="100px"/>
                        </Box>
          :
          follwer && follwer.map((e,i)=>(
            <div className="rcard" style={{width:'30%'}} id="followcard" key={i}>
            <img src={e.avatar_url} alt="img" width={'43px'} height={'43px'} id="avatarimg"/>
            <h3>{e.login}</h3>
           <Link to={`/users/${e.login}`}> <img src={share} alt="share" width={'20px'} height={'20px'} id="share"/></Link>
          </div>
          ))
        }
          
      
      
      </div>
          
    </>
  )
}

export default Follower