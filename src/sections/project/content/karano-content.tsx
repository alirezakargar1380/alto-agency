'use client';

import { Box } from "@mui/material";
import { paths } from "src/routes/paths";
import { Card, Content, ContentImage, List, Title } from "../components/mui-custom";

export default function KaranoContent() {
    return (
        <Box width={1}>
            <Card>
                <Title>About</Title>
                <Content>
                    Karano is a B2B company in the wood industry that builds cabinet doors, frames, covers, shutter doors, and room doors all with wood.
                    <br />
                    Therefore, we made the difficult process of placing an order for the customer completely online so that the user can order room doors, cabinet doors, etc. with custom sizes.
                    <br />
                    And also, we made the production line of products, packaging, and shipping online, so the manager of each department receives the product file, the fittings that he needs to prepare through our web service and prepares it for sending to the customer.
                    <br />
                    <br />
                    <b>NOTE:</b> because karano is a B2B platform we just develop the desktop version of the platform. so if you want to chack our platform please check it with your computer
                </Content>
            </Card>
            <Card>
                <Title>How Karano Platform Wokrs?</Title>
                <Content>
                    before anything remeber that karano is B2B business.
                    <br />
                    <br />
                    imagine that you go to a carpentry to order an room door!
                    <br />
                    you can order different doors with different sizes, frame places, and rims (Those bold strokes on the top doors are rims).
                    <br />
                    these are some of our room door:
                    <ContentImage src={paths.project.imgSrc('723_1x_shots_so.png')} />
                    after you choose the room door type, and the size of the door, now the carpenter had to calculate the material size that needs to build your doors. after that he will calculate the final price based on used materials.
                    <br />
                    now you can buy this material and go to your own carpentry and build your door,
                    <br />
                    or you can choose that your door will be build and assemble by karano.
                    <br />
                    <br />
                    <br />
                    <b>New Order System:</b>
                    <br />
                    so waht is the new way of ordering a door in karano?
                    <ContentImage src={paths.project.imgSrc('197shots_so.png')} />
                    <br />
                    these senario was the old way of ordering a door in karano, 
                    <br />
                    now the karano customers came to our platform and choose a product to buy...
                    <ContentImage src={paths.project.imgSrc('475shots_so.png')} />
                    based on product that user choose to buy, The materials that the users can use to make their product will change:
                    <ContentImage src={paths.project.imgSrc('276shots_so.png')} />
                    After the users register their order, their order is sent to the shipping manager and the algorithm calculates the price and the amount of material needed for the order items.
                    <br />
                    for example for building the top order we need these materials:
                    <ContentImage src={paths.project.imgSrc('826_2x_shots_so.png')} />
                    every thing was calculate and manage just by our server! 
                    <br />
                    Less manpower was involved, order entry and order management were faster, and sales invoices were issued faster
                    <br />
                    <br />
                    <Title>Production Line</Title>
                    after the customer pay their invoice, if the customer choose that the door assemble by karano, the karano system will send the order to the producton line and the production line receives a PDF file that contains the materials with their sizes that need to build the door.
                    <br />
                    after production manager build the order products, send the order to storage manager, and the storage manager will pack the order and send the order to the shipping department.
                </Content>
            </Card>
            <Card>
                <Title>My Role:</Title>
                <Content>
                    as a full-Stack developer in this project, i has role to manage the project, developing calculation algorithem for calculate product price (each product has its own algorithem), product assemble price, product tax, product packaging for each order.
                    <br />
                    i also has to design the structure of the project parts, becuase the company has many departments and each department has its own work and we have to make sure that the project is developed in a way that each department can work independently.
                    <br />
                    and also each product has its own specefic materials that was for just that product. for example users can choose rims in the room doors.
                    <br />
                    as a technical team manager i should find or build a way for our challenges
                </Content>
            </Card>
            <Card>
                <Title>About Platform:</Title>
                <Content>
                    <b>Here are some of the most special features in the Karano project:</b>
                    <List
                        items={[
                            'Set Price by part material - for example cabinet profile with oak cover is $50 / with raw cover is $30',
                            'ability to order custom made products',
                            'calculate the size of material that needs to be cut for each product and calculate the price of that size',
                            'calculate assemble price of each product',
                            'Price caalculation algorithm based on product',
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