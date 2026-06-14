import React from 'react'
import ProfessionsHero from '../components/ProfessionsHero'
import Filter from '../components/Filter'
import Results from '../components/Results'
import Additional from '../components/Additional'

const ProfessionsPage = () => {
  return (
    <div>
        <ProfessionsHero/>
        <Filter/>
        <Results/>
        <Additional/>
    </div>
  )
}

export default ProfessionsPage