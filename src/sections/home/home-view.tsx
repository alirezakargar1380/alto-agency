"use client";

// import "./test.scss"
import "./style.css"

import { Box, BoxProps, Button, Card, Container, Stack, Typography } from "@mui/material";
import { MotionViewport, varFade } from "src/components/animate";
import { m, MotionProps } from 'framer-motion';
import { Variant } from "@mui/material/styles/createTypography";
import AnimatedCursor from "react-animated-cursor";
import CarouselCenterMode from "../carousel-view/carousel-center-mode";
import { _mock } from "src/_mock";
import MainLayout from "src/layouts/main";
import Image from "src/components/image";

export default function HomeView() {

    return (
        <MainLayout>
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
                    position: 'relative',
                    width: '100%',
                }}>
                    <Box sx={{
                        backgroundImage: "url('./bggb.png')",
                        backgroundSize: '100% 101%',
                        backgroundPositionX: 'center',
                        backgroundPositionY: 'center',
                        backgroundRepeat: 'no-repeat',
                        overflow: 'auto',
                        // '&::after': {
                        //     content: '"some content"',
                        //     // position: 'absolute',
                        //     width: '100%',
                        //     height: '100%',
                        //     background: 'linear-gradient(transparent, #82a5ff)',
                        //     display: 'block'
                        // }
                    }}>
                        <Box sx={{
                            // '&::before': {
                            //     content: '""',
                            //     // position: 'absolute',
                            //     width: '100%',
                            //     height: '171px',
                            //     background: 'linear-gradient(#82a5ff, transparent)',
                            //     display: 'block',
                            //     position: 'absolute',
                            // },
                            background: 'linear-gradient(transparent, transparent, #82a5ff82)',
                            '&::after': {
                                content: '""',
                                // position: 'absolute',
                                width: '100%',
                                height: '250px',
                                background: 'linear-gradient(#82a5ff82, #82a5ff82, transparent)',
                                display: 'block',
                                position: 'absolute',
                            }
                            // background: 'linear-gradient(transparent, transparent, transparent, #82a5ff7a)'
                        }}>
                            <Container component={MotionViewport}>
                                <Box py={50} textAlign={'center'} justifyContent={'center'}>
                                    <TextAnimate
                                        text="We create digital magic"
                                        variants={varFade().inUp}
                                        px={0.5}
                                        sx={{ width: 1, textAlign: 'center', justifyContent: 'center', fontFamily: 'inter-medium', fontSize: '60px!important' }}
                                    />
                                    <TextAnimate text="Beauty, creativity, and innovation unleashed."
                                        split=" "
                                        px={0.25}
                                        variants={varFade().inUp}
                                        sx={{
                                            fontFamily: 'montserrat-light', fontSize: '20px!important',
                                            mt: '16px'
                                        }}
                                    />
                                    <br />
                                    <Button variant="contained" sx={{ mt: 4, border: '4px solid #939393B2', borderRadius: '12px', px: 2, fontFamily: 'montserrat-thin' }}>
                                        Learn more
                                    </Button>
                                </Box>
                            </Container>
                        </Box>
                    </Box>
                    <Box sx={{
                        width: '100%',
                        overflow: 'auto',
                    }}>
                        <Box sx={{
                            width: 1,
                            // backgroundImage: "url('./vector 1335.png')",
                            // background: 'linear-gradient(#82a5ff7a, #82a5ff, #82a5ff, transparent)',
                            backgroundColor: '#F5F5FC',
                            backgroundSize: '200% 100%',
                            backgroundPositionX: 'center',
                            backgroundPositionY: 'center',
                            backgroundRepeat: 'no-repeat',
                            // pb: 20,
                        }}>
                            <Box sx={{
                                pb: 10,
                                background: 'linear-gradient(transparent, #82a5ff82, transparent)',
                            }}>
                                <CarouselCenterMode
                                    data={[
                                        "/assets/images/Frame 15514.jpg",
                                        "/assets/images/Frame 142.jpg",
                                        "/assets/images/Frame 27.jpg",
                                        "/assets/images/Frame 16140.png",
                                        "/assets/images/Frame 29.png",
                                    ].map((url, index) => {
                                        return {
                                            id: index.toString(),
                                            coverUrl: url,
                                            description: "",
                                            title: "",
                                            width: 100 * (index + 1)
                                        }
                                    })}
                                />
                            </Box>
                        </Box>
                        <Box sx={{
                            background: "radial-gradient(circle at center, transparent, transparent, #F5F5FC, #F5F5FC, #F5F5FC)",
                            width: 1,
                            textAlign: 'center',
                            pb: 16
                        }}>
                            <Box sx={{
                                background: 'linear-gradient(#F5F5FC, #F5F5FC, transparent)'
                            }}>
                                <Typography fontSize={30} width={1} fontFamily={'inter-medium'}>How We Bring Ideas to Life</Typography>
                                <Typography fontSize={18} width={1} mt={'10px'} fontFamily={'inter-medium'} color={'text.secondary'}>our design workflow is meticulously crafted to ensure <br /> clarity, efficiency, and excellence at every stage</Typography>
                            </Box>
                            <Stack width={'fit-content'} mx={'auto'} mt={'40px'} spacing={2}>
                                <Card sx={{ p: 1 }}>
                                    <Stack direction={'row'} spacing={3}>
                                        <Image src='/assets/images/home/Frame 16132.png' />
                                        <Stack textAlign={'left'} spacing={1}>
                                            <Typography fontFamily={'inter-bold'} color={"#6C8FFF"} fontSize={16}>Step 1</Typography>
                                            <Typography fontFamily={'inter-medium'} fontSize={16}>Client Consultation and Discovery</Typography>
                                            <Typography fontFamily={'inter-light'} color={"#6F6F6F"} fontSize={12}>Book a 20-minute call to see how we can help <br /> your business grow. No strings attached.</Typography>
                                        </Stack>
                                    </Stack>
                                </Card>
                                <Card sx={{ p: 1 }}>
                                    <Stack direction={'row'} spacing={3}>
                                        <Image src='/assets/images/home/Frame 16133.png' />
                                        <Stack textAlign={'left'} spacing={1}>
                                            <Typography fontFamily={'inter-bold'} color={"#6C8FFF"} fontSize={16}>Step 2</Typography>
                                            <Typography fontFamily={'inter-medium'} fontSize={16}>Design Task Definition and Planning</Typography>
                                            <Typography fontFamily={'inter-light'} color={"#6F6F6F"} fontSize={12}>
                                                Our Design Task Definition and Planning service
                                                <br />
                                                lays the foundation for successful projects by
                                                <br />
                                                clearly defining objectives, scope, and
                                                <br />
                                                requirements.
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </Card>
                                <Card sx={{ p: 1 }}>
                                    <Stack direction={'row'} spacing={3}>
                                        <Image src='/assets/images/home/Frame 16134.png' />
                                        <Stack textAlign={'left'} spacing={1}>
                                            <Typography fontFamily={'inter-bold'} color={"#6C8FFF"} fontSize={16}>Step 3</Typography>
                                            <Typography fontFamily={'inter-medium'} fontSize={16}>Product Design and Development <br /> Execution</Typography>
                                            <Typography fontFamily={'inter-light'} color={"#6F6F6F"} fontSize={12}>
                                                Our product design and development execution
                                                <br />
                                                service ensures every detail aligns with your
                                                <br />
                                                vision.
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </Card>
                            </Stack>
                        </Box>
                        <Box bgcolor={'#F5F5FC'} py={20}>
                            <Box width={'fit-content'} mx={'auto'}>
                                <Stack direction={'row'} spacing={2}>
                                    <Stack spacing={2}>
                                        <Card sx={{
                                            border: '3.29px solid #ABAEFF',
                                            pt: 3,
                                            pl: 3
                                        }}>
                                            <Stack direction={'row'} spacing={6}>
                                                <Stack spacing={1}>
                                                    <Image src="/assets/images/home/icons/Frame 16167.png" width={'fit-content'} />
                                                    <Typography fontSize={20}>mobile design</Typography>
                                                    <Typography fontSize={13.15}>
                                                        we ensure your mobile presence
                                                        <br />
                                                        stands out in a competitive
                                                        <br />
                                                        market.
                                                    </Typography>
                                                </Stack>
                                                <Image src="/assets/images/home/Frame 16220.png" />
                                            </Stack>
                                        </Card>
                                        <Card sx={{
                                            border: '3.29px solid #EEBEFF',
                                            background: "url('./assets/images/home/Frame 16233.png')",
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'top right',
                                            pb: 3,
                                            pl: 3
                                        }}>
                                            <Stack direction={'row'} spacing={6}>
                                                <Stack mt={'73px'} spacing={1}>
                                                    <Image src="/assets/images/home/icons/Frame 16169.png" width={'fit-content'} />
                                                    <Typography fontSize={20}>Ful-stack Develope</Typography>
                                                    <Typography fontSize={13.15}>
                                                        we ensure your mobile presence
                                                        <br />
                                                        stands out in a competitive
                                                        <br />
                                                        market.
                                                    </Typography>
                                                </Stack>
                                            </Stack>
                                        </Card>
                                    </Stack>
                                    <Stack spacing={2}>
                                        <Card sx={{
                                            border: '3.29px solid #FFE0C9',
                                            pt: 3,
                                            pl: 3,
                                            textAlign: 'right'
                                        }}>
                                            <Stack spacing={1} textAlign={'left'}>
                                                <Image src="/assets/images/home/icons/Frame 16168.png" width={'fit-content'} />
                                                <Typography fontSize={20}>Web design</Typography>
                                                <Typography fontSize={13.15}>
                                                    We deliver websites that not only look stunning but also <br /> provide a seamless user experience.
                                                </Typography>
                                            </Stack>
                                            <Image src="/assets/images/home/Frame 16219.png" ml={4} mt={1} />
                                        </Card>
                                        <Card sx={{
                                            border: '3.29px solid #D9D9D9',
                                            py: 4.8,
                                            px: 3,
                                            textAlign: 'right'
                                        }}>
                                            <Stack textAlign={'left'} justifyContent={'space-between'} direction={'row'} width={1}>
                                                <Stack direction={'row'}>
                                                    <Image src="/assets/images/home/icons/Frame 16167.png" />
                                                    <Typography fontSize={20} mt={1} ml={1}>Brand Identity</Typography>
                                                </Stack>
                                                <Image src="/assets/images/home/Group 20864.png" width={'fit-content'} />
                                            </Stack>
                                        </Card>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Box>
                        <Box>
                            <Box sx={{ background: '#F5F5FC', textAlign: 'center' }}>
                                <Typography fontSize={30} width={1} fontFamily={'inter-medium'}>What make a website better</Typography>
                                <Typography fontSize={18} width={1} mt={'10px'} fontFamily={'inter-medium'} color={'text.secondary'}>our design workflow is meticulously crafted to ensure <br /> clarity, efficiency, and excellence at every stage</Typography>
                            </Box>
                        </Box>
                    </Box>
                </div>
            </Box>
        </MainLayout>
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