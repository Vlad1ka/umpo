import React from 'react'
import Stages from '../components/Stages'
import Benefits from '../components/Benefits'
import ApplicationForm from '../components/ApplicationForm'
import Contacts from '../components/Contacts'
import { useLocation } from 'react-router-dom';


const TrainingPage = () => {
  const location = useLocation();
  const selectedProfession = location.state?.selectedProfession || '';

  return (
    <div>
        <Stages/>
        <Benefits/>
        <ApplicationForm selectedProfession={selectedProfession}/>
        <Contacts/>
    </div>
  )
}

export default TrainingPage




