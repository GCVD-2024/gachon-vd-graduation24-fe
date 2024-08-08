import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import MainTitle from './components/MainTitle/MainTitle';
import ExhibitionInfo from './components/ExhibitionInfo/ExhibitionInfo';
import ExhibitionIntroduction from './components/ExhibitionIntroduction/ExhibitionIntroduction';
import ExhibitionMeaning from './components/ExhibitionMeaning/ExhibitionMeaning';
import GraduationCommittee from './components/GraduationCommittee/GraduationCommittee';
import ConceptSavoring from './components/ConceptSavoring/ConceptSavoring';
import ConceptExperiencing from './components/ConceptExperiencing/ConceptExperiencing';
import ConceptImmersing from './components/ConceptImmersing/ConceptImmersing';
import ConceptReflecting from './components/ConceptReflecting/ConceptReflecting';
import { useScroll } from '../../hooks/useScroll';

function About() {
  const { scrollProgress } = useScroll();

  return (
    <>
      <Helmet>
        <title>Digging Club - About</title>
      </Helmet>
      <AboutPage>
        <MainTitle scrollPercentage={scrollProgress} />
        <ExhibitionInfo />
        <ExhibitionIntroduction />
        <ExhibitionMeaning />
        <GraduationCommittee />
        <section>
          <ConceptSavoring />
          <ConceptExperiencing />
          <ConceptImmersing />
          <ConceptReflecting />
        </section>
      </AboutPage>
    </>
  );
}

export default About;

const AboutPage = styled.div`
  background-color: black;
`;
