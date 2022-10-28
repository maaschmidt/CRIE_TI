import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import Chart from 'react-apexcharts';
import { theme } from '../styles/theme';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Dashboard() {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[500]
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: true,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      type: 'datetime' as 'datetime',
      axisBorder: {
        color: theme.colors.gray[600]
      },
      xaxisTicks: {
        color: theme.colors.gray[600]
      },
      categories: [
        '2022-10-15T00:00:00Z',
        '2022-10-16T00:00:00Z',
        '2022-10-17T00:00:00Z',
        '2022-10-18T00:00:00Z',
        '2022-10-19T00:00:00Z',
        '2022-10-20T00:00:00Z',
        '2022-10-21T00:00:00Z',
      ],
      fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
          shade: 'dark', // vá do mais claro para o mais escuro
          opacityForm: 0.7, // opacidade que vai começar
          opacityTo: 0.3, //opacidade que vai terminar
        }
      }
    }
  };
  const series = [
    {
      name: 'Series1',
      data: [98, 32, 45, 82, 12, 87, 34],
    }
  ];

  return (
    <Flex direction='column' h='10vh'>
      <Header />
      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
        <Sidebar />
        <Swiper 
        spaceBetween={0} 
        slidesPerView={1} 
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={{clickable: true}}
        initialSlide={0}
        >
          <SwiperSlide>
            <SimpleGrid flex='1' gap='4' minChildWidth={320}>
              <Box p={['6', '8']} bg='gray.800' borderRadius={8} pb='4'>
                <Text>Inscritos na semana</Text>
                <Chart type='area' height={160} options={options} series={series} />
              </Box>
              <Box p={['6', '8']} bg='gray.800' borderRadius={8} pb='4'>
                <Text>Curtidas na semana</Text>
                <Chart type='area' height={160} options={options} series={series} />
              </Box>
            </SimpleGrid>
          </SwiperSlide>

          <SwiperSlide>
            <SimpleGrid flex='1' gap='4' minChildWidth={320}>
              <Box p={['6', '8']} bg='gray.800' borderRadius={8} pb='4'>
                <Text>Inscritos na semana</Text>
                <Chart type='area' height={160} options={options} series={series} />
              </Box>
              <Box p={['6', '8']} bg='gray.800' borderRadius={8} pb='4'>
                <Text>Curtidas na semana</Text>
                <Chart type='area' height={160} options={options} series={series} />
              </Box>
            </SimpleGrid>
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Flex>
  )
}