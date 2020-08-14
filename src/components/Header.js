import React from 'react'

export const Header = props => {
    return (
        <header>
            <div className="header-title">
                <h1 id="header-title-text" className="vis-hidden">Joe Dodgson</h1>
            </div>
            
            <div className="header-subtitle">
                <p id="header-subtitle-text" className="vis-hidden">Full stack web developer, based in Birmingham (UK)</p>
            </div>

            <div id="header-icons-container" className="vis-hidden">
                <a href="https://www.linkedin.com/in/joe-dodgson/" target="_blank" className="fab fa-linkedin"></a>
                <a href="https://github.com/JoeDodgson/" target="_blank" className="fab fa-github-square"></a>
            </div>
            {props.children}
        </header>
    )
}
