import React from "react";
import styled from "styled-components";
import profile from "../../img/profile.png";
import { menuItems } from "../../utils/menuItems";

function Navigation({ active, setActive }) {
  return (
    <NavStyled>
      <div className="user-con">
        <img src={profile} alt="" />
        <div>
          <h2>BBBB</h2>
          <p>Your Money</p>
        </div>
      </div>

      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? "active" : ""}
            >
              <i>{item.icon}</i>
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
      <div className="bottom-nav">
        <li>
          <i></i> Sign Out
        </li>
      </div>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  backdrop-filter: blur(4.5px);
  border: 3px solid #ffffff;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #ffffff;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    h2 {
      color: rgba(34, 34, 96, 1);
    }
    p {
      color: rgba(34, 34, 96, rgba(0, 0, 0, 0.06));
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;

    li {
      display: grid;
      grid-template-columns: 40px auto;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(34, 34, 96, rgba(0, 0, 0, 0.06));
      padding-left: 1rem;
      position: relative;

      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
      &:hover {
        color: rgba(34, 34, 96, 1);
      }
    }
  }

  .active {
    color: rgba(34, 34, 96, 1) !important;

    i {
      color: rgba(34, 34, 96, 1) !important;
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #222602;
      border-radius: 0 10px 10px 0;
    }
  }
`;

export default Navigation;
