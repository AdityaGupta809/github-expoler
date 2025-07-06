import {useState,useEffect,} from 'react'
import '../styles/Users.css'
import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom";
import shareicon from '../assets/icon.svg'
import overviewicon from '../assets/overview.svg'
import repoicon from '../assets/repo.svg'
import location from '../assets/location.svg'
import Repo from './Repo.jsx';
import OverView from './OverView.jsx';
import Follower from './Follower.jsx';
import Starred from './Starred.jsx';

import {fetchuser} from '../api/index.js'
const Users = () => {
    const params=useParams();
    const [currstate,setcurrstate]=useState("overview");
    const [useralldata, setuseralldata] = useState(null)

    useEffect(() => {
      
    fetchuser(params.id).then((data)=>{
     
        setuseralldata(data);
    }).catch((e)=>console.log(e));
   
      
    }, [params.id])
    

  return (
    <>

    <div className="userbox">

            <div className="bleft">

                <img src={useralldata && useralldata.avatar_url} alt="manimage" height={'250px'} width={'250px'}/>
=                   <h1>{useralldata && useralldata.name}</h1>
                        <p>Created at {useralldata && useralldata.created_at}</p>
                        <p style={{color:"#ffffff"}}>{useralldata && useralldata.bio}</p>
                       <Link target="_blank" to={useralldata && useralldata.html_url}> <button type="button"> <svg width="20" height="20" fill="none" stroke="currentColor" 
                                 viewBox="0 0 24 24">
                                <path d="M4 20l16-16" />
                                <polyline points="10 4 20 4 20 14" />
                            </svg>
                        </button></Link>
                    <div className="ro">
                    <img src={shareicon} alt="follower" width={'30px'} height={'30px'} />
                    <p>{useralldata && useralldata.followers} follower , {useralldata && useralldata.following} following</p>

                    </div>
                    <div className="ro">
                    <img src={location} alt="follower" width={'30px'} height={'30px'} />
                    <p>{useralldata && useralldata.location}</p>

                    </div>
                    <div className="ro">
                    <svg width="20" height="20" fill="#ffffff" stroke="#ffffff" 
                                 viewBox="0 0 24 24">
                                <path d="M4 20l16-16" fill="#ffffff" />
                                <polyline points="10 4 20 4 20 14"  fill="#ffffff"/>   </svg>
                                <p>{useralldata && useralldata.html_url}</p>

                    </div>
            </div>

            <div className="bright">
                <div className="btop">
                    <div className="flexrow" id="overview" >
                        <img src={overviewicon} alt="overview" />
                        <p style={currstate==="overview" ?{borderBottom:'2px solid #ffffff'} : {}}  onClick={()=>{setcurrstate('overview')}}>  Overview </p>
                    </div>
                    <div className="flexrow" id="repo">
                        <img src={repoicon} alt="repo" />
                        <p style={currstate==="repo" ?{borderBottom:'2px solid #ffffff'} : {}} onClick={()=>{setcurrstate('repo')}}> Repositories </p>
                    </div>
                    <div className="flexrow" id="followers">
                        <img src={shareicon} alt="followers" />
                        <p style={currstate==="followers" ?{borderBottom:'2px solid #ffffff'} : {}} onClick={()=>{setcurrstate('followers')}}> Followers </p>
                    </div>
                    <div className="flexrow" id="star">
                      <p>  &#9734; </p>
                        <p style={currstate==="star" ?{borderBottom:'2px solid #ffffff'} : {}}onClick={()=>{setcurrstate('star')}} > starred </p>
                    </div>

                </div>
                <div className="bbottom">

                    {currstate==="repo" ? <Repo username={params.id}/> : ""}
                    {currstate==="star" ? <Starred username={params.id}/> : ""}
                    {currstate==="followers" ? <Follower url={useralldata && useralldata.followers_url}/> : ""}
                    {currstate==="overview" ? <OverView url={useralldata && useralldata.avatar_url} noofrepos={useralldata && useralldata.public_repos} noofgists={useralldata && useralldata.public_gists} createddate={useralldata && useralldata.created_at.slice(0,10).split("-").reverse().join("-")} updateddate={useralldata && useralldata.updated_at.slice(0,10).split("-").reverse().join("-")} /> : "" } 
                </div>
            </div>

            


    </div>
    
    </>
  )
}

export default Users