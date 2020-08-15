import React from 'react'

export const Project = props => {
    return (
        <article key={props.project.id} className="project">
            <h3>{props.project.title}</h3>
            <img className="project-image" id={props.project.imageId} src={props.project.imagePath} alt={props.project.title}></img>
            <p className="project-description">{props.project.description}</p>
            <p>Technologies adopted:</p>
            <ul className="technologies-list">
                {props.project.technologyItems.map(technologyItem => (
                    <li>{technologyItem}</li>
                ))}
            </ul>
            <div className="button-container">
                <button><a href={props.project.siteURL} target="_blank" className="site-link">SEE SITE</a></button>
                <button><a href={props.project.repoURL} target="_blank" className="repo-link">SEE REPO</a></button>
            </div>
        </article>
    )
}