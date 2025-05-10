'use client';

import { Box } from "@mui/material";
import { Card, Content, List, Title } from "../components/mui-custom";

export default function MegaCalculatorContent() {
    return (
        <Box width={1}>
            <Card>
                <Title>About</Title>
                <Content>
                    Mega Clculator is a calculator that have every formoula you need!
                    <br />
                    such as:
                    <List
                        items={[
                            'Health Calculators',
                            'Math Calculators',
                            'Financial Calculators'
                        ]}
                    />
                    <br />
                    <br />
                    our calculator, offers a variety of online calculators designed to simplify complex calculations. 📊 Whether you need help with math, finance, or engineering tasks, you'll find user-friendly tools that provide quick and accurate results. The layout is intuitive, allowing users to easily navigate between different calculators. 🧮✨
                    <br />
                    <br />
                    With a focus on efficiency, this site caters to students, professionals, and anyone looking to streamline their calculation needs. Ready to solve some problems? Dive in and make calculations a breeze! 🌟💻
                </Content>
            </Card>
        </Box>
    )
}