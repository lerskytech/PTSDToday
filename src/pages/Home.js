import React from 'react';
import Hero from '../components/Hero';
import QuickNavGrid from '../components/QuickNavGrid';
import HowItHelps from '../components/HowItHelps';
import AssessmentCTA from '../components/AssessmentCTA';
import TrustedResources from '../components/TrustedResources';
import Testimonials from '../components/Testimonials';
import EducationHubPreview from '../components/EducationHubPreview';
import MoodTrackerPreview from '../components/MoodTrackerPreview';
import EmailCommunity from '../components/EmailCommunity';

const Home = () => {
  return (
    <div>
      <Hero />
      <QuickNavGrid />
      <HowItHelps />
      <AssessmentCTA />
      <TrustedResources />
      <Testimonials />
      <EducationHubPreview />
      <MoodTrackerPreview />
      <EmailCommunity />
    </div>
  );
};

export default Home;
