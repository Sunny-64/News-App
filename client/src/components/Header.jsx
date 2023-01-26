import React, {useState} from "react";
import Search from "./Search";

function Header() {
  let links = ["All News", "Top-Headlines", "Country", "Dark Mode"];
  const [active, setActive] = useState(false);
  return (
    <header className="">
      <nav className="flex flex-row sm:justify-around items-center xs:justify-between xs:px-3">
        <h3 className="font-bold md:basis-1/6 text-2xl xs:basis-4/12 z-50">News App</h3>
        
        <ul className={active ? "flex md:gap-14 xs:gap-12 lg:basis-3/6 md:basis-4/6 md:justify-end active" : "flex gap-14 lg:basis-3/6 md:basis-4/6 justify-end"}>
          {links.map((element) => {
            return (
              <li>
                <a className="no-underline font-semibold" href="">
                  {element}
                </a>
              </li>
            );
          })}
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
