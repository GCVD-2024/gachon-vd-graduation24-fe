import { useRef } from 'react';
import styled from 'styled-components';
import { useIsMobile } from '../../../../hooks/useIsMobile';

const designers = [
  '김가현',
  '김가현',
  '김가현',
  '조예진',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '홍정우',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '나선주',
  '김가현',
  '김가현',
  '김가현',
  '정다연',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '이경택',
  '김가현',
  '이한별',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '심한별',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '김도연',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '김가현',
  '김도연',
  '김가현',
  '김가현',
  '김가현',
];

export default function Designers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  return (
    <DesignersWrapper ref={containerRef} isMobile={isMobile}>
        <Title isMobile={isMobile}>DESIGNERS</Title>
        <DesignersGrid isMobile={isMobile}>
          {designers.map((designer, index) => (
            <DesignerName key={index} isMobile={isMobile}>
              {designer}
            </DesignerName>
          ))}
        </DesignersGrid>
    </DesignersWrapper>
  );
}

const DesignersWrapper = styled.div<{ isMobile: boolean }>`
  padding: ${(props) => (props.isMobile ? '40px 20px' : '80px 310px')};
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1<{ isMobile: boolean }>`
  font-size: ${(props) => (props.isMobile ? '28px' : '40px')};
  font-weight: 900;
  margin-bottom: ${(props) => (props.isMobile ? '40px' : '80px')};
  margin-left: ${(props) => (props.isMobile ? '10px' : '30px')};
  text-align: start;
`;

const DesignersGrid = styled.div<{ isMobile: boolean }>`
  display: grid;
  grid-template-columns: repeat(${(props) => (props.isMobile ? 5 : 10)}, 1fr);
  gap: ${(props) => (props.isMobile ? '20px 10px' : '30px 20px')};
  justify-content: center;
`;

const DesignerName = styled.span<{ isMobile: boolean }>`
  font-size: ${(props) => (props.isMobile ? '12px' : '16px')};
  font-weight: 500;
  text-align: center;
`;
