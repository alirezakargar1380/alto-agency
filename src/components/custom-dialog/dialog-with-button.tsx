import React, { useRef, useEffect, forwardRef } from 'react';
import Dialog from '@mui/material/Dialog';

import { useBooleanReturnType } from 'src/hooks/use-boolean';
import { Fade, Grow, IconButton, Paper } from '@mui/material';
import { Box, Breakpoint, SxProps } from '@mui/system';
import SvgColor from '../svg-color';
import { TransitionProps } from 'notistack';

// ----------------------------------------------------------------------
interface Props {
    dialog: useBooleanReturnType,
    children: React.ReactNode,
    fullWith: boolean
    width?: number
    maxWidth?: Breakpoint
    sx?: SxProps
}

const Transition = forwardRef(
    (
        props: TransitionProps & {
            children: React.ReactElement;
        },
        ref: React.Ref<unknown>
    ) => <Grow ref={ref} {...props} />
);

export default function DialogWithButton({ dialog, children, fullWith, width = 480, maxWidth = 'lg', sx }: Props) {

    const default_sx = fullWith ? {} : { maxWidth: `${width}px!important` }


    const descriptionElementRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (dialog.value) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement) {
                descriptionElement.focus();
            }
        }
    }, [dialog.value]);

    const CustomPaperComponent = React.forwardRef<HTMLDivElement>((props, ref) => (
        <Box ref={ref}
            display="flex"
            justifyContent={'center'}
            {...props}
            sx={{
                position: 'fixed!important',
                flexDirection: 'row!important',
                overflowY: 'unset!important',
                boxShadow: 'none!important'
            }}>
            <Paper {...props} sx={{ ...default_sx, p: '20px' }} />
            <Box>
                <IconButton
                    onClick={dialog.onFalse}
                    sx={{
                        bgcolor: 'white',
                        
                        height: 'fit-content',
                        borderRadius: '50%',
                        border: '1px solid #D1D1D1',
                        '&:hover': { background: '#F2F2F2' },
                    }}
                >
                    <SvgColor src='/assets/icons/navbar/x-close.svg' />
                </IconButton>
            </Box>
        </Box>
    ));

    return (
        <Dialog
            open={dialog.value}
            PaperComponent={CustomPaperComponent}
            onClose={dialog.onFalse}
            TransitionComponent={Transition}
            transitionDuration={750}
            maxWidth={maxWidth}
            PaperProps={{
                style: {
                    marginTop: 0,
                    marginBottom: 0,
                    width: 'calc(100% - 16px)',
                    maxHeight: 'calc(100vh - 80px)',
                },
            }}
            sx={{
                '& .MuiBackdrop-root': {
                    backgroundColor: 'rgba(39, 39, 39, 0.28)',backdropFilter: 'blur(20px)',
                }
            }}
        >
            {children}
        </Dialog>
    );
}
