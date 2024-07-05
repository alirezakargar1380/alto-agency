"use client";

// import "./test.scss"
import "./style.css"


import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Box, BoxProps, Button, Container, Typography } from "@mui/material";
import { MotionViewport, varFade } from "src/components/animate";
import { m, MotionProps } from 'framer-motion';
import { Variant } from "@mui/material/styles/createTypography";
// const Splitting = dynamic(() => import('splitting'), {
//     ssr: false
// })

export default function HomeView() {

    return (
        <div>
            <div className="grid"></div>
            <div style={{
                overflow: 'auto',
                background: 'radial-gradient(circle at center, transparent, #fbfbfbb3)',
                position: 'absolute',
                width: '100%',
            }}>
                <section style={{
                    backgroundImage: "url('./bggb.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    // opacity: 0.65,
                    overflow: 'auto',
                    height: '100vh'
                }}>
                    <Container component={MotionViewport}>
                        <Box mt={26} textAlign={'center'} justifyContent={'center'}>
                            <TextAnimate text="We create digital magic" variants={varFade().inUp}
                                px={0.5}
                                sx={{ width: 1, textAlign: 'center', justifyContent: 'center' }} />
                            <TextAnimate text="Beauty, creativity, and innovation unleashed."
                                split=" "
                                px={0.25}
                                variant="h6"
                                variants={varFade().inUp} />
                            <Typography variant="h5" width={1}></Typography>
                            <Button variant="contained" color="primary" sx={{ mt: 4 }}>Learn more</Button>
                        </Box>
                    </Container>

                </section>
                <Box width={1} bgcolor={'white'} overflow={'auto'} display={'none'}>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                </Box>
            </div>

        </div>

    )
    const [docEnv, setDocEnv] = useState(false);

    useEffect(() => {
        setDocEnv(true);
    }, []);

    useEffect(() => {
        if (!docEnv) return;

        setTimeout(async () => {
            const Splitting = await import("splitting");
            Splitting.default({
                target: ".grid-background",
                by: "cells",
                columns: 8 * 2,
                rows: 6 * 2
            });

            Splitting.default({
                target: ".grid-lines[data-vertical]",
                by: "cells",
                columns: 8 * 2,
                rows: 1
            });

            Splitting.default({
                target: ".grid-lines[data-horizontal]",
                by: "cells",
                columns: 1,
                rows: 6 * 2
            });
        }, 0)

    }, [docEnv]);

    return (
        <div id="app">
            <div className="grid-background"></div>
            <div className="grid-lines" data-vertical></div>
            <div className="grid-lines" data-horizontal></div>
            <section></section>
        </div>
    )
}

type TextAnimateProps = BoxProps &
    MotionProps & {
        text: string;
        split?: string;
        variant?: Variant
        px: number;
    };

function TextAnimate({ text, variants, variant = "h2", split = " ", px, sx, ...other }: TextAnimateProps) {
    return (
        <Box
            component={m.div}
            sx={{
                typography: variant,
                overflow: 'hidden',
                display: 'inline-flex',
                ...sx,
            }}
            {...other}
        >
            {text.split(split).map((letter, index) => (
                <m.span key={index} variants={variants || varFade().inUp}>
                    <Box px={px} key={index}>
                        {letter}
                    </Box>
                </m.span>
            ))}
        </Box>
    );
}