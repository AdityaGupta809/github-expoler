import {useState,useEffect} from 'react'
import'../styles/Toprepos.css'
import imge from '../assets/line.png'; // Import your logo image
import src from '../assets/share.png'
import {fetchrepos} from '../api/index.js'
import {Link} from 'react-router-dom'

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const TopRepos = () => {

   const [repodata,setrepodata]=useState(null);
  const [loading, setLoading] = useState(false);


    useEffect(()=>{
        setLoading(true)
  fetchrepos().then((data) => {
                    setrepodata(data.items);
                   
                }).catch((error) => {
                    console.error('Error fetching user data:', error);
                }).finally(()=>{
                    setLoading(false);
                });

    },[])
  return (

    <>
    <main>

        <div className="upside">
            <h1>Top <b style={{color:'green'}}>10</b> Repositories</h1>
        </div>

        <div className="box">

        <section className="imageside">
        <img src={imge} alt="logo" width={'200px'} height={'700px'}/>
        </section>

        <section className="rightside">


            {   
                    loading  ?  <Box sx={{ display: 'flex' ,justifyContent:'center',alignItems:'center',alignContent:'center',margin:'200px'}}>
                        <CircularProgress size="100px"/>
                        </Box>
                    :
                    repodata && repodata.map((e,i)=>(
                        <div className="rcard" key={e.id}>

                                <div className="repocard" >
                                    <div className="starscard">
                                        <h1 style={{color:"#5565E8"}}>{e.owner.login}</h1>
                                        <p>&#9734; {e.stargazers_count} stars</p>
                                    </div>
                                    <div className="noofrepcard">
                                            <span className="lang" >
                                            {e.language===null ? "None" :e.language}
                                            </span>
                                            <span className="repos">👁️ {e.watchers_count} views</span>
                                    </div>

                                </div>
                                <Link  to={`/users/${e.owner.login}`}>
                                    <div className="share">
                                        <img src={src} alt="share" />
                                        </div>
                                </Link>
                            </div>
                    ))
                 
            
                }
         

    


        </section>
        </div>
    </main>
    </>
  )
}

export default TopRepos