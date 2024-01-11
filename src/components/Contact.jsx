import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { IconButton, Link } from "@mui/material";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = () => {
    const templateParams = {
      from_name: name,
      to_name: "Yden",
      message: message,
      subject: subject,
      reply_to: email,
    };

    emailjs.send(
      import.meta.env.VITE_REACT_APP_EMAILJS_SERVICEID, 
      import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATEID, 
      templateParams).then(
      (response) => {
        alert("Email sent successfully:", response);
      },
      (error) => {
        alert("Email send failed:", error);
      }
    );
  };

  return (
    <div className="content">
      <div className="contact" id="contact">
        <h1>Contact Me 📲</h1>
        <Box
          component="form"
          sx={{
            backgroundColor: "white",
            minWidth: "500px",
            padding: "2em",
            borderRadius: "15px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              required
              id="outlined-required"
              label="Name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              sx={{ marginBottom: "2em" }}
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              sx={{ marginBottom: "2em" }}
            />
            <TextField
              id="outlined"
              label="Subject"
              placeholder="Subject"
              onChange={(e) => setSubject(e.target.value)}
              sx={{ marginBottom: "2em" }}
            />
            <TextField
              required
              label="Message"
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
              multiline
              rows={4}
            />
          </div>
          <Button
            variant="contained"
            onClick={handleSendEmail}
            sx={{ marginTop: "1em" }}
          >
            Send
          </Button>
        </Box>
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
          <Link target="_blank" href="https://www.linkedin.com/in/yden-da-245841220/">
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
    </div>
  );
};
