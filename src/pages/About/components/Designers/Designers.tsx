import { useRef } from 'react';
import styled from 'styled-components';
import { useIsMobile } from '../../../../hooks/useIsMobile';

const designers = [
  '이다현',
  '권현아',
  '안준범',
  '송영민',
  '정시온',
  '박초희',
  '김채은',
  '류현주',
  '이유정',
  '허윤정',
  '오태현',
  '강지은',
  '이형철',
  '정지우',
  '김지수',
  '노지은',
  '이은재',
  '유서연',
  '안우현',
  '신하은',
  '홍정우',
  '김지용',
  '최홍혁',
  '정다현',
  '박주성',
  '이가연',
  '백승빈',
  '이지윤',
  '김예현',
  '신도한',
  '박수지',
  '김지우',
  '김지원',
  '심지현',
  '조원형',
  '강민재',
  '장은영',
  '유지민',
  '황주현',
  '정윤선',
  '장채원',
  '김민지',
  '류정경',
  '김용일',
  '나선주',
  '김민지',
  '이가영',
  '박연수',
  '김도연',
  '박서연',
  '조예진',
  '정다연',
  '이한별',
  '이경택',
  '오민택',
  '박이레',
  '조예찬',
  '이지민',
  '오치영',
  '채승우'
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
  line-height: 140%;
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
  line-height: 140%;
`;
