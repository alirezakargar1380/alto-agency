"use client";

// import "./test.scss"
import "./style.css"

import { Box, BoxProps, Button, Container, Typography } from "@mui/material";
import { MotionViewport, varFade } from "src/components/animate";
import { m, MotionProps } from 'framer-motion';
import { Variant } from "@mui/material/styles/createTypography";
import AnimatedCursor from "react-animated-cursor";
import CarouselCenterMode from "../carousel-view/carousel-center-mode";
import { _mock } from "src/_mock";

export default function HomeView() {

    return (
        <Box>
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
            <div className="grid-anima"></div>
            <div style={{
                overflow: 'auto',
                background: 'radial-gradient(circle at center, transparent, #fbfbfbb3)',
                backgroundPosition: 'top center',
                position: 'absolute',
                width: '100%',
            }}>
                <section style={{
                    backgroundImage: "url('./bggb.png')",
                    backgroundSize: 'cover',
                    backgroundPositionX: 'center',
                    backgroundPositionY: 'top',
                    backgroundRepeat: 'no-repeat',
                    overflow: 'auto',
                }}>
                    <Box sx={{
                        background: 'linear-gradient(transparent, transparent, #82a5ff7a)'
                    }}>
                        <Container component={MotionViewport}>
                            <Box py={26} textAlign={'center'} justifyContent={'center'}>
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
                    </Box>
                </section>
                <Box sx={{
                    width: '100%',
                }}>
                    <Box
                        sx={{
                            width: 1,
                            // background: 'linear-gradient(transparent, #fff, transparent)',
                        }}
                    >
                        <Box sx={{
                            width: 1,
                            // backgroundImage: "url('./Vector 1335.png')",
                            background: 'linear-gradient(#82a5ff7a, #82a5ff7a, #82a5ff7a, #fff, #fff, transparent)',
                            backgroundSize: 'cover',
                            backgroundPositionX: 'center',
                            backgroundPositionY: 'center',
                            backgroundRepeat: 'no-repeat',
                            pb: 20,
                        }}>
                            <CarouselCenterMode
                                data={[...Array(20)].map((_, index) => ({
                                    id: _mock.id(index),
                                    title: _mock.postTitle(index),
                                    coverUrl: 'f27.jpg' || _mock.image.cover(index),
                                    description: _mock.description(index),
                                }))}
                            />
                        </Box>
                        <Box width={1} overflow={'auto'}>
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
                    </Box>
                </Box>
            </div>
        </Box>
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