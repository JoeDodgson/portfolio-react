import React from 'react'

class NavBar extends React.Component {

    render() {
        return (
            <>
                <div id="navbar-spacing-top" className="sticky"></div>

                <nav id="navbar" className="sticky">
                    <div id="nav-link-container" className="clearfix">
                        <div id="nav-spacing">
                            <p>.</p>
                        </div>
                        <div id="nav-about" className="nav-link nav-not-current">
                            <a href="#about">About</a>
                        </div>
                        <div id="nav-portfolio" className="nav-link nav-not-current">
                            <a href="#portfolio">Portfolio</a>
                        </div>
                        <div id="nav-contact" className="nav-link nav-not-current">
                            <a href="#contact">Contact</a>
                        </div>
                        <div id="nav-fill">
                            <p>.</p>
                        </div>
                    </div>

                </nav>
                
            </>
        )
    }
}

export default NavBar