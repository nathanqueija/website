import { useSpring } from 'react-spring';
import { easeExpOut } from 'd3-ease';

const calc = (x, y) => [-(y - 220 / 2) / 30, (x - 220 / 2) / 30, 1.1];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
import Card from './Card.style';
export default ({ img }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 1, tension: 800, friction: 30 }
  }));

  return (
    <Card
      // onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      // onMouseLeave={() => set({ xys: [0, 0, 1] })}
      // style={{ transform: props.xys.interpolate(trans) }}
      img={img}
    />
  );
};
