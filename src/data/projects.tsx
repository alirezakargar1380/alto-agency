import { IProjectItem, IProjectLabel } from "src/types/project";

import WinnerBaziContent from "../sections/project/content/winner-bazi-content";
import { paths } from "src/routes/paths";
import svg from "./icons";
import MyCampContent from "src/sections/project/content/my-camp-content";
import DefitunesContent from "src/sections/project/content/defitunes-content";

const ali = paths.project.avatarSrc('ali.png');
const me = paths.project.avatarSrc('alireza.png');

const label: Record<string, IProjectLabel> = {
    backend: {
        name: 'Backend Development',
        color: 'warning'
    },
    ui_ux: {
        name: 'UI/UX Design',
        color: 'warning'
    },
    live: {
        name: 'Live View',
        color: 'info'
    },
    fullStack: {
        name: 'Full Stack Development',
        color: 'warning'
    }
}

export const projects: IProjectItem[] = [
    {
        title: 'Winner Bazi',
        src: paths.project.imgSrc('winnerBazi.jpg'),
        duration: '2022 - 2023',
        lables: [label.backend],
        tools: [svg.ts, svg.phaser, svg.socket, svg.express, svg.nodeJs],
        teams: [me],
        content: <WinnerBaziContent />
    },
    {
        title: 'Karano',
        src: paths.project.imgSrc('29_3x_shots_so.png'),
        duration: '2024 - 2025',
        lables: [label.fullStack, label.ui_ux, label.live],
        tools: [svg.ts, svg.nodeJs, svg.nestJs, svg.react, svg.figma, svg.mui],
        teams: [me],
        content: <WinnerBaziContent />
    },
    // {
    //     title: 'Belcom Advertising Agency',
    //     src: '/assets/images/Frame 16140.png',
    //     duration: '2022 - 2023',
    //     lables: [label.ui_ux],
    //     content: <WinnerBaziContent />
    // },
    {
        title: 'My Camp',
        src: paths.project.imgSrc('mycamp.png'),
        duration: '2022/july - 2023/november',
        lables: [label.backend],
        tools: [svg.ts, svg.express, svg.socket],
        teams: [me],
        content: <MyCampContent />
    },
    {
        title: 'Defitunes (Stream Music & Shop)',
        src: paths.project.imgSrc('161_1x_shots_so.png'),
        duration: '3 Months',
        link: 'https://defitunes.com/',
        lables: [label.fullStack, label.live],
        tools: [svg.ts, svg.nodeJs, svg.nestJs, svg.react, svg.figma],
        teams: [me],
        content: <DefitunesContent />
    },
    // {
    //     title: 'Smart Way To plan Work',
    //     src: '/assets/images/projects/908_1x_shots_so.png',
    //     duration: '2022 - 2023',
    //     content: <WinnerBaziContent />
    // },
    // {
    //     title: 'Smart Way To plan Work',
    //     src: '/assets/images/projects/908_1x_shots_so_2.png',
    //     duration: '2022 - 2023',
    //     content: <WinnerBaziContent />
    // },
    // {
    //     title: 'Smart Way To plan Work',
    //     src: '/assets/images/projects/908_1x_shots_so_3.png',
    //     duration: '2022 - 2023',
    //     content: <WinnerBaziContent />
    // },
    // {
    //     title: 'Smart Way To plan Work',
    //     src: '/assets/images/projects/908_1x_shots_so 1.png',
    //     duration: '2022 - 2023',
    //     content: <WinnerBaziContent />
    // },
    // {
    //     title: 'WinnerBazi',
    //     src: '/assets/images/Frame 15514.jpg',
    //     duration: '2022 - 2023',
    //     content: <WinnerBaziContent />
    // },
    // {
    //     title: 'WinnerBazi',
    //     src: '/assets/images/Frame 27.jpg',
    //     duration: '2022 - 2023',
    //     content: <WinnerBaziContent />
    // },
]