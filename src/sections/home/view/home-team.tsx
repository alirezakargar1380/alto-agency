import { Box, Card, Dialog, Link, Stack, Typography } from "@mui/material";
import { m } from 'framer-motion';
import { WhiteButton } from "src/components/button/white-button";
import { DialogWithButton } from "src/components/custom-dialog";
import Iconify from "src/components/iconify";
import Image from "src/components/image";
import { useBoolean } from "src/hooks/use-boolean";

interface ILink {
    github?: string,
    instagram?: string,
    linkedin?: string,
    youtube?: string,
    twitter?: string,
    telegram?: string,
}

interface ITeam {
    name: string;
    role: string;
    src: string;
    description: string;
    links: ILink;
}

const teams: ITeam[] = [
    {
        name: "Alireza Kargar",
        role: "Full Stack Web Developer",
        src: "/assets/images/team/ak.jpg",
        description: "i'm alireza kargar with over 10 years of experience in web development. \n i'm a full stack web developer with a focus on building responsive and user-friendly websites. i have experience in a variety of programming languages and frameworks, including html, css, javascript, react, and node.js. i'm also familiar with a variety of web development tools and technologies, including git, github, and webpack. i'm a quick learner and i'm always looking for new challenges. i'm a team player and i'm always willing to help others. i'm a problem solver and i'm always looking for new ways to improve my skills. i'm a creative thinker and i'm always looking for new ways to improve my skills. i'm a problem solver and i'm always looking for new ways to improve my skills. i'm a creative thinker and i'm always looking for new ways to improve my skills. i'm a problem solver and i'm always looking for new ways to improve my skills. i'm a creative thinker and i'm always looking for new ways to improve my skills. i'm a problem solver and i'm always looking for new ways to improve my skills.",
        links: {
            github: "",
            instagram: "",
            linkedin: "",
            youtube: "",
            twitter: "",
        }
    },
    {
        name: "Ali Mousavi",
        role: "Product Designer",
        src: "/assets/images/team/ali_mousavi.jpg",
        description: "🚀 Passionate about crafting intuitive and engaging user experiences, I am a Senior Product Designer with over [X] years in the industry. My expertise lies at the intersection of design, technology, and user-centered problem solving. \n \n Core Skills: \n - User Research: Conducting thorough user research to understand needs and pain points. \n - UX/UI Design: Creating wireframes, prototypes, and high-fidelity mockups that communicate design concepts effectively. \n - Collaboration: Working closely with cross-functional teams including developers, product managers, and stakeholders to deliver cohesive products. \n - Design Systems: Developing and maintaining scalable design systems for consistent and harmonious user experiences. \n I thrive in dynamic environments, leveraging design thinking to drive innovation and enhance usability. My portfolio showcases successful projects that blend aesthetics with functionality, ensuring that every user interaction is delightful. \n Let’s connect to explore how I can bring value to your team and contribute to creating exceptional products!",
        links: {
            github: "",
            instagram: "",
            linkedin: "",
            youtube: "",
            twitter: "",
        }
    }
]

export default function HomeTeam() {
    return (
        <Box py={8} width={'fit-content'} mx={'auto'}>
            <m.div>
                <Typography fontSize={30} width={1} fontFamily={'inter-medium'} textAlign={'center'} mb={'56px'}>Team</Typography>
            </m.div>
            <Stack direction={'row'} spacing={4}>
                {teams.map((item) => (
                    <Item name={item.name} role={item.role} des={item.description} src={item.src} links={item.links} />
                ))}
            </Stack>
        </Box>
    )
}

function Item({ src, name, role, des, links }: { src: string, name: string, des: string, role: string, links: ILink }) {
    const dialog = useBoolean();
    return (
        <>
            <DialogWithButton dialog={dialog} fullWith>
                <Box display={'flex'} gap={2}>
                    <Image src={src} sx={{ borderRadius: 2, width: 320 }} />
                    <Box width={'fit-content'}>
                        <Typography fontSize={32} fontFamily={'inter-bold'} textAlign={'left'} pl={0}>{name}</Typography>
                        <Typography fontSize={12} fontFamily={'inter-medium'} whiteSpace={'break-spaces'}>
                            {des}
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