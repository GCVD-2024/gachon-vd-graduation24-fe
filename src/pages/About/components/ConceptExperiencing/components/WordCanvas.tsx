import { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import { WORDS } from '../../../../../constants/constants';
import { useIsMobile } from '../../../../../hooks/useIsMobile';

const DESKTOP_CANVAS_WIDTH = 1060;
const DESKTOP_CANVAS_HEIGHT = 725;
const MOBILE_CANVAS_WIDTH = 343;
const MOBILE_CANVAS_HEIGHT = 326;
const WALL_THICKNESS = 50;

const createWalls = (width: number, height: number) => [
  Matter.Bodies.rectangle(width / 2, -WALL_THICKNESS / 2, width, WALL_THICKNESS, { isStatic: true }),
  Matter.Bodies.rectangle(width / 2, height + WALL_THICKNESS / 2, width, WALL_THICKNESS, { isStatic: true }),
  Matter.Bodies.rectangle(-WALL_THICKNESS / 2, height / 2, WALL_THICKNESS, height, { isStatic: true }),
  Matter.Bodies.rectangle(width + WALL_THICKNESS / 2, height / 2, WALL_THICKNESS, height, { isStatic: true }),
];

const createWordBody = (word: string, width: number, height: number, isMobile: boolean) => {
  const x = Math.random() * width;
  const y = Math.random() * (height / 2);
  const fontSize = isMobile ? 16 : 32;
  const boxWidth = word.length * fontSize * 0.6;
  const boxHeight = fontSize * 1.2;

  return Matter.Bodies.rectangle(x, y, boxWidth, boxHeight, {
    restitution: 0.6,
    friction: 0.1,
    render: {
      fillStyle: 'transparent',
      // @ts-ignore
      text: {
        content: word,
        color: 'white',
        size: fontSize,
        family: 'Arial',
      },
    },
  });
};

export default function WordCanvas() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const engine = Matter.Engine.create();
    const world = engine.world;

    if (!sceneRef.current) return;

    const width = isMobile ? MOBILE_CANVAS_WIDTH : DESKTOP_CANVAS_WIDTH;
    const height = isMobile ? MOBILE_CANVAS_HEIGHT : DESKTOP_CANVAS_HEIGHT;

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: width,
        height: height,
        wireframes: false,
        background: 'transparent',
      },
    });

    render.canvas.style.pointerEvents = 'none';

    const walls = createWalls(width, height);
    const wordBodies = WORDS.map(word => createWordBody(word, width, height, isMobile));

    Matter.World.add(world, [...walls, ...wordBodies]);

    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Matter.World.add(world, mouseConstraint);

    Matter.Events.on(render, 'afterRender', () => {
      const context = render.context;
      wordBodies.forEach((body: Matter.Body) => {
        const { x, y } = body.position;
        const { text } = body.render as any;
        if (text && context) {
          context.font = `${isMobile ? text.size : 30}px ${text.family}`;
          context.fillStyle = text.color;
          context.save();
          context.translate(x, y);
          context.rotate(body.angle);
          context.textAlign = 'center';
          context.textBaseline = 'middle';
          context.fillText(text.content, 0, 0);
          context.restore();
        }
      });
    });

    Matter.Runner.run(Matter.Runner.create(), engine);
    Matter.Render.run(render);

    return () => {
      Matter.Render.stop(render);
      Matter.World.clear(world, false);
      Matter.Engine.clear(engine);
      render.canvas?.remove();
    };
  }, [isMobile]);

  return <div ref={sceneRef} />;
}