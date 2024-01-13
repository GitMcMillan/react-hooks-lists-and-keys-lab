import React from "react";

function NavBar() {
  const links = ["#home", "#about", "#projects"];

  const LinkCards = links.map((linksObj) => {
    return <a key={linksObj} href={linksObj}>{linksObj}</a>
  })

  return <nav>{LinkCards}</nav>;
}

export default NavBar;
