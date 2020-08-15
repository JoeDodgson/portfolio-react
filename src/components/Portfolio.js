import React from 'react'
import { Project } from './Project'
  
export const Portfolio = () => {
    const projects = [{
        id: "1",
        title: "Fitness buddy",
        imageId: "fitness-buddy-image",
        imagePath: "./images/Fitness-buddy.JPG",
        description: "A website for gym-goers to find information about exercise technique. Users login or sign up, search for exercises and can add exercises to their favourites list.",
        technologyItems: ["Express server", "Heroku deployment", "SQL database and Sequelize", "Pug template engine"],
        siteURL: "https://jdj-fitness-buddy.herokuapp.com/",
        repoURL: "https://github.com/JoeDodgson/Fitness-buddy",
    },
    {
        id: "2",
        title: "Bookworm",
        imageId: "bookworm-image",
        imagePath: "./images/Bookworm.JPG",
        description: "A website for book lovers to find information about books and add them to their read list. Users select a target read date for each book they add to their read list.",
        technologyItems: ["AJAX calls to retrieve API data", "CSS Grid Layout framework", "jQuery JavaScript library"],
        siteURL: "https://joedodgson.github.io/Bookworm/home.html",
        repoURL: "https://github.com/JoeDodgson/Bookworm",
    },
    {
        id: "3",
        title: "Staff management system",
        imageId: "employee-management-image",
        imagePath: "./images/Employee-management-system.JPG",
        description: "A node.js command line interface application which allows users to interact with an employee database. Users can create, read, update and delete data from the database.",
        technologyItems: ["SQL database", "MySQL node package", "Inquirer node package"],
        siteURL: "https://github.com/JoeDodgson/Employee-Tracker",
        repoURL: "https://github.com/JoeDodgson/Employee-Tracker",
    },
    {
        id: "4",
        title: "Readme generator",
        imageId: "readme-generator-image",
        imagePath: "./images/Readme-generator.JPG",
        description: "A node.js command line interface application which allows users to generate a readme.md file. Users specify a file name and the content of each section of the readme.",
        technologyItems: ["Inquirer node package", "File system (FS) node package", "Validator node package"],
        siteURL: "https://github.com/JoeDodgson/Readme-Generator",
        repoURL: "https://github.com/JoeDodgson/Readme-Generator",
    },
    {
        id: "5",
        title: "Code quiz",
        imageId: "code-quiz-image",
        imagePath: "./images/Code-quiz.jpg",
        description: "A multiple choice coding quiz, including a page which displays the Highscores. The user submits their score which is added to other scores in the local storage.",
        technologyItems: ["Interaction with local storage", "Use of setInterval and setTimeout JavaScript methods"],
        siteURL: "https://joedodgson.github.io/Code-Quiz/",
        repoURL: "https://github.com/JoeDodgson/Code-Quiz",
    },
    {
        id: "6",
        title: "Weather dashboard",
        imageId: "weather-dashboard-image",
        imagePath: "./images/Weather-dashboard.JPG",
        description: "The user searches for any city to see the current weather and a 5 day weather forecast. The page stores and displays the user's searched cities.",
        technologyItems: ["AJAX calls to retrieve API data", "Interaction with local storage"],
        siteURL: "https://joedodgson.github.io/Weather/",
        repoURL: "https://github.com/JoeDodgson/Weather",
    },
    ]
    return (
        <section className="clearfix" id="portfolio">
            <div>
                <h2>My portfolio</h2>
            </div>
            {projects.map(project => (
                <Project project={project}/>
            ))}
        </section>
    )
}
