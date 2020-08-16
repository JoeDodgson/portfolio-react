import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordion: {
      backgroundColor: theme.palette.secondary.main,
      color: "#ffffff",
      border: "#ffffff"
  },
}));


export const InfoCard = () => {
    const classes = useStyles();
    const cardsContent = [{
        id: "1",
        title: "About me",
        imagePath: "./images/Joe-work-headshot.jpg",
        imageAlt: "Joe Dodgson",
        imageId: "intro-image",
        textItems: ["I am currently developing skills as a full stack web developer at the University of Birmingham's Coding Bootcamp.", "My skillset includes HTML, CSS, JavaScript, jQuery, node.js, SQL, MongoDB and React.", "This website is a portfolio of the projects I have either contributed to or built myself."],
        downloadLinks: [],
      },
      {
        id: "2",
        title: "Background",
        imagePath: "./images/Arup-work.JPG",
        imageAlt: "Working at Arup",
        imageId: "arup-image",
        textItems: ["I worked as a Rail Engineer for 4 years, but in January 2020 I made the decision to retrain as a web developer to pursue a career in software development. I love applying mathematical and logical reasoning to solve probelms which is what drew me into software development."],
        downloadLinks: [],
      },
      {
        id: "3",
        title: "Education",
        imagePath: "./images/Joe-graduation.jpg",
        imageAlt: "Graduation",
        imageId: "university-image",
        textItems: ["Coding Bootcamp Full stack programme at University of Birmingham (2020)", "MEng Civil Engineering at University of Nottingham including 1 year of study abroad at UoN's Malaysia Campus and 1 year industrial placement. First class honours (2011-2016)"],
        downloadLinks: [],
      },
      {
        id: "4",
        title: "Experience",
        imagePath: "./images/Joe-InSAR-research-project.jpg",
        imageAlt: "Experience",
        imageId: "experience-image",
        textItems: ["4 years - Rail Engineer / Embedded Developer, Arup (2016-present)", "3 months - Research Placement, University of Nottingham (2015)", "1 year - Undergraduate Design Engineer, North Midland Construction (2014-2015)"],
        downloadLinks: [{id: "download-cv",
            path: "./downloadable/Joe_Dodgson_CV_July_2020.pdf",
            name: "Joe_Dodgson_CV_July_2020.pdf",
            buttonText: "DOWNLOAD CV",
          }
        ],
      }
    ]

    return (
      <section className="clearfix">
        <div className={classes.root}>
          {cardsContent.map(card => (
            <Accordion key={card.id}>
              <AccordionSummary  
                className={classes.accordion}
                expandIcon={<ExpandMoreIcon className={classes.accordion}/>}
                aria-controls="panel1a-content"
              >
                <h1 className={classes.heading}>{card.title}</h1>
              </AccordionSummary>
              <AccordionDetails className={classes.accordion}>
                <div className="clearfix">
                    <img id={card.imageId} src={card.imagePath} alt={card.imageAlt}></img>
                    {card.textItems.map(textItem => (
                        <p>{textItem}</p>
                    ))}
                    {card.downloadLinks.map(downloadLink => (
                        <div class="button-container">
                            <a id={downloadLink.id} href={downloadLink.path} download={downloadLink.name}>
                                <i class="fas fa-download"></i> {downloadLink.buttonText}
                            </a>
                        </div>
                    ))}
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </section>
    );
}
