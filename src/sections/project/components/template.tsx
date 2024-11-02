'use client';

import { Box, Container, Stack, SvgIcon, Typography } from "@mui/material";
import Image from "src/components/image";
import SvgColor from "src/components/svg-color";
import { paths } from "src/routes/paths";
import { IProjectItem } from "src/types/project";

type Props = {
    project: IProjectItem;
};

import StarIcon from './../../../../public/assets/icons/projects/figma-logo.svg';

export default function Template({ project }: Props) {

    const { title, src, duration, content } = project;

    return (
        <Container maxWidth={'lg'}>
            <Stack
                direction={{
                    xs: 'column',
                    md: 'row',
                }}
                alignItems="center"
                justifyContent={'space-between'}
                sx={{
                    mt: {
                        xs: 10,
                        md: '0px',
                    },
                }}
            >
                <Box width={500} height={374}>
                    <Image src={src} sx={{ borderRadius: '16px', objectFit: 'cover' }} />
                </Box>
                <Box width={{ xs: 1, md: 'fit-content' }}>
                    <Box
                        columnGap={{
                            xs: 12,
                            md: 24,
                        }}
                        justifyContent={'space-between'}
                        rowGap={'48px'}
                        display="grid"
                        gridTemplateColumns={{
                            xs: 'repeat(2, 1fr)',
                            // md: 'repeat(2, 1fr)',

                        }}
                        sx={{
                            my: {
                                xs: 10,
                                md: '0px',
                            },
                        }}
                    >
                        <Box>
                            <Typography fontSize={14} fontFamily={'inter-medium'}>Project’s name</Typography>
                            <Typography mt={'16px'} fontSize={18} fontFamily={'inter-bold'}>{title}</Typography>
                        </Box>
                        <Box>
                            <Typography fontSize={14} fontFamily={'inter-medium'}>Duration</Typography>
                            <Typography mt={'16px'} fontSize={18} fontFamily={'inter-bold'}>{duration}</Typography>
                        </Box>
                        <Box>
                            <Typography fontSize={14} fontFamily={'inter-medium'}>Tools</Typography>
                            <Box mt={'16px'}>
                                <SvgIcon component={StarIcon} color="inherit" viewBox="0 0 24 36" />
                            </Box>
                        </Box>
                        <Box>
                            <Typography fontSize={14} fontFamily={'inter-medium'}>Teams</Typography>
                            <Typography mt={'16px'} fontSize={18} fontFamily={'inter-bold'}>{duration}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Stack>
            <Box mt={'75px'}>{content}</Box>
        </Container>
    );
}