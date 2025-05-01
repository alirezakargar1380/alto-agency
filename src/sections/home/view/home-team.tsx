import { Box, Card, Dialog, Link, Stack, Typography } from "@mui/material";
import { m } from 'framer-motion';
import { WhiteButton } from "src/components/button/white-button";
import { DialogWithButton } from "src/components/custom-dialog";
import Iconify from "src/components/iconify";
import Image from "src/components/image";
import { useBoolean } from "src/hooks/use-boolean";

export default function HomeTeam() {
    return (
        <Box py={8} width={'fit-content'} mx={'auto'}>
            <m.div>
                <Typography fontSize={30} width={1} fontFamily={'inter-medium'} textAlign={'center'} mb={'56px'}>Team</Typography>
            </m.div>
            <Stack direction={'row'} spacing={4}>
                <Item name="Alireza Kargar" role="Full Stack Web Developer" src="/assets/images/team/ak.jpg" />
                <Item name="Ali Mousavi" role="Product Designer" src="/assets/images/team/ak.jpg" />
            </Stack>
        </Box>
    )
}

function Item({ src, name, role }: { src: string, name: string, role: string }) {
    const dialog = useBoolean();
    return (
        <>
            <DialogWithButton dialog={dialog} fullWith>
                <Box display={'flex'} gap={2}>
                    <Image src={src} sx={{ borderRadius: 2, width: 320 }} />
                    <Box width={'fit-content'}>
                        <Typography fontSize={32} fontFamily={'inter-bold'} textAlign={'left'} pl={0}>{name}</Typography>
                        <Typography fontSize={12} fontFamily={'inter-medium'} whiteSpace={'break-spaces'}>
                            {"i'm alireza kargar with over 10 years of experience in web development. \n i'm a full stack web developer with a focus on building responsive and user-friendly websites. i have experience in a variety of programming languages and frameworks, including html, css, javascript, react, and node.js. i'm also familiar with a variety of web development tools and technologies, including git, github, and webpack. i'm a quick learner and i'm always looking for new challenges. i'm a team player and i'm always willing to help others. i'm a problem solver and i'm always looking for new ways to improve my skills. i'm a creative thinker and i'm always looking for new ways to improve my skills. i'm a problem solver and i'm always looking for new ways to improve my skills. i'm a creative thinker and i'm always looking for new ways to improve my skills. i'm a problem solver and i'm always looking for new ways to improve my skills. i'm a creative thinker and i'm always looking for new ways to improve my skills. i'm a problem solver and i'm always looking for new ways to improve my skills. i'm a"}
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography fontSize={32} fontFamily={'inter-bold'} textAlign={'left'} pl={0} mt={4}>My Social Media</Typography>
                    <Stack spacing={3} direction={'row'} mt={2}>
                    <Link href="https://github.com/alirezakargar1380" target="_blank" rel="noopener">
                            <Iconify icon={'mdi:github'} width={32} sx={{ color: '#000' }} />
                        </Link>
                        <Link href="https://www.youtube.com/@develop_it" target="_blank" rel="noopener">
                            <Iconify icon={'logos:youtube-icon'} width={32} sx={{ color: '#000' }} />
                        </Link>
                        <Link href="https://x.com/develop__it" target="_blank" rel="noopener">
                            <Iconify icon={'mingcute:social-x-line'} width={32} sx={{ color: '#000' }} />
                        </Link>
                        <Link href="https://www.instagram.com/alireza_kargar_dev" target="_blank" rel="noopener">
                            <Iconify icon={'nrk:some-instagram'} width={32} sx={{ color: '#000' }} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/alirezakargarr/" target="_blank" rel="noopener">
                            <Iconify icon={'garden:linkedin-fill-12'} width={32} sx={{ color: '#000' }} />
                        </Link>
                        <Link href="https://t.me/alireza_kargar_dev" target="_blank" rel="noopener">
                            <Iconify icon={'fa6-brands:telegram'} width={32} sx={{ color: '#000' }} />
                        </Link>
                    </Stack>
                </Box>

            </DialogWithButton>
            <Card
                sx={{
                    width: 400,
                    backdropFilter: 'blur(5px);',
                    borderRadius: 2,
                    p: 1
                    // border: '2px solid blue'
                }}
            >
                <Image src={src} sx={{ borderRadius: 2 }} />
                <Box pt={1} pb={1}>
                    {/* <Typography color={"#0440DD"} fontSize={24} fontFamily={'inter-bold'} fontWeight={'bold'}pt={0.5}>{'>_'}</Typography> */}
                    <Typography fontSize={32} fontFamily={'inter-bold'} textAlign={'left'} pl={0}>{name}</Typography>
                    <Typography fontSize={12} fontFamily={'inter-medium'} >{role}</Typography>
                    <WhiteButton sx={{ whiteSpace: 'nowrap', mt: 2 }} onClick={dialog.onTrue}>
                        read more
                    </WhiteButton>
                </Box>
            </Card>
        </>

    )
}