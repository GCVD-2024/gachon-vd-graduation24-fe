import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const roles = [
  { title: '위원장', members: ['홍정우'] },
  { title: '웹', members: ['이가영', '이한별', '김도연'] },
  { title: '편집', members: ['조예진', '정다연'] },
  { title: '홍보', members: ['나선주'] },
  { title: '회계', members: ['이경택'] },
];

const developmentParticipations = [{ title: '개발', members: ['민세림', '유지민', '이은미'] }];

function GraduationCommittee(): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const titles = gsap.utils.toArray<HTMLElement>('.commitee_title');
    const contents = gsap.utils.toArray<HTMLElement>('.committee_content');

    const animateElements = (
      elements: HTMLElement[],
      fromVars: gsap.TweenVars,
      toVars: gsap.TweenVars
    ) => {
      elements.forEach((element, index) => {
        gsap.fromTo(element, fromVars, {
          ...toVars,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 90%',
            end: 'bottom 20%',
          },
          delay: index * 0.2,
        });
      });
    };

    animateElements(titles, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    animateElements(contents, { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  return (
    <CommitteeWrapper ref={containerRef}>
      <section>
        <Title className="commitee_title">
          2025
          <br />
          졸업 준비 위원회
        </Title>
        <RolesContainer>
          {roles.map((role) => (
            <div key={role.title} className="committee_content">
              <RoleTitle>{role.title}</RoleTitle>
              {/* TODO: Member gap 설정 필요 */}
              <div>
                {role.members.map((member) => (
                  <Member key={member}>{member}</Member>
                ))}
              </div>
            </div>
          ))}
        </RolesContainer>
      </section>
      <HelpedSection>
        <SubTitle className="commitee_title">도움 주신 분들</SubTitle>
        <RolesContainer>
          {developmentParticipations.map((role) => (
            <div key={role.title} className="introduction_content">
              <RoleTitle>{role.title}</RoleTitle>
              {/* TODO: Member gap 설정 필요 */}
              <div>
                {role.members.map((member) => (
                  <Member key={member}>{member}</Member>
                ))}
              </div>
            </div>
          ))}
        </RolesContainer>
      </HelpedSection>
    </CommitteeWrapper>
  );
}

export default GraduationCommittee;

const CommitteeWrapper = styled.div`
  height: 1080px;
  padding: 0px 140px 0px 140px;
`;

const Title = styled.h1`
  margin-bottom: 100px;
  font-size: 70px;
  font-weight: 800;
  line-height: 120%; /* 84px */
  letter-spacing: -1.4px;
`;

const HelpedSection = styled.section`
  margin-top: 200px;
`;

const SubTitle = styled.h2`
  font-size: 40px;
  font-weight: 800;
  line-height: 120%; /* 48px */
  letter-spacing: -0.8px;
  margin-bottom: 100px;
`;

const RolesContainer = styled.div`
  display: flex;
  gap: 100px;
`;

const RoleTitle = styled.h3`
  margin-bottom: 50px;
  color: #ff4500;
  font-size: 24px;
  font-weight: 700;
  line-height: 150%; /* 48px */
  letter-spacing: -0.736px;
`;

const Member = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.736px;
`;
