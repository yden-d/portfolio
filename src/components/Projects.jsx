import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import github from "../assets/github.svg";
import { Icon, Link } from "@mui/material";
import { Tooltip } from "@mui/material";
import yelp from "../assets/yelp.svg";
import react from "../assets/react.svg";
import javascript from "../assets/javascript.svg";
import python from "../assets/python.svg";
import ibmwatson from "../assets/ibm-watson.svg";
import mysql from "../assets/mysql.svg";
import django from "../assets/django.svg";
import budget from "../assets/budget.png";
import { minWidth } from "@mui/system";

export const Projects = () => {
  return (
    <div style={{ marginTop: "-50px" }}>
      <div className="content">
        <h1>My Projects 💻</h1>
      </div>
      <div className="projects" id="projects">
        <Card
          className="project"
          sx={{ maxWidth: 345, marginLeft: "2em", minWidth: 280 }}
        >
          <CardHeader title="Expense Tracker" subheader="Personal Project" />
          <CardMedia
            component="img"
            height="200"
            width="200"
            image={budget}
            sx={{ objectFit: "contain" }}
            alt="Sample IMG"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This project has helped me analyze my spending and organize the
              way I allocate my budget. The overall budget report helps
              visualize spending habits so I know if there are any areas of
              improvement.
            </Typography>
            <Typography variant="h6" fontWeight="bold">
              Technologies Used:
            </Typography>
            <Tooltip title="React.js" arrow>
              <img className="tech-icons" src={react}></img>
            </Tooltip>
            <Tooltip title="JavaScript" arrow>
              <img className="tech-icons" src={javascript}></img>
            </Tooltip>
          </CardContent>
          <CardActions disableSpacing>
            <Link target="_blank" href="https://github.com/yden-d/react-budget">
              <IconButton aria-label="github-link">
                <img src={github} alt="Github Icon" style={{ width: "1em" }} />
              </IconButton>
            </Link>
            <Tooltip title="Live site in progress" arrow>
              <IconButton aria-label="live-demo">
                <ShareIcon />
              </IconButton>
            </Tooltip>
          </CardActions>
        </Card>
        <Card
          className="project"
          sx={{
            maxWidth: 345,
            marginRight: "2em",
            marginLeft: "2em",
            minWidth: 280,
          }}
        >
          <CardHeader
            title="Job Application Tracker"
            subheader="Personal Project"
          />
          <CardMedia
            component="img"
            height="194"
            image=""
            alt="No Image Available (Yet)"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Currently a work in progress, this application will help job
              seekers like myself tremendously in organizing the search process.
              It keeps track of the status of the applications and takes record
              of which part of the process in the current company the user is
              at.
            </Typography>
            <Typography variant="h6">Tech Stack:</Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Tooltip title="Work in progress. Link coming soon!" arrow>
              <Link>
                <IconButton aria-label="github-link">
                  <img
                    src={github}
                    alt="Github Icon"
                    style={{ width: "1em" }}
                  />
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip title="Work in progress. Link coming soon!" arrow>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </Tooltip>
          </CardActions>
        </Card>
        <Card
          className="project"
          sx={{ maxWidth: 345, marginRight: "2em", minWidth: 280 }}
        >
          <CardHeader title="Yelp Review Analyzer" subheader="Course Project" />
          <CardMedia
            component="img"
            height="190"
            image={yelp}
            alt="Sample IMG"
            sx={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: "10px" }}
            >
              Full Stack web application that web scrapes Yelp reviews for
              restaurants within a 10-mile radius of the user and uses AI to
              determine the overall mood of the reviews and summarize what most
              reviewers are saying about the establishment.
            </Typography>
            <Typography variant="h6" fontWeight="bold">
              Technologies Used:
            </Typography>
            <Tooltip title="React.js" arrow>
              <img className="tech-icons" src={react}></img>
            </Tooltip>
            <Tooltip title="JavaScript" arrow>
              <img className="tech-icons" src={javascript}></img>
            </Tooltip>
            <Tooltip title="Python" arrow>
              <img className="tech-icons" src={python}></img>
            </Tooltip>
            <Tooltip title="MySQL" arrow>
              <img className="tech-icons" src={mysql}></img>
            </Tooltip>
            <Tooltip title="IBM Watson" arrow>
              <img className="tech-icons" src={ibmwatson}></img>
            </Tooltip>
            <Tooltip title="Django" arrow>
              <img className="tech-icons" src={django}></img>
            </Tooltip>
          </CardContent>
          <CardActions disableSpacing>
            <Tooltip title="Unavailable: On school repository" arrow>
              <IconButton aria-label="github-link">
                <img src={github} alt="Github Icon" style={{ width: "1em" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Unavailable: On school repository" arrow>
              <IconButton aria-label="live-demo">
                <ShareIcon />
              </IconButton>
            </Tooltip>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};
