import React from "react";
import MouseIcon from "@mui/icons-material/Mouse";
import { IconButton } from "@mui/material";
import { Tooltip } from "@mui/material";

export const Separator = ({ next, previous }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="separator">
      <div className="vertical-line"></div>
      <div className="icon-container-next">
        <Tooltip title="Scroll to next section" arrow>
          <IconButton
            onClick={() => scrollToSection(next)}
            sx={{ color: "white" }}
          >
            <MouseIcon />
          </IconButton>
        </Tooltip>
      </div>
      <div className="icon-container-prev">
        <Tooltip title="Scroll to previous section" arrow>
          <IconButton
            onClick={() => scrollToSection(previous)}
            sx={{ color: "white" }}
          >
            <MouseIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};
