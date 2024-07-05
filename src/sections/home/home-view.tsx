"use client";

// import "./test.scss"
import "./style.css"


import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
// const Splitting = dynamic(() => import('splitting'), {
//     ssr: false
// })

export default function HomeView() {

    return (
        <div>
            <div className="grid"></div>
            <div style={{
                overflow: 'auto',
                background: 'radial-gradient(circle at center, transparent, #fbfbfbb3)',
                position: 'absolute',
                width: '100%',
            }}>
                <section style={{
                    backgroundImage: "url('./bggb.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    // opacity: 0.65,
                    overflow: 'auto',
                    height: '100vh'
                }}>
                    <Box mt={26} textAlign={'center'}>
                        <Typography variant="h2" width={1}>We create digital magic</Typography>
                        <Typography variant="h5" width={1}>Beauty, creativity, and innovation unleashed.</Typography>
                        <Button variant="contained" color="primary" sx={{ mt: 4 }}>Learn more</Button>
                    </Box>
                </section>
                <Box width={1} bgcolor={'white'} overflow={'auto'} display={'none'}>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                </Box>
            </div>

        </div>

    )
    const [docEnv, setDocEnv] = useState(false);

    useEffect(() => {
        setDocEnv(true);
    }, []);

    useEffect(() => {
        if (!docEnv) return;

        setTimeout(async () => {
            const Splitting = await import("splitting");
            Splitting.default({
                target: ".grid-background",
                by: "cells",
                columns: 8 * 2,
                rows: 6 * 2
            });

            Splitting.default({
                target: ".grid-lines[data-vertical]",
                by: "cells",
                columns: 8 * 2,
                rows: 1
            });

            Splitting.default({
                target: ".grid-lines[data-horizontal]",
                by: "cells",
                columns: 1,
                rows: 6 * 2
            });
        }, 0)

    }, [docEnv]);

    return (
        <div id="app">
            <div className="grid-background"></div>
            <div className="grid-lines" data-vertical></div>
            <div className="grid-lines" data-horizontal></div>
            <section></section>
        </div>
    )
}