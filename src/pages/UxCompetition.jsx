import React from 'react'
    import HeroSection from '../components/HeroSection'
    import CompetitionDetails from '../components/CompetitionDetails'
    import SubmissionGuidelines from '../components/SubmissionGuidelines'
    import FAQ from '../components/FAQ'

    export default function UxCompetition() {
      return (
        <div>
          <HeroSection />
          <CompetitionDetails />
          <SubmissionGuidelines />
          <FAQ />
        </div>
      )
    }
