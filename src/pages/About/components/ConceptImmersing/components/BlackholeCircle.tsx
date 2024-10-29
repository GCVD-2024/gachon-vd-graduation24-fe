import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useIsMobile } from '../../../../../hooks/useIsMobile';

interface Particle {
  x: number;
  y: number;
  radius: number;
  angle: number;
  speed: number;
  distance: number;
  targetDistance: number;
  trail: { x: number; y: number }[];
}

export default function BlackholeCircle() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Particle[] = [];
    const particleCount = isMobile ? 750 : 1500;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const circleRadius = isMobile ? 125 : 250;
    const trailLength = isMobile ? 5 : 10;

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * (canvas.width / 2 - circleRadius - (isMobile ? 75 : 150)) + circleRadius;
      particles.push({
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        radius: Math.random() * (isMobile ? 1 : 2),
        angle: angle,
        speed: Math.random() * 0.002 + 0.001,
        distance: distance,
        targetDistance: distance,
        trail: [],
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(18, 18, 18, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.arc(centerX, centerY, circleRadius, 0, Math.PI * 2);

      ctx.beginPath();
      ctx.arc(centerX, centerY, circleRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 180, 219, 1)';
      ctx.stroke();

      ctx.fillStyle = 'rgba(0, 180, 219, 1)';
      ctx.font = `bold ${isMobile ? '35px' : '70px'} Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('Immersing', centerX, centerY - (isMobile ? 25 : 50));
      ctx.fillText('몰입하다', centerX, centerY + (isMobile ? 25 : 50));

      particles.forEach((particle) => {
        if (isHovered) {
          particle.targetDistance = circleRadius;
        } else {
          particle.targetDistance = particle.distance;
        }

        particle.distance += (particle.targetDistance - particle.distance) * 0.05;

        particle.angle += particle.speed;
        particle.x = centerX + Math.cos(particle.angle) * particle.distance;
        particle.y = centerY + Math.sin(particle.angle) * particle.distance;

        particle.trail.unshift({ x: particle.x, y: particle.y });
        if (particle.trail.length > trailLength) {
          particle.trail.pop();
        }

        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        for (let i = 0; i < particle.trail.length; i++) {
          const t = particle.trail[i];
          ctx.lineTo(t.x, t.y);
        }
        ctx.strokeStyle = `rgba(255, 255, 255, ${
          0.5 - (0.5 / trailLength) * particle.trail.length
        })`;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 180, 219, 1)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered, isMobile]);

  return (
    <Circle 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      isMobile={isMobile}
    >
      <Canvas ref={canvasRef} width={isMobile ? 343 : 884} height={isMobile ? 343 : 884} />
    </Circle>
  );
}

const Circle = styled.div<{ isMobile: boolean }>`
  width: ${props => props.isMobile ? '343px' : '884px'};
  height: ${props => props.isMobile ? '343px' : '884px'};
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`;