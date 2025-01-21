'use client';

import { Box } from "@mui/material";
import { paths } from "src/routes/paths";
import { Card, Content, ContentImage, List, Title } from "../components/mui-custom";

export default function MyCampContent() {
    return (
        <Box width={1} my={20}>
            <Card>
                <Title>About</Title>
                <Content>
                    My Camp is a web application that allows users to donate to their favorite streamers and streamers can receive donations on their live immediately after the user paid their donation as a git donate!!!
                    <br />
                    <br />
                    Streamers can set condition for their gif donate, for example:
                    <br />
                    <b>1. If the user donates more than 100$ he/she will get a special gif donate.</b>
                    <br />
                    <b>2. If the user donates less than 100$ he/she will get a normal gif donate.</b>
                </Content>
            </Card>
            <Card>
                <Title>My Role:</Title>
                <Content>
                    In This project, i was Back-end developer and i develop the Real-Time service to receive and pay donation.
                    <br />
                    I was also a team leader at Karo, where I managed three teammates to develop every part of the platform.
                </Content>
            </Card>
            <Card>
                <Title>About Plathform:</Title>
                <Content>
                    <b>Here are some of the most special features in the My Camp project:</b>
                    <List
                        items={[
                            'Real-time Platform, donations are received immediately after the user pays.',
                            'Streamers can set conditions for their gif donate.',
                            'Streamers can see their donations report and chart in the dashboard.',
                            'Compatibility with OBS software ;)',
                            'Access Level System based on the package that the user possesses',
                            'User package expiration date check system'
                        ]}
                    />
                </Content>
            </Card>
            {/* 
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
            </Card> */}
        </Box>
    )
}