import { Box } from "@mui/material";
import Image from "src/components/image";

export function ContentImage({ src }: { src: string }) {
    return (
        <Box sx={{ width: 1, textAlign: 'center', my: 6, borderRadius: '16px' }}>
            <Image src={src} sx={{ borderRadius: '16px' }} />
        </Box>
    )
}