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
import SvgColor from 'src/components/svg-color';

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
    <Box bgcolor={'#F5F5FC'} borderTop={'1px solid #CFCFCF'}>
      <Box sx={{
        background: "url('./assets/images/home/Union.png')",
        backgroundPosition: 'left bottom',
        backgroundRepeat: 'no-repeat',
        pt: 12,
        pb: 21,
      }}>

        <Box mx={24}>

          <Stack
            direction={{
              xs: 'column',
              lg: 'row',
            }}
            justifyContent={'space-between'}
            width={1}
            spacing={{
              xs: 12,
              lg: 0
            }}
          >

            <Box width={120}>
              <Stack direction={'row'}>
                <Box
                  component="img"
                  src="/logo/union.svg"
                  sx={{
                    width: 1
                  }}
                />
                <Typography fontSize={80} ml={3} pt={2} fontFamily={'inter-bold'}>Alto</Typography>
              </Stack>
              <Stack direction={'row'} justifyContent={'space-between'} mt={2}>
                <SvgColor src='/assets/icons/footer/instagram.svg' />
                <SvgColor src='/assets/icons/footer/linkedin.svg' />
                <SvgColor src='/assets/icons/footer/x.svg' />
              </Stack>
            </Box>

            <Box>
              <Stack spacing={6}>
                <Typography fontFamily={'montserrat-light'}>About</Typography>
                <Typography fontFamily={'montserrat-light'}>Approach</Typography>
                <Typography fontFamily={'montserrat-light'}>Projects</Typography>
                <Typography fontFamily={'montserrat-light'}>Services</Typography>
              </Stack>
            </Box>

            <Stack spacing={6}>
              <Stack direction={'row'} spacing={1}>
                <SvgColor src='/assets/icons/footer/arrow-top-right.svg' sx={{ width: 16 }} />
                <Typography fontFamily={'montserrat-light'}>How it works?</Typography>
              </Stack>
              <Stack direction={'row'} spacing={1}>
                <SvgColor src='/assets/icons/footer/arrow-top-right.svg' sx={{ width: 16 }} />
                <Typography fontFamily={'montserrat-light'}>What make a website better</Typography>
              </Stack>
              <Stack direction={'row'} spacing={1}>
                <SvgColor src='/assets/icons/footer/arrow-top-right.svg' sx={{ width: 16 }} />
                <Typography fontFamily={'montserrat-light'}>Pricing</Typography>
              </Stack>
            </Stack>

          </Stack>

        </Box>

      </Box>
    </Box >
  );

  return mainFooter;
}
