'use client';

import { Box, Typography } from "@mui/material";
import Image from "src/components/image";
import { paths } from "src/routes/paths";
import { ContentImage } from "../components/mui-custom";

function Title({ children }: { children: React.ReactNode }) {
    return <Typography fontFamily={'inter-bold'} fontSize={18}>{children}</Typography>
}

function Content({ children }: { children: React.ReactNode }) {
    return <Box fontFamily={'inter-medium'} fontSize={18} whiteSpace={'break-spaces'} mt={'8px'} width={1}>{children}</Box>
}

function Card({ children }: { children: React.ReactNode }) {
    return <Box mt={'8px'} mb={'28px'}>{children}</Box>
}

export default function WinnerBaziContent() {
    return (
        <Box width={1}>
            <Card>
                <Title>About</Title>
                <Content>
                    {"WinnerBazi, an exhilarating two-player online game. WinnerBazi offers a captivating gaming experience with an array of exciting features."}
                </Content>
            </Card>
            <Card>
                <Title>My Role:</Title>
                <Content>
                    In the Winner Bazi project, I Was game developer and Back-end developer.
                    <br />
                    <br />
                    I develop 6 game on my perioud of work. <b>Backgammon</b>, <b>Dots And Lines</b>, <b>Chess</b>, <b>Battleship</b>, <b>Question</b> and <b>XO</b>.
                    <br />
                    {"In the Winner Bazi project, I played the role of a game developer. I was responsible for creating and maintaining the game's user interface, ensuring a smooth and enjoyable experience for players."}
                </Content>
            </Card>
            <br />
            <Card>
                <Title>About Games:</Title>
                <Content>
                    every game has its own unique features and gameplay mechanics.
                    <br />
                    <br />
                    <b>Here are some of the most popular games in the Winner Bazi project:</b>

                    <br />
                    {"      "}- each game has its own robot that process the game coordinates and play with you.
                    <br />
                    {"      "}- you can connect with other players and play or chat with them.

                    <br />
                    <br />
                </Content>
            </Card>
            <br />
            <br />
            <br />
            <br />
            <Card>
                <Title>Play with Others:</Title>
                <Content>
                    {"Join the vibrant online lobby where you can challenge other players from around the world. With a selection of 10 different games to choose from, you'll always find something that suits your preferences."}
                    <ContentImage src={paths.project.imgSrc('large_N9p0j_Or_Rpcz_WOH_0hy_A_Nw_e48c8e0607.png')} />
                </Content>
            </Card>
            <Card>
                <br />
                <br />
                <Title>Game with Friends:</Title>
                <Content>
                    {"Create private games and invite your friends to join you in epic battles. \n Enjoy friendly competition and showcase your skills against your closest companions."}
                    <ContentImage src={paths.project.imgSrc('large_c7_Q1_T42nl_Icf_YUD_6gj5_E_478ed236e1.png')} />
                </Content>
            </Card>
        </Box>
    )
}