import * as React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { TbChevronDown } from 'react-icons/tb'


export default function SimpleAccordion({ ques, ans }) {
  return (
    <div>
      <Accordion className='py-1 border-b !shadow-none'>
        <AccordionSummary
          expandIcon={<TbChevronDown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='!font-semibold !text-lg'>{ques}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {ans}
          </Typography>
        </AccordionDetails>
      </Accordion>


    </div>
  );
}
