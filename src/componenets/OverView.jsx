import React from 'react'
import '../styles/Overview.css'

const OverView = ({url,createddate,updateddate,noofrepos,noofgists}) => {
  return (
    <>
    <div className="overviewcontainer">
      <img src={url} alt="" />

      <div className="text">
        <p>Created on : {createddate}</p>
        <p>Update on :{updateddate} </p>
        <p>Public repos: {noofrepos}</p>
        <p>Public gists :{noofgists} </p>
      </div>

    </div>  
    
    </>
  )
}

export default OverView