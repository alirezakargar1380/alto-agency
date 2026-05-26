'use client';

import { Box } from "@mui/material";
import { paths } from "src/routes/paths";
import { Card, Content, ContentImage, List, Title } from "../components/mui-custom";

export default function ClockContent() {
    return (
        <Box width={1}>
            <Card>
                <Title>About</Title>
                <Content>
                    in this platform you can customize the  wall clock want to bought for your home!
                    <ContentImage src={paths.project.imgSrc('watch-products.png')} />
                    {/* <br /> */}
                    all you need to do is to select your clock, then go to customize page and customize it

                </Content>
            </Card>
            <Card>
                <br/>
                <br/>
                <br/>
                <Title>Able To Choose Color & Metal Material you want to build your clock with:</Title>
                <Content>
                    <ContentImage src={paths.project.imgSrc('Screenshot 2026-05-26 091024.png')} />
                    There is different customize option that you can apply based on the clock model that you choose (in previous image).
                    <br />
                    For example in this clock your can just change the clock color.
                    <br />
                    or in some clock you can select the material that you want to build your clock with
                    <br />
                    <br />
                    for example company can build you this clock with shiny metal, bruched metal or Unpolished metal!!!
                    <br />
                    <br />
                    this is a brushed metal clock
                    <ContentImage src={paths.project.imgSrc('Screenshot 2026-05-26 092008.png')} />
                    this is the shiny version of it
                    <ContentImage src={paths.project.imgSrc('Screenshot 2026-05-26 092215.png')} />
                    this is another clock with Unpolished metal material
                    <ContentImage src={paths.project.imgSrc('Screenshot 2026-05-26 091620.png')} />
                    as you can see our team pay attention to the details, and in each clock your can see the exact wall clock
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Title>TEXT Typing!</Title>
                    another feature that we love it is text typing!!!
                    <br />
                    in some clocks you can type your text and choose the color and metal material that you want to build with
                    <br />
                    <br />
                    EXAMPLE:
                    <br />
                    <ContentImage src={paths.project.imgSrc('Screenshot 2026-05-26 093106.png')} />
                    <b>
                        the poject is in development and not finish yet.
                    </b>
                    <br />
                    <br />
                    <br />
                    <br />
                </Content>
            </Card>
        </Box>
    )
}