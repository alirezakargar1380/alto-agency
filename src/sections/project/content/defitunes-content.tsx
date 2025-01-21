'use client';

import { Box, Link } from "@mui/material";
import { paths } from "src/routes/paths";
import { Card, Content, ContentImage, List, Title } from "../components/mui-custom";

export default function DefitunesContent() {
    return (
        <Box width={1}>
            <Card>
                <Title>About</Title>
                <Content>
                    Defitunes is an online social meadia music streaming platform that allows users to listen or buy their favorite songs and follow their favorite artists.
                    <br />
                    Also defitunes has a shop that allows users to buy and sell digital items with the platform's native token.
                </Content>
            </Card>
            {/* <Card>
                <Title>My Role:</Title>
                <Content>
                    In the Winner Bazi project, i was game developer and Back-end developer.
                    <br />
                    I developed 6 games in my period of work. <b>Backgammon</b>, <b>Dots And Lines</b>, <b>Chess</b>, <b>Battleship</b>, <b>Question</b> and <b>XO</b>.
                </Content>
            </Card> */}
            <Card>
                <Title>About Development:</Title>
                <Content>
                    <b>Here are some of the most special features in the Defitunes project:</b>
                    <List
                        items={[
                            'Each artist has their own page',
                            'Management'
                        ]}
                    />
                </Content>
            </Card>
            <br />
            <Card>
                <Title>Each Artist Has Their own page:</Title>
                <Content>
                    in the artist page you can see the artist's profile and his/her songs.
                    or you can see the artist's tracks, albums and followers in the home page.
                    <br />
                    this is artist page: <Link href={"https://defitunes.com/artist/24/"} target="_blank">Click</Link>
                    <ContentImage src={paths.project.imgSrc('101shots_so.png')} />
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