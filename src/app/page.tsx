'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  SimpleGrid,
  AspectRatio,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Icon,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FaPlay } from 'react-icons/fa'
import StatsSection from '@/components/StatsSection'

export default function Home() {
  // State for map modal
  const { isOpen: isMapOpen, onOpen: onMapOpen, onClose: onMapClose } = useDisclosure()
  
  // State for video modal
  const { isOpen: isVideoOpen, onOpen: onVideoOpen, onClose: onVideoClose } = useDisclosure()

  return (
    <Box>
      {/* Hero Section */}
      <Box
        bg="brand.900"
        color="white"
        py={{ base: 12, md: 20 }}
        position="relative"
        overflow="hidden"
        minH="440px"
        display="flex"
        alignItems="center"
      >
        {/* Background Video */}
        <Box
          as="video"
          autoPlay
          loop
          muted
          playsInline
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          objectFit="cover"
          zIndex={0}
          opacity={0.4}
        >
          <source src="/video/expoinox2026.mp4" type="video/mp4" />
        </Box>

        {/* Overlay Gradient */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgGradient="linear(to-r, brand.900, transparent)"
          zIndex={1}
          opacity={0.8}
        />

        <Container maxW="container.xl" position="relative" zIndex={2}>
          <Stack direction={{ base: 'column', md: 'row' }} align="center" justify="flex-start" spacing={{ base: 8, md: 12 }}>
            {/* Left Content */}
            <Stack spacing={8} align="flex-start" textAlign="left" maxW="2xl">
              <Heading
                as="h1"
                size="2xl"
                fontWeight="bold"
                letterSpacing="tight"
                textTransform="uppercase"
                color="white"
              >
                A Maior Feira de Negócios <br />
                <Text as="span" color="brand.yellow400">
                  do Leste Mineiro
                </Text>
              </Heading>
              <Text fontSize="xl" color="gray.100">
                Conectando Indústria, Comércio e Serviços em um evento único.
                Oportunidades reais de networking e crescimento para sua empresa.
              </Text>
              <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
                <Button
                  as={NextLink}
                  href="/seja-um-patrocinador"
                  size="lg"
                  colorScheme="yellow"
                  px={8}
                >
                  Seja um Patrocinador
                </Button>
                <Button
                  as={NextLink}
                  href="/seja-um-expositor"
                  size="lg"
                  variant="outline"
                  colorScheme="whiteAlpha"
                  color="white"
                  px={8}
                  _hover={{ bg: 'whiteAlpha.200' }}
                >
                  Seja um Expositor
                </Button>
              </Stack>
            </Stack>

            {/* Right Content - Play Button */}
            <Box 
              as="button" 
              onClick={onVideoOpen}
              position="relative"
              display="flex"
              alignItems="center"
              justifyContent="center"
              w="100px"
              h="100px"
              rounded="full"
              bg="whiteAlpha.200"
              border="2px solid white"
              transition="all 0.3s"
              _hover={{ bg: 'whiteAlpha.400', transform: 'scale(1.1)' }}
              ml="var(--chakra-space-60)"
            >
              <Icon as={FaPlay} w={8} h={8} ml={1} color="white" />
              {/* Pulse Effect */}
              <Box
                position="absolute"
                top={0}
                left={0}
                w="full"
                h="full"
                rounded="full"
                border="2px solid white"
                opacity={0}
                animation="pulse 2s infinite"
                sx={{
                  '@keyframes pulse': {
                    '0%': { transform: 'scale(1)', opacity: 0.6 },
                    '100%': { transform: 'scale(1.5)', opacity: 0 },
                  }
                }}
              />
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Seção de ingressos */}
      <Box bg="brand.900" color="white" py={6}>
        <Container maxW="container.xl">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="center"
            gap={4}
          >
            <Stack spacing={1} align={{ base: 'center', md: 'flex-start' }} textAlign={{ base: 'center', md: 'left' }}>
              <Heading size="md">
                <Text as="span" color="brand.yellow400" fontWeight="bold">
                  04 a 06 de Junho de 2026
                </Text>
              </Heading>
              <Text fontSize="sm">
                Garanta agora mesmo o seu ingresso de forma antecipada.
              </Text>
            </Stack>
            <Button
              size="lg"
              colorScheme="yellow"
              px={10}
              onClick={() =>
                window.open(
                  'https://ticket.maisvip.com.br/loja/comprar/46/expoinox-2026',
                  '_blank'
                )
              }
            >
              COMPRAR INGRESSOS
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* Sobre a Feira / Destaque Institucional */}
      <AboutSection />

      {/* Animated Numbers Section */}
      <StatsSection />

      {/* Stats & Quick Links Grid */}
      <Box py={20} bg="gray.50">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <FeatureCard
              iconSrc="/icone1.png"
              title="+30 Mil Visitantes"
              text="Público qualificado e interessado em novidades do mercado."
              href="/a-feira"
              cta="Saiba mais"
            />
            <FeatureCard
              iconSrc="/icone2.png"
              title="Garanta seu Stand"
              text="Espaços exclusivos no Pavilhão da Indústria e Comércio."
              href="/seja-um-expositor"
              cta="Reserve agora"
            />
            <FeatureCard
              iconSrc="/icone3.png"
              title="Rodada de Negócios"
              text="Conecte-se com grandes players e feche parcerias."
              href="/rodada-de-negocios"
              cta="Cadastre-se"
            />
            <FeatureCard
              iconSrc="/icone4.png"
              title="Palestras"
              text="Conteúdo relevante com especialistas renomados."
              href="/palestras"
              cta="Ver programação"
            />
            <FeatureCard
              iconSrc="/icone5.png"
              title="Mini Cursos"
              text="Capacitação rápida e prática para você e sua equipe."
              href="/mini-cursos"
              cta="Inscreva-se"
            />
            {/* Placeholder for another card or just 5 items */}
            <Box
              bg="brand.500"
              color="white"
              p={8}
              rounded="lg"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
            >
              <Heading size="md" mb={4}>
                SHOWS E ATRAÇÕES
              </Heading>
              <Text mb={6}>Confira a programação cultural completa.</Text>
              <Button as={NextLink} href="/compre-seu-ingresso" colorScheme="yellow" size="sm">
                VER SHOWS
              </Button>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Media Section: Video & Map */}
      <Box py={20}>
        <Container maxW="container.xl">
          <Stack spacing={20}>
            {/* Video */}
            <Stack spacing={8} align="center" textAlign="center">
              <Heading size="xl" color="brand.900">
                O INOX ESTÁ EM TUDO
              </Heading>
              <Box w="full" maxW="4xl" bg="gray.900" rounded="xl" overflow="hidden" boxShadow="xl">
                <AspectRatio ratio={16 / 9}>
                  <video
                    controls
                    poster="/video/inoxemtudo.jpeg"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  >
                    <source src="/video/inox.mp4" type="video/mp4" />
                    Seu navegador não suporta a tag de vídeo.
                  </video>
                </AspectRatio>
              </Box>
            </Stack>

            {/* Map */}
            <Stack spacing={8} align="center" textAlign="center">
              <Heading size="xl" color="brand.900">
                MAPA DO EVENTO
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Praça 1º de Maio - Timóteo / MG
              </Text>
              <Box
                w="full"
                maxW="4xl"
                bg="gray.200"
                rounded="xl"
                position="relative"
                overflow="hidden"
                boxShadow="lg"
                cursor="pointer"
                onClick={onMapOpen}
                _hover={{ opacity: 0.9 }}
                transition="0.2s"
              >
                <Image
                  src="/mapa.png"
                  alt="Mapa do Evento Expo Inox 2026"
                  w="full"
                  h="auto"
                  objectFit="contain"
                />
                <Button
                  position="absolute"
                  bottom={8}
                  left="50%"
                  transform="translateX(-50%)"
                  colorScheme="brand"
                  onClick={(e) => {
                    e.stopPropagation()
                    onMapOpen()
                  }}
                  boxShadow="lg"
                >
                  Ver mapa em tela cheia
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Map Modal */}
      <Modal isOpen={isMapOpen} onClose={onMapClose} size="6xl" isCentered>
        <ModalOverlay />
        <ModalContent bg="transparent" boxShadow="none">
          <ModalCloseButton color="white" size="lg" zIndex={10} />
          <ModalBody p={0} display="flex" justifyContent="center" alignItems="center">
            <Image
              src="/mapa.png"
              alt="Mapa do Evento Expo Inox 2026"
              maxH="90vh"
              objectFit="contain"
              rounded="md"
            />
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Hero Video Modal */}
      <Modal isOpen={isVideoOpen} onClose={onVideoClose} size="6xl" isCentered>
        <ModalOverlay />
        <ModalContent bg="transparent" boxShadow="none">
          <ModalCloseButton color="white" size="lg" zIndex={10} top="-40px" />
          <ModalBody p={0}>
            <AspectRatio ratio={16 / 9}>
              <video
                controls
                autoPlay
                style={{ width: '100%', height: '100%', borderRadius: '8px' }}
              >
                <source src="/video/expoinox2026.mp4" type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </video>
            </AspectRatio>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

interface FeatureCardProps {
  title: string
  text: string
  iconSrc: string
  href: string
  cta: string
}

function FeatureCard({ title, text, iconSrc, href, cta }: FeatureCardProps) {
  return (
    <Stack
      bg="white"
      p={8}
      rounded="lg"
      boxShadow="lg"
      spacing={4}
      borderTop="4px solid"
      borderColor="brand.500"
      _hover={{ transform: 'translateY(-5px)', transition: '0.3s' }}
    >
      <Flex
        w={16}
        h={16}
        align="center"
        justify="center"
        rounded="full"
        bg="brand.50"
        p={2}
      >
        <Image src={iconSrc} alt={title} w="full" h="full" objectFit="contain" />
      </Flex>
      <Heading size="md" color="brand.900">
        {title}
      </Heading>
      <Text color="gray.600">{text}</Text>
      <Button
        as={NextLink}
        href={href}
        variant="link"
        color="brand.600"
        fontWeight="bold"
        alignSelf="start"
      >
        {cta} →
      </Button>
    </Stack>
  )
}

function AboutSection() {
  return (
    <Box bg="white" py={20}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} alignItems="center">
          <Stack spacing={6}>
            <Box>
              <Heading size="2xl" color="brand.900" mb={2}>
                Expoinox – 8ª edição
              </Heading>
              <Box w="80px" h="4px" bg="brand.500" mb={6} />
            </Box>
            <Text fontSize="lg" color="gray.700">
              A EXPOINOX nasceu com a missão de impulsionar o desenvolvimento de Timóteo
              e de todo o Vale do Aço. Ao longo de quase uma década, a feira se consolidou
              como um evento estratégico de negócios, capaz de movimentar intensamente a
              economia local e regional.
            </Text>
            <Text fontSize="lg" color="gray.700">
              Cada edição reúne indústria, comércio e serviços em um ambiente planejado
              para gerar visibilidade, relacionamento e resultados concretos para as
              empresas participantes.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={6} pt={4} align="center">
              <Button
                as={NextLink}
                href="/expoinox-2026"
                colorScheme="brand"
                size="lg"
              >
                Mais sobre a feira
              </Button>
              <Stack spacing={0} fontSize="sm" color="gray.700" textAlign={{ base: 'center', md: 'left' }}>
                <Text fontWeight="bold">FALE COM A ORGANIZAÇÃO</Text>
                <Text fontWeight="bold">
                  <NextLink href="https://wa.me/5531986900952" target="_blank">
                    (31) 98690-0952
                  </NextLink>
                </Text>
              </Stack>
            </Stack>
          </Stack>

          <Box>
            <Image
              src="/expoimg.png"
              alt="Imagem institucional da Expo Inox 2026"
              w="full"
              h="auto"
              objectFit="contain"
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
