import React from 'react'
import '../styles/Card.css'
import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
import {fetchuser} from '../api/index.js'

const Card = ({name}) => {
  const [userdata, setuserdata] = useState(null);

  useEffect(() => {
  
    fetchuser(name)
    .then(data=>{setuserdata(data); console.log(data)})
    .catch(e=>console.log(e))
    .finally(()=>{
  
    })
  }, [name])
  
  return (
    <>
    
          {/* <div className="card" >
                                    <div className="card-item" >
                                            <img  src="" alt="user profile" width={'100px'} height={'100px'}/>
                                            <h2 className="text-xl font-bold mt-2">Name</h2>
                                            <p className="text-gray-600">No bio</p>
                                            <p>Followers: </p>
                                            <p>Following: </p>
                                
                          
                                  </div>
            </div> */}


            <div className="card">
    <div className="card-header">
  <Link to={`/users/${name}`}><img className="avatar" src={userdata && userdata.avatar_url} alt="Profile" /></Link>
    </div>
    <div className="card-body">
      <h2>{userdata && userdata.name}</h2>
      <p className="username">@benawad</p>
      <p className="description">Software Consultant | YouTuber | React.js and GraphQL Enthusiast</p>
    </div>
    <div className="card-footer">
      <div className="stat">
        <strong>{userdata && userdata.followers}</strong>
        <span>Followers</span>
      </div>
      <div className="stat">
        <strong>{userdata && userdata.following}</strong>
        <span>Following</span>
      </div>
      <div className="stat">
        <strong>{userdata && userdata.public_repos}</strong>
        <span>Repositories</span>
      </div>
    </div>
  </div>


    </>
  )
}

export default Card