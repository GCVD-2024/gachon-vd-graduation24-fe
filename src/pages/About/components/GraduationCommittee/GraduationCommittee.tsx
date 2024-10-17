import React, { useRef } from 'react';
import styled from 'styled-components';
import { useIsMobile } from '../../../../hooks/useIsMobile';

const roles = [
  { title: '위원장', members: ['홍정우'] },
  { title: '웹', members: ['이가영', '이한별', '김도연'] },
  { title: '편집', members: ['조예진', '정다연'] },
  { title: '홍보', members: ['나선주'] },
  { title: '회계', members: ['이경택'] },
];

const developmentParticipations = [{ title: '개발', members: ['민세림', '유지민', '이은미'] }];

export default function GraduationCommittee(): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  return (
    <CommitteeWrapper ref={containerRef} isMobile={isMobile}>
      <section>
        <Title className="commitee_title" isMobile={isMobile}>
          2025
          <br />
          졸업 준비 위원회
        </Title>
        <RolesContainer isMobile={isMobile}>
          {roles.map((role) => (
            <div key={role.title} className="committee_content">
              <RoleTitle isMobile={isMobile}>{role.title}</RoleTitle>
              <div>
                {role.members.map((member) => (
                  <Member key={member} isMobile={isMobile}>
                    {member}
                  </Member>
                ))}
              </div>
            </div>
          ))}
        </RolesContainer>
      </section>
      <HelpedSection isMobile={isMobile}>
        <SubTitle className="commitee_title" isMobile={isMobile}>
          도움 주신 분들
        </SubTitle>
        <RolesContainer isMobile={isMobile}>
          {developmentParticipations.map((role) => (
            <div key={role.title} className="introduction_content">
              <RoleTitle isMobile={isMobile}>{role.title}</RoleTitle>
              <div>
                {role.members.map((member) => (
                  <Member key={member} isMobile={isMobile}>
                    {member}
                  </Member>
                ))}
              </div>
            </div>
          ))}
        </RolesContainer>
      </HelpedSection>
    </CommitteeWrapper>
  );
}

const CommitteeWrapper = styled.div<{ isMobile: boolean }>`
  height: ${(props) => (props.isMobile ? 'auto' : '1080px')};
  padding: ${(props) => (props.isMobile ? '40px 20px' : '80px 310px')};
`;

const Title = styled.h1<{ isMobile: boolean }>`
  margin-bottom: ${(props) => (props.isMobile ? '50px' : '100px')};
  font-size: ${(props) => (props.isMobile ? '32px' : '40px')};
  font-weight: 800;
  line-height: 1.2;
`;

const HelpedSection = styled.section<{ isMobile: boolean }>`
  margin-top: ${(props) => (props.isMobile ? '80px' : '150px')};
`;

const SubTitle = styled.h2<{ isMobile: boolean }>`
  font-size: ${(props) => (props.isMobile ? '28px' : '40px')};
  font-weight: 800;
  letter-spacing: ${(props) => (props.isMobile ? '-0.56px' : '-0.8px')};
  margin-bottom: ${(props) => (props.isMobile ? '50px' : '100px')};
`;

const RolesContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => (props.isMobile ? '16px' : '70px')};
`;

const RoleTitle = styled.h3<{ isMobile: boolean }>`
  margin-bottom: ${(props) => (props.isMobile ? '20px' : '50px')};
  color: #00b4db;
  font-size: ${(props) => (props.isMobile ? '14px' : '16px')};
  font-weight: 700;
`;

const Member = styled.div<{ isMobile: boolean }>`
  font-size: ${(props) => (props.isMobile ? '14px' : '16px')};
  font-weight: 500;
  margin-bottom: ${(props) => (props.isMobile ? '10px' : '0')};
`;
