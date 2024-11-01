import { Box, Stack, Typography } from "@mui/material"
import { WhiteButton } from "src/components/button/white-button"
import Image from "src/components/image"
import SvgColor from "src/components/svg-color"

type Props = {
    title: string
    src: string
}

export default function ProjectItem({ src, title }: Props) {
    return (
        <Box>
            <Image src={src} sx={{ borderRadius: '16px' }} />
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mt={'16px'}>
                <Typography fontSize={20} fontFamily={'inter-medium'} textAlign={'left'}>
                    {title}
                </Typography>
                <WhiteButton endIcon={(
                    <SvgColor src={'/assets/images/home/svg/arrow-south.svg'} color={'#7A7A7A'} sx={{ width: 20, height: 20, pb: '8px' }} />
                )}>
                    View project
                </WhiteButton>
            </Stack>
        </Box>
    )
}