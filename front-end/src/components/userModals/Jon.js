import React from 'react';
import Modal from '../Modal';
import history from '../../history';

class Jon extends React.Component{
  render(){
    return(
      <Modal
          title="Dr. Jonathan Lichteinstein"
          content= "Dr. Lichtenstein is the Director of the Pediatric Neuropsychology program at Dartmouth-Hitchcock Medical Center, and an Assistant Professor of Psychiatry, Pediatrics, and the Dartmouth Institute for Health Policy and Clinical Practice at Dartmouth’s Geisel School of Medicine. He serves as a consultant to concussion management programs at middle schools, high schools, and colleges in New Hampshire, and is the team neuropsychologist for Dartmouth College Athletics. Dr. Lichtenstein’s work in concussion management has extended from the youth to the professional level. He was the principal investigator and clinical director of Concussion Chalk Talk, a grant-funded school-based concussion management program, which places an emphasis on return to learn and changing the concussion culture in New Hampshire. His research and publications in peer-reviewed journals have focused on test administration, effort, recovery, and program evaluation in concussion management. Dr. Lichtenstein lectures widely on neuropsychology, with specific applications of neuropsychological principles to concussion management in the school setting."
          onDismiss={() => history.push('/aboutus')}
      />
    );
  }
}

export default Jon;
