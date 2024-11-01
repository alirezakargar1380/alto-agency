import { Box, Stack, Typography } from "@mui/material"
import { WhiteButton } from "src/components/button/white-button"
import Image from "src/components/image"
import SvgColor from "src/components/svg-color"
import { m } from 'framer-motion';
import { varSlide } from "src/components/animate";

export type IProjectItem = {
    title: string
    src: string
}

export default function ProjectItem({ src, title }: IProjectItem) {
    const slideVariant = varSlide({
        durationIn: 4,
        distance: 15
    }).inRightLeft;

    return (
        <m.div
            whileHover={{
                scale: 1.01,
                transition: {
                    duration: 1,
                    ease: 'easeInOut'
                }
            }}
        >
            <Box width={'402px'}>
                <Box height={'300px'}>
                    <Image src={src} width={1} height={1} sx={{ borderRadius: '16px', objectFit: 'cover' }} />
                </Box>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'normal'} mt={'16px'}>
                    <Typography fontSize={20} fontFamily={'inter-bold'} textAlign={'left'}>
                        {title}
                    </Typography>
                    <m.div
                        whileHover={{ scale: 1.1, transition: { duration: 1, ease: 'easeInOut' } }}
                        variants={varSlide({
                            durationIn: 4,
                            distance: 4
                        }).inRightLeft}
                    >
                        <WhiteButton sx={{ whiteSpace: 'nowrap' }} endIcon={(
                            <SvgColor src={'/assets/images/home/svg/arrow-south.svg'} color={'#7A7A7A'} sx={{ width: 20, height: 20, pb: '8px' }} />
                        )}>
                            View project
                        </WhiteButton>
                    </m.div>

                </Stack>
            </Box>
        </m.div >
    )
}