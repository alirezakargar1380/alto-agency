import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';
import Carousel, { useCarousel, CarouselArrows } from 'src/components/carousel';
import TiltCard from 'src/components/animation/tilt-card';

// ----------------------------------------------------------------------

type Props = {
  data: {
    id: string;
    title: string;
    coverUrl: string;
    description: string;
  }[];
};

export default function CarouselCenterMode({ data }: Props) {
  const carousel = useCarousel({
    // slidesToShow: 4,
    // autoplay: true,
    // centerMode: true,
    // infinite: true,
    // initialSlide: 1,
    centerPadding: '60px',
    infinite: true,
    slidesToShow: 5,
    // slidesToScroll: 5,
    autoplay: true,
    speed: 2000 * 20,
    // autoplaySpeed: 10000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ]
  });

  return (
    <Box
      sx={{
        // overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
        {data.map((item, ind) => (
          <Box key={ind} sx={{ px: 1 }}>
            <CarouselItem item={item} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
  item: {
    title: string;
    description: string;
    coverUrl: string;
  };
};

function CarouselItem({ item }: CarouselItemProps) {
  const theme = useTheme();

  const { coverUrl, title } = item;

  return (
    <Box pb={6}>
      <TiltCard halt_rotation_range={14} rotation_range={14}>
        <Image alt={title} src={coverUrl} borderRadius={1} />
      </TiltCard>
    </Box>
  );
}
