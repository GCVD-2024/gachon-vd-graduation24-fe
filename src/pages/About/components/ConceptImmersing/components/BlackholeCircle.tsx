import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Particle[] = [];
    const particleCount = 1500;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const circleRadius = 250;
    const trailLength = 10;

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * (canvas.width / 2 - circleRadius - 150) + circleRadius;
      particles.push({
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        radius: Math.random() * 2,
        angle: angle,
        speed: Math.random() * 0.002 + 0.001,
        distance: distance,
        targetDistance: distance,
        trail: [],
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.arc(centerX, centerY, circleRadius, 0, Math.PI * 2);

      ctx.beginPath();
      ctx.arc(centerX, centerY, circleRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.stroke();

      ctx.fillStyle = 'white';
      ctx.font = 'bold 70px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('Immersing', centerX, centerY - 50);
      ctx.fillText('몰입하다', centerX, centerY + 50);

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
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  return (
    <Circle onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Canvas ref={canvasRef} width={1055} height={1055} />
    </Circle>
  );
}

const Circle = styled.div`
  width: 980px;
  height: 980px;
  position: relative;
  overflow: hidden;
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
`;
