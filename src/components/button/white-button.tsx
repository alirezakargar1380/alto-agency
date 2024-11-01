import { Box, Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState, useCallback, MouseEventHandler } from 'react';
import { pxToRem } from 'src/theme/typography';
import { m } from 'framer-motion';
import SvgColor from 'src/components/svg-color';

const WhiteButtonStyle = styled(Button)<ButtonProps>(({ theme, size }) => {
    const sizeSm = size === 'small';
    const sizeMd = size === 'medium';
    return {
        background: 'radial-gradient(59.72% 350.23% at 50% 59.72%, #FFFFFF 28.9%, #F3F3F3 100%);',
        color: '#7A7A7A',
        borderRadius: '12px',
        padding: `${pxToRem(4)} ${pxToRem(16)}`,
        fontFamily: 'inter-medium',
        fontWeight: 400,
        outline: '1px solid #E3E3E3',
        lineHeight: '28px',
        fontSize: '16px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        transition: theme.transitions.create(['all'], {
            duration: 750,
        }),
        '&:hover': {
            background: '#fff',
        },
        '&:active': {
            outline: '2px solid #D1D1D1',
        },
        '&.Mui-disabled': {
            backgroundColor: '#E0E0E0',
            color: '#F8F8F8',
        },
    };
});

type Props = ButtonProps & {
    onClick?: MouseEventHandler<HTMLElement>;
    children?: React.ReactNode;
    isLoading?: boolean;
    startIcon?: React.ReactElement | null;
    endIcon?: React.ReactElement | null;
};

export const WhiteButton: React.FC<Props> = ({
    onClick,
    children,
    isLoading = false,
    startIcon,
    endIcon,
    ...other
}) => {
    const [loading, setLoading] = useState(isLoading);

    const handleOnClick: MouseEventHandler<HTMLElement> = useCallback(
        async (event) => {
            if (onClick) {
                setLoading(true);
                try {
                    onClick(event);
                } finally {
                    setLoading(false);
                }
            }
        },
        [onClick]
    );

    const iconStyles = {
        width: 16,
        height: 16,
        '& svg, img': { width: 1, height: 1, objectFit: 'cover' },
    };

    return (
        <WhiteButtonStyle onClick={handleOnClick} disabled={loading} {...other}>
            {startIcon && <Box sx={{ mr: 0.75, ...iconStyles }}> {startIcon} </Box>}
            {loading ? (
                <Box
                    component={m.div}
                    animate={{ rotate: 360 }}
                    transition={{ ease: 'linear', duration: 2, repeat: Infinity }}
                    sx={{ width: 24, height: 24, my: '8px' }}
                >
                    <SvgColor src="/assets/icons/buttons/loader-anim.svg" sx={{ width: 24, height: 24 }} />
                </Box>
            ) : (
                children
            )}
            {endIcon && <Box sx={{ ml: 0.75, ...iconStyles }}> {endIcon} </Box>}
        </WhiteButtonStyle>
    );
};
