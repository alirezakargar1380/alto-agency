"use client";

import useGridAnimation from './home-view';

export default function HV() {
    const gridRef = useGridAnimation();

    return (
        <div id="app">
            <div className="grid" ref={gridRef as React.RefObject<HTMLDivElement>}>
                {/* Initial row grid lines */}
                <div style={{ height: '2.5rem', backgroundColor: 'black', backgroundImage: 'linear-gradient(to right, rgb(203 213 225) 1px, transparent 1px)' }}></div>
                {/* Add more initial row grid lines if needed */}
            </div>
            <div className="grid-lines" data-vertical></div>
            <div className="grid-lines" data-horizontal></div>
            <section></section>
        </div>
    );
}