import React from 'react';
import Modal from '../Modal';
import history from '../../history';

class Art extends React.Component{
  render(){
    return(
      <Modal
          title="Dr. Arthur Maerlender "
          content= "Dr. Maerlender was a middle school teacher before becoming a therapist and performance psychologist. Throughout his career he has played rugby and coached at the collegiate level. After obtaining his PhD from the University of Notre Dame in Counseling Psychology, he completed a post-doctoral fellowship in neuropsychology at Dartmouth (Geisel) Medical School where he remained for twenty years, retiring as the Director of Pediatric Neuropsychology service. He conducted research in learning disabilities, Autism and traumatic brain injury. Besides consultation to schools on behavior and learning, he worked with over 30 concussion management programs; he also served on the boards of the Vermont Learning Disabilities Foundation, the Brain Injury Association of New Hampshire, the Academy of Brain Injury Specialists of the National Brain Injury Association, the Brain Injury Alliance of Nebraska, and was the Ivy League leader of the nascent Ivy- League-Big 10 TBI Research Collaboration (for whom he is currently Emeritus Research Director). Since his membership on the Institute of Medicine’s Committee on Concussions in Youth Sport in 2012, his research and clinical work has focused on the main recommendations from that final report. His mission has been to develop quality processes and metric for concussion diagnosis and management, and changing the culture of sport to enhance athlete welfare. He currently maintains a small clinical practice, teaches and consults to individuals, teams and organizations on clinical, performance and organizational issues."
          onDismiss={() => history.push('/aboutus')}
      />
    );
  }
}

export default Art;
