'use client';

import { Box } from "@mui/material";
import { paths } from "src/routes/paths";
import { Card, Content, ContentImage, List, Title } from "../components/mui-custom";

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
                    <b>Here are some of the most special features in the Winner Bazi project:</b>
                    <List
                        items={[
                            'Each game has its robot that can process the game coordinates and play with you.',
                            'You can connect with other players and play or chat with them.',
                            'Create private games and invite your friends to join you in epic battles.',
                            'Online Chat and Conversation',
                            'Weekly Tournaments',
                            'Coin Transfer and Gifting',
                            'Coin Purchases'
                        ]}
                    />
                </Content>
            </Card>
            <br />
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