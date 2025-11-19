'use client'

import { Box, Container, Stack, Text, Heading, SimpleGrid, Icon, AspectRatio, Link } from "@chakra-ui/react"
import PageHeader from '@/components/PageHeader'
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function ContatoPage() {
  return (
    <Box>
      <PageHeader 
        title="Contatos" 
        subtitle="Fale com a organização da Expo Inox 2026." 
      />
      
      <Container maxW="container.xl" py={16}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          
          <Stack align="center" textAlign="center" p={8} bg="white" rounded="xl" boxShadow="lg">
            <Icon as={FaWhatsapp} w={10} h={10} color="green.500" />
            <Heading size="md" mt={4} color="brand.900">WhatsApp</Heading>
            <Text color="gray.600">Atendimento rápido</Text>
            <Link
              href="https://wa.me/5531986900952"
              isExternal
              fontWeight="bold"
              fontSize="lg"
              color="brand.500"
            >
              (31) 98690-0952
            </Link>
          </Stack>

          <Stack align="center" textAlign="center" p={8} bg="white" rounded="xl" boxShadow="lg">
            <Icon as={FaEnvelope} w={10} h={10} color="brand.500" />
            <Heading size="md" mt={4} color="brand.900">E-mail</Heading>
            <Text color="gray.600">Diretoria e Comercial</Text>
            <Text fontWeight="bold" fontSize="lg">diretoria@expoinox.com.br</Text>
          </Stack>

          <Stack align="center" textAlign="center" p={8} bg="white" rounded="xl" boxShadow="lg">
            <Icon as={FaMapMarkerAlt} w={10} h={10} color="red.500" />
            <Heading size="md" mt={4} color="brand.900">Localização</Heading>
            <Text color="gray.600">Praça 1º de Maio</Text>
            <Text fontWeight="bold" fontSize="lg">Timóteo - MG</Text>
          </Stack>

        </SimpleGrid>

        {/* Mapa da Praça 1º de Maio */}
        <Box mt={16}>
          <Heading size="lg" mb={4} color="brand.900" textAlign={{ base: "center", md: "left" }}>
            Mapa da Praça 1º de Maio
          </Heading>
          <Text mb={6} color="gray.600" textAlign={{ base: "center", md: "left" }}>
            PRAÇA 1º DE MAIO · TIMÓTEO – MG
          </Text>
          <AspectRatio ratio={16 / 9} borderRadius="xl" overflow="hidden" boxShadow="lg">
            <iframe
              src="https://www.google.com/maps?q=Pra%C3%A7a%201%C2%BA%20de%20Maio%2C%20Tim%C3%B3teo%20-%20MG&output=embed"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </AspectRatio>
        </Box>
      </Container>
    </Box>
  )
}

