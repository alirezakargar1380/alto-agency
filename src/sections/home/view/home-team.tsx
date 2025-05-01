import { Box, Card, Stack, Typography } from "@mui/material";
import { m } from 'framer-motion';
import { WhiteButton } from "src/components/button/white-button";
import Image from "src/components/image";

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
    return (
        <>
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
                    <WhiteButton sx={{ whiteSpace: 'nowrap', mt: 2 }}>
                        read more
                    </WhiteButton>
                </Box>
            </Card>
        </>

    )
}