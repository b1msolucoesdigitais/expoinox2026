'use client'

import { Box, Container, SimpleGrid, Heading, Text, Button, Stack, Image, Badge } from '@chakra-ui/react'
import PageHeader from '@/components/PageHeader'
import { FaTicketAlt } from 'react-icons/fa'

const SHOWS = [
  {
    artist: 'Israel Salazar',
    date: '04 de Junho',
    time: '23:00',
    image: '/salazar.jpg',
  },
  {
    artist: 'Dino Fonseca',
    date: '05 de Junho',
    time: '23:00',
    image: '/dino.jpg',
  },
  {
    artist: 'Alexandre Pires',
    date: '06 de Junho',
    time: '23:00',
    image: '/alexandrepires.jpg',
  },
]

export default function IngressosPage() {
  return (
    <Box>
      <PageHeader 
        title="Shows e Ingressos" 
        subtitle="Garanta seu lugar nos melhores shows da região." 
      />

      <Container maxW="container.xl" py={16}>
        <Stack spacing={12}>
          <Box textAlign="center">
            <Heading size="lg" mb={4} color="brand.900">Programação de Shows</Heading>
            <Text fontSize="lg" color="gray.600">
              Os shows de encerramento acontecem todas as noites. O ingresso é vendido separadamente.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {SHOWS.map((show, index) => (
              <Box key={index} bg="white" rounded="lg" overflow="hidden" boxShadow="lg">
                <Image src={show.image} alt={show.artist} w="full" h="350px" objectFit="cover" objectPosition="top" />
                <Box p={6}>
                  <Badge colorScheme="purple" mb={2}>{show.date}</Badge>
                  <Heading size="md" mb={2}>{show.artist}</Heading>
                  <Text color="gray.600" mb={4}>Horário: {show.time}</Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>

          <Box textAlign="center" py={8} bg="gray.50" rounded="xl">
            <Heading size="md" mb={4}>Vendas Abertas!</Heading>
            <Button
              size="lg"
              colorScheme="yellow"
              leftIcon={<FaTicketAlt />}
              onClick={() => window.open('https://ticket.maisvip.com.br/loja/comprar/46/expoinox-2026', '_blank')}
            >
              COMPRE SEU INGRESSO AGORA
            </Button>
            <Text mt={4} fontSize="sm" color="gray.500">
              Você será redirecionado para o site oficial de vendas.
            </Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
