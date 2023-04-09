import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState, useEffect } from "react";

export default function SimpleAccordion() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Список</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {!data ? "Loading..." : data}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
