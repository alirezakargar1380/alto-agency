import React from "react";
import { Box } from "@mui/material";

export default function InfiniteLinearSlider({
    images = [],
    speed = 25,
    gap = 16,
}: any) {
    return (
        <Box
            sx={{
                width: "100%",
                overflow: "hidden",
                position: "relative",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: 'center',
                    width: "max-content",
                    gap: `${gap}px`,
                    animation: `scroll ${speed}s linear infinite`,
                    "@keyframes scroll": {
                        from: {
                            transform: "translateX(0)",
                        },
                        to: {
                            transform: "translateX(-50%)",
                        },
                    },
                }}
            >
                {/* first set */}
                {images.map((img, index) => (
                    <Box
                        key={`first-${index}`}
                        component="img"
                        src={img}
                        alt=""
                        sx={{
                            height: "fit-content",
                            width: "fit-content",
                            objectFit: "cover",
                            flexShrink: 0,
                            borderRadius: 2,
                        }}
                    />
                ))}

                {/* duplicated set for seamless infinite loop */}
                {images.map((img, index) => (
                    <Box
                        key={`second-${index}`}
                        component="img"
                        src={img}
                        alt=""
                        sx={{
                            width: "fit-content",
                            height: "fit-content",
                            objectFit: "cover",
                            flexShrink: 0,
                            borderRadius: 2,
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
}