import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// Import Layout and Page Components
import Layout from './components/Layout';
import Home from './pages/Home';
import Assessment from './pages/Assessment';
import BreathingExercise from './components/healing-tools/BreathingExercise';
import AboutPTSD from './pages/AboutPTSD';
import SelfAssessment from './pages/SelfAssessment';
import HealingTools from './pages/HealingTools';
import StoriesAndCommunity from './pages/StoriesAndCommunity';
import FindHelp from './pages/FindHelp';
import Education from './pages/Education';
import MoodTracker from './pages/MoodTracker';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/healing-tools/breathing-exercise" element={<BreathingExercise />} />
          <Route path="/about-ptsd" element={<AboutPTSD />} />
          <Route path="/self-assessment" element={<SelfAssessment />} />
          <Route path="/healing-tools" element={<HealingTools />} />
          <Route path="/stories-community" element={<StoriesAndCommunity />} />
          <Route path="/find-help" element={<FindHelp />} />
          <Route path="/education" element={<Education />} />
          <Route path="/mood-tracker" element={<MoodTracker />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
