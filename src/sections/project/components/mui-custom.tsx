import { Box, Typography } from "@mui/material";
import Iconify from "src/components/iconify";
import Image from "src/components/image";

export function ContentImage({ src }: { src: string }) {
    return (
        <Box sx={{ width: 1, textAlign: 'center', my: 6, borderRadius: '16px' }}>
            <Image src={src} sx={{ borderRadius: '16px', width: 1 }} />
        </Box>
    )
}

export function Title({ children }: { children: React.ReactNode }) {
    return <Typography fontFamily={'inter-bold'} fontSize={20}>{children}</Typography>
}

export function Content({ children }: { children: React.ReactNode }) {
    return <Box fontFamily={'inter-medium'} fontSize={18} whiteSpace={'break-spaces'} mt={'8px'} width={1} pl={2}>{children}</Box>
}

export function Card({ children }: { children: React.ReactNode }) {
    return <Box mt={'8px'} mb={'28px'}>{children}</Box>
}

export function List({ items }: { items: string[] }) {
    return (
        <Box>
            {items.map((item, index) => (
                <Box key={index} display={'flex'} alignItems={'center'} sx={{ pl: 4 }} fontFamily={'inter-medium'} fontSize={16}>
                    <Iconify icon={'mdi:approve'} color={'blue'} sx={{ pt: 0, mr: 0.5 }} /> {item}
                </Box>
            ))}
        </Box>
    )
}