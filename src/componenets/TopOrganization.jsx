
import '../styles/TopOrganzation.css'
import line from '../assets/userline.png'
import shareicon from '../assets/share.png'

import { useEffect, useState } from 'react'
import {fetchtoporganization} from '../api/index.js'
import {Link} from 'react-router-dom'

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const TopOrganization = () => {
  const [toporgdata, settoporgrdata] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    fetchtoporganization().then(data=>{ settoporgrdata(data)}).catch(e=>console.log(e)).finally(()=>{setLoading(false)})
 
  }, [])
  
  return (
    <>

  <div className="topuserbox">
    <h1>Top <b style={{color:"green"}}>10</b> Users</h1>

    <div className="topusercontainer">
        <img src={line} alt="line" />
   
   
      <div className="topuserimgcont">
        {
          loading  ?  <Box sx={{ display: 'flex' ,justifyContent:'center',alignItems:'center',alignContent:'center',margin:'auto'}}>
              <CircularProgress size="100px"/>
             </Box>
          :

          toporgdata && toporgdata.items && toporgdata.items.map((e,i)=>(
               <div className="rcard" style={{width:'90%',justifyContent:"space-between"}} key={i}>
              <img src={e.avatar_url} alt="" width={'100px'} height={'100px'} id="topuserimage"/>
                <div className="leftcont">
                    <h1>{e.login}</h1>
                    <p>Score : {e.score}</p>
                </div>
                <div className="rightcont">
                    <Link to={`/users/${e.login}`}><img src={shareicon} alt="shareicon" width={'20px'} height={'20px'} /></Link>
                    <div className="bottomleft">
                      {/* <img src={repo} alt="repo" /> */}
                      {/* <p>47 repositories</p> */}
                    </div>
                </div>
            </div>

          ))
        }
         
       
    
      </div>
    </div>
  </div>

        
    </>
  )
}

export default TopOrganization