import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.TextMode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">{props.homeL}</a>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/about">{props.aboutL}</a> */}
            </li>
          </ul>
          {/* <div className="form-check form-switch" style={{color: props.mode==='light'?'black':'white'}}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light'?'Enable Dark Mode':'Enable Light Mode'}</label>
          </div> */}
          <div className='modegroup'>
            <div className='modeInput MI1'>
              <input type='radio' onClick={props.light} name='modeInput' id='mi1' defaultChecked />
            </div>
            <div className='modeInput MI2'>
              <input type='radio' onClick={props.success} name='modeInput' id='mi2' />
            </div>
            <div className='modeInput MI3'>
              <input type='radio' onClick={props.primary} name='modeInput' id='mi3' />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes  = {
    title: PropTypes.string.isRequired,
    homeL: PropTypes.string,
    aboutL: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Logo',
    homeL: 'Link',
    aboutL: 'Link'
}