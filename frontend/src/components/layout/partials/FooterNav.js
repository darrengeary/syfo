import React from "react"
import classNames from "classnames"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className)

  return (
    <nav {...props} className={classes}>
      <ul className='list-reset'>
        <li className='d-flex'>
          <a href='#top'>
            <FontAwesomeIcon
              className='pe-2 pt-1'
              icon={faArrowUp}
            ></FontAwesomeIcon>
            Back to Top
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default FooterNav
