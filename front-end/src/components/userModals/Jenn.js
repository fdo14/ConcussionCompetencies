import React from 'react';
import Modal from '../Modal';
import history from '../../history';

class Jenn extends React.Component{
  render(){
    return(
      <Modal
          title="Dr. Jennifer Parent-Nichols "
          content= "Jennifer Parent-Nichols is an Assistant Professor in the Doctor of Physical Therapy Program at Franklin Pierce University. She is a Board Certified Pediatric Physical Therapist and Certified Brain Injury Specialist.  She has worked extensively in the area of pediatrics with experience in early intervention, school-based therapy, and private practice. She provides expert consultation and education as part of the New Hampshire Chalk Talk team, helping students to return to learning after concussion. Jennifer earned her Master of Physical Therapy from the University of Massachusetts, her Doctor of Physical Therapy from Franklin Pierce University, and her Doctor of Education in Leadership and Learning from Rivier University. Her areas of research include adult learning, pediatric bracing, adolescent sports medicine, and management of stress. She has presented her research both nationally and internationally. "
          onDismiss={() => history.push('/aboutus')}
      />
    );
  }
}

export default Jenn;
