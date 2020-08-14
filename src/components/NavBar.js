import React from 'react'

export const NavBar = () => {
    return (
        <>
            <nav id="navbar" className="vis-hidden">
                <div id="nav-link-container" className="clearfix">
                    <div id="nav-spacing">
                        <p>.</p>
                    </div>
                    <div id="nav-about" className="nav-link nav-current">
                        <p>About</p>
                    </div>
                    <div id="nav-portfolio" className="nav-link nav-not-current">
                        <p>Portfolio</p>
                    </div>
                    <div id="nav-contact" className="nav-link nav-not-current">
                        <p>Contact</p>
                    </div>
                    <div id="nav-fill">
                        <p>.</p>
                    </div>
                </div>

            </nav>
            
            <div id="navbar-spacing" className="sticky"></div>
        </>
    )
}
