"use client";

// import "./test.scss"
import "./style.css"

import { Box, BoxProps, Button, Card, Container, Stack, Typography } from "@mui/material";
import { MotionViewport, varFade, varRotate, varSlide } from "src/components/animate";
import { m, MotionProps } from 'framer-motion';
import { Variant } from "@mui/material/styles/createTypography";
import AnimatedCursor from "react-animated-cursor";
import CarouselCenterMode from "../../carousel-view/carousel-center-mode";
import { _mock } from "src/_mock";
import MainLayout from "src/layouts/main";
import Image from "src/components/image";
import ProjectItem from "../project-item";
import SvgColor from "src/components/svg-color";
import HomeProjects from "../home-projects";

export default function HomeView() {

    return (
        <Box sx={{ overflowX: 'hidden' }}>
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
                <MainLayout>
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
                                        sx={{
                                            width: 1, textAlign: 'center', justifyContent: 'center', fontFamily: 'inter-medium',
                                            fontSize: {
                                                xs: '30px!important',
                                                md: '60px!important'
                                            }
                                        }}
                                    />
                                    <TextAnimate text="Beauty, creativity, and innovation unleashed."
                                        split=" "
                                        px={0.25}
                                        variants={varFade().inUp}
                                        sx={{
                                            width: 1,
                                            textAlign: 'center', justifyContent: 'center',
                                            fontFamily: 'montserrat-light',
                                            fontSize: {
                                                xs: '14px!important',
                                                md: '20px!important'
                                            },
                                            mt: '16px'
                                        }}
                                    />
                                    <br />
                                    <Button variant="contained" sx={{ mt: 4, outline: '4px solid #939393B2', borderRadius: '12px', px: '24px', py: '12px', fontFamily: 'montserrat-thin' }}>
                                        Book a Free 30min call
                                        <SvgColor src="/assets/images/home/svg/arrow-right.svg" sx={{ ml: '8px' }} />
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
                            background: "radial-gradient(circle at center, transparent, #F5F5FC, #F5F5FC, #F5F5FC)",
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
                            <Container component={MotionViewport}>
                                <Stack width={'fit-content'} mx={'auto'} mt={'40px'} spacing={2}>
                                    <Card sx={{ p: 1 }}>
                                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
                                            <Image src='/assets/images/home/Frame 16132.png' />
                                            <Stack textAlign={'left'} spacing={1}>
                                                <Typography fontFamily={'inter-bold'} color={"#6C8FFF"} fontSize={16}>Step 1</Typography>
                                                <Typography fontFamily={'inter-medium'} fontSize={16}>Client Consultation and Discovery</Typography>
                                                <Typography fontFamily={'inter-light'} color={"#6F6F6F"} fontSize={12}>Book a 20-minute call to see how we can help <br /> your business grow. No strings attached.</Typography>
                                            </Stack>
                                        </Stack>
                                    </Card>
                                    <Card sx={{ p: 1 }}>
                                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
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
                                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
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
                            </Container>
                        </Box>
                        <Box bgcolor={'#F5F5FC'}>
                            <Container component={MotionViewport}>
                                <Box py={20}>
                                    <Box width={'fit-content'} mx={'auto'}>
                                        <Stack direction={{
                                            xs: 'column',
                                            md: 'row'
                                        }} spacing={2}>
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
                                                    backgroundColor: "#fff",
                                                }}>
                                                    <Box sx={{
                                                        background: "url('./assets/images/home/Frame 16233.png')",
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'top right',
                                                        pb: 3,
                                                        pl: 3
                                                    }}>
                                                        <Stack direction={'row'} spacing={6}>
                                                            <Stack mt={'73px'} spacing={1}>
                                                                <Image src="/assets/images/home/icons/Frame 16169.png" width={'fit-content'} />
                                                                <Typography fontSize={20}>Full-stack Develope</Typography>
                                                                <Typography fontSize={13.15}>
                                                                    we ensure your mobile presence
                                                                    <br />
                                                                    stands out in a competitive
                                                                    <br />
                                                                    market.
                                                                </Typography>
                                                            </Stack>
                                                        </Stack>
                                                    </Box>

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
                                                        <Box width={'fit-content'}>
                                                            <m.div variants={varSlide({
                                                                durationIn: 4,
                                                                distance: 15
                                                            }).inRightLeft}>
                                                                <Image src="/assets/images/home/icons/Frame 16168.png" width={'fit-content'} />
                                                            </m.div>
                                                        </Box>
                                                        <Typography fontSize={20}>Web design</Typography>
                                                        <Typography fontSize={13.15}>
                                                            We deliver websites that not only look stunning but also <br /> provide a seamless user experience.
                                                        </Typography>
                                                    </Stack>
                                                    <Image src="/assets/images/home/Frame 16219.png" ml={4} mt={1} />
                                                </Card>
                                                <Card sx={{
                                                    border: '3.29px solid #D9D9D9',
                                                    py: 4.5,
                                                    px: 3,
                                                    textAlign: 'right'
                                                }}>
                                                    <Stack textAlign={'left'} justifyContent={'space-between'} direction={'row'} width={1}>
                                                        <Box display={'flex'} width={0.8}>
                                                            <Image src="/assets/images/home/icons/Frame 16167.png" width={'fit-content'} />
                                                            <Typography fontSize={20} mt={1} ml={1} width={'max-content'}>Brand Identity</Typography>
                                                        </Box>
                                                        <Box>
                                                            <m.div variants={varRotate({
                                                                easeIn: 'linear',
                                                                durationIn: 8,
                                                                // durationOut: 6,
                                                            }).infinity}>
                                                                <Image src="/assets/images/home/Group 20864.png" width={'fit-content'} />
                                                            </m.div>
                                                        </Box>
                                                    </Stack>
                                                </Card>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                </Box>
                                <Box pb={60}>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography fontSize={30} width={1} fontFamily={'inter-medium'}>What make a website better</Typography>
                                        <Typography fontSize={18} width={1} mt={'10px'} fontFamily={'inter-medium'} color={'text.secondary'}>our design workflow is meticulously crafted to ensure <br /> clarity, efficiency, and excellence at every stage</Typography>
                                        <Stack direction={{
                                            xs: 'column',
                                            md: 'row',
                                        }} spacing={2} width={'fit-content'} mx={'auto'} mt={6}>
                                            <Stack spacing={2}>
                                                <Card sx={{ px: 3, pt: 3, textAlign: 'left' }}>
                                                    <Typography color={"#0440DD"} fontSize={24} fontFamily={'inter-bold'} fontWeight={'bold'}>01</Typography>
                                                    <Typography fontSize={20} fontFamily={'inter-bold'}>Craft stronger copy.</Typography>
                                                    <Typography fontSize={12} fontFamily={'inter-medium'}>Our approach focuses on creating compelling, clear, and persuasive copy that resonates with your <br /> audience and drives action. </Typography>
                                                    <Image src="/assets/images/home/Frame 26104795.png" width={'fit-content'} my={5} />
                                                </Card>
                                                <Card sx={{ pt: 3, textAlign: 'left' }}>
                                                    <Stack spacing={1} px={3}>
                                                        <Typography color={"#0440DD"} fontSize={24} fontFamily={'inter-bold'} fontWeight={'bold'}>03</Typography>
                                                        <Typography fontSize={20} fontFamily={'inter-bold'}>Improved hierarchy and usability</Typography>
                                                        <Typography fontSize={12} fontFamily={'inter-medium'} lineHeight={'20px'}>
                                                            By organizing information logically and prioritizing key elements, you create a more intuitive <br /> experience that guides users seamlessly through your website. This approach not only makes the <br />content more accessible but also improves user satisfaction and engagement, ultimately driving<br /> better results for your brand.
                                                        </Typography>
                                                    </Stack>
                                                    <Box textAlign={'center'}>
                                                        <Image src="/assets/images/home/Frame 16266.png" width={'fit-content'} />
                                                    </Box>
                                                </Card>
                                            </Stack>
                                            <Card sx={{ pt: 3, textAlign: 'left' }}>
                                                <Stack spacing={1} px={3}>
                                                    <Typography color={"#0440DD"} fontSize={24} fontFamily={'inter-bold'} fontWeight={'bold'}>02</Typography>
                                                    <Typography fontSize={20} fontFamily={'inter-bold'}>To enhance trust, leverage the <br /> power of social proof.</Typography>
                                                    <Typography fontSize={12} fontFamily={'inter-medium'} lineHeight={'28px'}>
                                                        Social proof is a powerful tool to enhance trust in your <br />
                                                        brand. By showcasing various forms of validation, you can <br />
                                                        significantly boost credibility and reassure potential
                                                    </Typography>
                                                </Stack>
                                                <Box mt={4}
                                                    sx={{
                                                        background: "url('./assets/images/home/Group 208711.png')",
                                                        backgroundSize: 'cover',
                                                    }}
                                                >
                                                    <Image src="/assets/images/home/comments.png" width={1} ml={4} mt={1} />
                                                </Box>
                                            </Card>
                                        </Stack>
                                    </Box>
                                    <HomeProjects />
                                </Box>
                            </Container>
                        </Box>
                    </Box>
                </MainLayout >
            </div >
        </Box >
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