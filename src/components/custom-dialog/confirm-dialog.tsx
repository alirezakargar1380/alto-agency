import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';

import { ConfirmDialogProps } from './types';
import SvgColor from '../svg-color';
import { Box, DialogContent, Fade, Typography } from '@mui/material';
import { forwardRef } from 'react';
import { TransitionProps } from '@mui/material/transitions';

const Transition = forwardRef(
    (
        props: TransitionProps & {
            children: React.ReactElement;
        },
        ref: React.Ref<unknown>
    ) => <Fade ref={ref} {...props} />
);

export default function ConfirmDialog({
  title,
  content,
  action,
  open,
  color = '#0B7BA7',
  onClose,
  closeTitle = 'انصراف',
  ...other
}: ConfirmDialogProps) {
  return (
    <Dialog
      open={open}
      maxWidth={'lg'}
      onClose={onClose}
      PaperProps={{
        style: {
          padding: '40px',
          margin: 0
        },
      }}
      {...other}
      sx={{
        '& .MuiBackdrop-root': {
          backgroundColor: 'rgba(0,0,0,0.8)',
        },
      }}
    >

      {content && <DialogContent sx={{ fontSize: 16, typography: 'body1', color: "#727272", px: 0, mt: 2 }}> {content} </DialogContent>}

      <DialogActions sx={{ px: 0, pb: 0 }}>
        {onClose && (
          <Button color="inherit" onClick={onClose} sx={{ typography: 'button1', px: '36px', borderRadius: '50px' }}>
            {closeTitle}
          </Button>
        )}

        {action}
      </DialogActions>
    </Dialog>
  );
}
