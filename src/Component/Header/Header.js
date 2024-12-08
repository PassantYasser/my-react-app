import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
function Header() {
  return (
    <>
    <header className="show-in-desktop">
      <Link to='/' className='h1'>passant yasser</Link>
    <ul className="flex">
      <li className="main-list">
        <NavLink className="main-link" to="/html">
          HTML
        </NavLink>

        <ul className="sub-ul">
          <li>
            <a href="#">HTML One</a>
          </li>
          <li>
            <a href="#">HTML Two</a>
          </li>
          <li>
            <a href="#">HTML Three</a>
          </li>
        </ul>

      </li>
      <li className="main-list">
        <NavLink className="main-link" to="/css">
          CSS
        </NavLink>

        <ul className="sub-ul">
          <li>
            <a href="#">CSS One</a>
          </li>
          <li>
            <a href="#">CSS Two</a>
          </li>
          <li className="projectList">
            <a href="#">Projects &nbsp;+ </a>
            <ul className="sub-sub-ul">
              <li>
                <a href="#">Project 1</a>
              </li>
              <li>
                <a href="#">Project 2</a>
              </li>
              <li>
                <a href="#">Project 3</a>
              </li>
            </ul>
          </li>
        </ul>

      </li>
      <li className="main-list">
        <NavLink className="main-link" to="/java">
          JAVA
        </NavLink>

        <ul className="sub-ul sub-of-java">
          <li>
            <a href="#">Coming Soon 🔥</a>
          </li>
        </ul>

      </li>
    </ul>
  </header>





  <header className="show-in-mobile">
    <h1 className='h1'>passant yasser</h1>
    <label htmlFor="burger" className="burgerLabel">
      <i className="fa-solid fa-bars" />
    </label>
    <input id="burger" type="checkbox" className="burgerInput" />
    <div className="show-on-click">
      <div className="main-div">
        <label htmlFor="html" className="labelDiv">
          HTML <i className="fa-solid fa-plus" />
        </label>
        <input id="html" type="checkbox" />
        <ul className="sub-div">
          <li>
            <NavLink to="/html">HTML One</NavLink>
          </li>
          <li>
            <NavLink to="/html">HTML Two</NavLink>
          </li>
          <li>
            <NavLink to="/html">HTML Three</NavLink>
          </li>
        </ul>
      </div>
      <div className="main-div">
        <label htmlFor="css" className="labelDiv">
          CSS <i className="fa-solid fa-plus" />
        </label>
        <input id="css" type="checkbox" />
        <ul className="sub-div">
          <li>
            <NavLink to="/css">CSS One</NavLink>
          </li>
          <li>
            <NavLink to="/css">CSS Two</NavLink>
          </li>
          <li>
            <label htmlFor="Projects" className="labelDiv project">
              Projects <i className="fa-solid fa-plus" />
            </label>
            <input id="Projects" type="checkbox" />
            <ul className="sub-sub-div">
              <li>
                <a href="#">Project 1</a>
              </li>
              <li>
                <a href="#">Project 2</a>
              </li>
              <li>
                <a href="#">Project 3</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="main-div">
        <label htmlFor="java" className="labelDiv">
          JAVA <i className="fa-solid fa-plus" />
        </label>
        <input id="java" type="checkbox" />
        <ul className="sub-div ">
          <li>
            <NavLink to="/java">Coming Soon 🔥</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
    </>
  )
}

export default Header