"use client";

// import "./test.scss"
import "./style.css"


import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
// const Splitting = dynamic(() => import('splitting'), {
//     ssr: false
// })

export default function HomeView() {

    return (
        <div>
            <div className="grid"></div>
            <div style={{
                overflow: 'auto'
            }}>
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
                <h1>hello world</h1>
                <h1>end hello world</h1>
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