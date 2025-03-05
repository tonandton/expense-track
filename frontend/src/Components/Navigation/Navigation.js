import React from "react";
import styled from "styled-components";
import profile from "../../img/profile.png";
import { menuItems } from "../../utils/menuItems";

function Navigation() {
  return (
    <NavStyled>
      <div className="user-con">
        <img src={profile} alt="" />
        <h2>BB</h2>
        <p>Your Money</p>
      </div>

      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li key={item.id}>
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
      <div className="bottom-nav">{/* <li>{signout} Sign Out</li> */}</div>
    </NavStyled>
  );
}

const NavStyled = styled.nav``;

export default Navigation;
