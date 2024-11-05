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
                    WinnerBazi, an exhilarating two-player online game.
                    <br />
                    WinnerBazi offers a captivating gaming experience with an array of exciting features.
                </Content>
            </Card>
            <Card>
                <Title>My Role:</Title>
                <Content>
                    In the Winner Bazi project, i was game developer and Back-end developer.
                    <br />
                    I developed 6 games in my period of work. <b>Backgammon</b>, <b>Dots And Lines</b>, <b>Chess</b>, <b>Battleship</b>, <b>Question</b> and <b>XO</b>.
                </Content>
            </Card>
            <Card>
                <Title>About Games:</Title>
                <Content>
                    every game has its own unique features and gameplay mechanics.
                    <br />
                    <br />
                    <b>Here are some of the most special features in the Winner Bazi project:</b>

                    <br />
                    {"      "}- Each game has its robot that can process the game coordinates and play with you.

                    <br />
                    {"      "}- You can connect with other players and play or chat with them.

                    <br />
                    {"      "}- Create private games and invite your friends to join you in epic battles.

                    <br />
                    {"      "}- Online Chat and Conversation

                    <br />
                    {"      "}- Weekly Tournaments

                    <br />
                    {"      "}- Coin Transfer and Gifting

                    <br />
                    {"      "}- Coin Purchases

                    <br />
                    <br />
                </Content>
            </Card>
            <Card>
                <Title>Play with Others:</Title>
                <Content>
                    {"Join the vibrant online lobby where you can challenge other players from around the world. \nWith a selection of 10 different games to choose from, you'll always find something that suits your preferences."}
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