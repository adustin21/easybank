import React from 'react'
import cs from '../styles/Header.module.sass'

interface I_Props {}

function Header({}: I_Props) {
	return (
	<header className={`${cs.header} ${cs.header_close}`}>
    <div className={cs.header__logo}></div>
      <nav className={cs.header__menu }>
        <ul className={cs.header__list}>
          <li className={cs.header__listItem}><a href="#">Home</a></li>
          <li className={cs.header__listItem}><a href="#">About</a></li>
          <li className={cs.header__listItem}><a href="#">Contact</a></li>
          <li className={cs.header__listItem}><a href="#">Blog</a></li>
          <li className={cs.header__listItem}><a href="#">Careers</a></li>
        </ul>
      </nav>
      <a href="#" className="invite-button">
        Request Invite
      </a>
      <button
      title="Navigation close and open"
      className={cs.header__hamburgerButton}></button>
  </header>
	)
}

export default Header
