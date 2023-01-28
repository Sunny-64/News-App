import React, { useState } from "react";
import Search from "./Search";
import { Link } from 'react-router-dom'
import countries from "./countries";
import downArrow from './../assets/downarrow.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'


function Header(props) {
  // let links = ["All News", "Top-Headlines", "Country", "Dark Mode"];
  // let links = [{label : "All News", path : "/"}, {label : "Top-Headlines", path:"/top-headlines"}, {label : "Country", path : ""}, {label : "Dark Mode", path : ""}]
  const [active, setActive] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <header className="">
      <nav className="navigation flex flex-row sm:justify-around items-center xs:justify-between xs:px-3">
        <h3 className="font-bold md:basis-1/6 text-2xl xs:basis-4/12 z-50">News App</h3>

        <ul className={active ? "nav-ul flex gap-11 md:gap-14 xs:gap-12 lg:basis-3/6 md:basis-4/6 md:justify-end active" : " nav-ul flex gap-14 lg:basis-3/6 md:basis-4/6 justify-end"}>
          <li><Link className="no-underline font-semibold" to="/" onClick={()=>{setActive(!active)}}>All News</Link></li>
          <li><Link className="no-underline font-semibold" to="/top-headlines" onClick={()=>{setActive(!active)}}>Top-Headlines</Link></li>


          <li className="dropdown-li"><Link className="no-underline font-semibold flex items-center gap-2" onClick={() => { setShowDropdown(!showDropdown) }}>Country <FontAwesomeIcon className={showDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"} icon={faCircleArrowDown} /></Link>
            <ul className={showDropdown ? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
              {countries.map((element, index) => {
                return (
                  <li key={index} onClick={() => { setShowDropdown(!showDropdown) }}>
                    <Link to={"/country/" + element.iso_2_alpha} className="flex gap-3" type="btn" onClick={() => {setActive(!active)}}>
                      <img crossOrigin="anonymous" className="flags" src={element.png} alt={element.iso_2_alpha} />
                      <span>{element.countryName}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </li>
          <li><Link className="no-underline font-semibold" to="/">Dark Mode</Link></li>
        </ul>
        <div className={active ? "ham-burger z-index-100 ham-open" : "ham-burger z-index-100"} onClick={() => { setActive(!active) }}>
          <span className="lines line-1"></span>
          <span className="lines line-2"></span>
          <span className="lines line-3"></span>
        </div>
      </nav>
      <Search />
    </header>
  );
}

export default Header;
