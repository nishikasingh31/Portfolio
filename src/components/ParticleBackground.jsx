import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

const ParticleBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = {
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: { enable: true, mode: "grab" }, // Connects lines to mouse
            },
            modes: {
                grab: { distance: 150, links: { opacity: 0.5 } },
            },
        },
        particles: {
            color: { value: "#55e0ff" }, // Matching your neon blue accent
            links: {
                color: "#55e0ff",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
            },
            move: {
                enable: true,
                speed: 1.2,
                direction: "none",
                random: false,
                straight: false,
                outModes: { default: "out" },
            },
            number: {
                density: { enable: true, area: 800 },
                value: 80, // Adjust density here
            },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
    };

    if (init) {
        return (
            <Particles
                id="tsparticles"
                className="absolute inset-0 -z-10"
                options={options}
            />
        );
    }

    return null;
};

export default ParticleBackground;