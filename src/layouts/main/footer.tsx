import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { _socials } from 'src/_mock';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import NavDesktop from './nav/desktop';
import { navConfig } from './config-navigation';
import Image from 'src/components/image';

// ----------------------------------------------------------------------

// const LINKS = [
//   {
//     headline: 'Minimal',
//     children: [
//       { name: 'About us', href: paths.about },
//       { name: 'Contact us', href: paths.contact },
//       { name: 'FAQs', href: paths.faqs },
//     ],
//   },
//   {
//     headline: 'Legal',
//     children: [
//       { name: 'Terms and Condition', href: '#' },
//       { name: 'Privacy Policy', href: '#' },
//     ],
//   },
//   {
//     headline: 'Contact',
//     children: [{ name: 'support@minimals.cc', href: '#' }],
//   },
// ];

// ----------------------------------------------------------------------

export default function Footer() {

  const mainFooter = (
    <Box bgcolor={'#F5F5FC'}>
      <Box>asdf</Box>
    </Box>
  );

  return mainFooter;
}
