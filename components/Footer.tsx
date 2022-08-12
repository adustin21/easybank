import React from 'react'
import cs from '../styles/Footer.module.sass'
import Button from './Button'

interface I_Props{}

function Footer({}: I_Props) {
	return (
		<footer className={cs.footer}>
			<div className={cs.footer__logo}/>
			<nav className={cs.footer__nav}>
				<ul className={cs.footer__list}>
				<li className={cs.footer__listItem}>
					<a href="#">Home</a>
				</li>
				<li className={cs.footer__listItem}>
					<a href="#">About</a>
				</li>
				<li className={cs.footer__listItem}>
					<a href="#">Contact</a>
				</li>
				<li className={cs.footer__listItem}>
					<a href="#">Blog</a>
				</li>
				<li className={cs.footer__listItem}>
					<a href="#">Careers</a>
				</li>
				<li className={cs.footer__listItem}>
					<a href="#">Privacy Policy</a>
				</li>
				</ul>
			</nav>
			<Button
			className={cs.footer__inviteButton}
			action={e=>e}>
				Request Invite
			</Button>
			<div className={cs.footer__copyright}>
				© Easybank. All Rights Reserved
			</div>
		</footer>
	)
}

export default Footer
