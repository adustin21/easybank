import React, { useState } from 'react'
import cs from '../styles/Header.module.sass'
import Button from './Button'

interface I_Props {}

function Header({}: I_Props) {
  const [close, setClose] = useState(true)
	return (
	<header className={`${cs.header} ${close && cs.header_close}`}>
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
      <Button
      className={cs.header__inviteButton}
      action={e=>e}>
        Request Invite
      </Button>
      <button
      onClick={e=>setClose(!close)}
      title="Navigation close and open"
      className={cs.header__hamburgerButton}></button>
  </header>
	)
}

export default Header
