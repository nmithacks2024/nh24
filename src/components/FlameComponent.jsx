import { useEffect, useState } from "react";
import styled from "styled-components";

const FlameComponent = () => {
  const [flames, setFlames] = useState([]);

  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      addFlame(clientX, clientY);
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const addFlame = (x, y) => {
    const flame = {
      id: Date.now(),
      x,
      y,
      lifeSpan: 2,
    };

    setFlames((prevFlames) => [...prevFlames, flame]);

    setTimeout(() => {
      setFlames((prevFlames) => prevFlames.filter((f) => f.id !== flame.id));
    }, flame.lifeSpan * 1000);
  };

  return (
    <FlamesContainer>
      {flames.map((flame) => (
        <Flame
          key={flame.id}
          x={flame.x}
          y={flame.y}
          lifeSpan={flame.lifeSpan}
        />
      ))}
    </FlamesContainer>
  );
};

const FlamesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
`;

const Flame = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #ff4500;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(${(props) => props.lifeSpan});
  animation: flicker ${(props) => props.lifeSpan}s linear infinite;
  pointer-events: none;
  opacity: 0.7;

  @keyframes flicker {
    0%,
    100% {
      opacity: 0.7;
    }
    50% {
      opacity: 1;
    }
  }
`;

export default FlameComponent;
