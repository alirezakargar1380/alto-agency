"use client";

// import "./test.scss"
import "./style.css"

import { useEffect, useState } from "react";
import { Box, BoxProps, Button, Container, Typography } from "@mui/material";
import { MotionViewport, varFade } from "src/components/animate";
import { m, MotionProps } from 'framer-motion';
import { Variant } from "@mui/material/styles/createTypography";
import AnimatedCursor from "react-animated-cursor";
// const Splitting = dynamic(() => import('splitting'), {
//     ssr: false
// })

export default function HomeView() {

    return (
        <div style={{
            // cursor: "url('./cursor.png')"
        }}>
            <AnimatedCursor
                innerSize={100}
                outerSize={30}
                color='#000'
                outerAlpha={1}
                innerScale={0.7}
                outerScale={5}
                outerStyle={{
                    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 20px',
                }}
            >
                <img src={"./cursor.png"} />
            </AnimatedCursor>
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

    );
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