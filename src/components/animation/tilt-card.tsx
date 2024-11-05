import React, { useRef, useCallback } from "react";
import {
    m,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";

interface TiltCardProps {
    children: React.ReactNode;
    rotationRange?: number;
    haltRotationRange?: number;
}

const DEFAULT_ROTATION_RANGE = 10.5;

export default function TiltCard({
    children,
    rotationRange = DEFAULT_ROTATION_RANGE,
    haltRotationRange = DEFAULT_ROTATION_RANGE
}: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`perspective(1000px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const { width, height } = rect;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const rX = (mouseY / height - 0.5) * rotationRange * 2;
        const rY = (mouseX / width - 0.5) * haltRotationRange;

        x.set(rX);
        y.set(rY);
    }, [rotationRange, x, y]);

    const handleMouseLeave = useCallback(() => {
        x.set(0);
        y.set(0);
    }, [x, y]);

    return (
        <m.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                translate: 'none',
                rotate: 'none',
                scale: 'node',
                transformStyle: "preserve-3d",
                perspective: '1000px',
                transform,
            }}
            className="relative h-96 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
        >
            <div
                style={{
                    transform: "translateZ(0px)",
                    transformStyle: "preserve-3d",
                    transition: "all 0.9s ease-in-out",
                }}
                className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
            >
                {children}
            </div>
        </m.div>
    );
}