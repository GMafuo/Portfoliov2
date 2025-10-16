import { useEffect, useMemo, useState } from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

const ParticlesContainer = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      await loadSlim(window.tsParticles);
      setInit(true);
    };

    initParticles();
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: {
        color: {
          value: "",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          push: {
            quantity: 90,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#e68e2e",
        },
        links: {
          color: "#f5d393",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: {
            min: 1,
            max: 5,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) {
    return null;
  }

  return (
    <Particles
      className="w-full h-full absolute translate-z-0"
      id="tsparticles"
      options={options}
    />
  );
};

export default ParticlesContainer;