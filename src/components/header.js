import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const isPartiallyActive = ({
  isPartiallyCurrent
}) => {
  return isPartiallyCurrent
    ? { className: "has-child active top" }
    : null
}

const Header = ({ siteTitle }) => (
  <header>
    
    <div><Link to="/" activeClassName="active">about</Link></div>
    <div><Link to="/blog" getProps={isPartiallyActive} activeClassName="active">blog</Link></div>
    <div><Link to="/search" getProps={isPartiallyActive} activeClassName="active"><b><span role="img" aria-label="Search">🔍</span></b></Link></div>
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
