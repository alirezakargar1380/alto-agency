import { Box, Typography } from "@mui/material";
import { m } from 'framer-motion';
import { varSlide } from "src/components/animate";
import ProjectItem from "./project-item";
import { projects } from "src/data/projects";

export default function HomeProjects() {
    return (
        <Box py={25} width={'fit-content'} mx={'auto'}>
            <m.div
            // variants={varSlide({
            //     durationIn: 4,
            //     distance: 15
            // }).inRightLeft}
            >
                <Typography fontSize={30} width={1} fontFamily={'inter-medium'} textAlign={'center'} mb={'56px'}>Projects</Typography>
            </m.div>
            <Box
                columnGap={'24px'}
                rowGap={'40px'}
                display="grid"
                gridTemplateColumns={{
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                }}
            >
                {projects.map((item, index) => (
                    <ProjectItem title={item.title} key={index} src={item.src} />
                ))}
            </Box>
        </Box>
    )
}