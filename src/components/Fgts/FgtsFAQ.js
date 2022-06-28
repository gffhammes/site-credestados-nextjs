import React from 'react'
import { FgtsFAQ as allQuestions } from '../../constants/FgtsFAQ'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SectionTitle from '../Commons/SectionTitle';

export default function FgtsFAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  return (
    <section className='padding--default fgts-faq'>
      <div className="container">
        <SectionTitle subTitle={'PERGUNTAS FREQUENTES'} title={'Tire suas dúvidas sobre o saque FGTS'} />
        <div className="faq">
          {
            allQuestions.map((question, key) => {
              return (
                <Accordion key={key} expanded={expanded === `${key}`} onChange={handleChange(`${key}`)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panelbh-content"
                  id="panelbh-header"
                  sx={{ backgroundColor: "#f4f4f4" }}
                >
                  <Typography>{question.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{question.answer}</Typography>
                </AccordionDetails>
              </Accordion>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}