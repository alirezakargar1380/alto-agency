'use client';

import { Avatar, Box, Button, Container, Stack, SvgIcon, Tooltip, Typography } from "@mui/material";
import Image from "src/components/image";
import { IProjectItem } from "src/types/project";
import AvatarGroup, { avatarGroupClasses } from '@mui/material/AvatarGroup';

type Props = {
    project: IProjectItem;
};

// SVG ICONS
import StarIcon from './../../../../public/assets/icons/projects/figma-logo.svg';
import TypescriptIcon from './../../../../public/assets/icons/projects/typescript-icon-logo.svg';
import PhaserIcon from './../../../../public/assets/icons/projects/phaser-logo.svg';


import TiltCard from "src/components/animation/tilt-card";
import { _mock } from "src/_mock";
import { paths } from "src/routes/paths";
import SvgColor from "src/components/svg-color";

export default function Template({ project }: Props) {

    const {
        title,
        src,
        duration,
        content,
        link,
        teams,
        tools,
    } = project;

    return (
        <Container maxWidth={'lg'}>
            <Stack
                direction={{
                    xs: 'column',
                    md: 'row',
                }}
                gap={10}
                alignItems="center"
                justifyContent={'space-between'}
                sx={{
                    mt: {
                        xs: 10,
                        // md: '0px',
                    },
                }}
            >
                <TiltCard>
                    <Box width={500} height={374}>
                        <Image src={src} sx={{ borderRadius: { xs: '0px', md: '16px' }, objectFit: 'cover', width: 1 }} />
                    </Box>
                </TiltCard>
                <Box width={'fit-content'}>
                    <Box
                        columnGap={{
                            xs: 14,
                            // md: 14,
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
                            <Typography mt={'16px'} fontSize={18} fontFamily={'inter-bold'} whiteSpace={'pre-wrap'}>{title}</Typography>
                        </Box>
                        <Box width={'fit-content'}>
                            <Typography fontSize={14} fontFamily={'inter-medium'}>Duration</Typography>
                            <Typography mt={'16px'} fontSize={18} fontFamily={'inter-bold'}>{duration}</Typography>
                        </Box>
                        <Box>
                            <Typography fontSize={14} fontFamily={'inter-medium'}>Tools</Typography>
                            <Box
                                mt={'16px'}
                                width={'fit-content'}
                                columnGap={2}
                                justifyContent={'space-between'}
                                rowGap={2}
                                display="grid"
                                gridTemplateColumns={{
                                    xs: 'repeat(3, 1fr)',
                                    // md: 'repeat(2, 1fr)',

                                }}>
                                {tools?.map((tool, index) => (
                                    <Tooltip title={tool.alt} key={index}>
                                        <Box>
                                            <Image src={tool.icon} sx={{ width: tool.width }} />
                                        </Box>
                                    </Tooltip>
                                ))}
                            </Box>
                        </Box>
                        <Box width={'fit-content'}>
                            <Typography fontSize={14} fontFamily={'inter-medium'}>Teams</Typography>
                            <AvatarGroup
                                sx={{
                                    mt: '16px',
                                    [`& .${avatarGroupClasses.avatar}`]: {
                                        width: 42,
                                        height: 42,
                                    },
                                }}
                            >
                                {teams?.map((team, index) => (
                                    <Avatar
                                        key={index}
                                        alt={team}
                                        src={team}
                                    />
                                ))}
                            </AvatarGroup>
                        </Box>
                    </Box>
                    {(link) && (
                        <Button variant="contained" href={link} target="_blank" sx={{ mt: 4, outline: '4px solid #939393B2', borderRadius: '12px', px: '40px', py: '12px', fontFamily: 'montserrat-thin' }}>
                            View Live
                            <SvgColor src="/assets/images/home/svg/arrow-right.svg" sx={{ ml: '8px' }} />
                        </Button>
                    )}

                </Box>
            </Stack>
            <Box mt={'75px'}>
                {content}
            </Box>
        </Container>
    );
}