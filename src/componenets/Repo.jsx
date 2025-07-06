import {useState,useEffect} from 'react'
import '../styles/Repo.css'
import shareimg from '../assets/share.png'
import {fetchuserrepos} from '../api/index.js'
import {Link} from 'react-router-dom'


import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const Repo = ({username}) => {
    const [repodata, setrepodata] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
            setLoading(true)
            
            fetchuserrepos(username).then((data)=>{
                setrepodata(data);
                
            }).catch((e)=>{
                console.log("Error",e)
            }).finally(()=>[
              setLoading(false)
            ])
        
   
    }, [username])
    
  return (
    <>

    <div className="containercard">
            {
                loading ? <Box sx={{ display: 'flex' ,justifyContent:'center',alignItems:'center',alignContent:'center',margin:'auto',marginTop:'200px'}}>
                        <CircularProgress size="100px"/>
                        </Box>
                :

                repodata&& repodata.map((e,i)=>(

                    
                    <div className="rcard" style={{width:'45%'}} key={i}>
            <div className="lrepo">
                <h1>
                   {e.name}
                </h1>
                <p>{e.description===null? "No descrption " : e.description}</p>

            </div>
            <div className="rrepo">
                <Link to={e.html_url} target="_blank"><img src={shareimg} alt="shareimg" width={'20px'} height={'20px'}/></Link>
                <p>&#9734; {e.stargazers_count} stars</p>
            </div>
                                
                    
            </div>
        
    ))
        }
        

        
    </div>
    
    </>
  )
}

export default Repo