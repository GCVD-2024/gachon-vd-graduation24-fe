import { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import { WORDS } from '../../../../../constants/constants';

const CANVAS_WIDTH = 1400;
const CANVAS_HEIGHT = 800;
const WALL_THICKNESS = 50;

const createWalls = () => [
  Matter.Bodies.rectangle(CANVAS_WIDTH / 2, -WALL_THICKNESS / 2, CANVAS_WIDTH, WALL_THICKNESS, {
    isStatic: true,
  }),
  Matter.Bodies.rectangle(
    CANVAS_WIDTH / 2,
    CANVAS_HEIGHT + WALL_THICKNESS / 2,
    CANVAS_WIDTH,
    WALL_THICKNESS,
    { isStatic: true }
  ),
  Matter.Bodies.rectangle(-WALL_THICKNESS / 2, CANVAS_HEIGHT / 2, WALL_THICKNESS, CANVAS_HEIGHT, {
    isStatic: true,
  }),
  Matter.Bodies.rectangle(
    CANVAS_WIDTH + WALL_THICKNESS / 2,
    CANVAS_HEIGHT / 2,
    WALL_THICKNESS,
    CANVAS_HEIGHT,
    { isStatic: true }
  ),
];

const createWordBody = (word: string) => {
  const x = Math.random() * CANVAS_WIDTH;
  const y = Math.random() * (CANVAS_HEIGHT / 2);
  const fontSize = 32;
  const boxWidth = word.length * fontSize * 0.6;
  const boxHeight = fontSize * 1.2;

  console.log(WORDS.length);

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

  useEffect(() => {
    const engine = Matter.Engine.create();
    const world = engine.world;

    if (!sceneRef.current) return;

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: CANVAS_WIDTH,
        height: CANVAS_HEIGHT,
        wireframes: false,
        background: 'transparent',
      },
    });

    const walls = createWalls();
    const wordBodies = WORDS.map(createWordBody);

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
          context.font = `${text.size}px ${text.family}`;
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
  }, []);

  return <div ref={sceneRef} />;
}
