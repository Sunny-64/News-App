import React from "react";
import Search from "./Search";

function Header() {
  let links = ["All News", "Top-Headlines", "Country", "Dark Mode"];
  return (
    <header className="">
      <nav className="flex flex-row justify-around items-center">
        <h3 className="font-bold basis-1/6 text-2xl">News App</h3>
        <ul className="flex gap-14 basis-3/6 justify-end">
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
      </nav>
      <Search />
    </header>
  );
}

export default Header;
