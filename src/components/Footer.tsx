'use client'

import { Box, Container, Stack, Text, Link, SimpleGrid, Icon, Image, Flex } from '@chakra-ui/react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <Box bg="brand.900" color="gray.200">
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <Image
              src="/logobranca.png"
              alt="Expo Inox 2026"
              h="50px"
              objectFit="contain"
              mb={3}
            />
            <Text fontSize={'sm'}>
              A maior feira de negócios do Leste Mineiro.
            </Text>
            <Stack direction="row" spacing={4} mt={3} align="center">
              <Link href={'https://www.instagram.com/expoinox'} isExternal>
                <Icon as={FaInstagram} w={6} h={6} />
              </Link>
            </Stack>
          </Stack>

          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2} color="brand.yellow400">
              LINKS RÁPIDOS
            </Text>
            <Link href={'/expoinox-2026'}>Expo Inox 2026</Link>
            <Link href={'/seja-um-expositor'}>Seja um Expositor</Link>
            <Link href={'/seja-um-patrocinador'}>Seja um Patrocinador</Link>
            <Link href={'/compre-seu-ingresso'}>Ingressos</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2} color="brand.yellow400">
              CONTATO
            </Text>
            <Link href="mailto:diretoria@expoinox.com.br">
              diretoria@expoinox.com.br
            </Link>
            <Link href="https://wa.me/5531986900952" isExternal display="inline-flex" alignItems="center" gap={2}>
              <Icon as={FaWhatsapp} /> (31) 98690-0952
            </Link>
            <Text>Timóteo - MG</Text>
          </Stack>

          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2} color="brand.yellow400">
              REALIZAÇÃO
            </Text>
            <Image
              src="/logos/maisvip.png"
              alt="MaisVip"
              h="56px"
              objectFit="contain"
              filter="invert(1)"
            />
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={4} borderTopWidth={1} borderColor="whiteAlpha.200">
        <Container maxW="6xl">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align="center"
            gap={2}
          >
            <Text fontSize="sm" textAlign={{ base: 'center', md: 'left' }}>
              © 2026 Expo Inox. Todos os direitos reservados.
            </Text>
            <Text
              fontSize="sm"
              textAlign={{ base: 'center', md: 'right' }}
              display="flex"
              alignItems="center"
              justifyContent={{ base: 'center', md: 'flex-end' }}
              gap={2}
              flexWrap="wrap"
            >
              <span>Desenvolvido com 💜 por</span>
              <Link href="https://b1m.digital" isExternal fontWeight="bold">
                B1M
              </Link>
              <span>e hospedado por</span>
              <Link
                href="https://www.servla.com.br"
                isExternal
                display="inline-flex"
                alignItems="center"
              >
                <Image
                  src="/servla.svg"
                  alt="Servla"
                  h="14px"
                  objectFit="contain"
                />
              </Link>
            </Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

