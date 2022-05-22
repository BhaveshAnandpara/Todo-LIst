import React from 'react'
import ProtoTypes from 'prop-types'
import { Link } from  "react-router-dom"

export default function Header(props){ //Props => Properties

    return(
        <div className="header ">
        <h2 className="title"><Link to="/">{props.title}</Link></h2>
        <div className="navitems ">
          <span><Link to="/">HOME</Link></span>
          <span><Link to="/about">ABOUT</Link></span>
        </div>
        { 

        props.searchBar ? <h1>SearchBar is Here </h1> : ""
        
        }
      </div>
    )


}

Header.defaultProps = {
    title : "Your title here",
    searchBar : false
}

Header.protoTypes = {
    title : ProtoTypes.string,
    searchBar : ProtoTypes.bool
}