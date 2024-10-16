import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import MainTitle from './components/MainTitle/MainTitle';
import ExhibitionIntroduction from './components/ExhibitionIntroduction/ExhibitionIntroduction';
import ExhibitionMeaning from './components/ExhibitionMeaning/ExhibitionMeaning';
import GraduationCommittee from './components/GraduationCommittee/GraduationCommittee';
import ConceptSavoring from './components/ConceptSavoring/ConceptSavoring';
import ConceptExperiencing from './components/ConceptExperiencing/ConceptExperiencing';
import ConceptImmersing from './components/ConceptImmersing/ConceptImmersing';
import ConceptReflecting from './components/ConceptReflecting/ConceptReflecting';
import { useScroll } from '../../hooks/useScroll';
import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import { useIsMobile } from '../../hooks/useIsMobile';
import Designers from './components/Designers/Designers';

function About() {
  const isMobile = useIsMobile();
  const { scrollProgress } = useScroll();
  const scrollPercentage = Math.round(scrollProgress);

  return (
    <>
      <Helmet>
        <title>Digging Club - About</title>
      </Helmet>
      <AboutPage>
        <ScrollToTopButton
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          text="Going Up!"
        />
        {isMobile ? <></> : <ScrollIndicator scrollPercentage={scrollPercentage} />}
        <MainTitle />
        {/* <ExhibitionInfo /> */}
        <ExhibitionIntroduction />
        <ExhibitionMeaning />
        <GraduationCommittee />

        <ConceptSavoring />
        <ConceptExperiencing />
        <ConceptImmersing />
        <ConceptReflecting />
        <Designers />
      </AboutPage>
    </>
  );
}

export default About;

const AboutPage = styled.div`
  position: relative;
  background-color: black;
`;
