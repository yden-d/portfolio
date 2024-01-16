import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { IconButton, Link } from "@mui/material";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import MailIcon from '@mui/icons-material/Mail';

export const Contact = () => {
  const handleEmailButtonClick = () => {
    const receipient = encodeURIComponent("yden.business@gmail.com")
    const subject = encodeURIComponent("Job Opportunity for Yden Da!");
    const body = encodeURIComponent("Dear Yden,");

    const mailtoLink = `mailto:${receipient}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <div className="content">
        <h1>Let's get in touch, I am Open for Work!</h1>
        <div className="contact-btn" onClick={handleEmailButtonClick}>
            <h1 style={{ color: "white" }}>Contact Me 📲</h1>
        </div>
        <div style={{ marginTop: "2em" }}>
          <Link target="_blank" href="https://github.com/yden-d">
            <IconButton aria-label="github-link">
              <img
                src={github}
                alt="Github Icon"
                style={{
                  width: "50px",
                  filter: "invert(1)",
                }}
              />
            </IconButton>
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/yden-da-245841220/"
          >
            <IconButton aria-label="github-link">
              <img
                src={linkedin}
                alt="LinkedIn Icon"
                style={{
                  width: "50px",
                  filter: "invert(1)",
                }}
              />
            </IconButton>
          </Link>
        </div>
      </div>
    </>
  );
};
