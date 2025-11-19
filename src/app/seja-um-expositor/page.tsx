"use client"

import { Box, Container, Stack, Text, Heading, SimpleGrid, List, ListItem, ListIcon, Image } from "@chakra-ui/react"
import PageHeader from '@/components/PageHeader'
import { CheckCircleIcon } from '@chakra-ui/icons'
import GenericForm, { FormField } from '@/components/GenericForm'

const FORM_FIELDS: FormField[] = [
  { name: 'name', label: 'Nome do Responsável', type: 'text', required: true },
  { name: 'email', label: 'E-mail', type: 'email', required: true },
  { name: 'phone', label: 'Telefone / WhatsApp', type: 'tel', required: true },
  { name: 'company', label: 'Nome da Empresa', type: 'text', required: true },
  { 
   name: 'interest', 
   label: 'Área de Interesse', 
   type: 'select', 
   options: [
     'Pavilhão da Indústria',
     'Pavilhão de Comércio e Serviços',
     'Pavilhão de Tecnologia',
   ],
   required: true 
  },
  { name: 'message', label: 'Mensagem / Dúvidas', type: 'textarea' },
]

export default function SejaUmExpositorPage() {
  return (
    <Box>
      <PageHeader 
        title="Seja um Expositor" 
        subtitle="Exponha sua marca para mais de 30 mil visitantes qualificados." 
      />
      
      <Container maxW="container.xl" py={16}>
        <Stack spacing={16}>
          
          {/* Pavilions Info */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box p={8} bg="brand.50" rounded="xl">
              <Heading size="md" mb={4} color="brand.600">Pavilhão da Indústria</Heading>
              <Text mb={4}>
                Espaço dedicado a empresas do setor industrial, metalmecânico e tecnologia.
              </Text>
              <List spacing={3}>
                <ListItem><ListIcon as={CheckCircleIcon} color="green.500" />Estandes a partir de 9m²</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="green.500" />Acesso à Rodada de Negócios</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="green.500" />Visibilidade para grandes players</ListItem>
              </List>
            </Box>

            <Box p={8} bg="yellow.50" rounded="xl">
              <Heading size="md" mb={4} color="brand.yellow500">Pavilhão de Comércio e Serviços</Heading>
              <Text mb={4}>
                Ideal para varejo, prestadores de serviços, startups e artesanato.
              </Text>
              <List spacing={3}>
                <ListItem><ListIcon as={CheckCircleIcon} color="green.500" />Estandes modulares</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="green.500" />Venda direta ao consumidor</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="green.500" />Networking intenso</ListItem>
              </List>
            </Box>

            {/* Pavilhão de Tecnologia */}
            <Box p={8} bg="blue.50" rounded="xl">
              <Heading size="md" mb={4} color="brand.600">Pavilhão de Tecnologia</Heading>
              <Text mb={4}>
                Novidade da Expo Inox 2026: um espaço exclusivo para empresas de tecnologia com foco 100% na criação e expansão do setor.
              </Text>
              <List spacing={3}>
                <ListItem><ListIcon as={CheckCircleIcon} color="green.500" />Ambiente voltado para inovação e soluções digitais.</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="green.500" />Conexão com indústrias e comércios interessados em tecnologia.</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="green.500" />Visibilidade para startups e empresas de base tecnológica.</ListItem>
              </List>
            </Box>
          </SimpleGrid>

          {/* Tipos de Stand */}
          <Box>
            <Heading size="lg" mb={8} color="brand.900" textAlign={{ base: "center", md: "left" }}>
              Tipos de Stand
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {/* Stand Padrão */}
              <Box bg="brand.900" color="white" rounded="2xl" overflow="hidden">
                <Image
                  src="/standpadrao.png"
                  alt="Stand Padrão - Expo Inox 2026"
                  w="full"
                  h="260px"
                  objectFit="cover"
                />
                <Box p={8}>
                  <Heading size="lg" mb={4} textAlign="left">
                    Stand <Text as="span" color="brand.yellow400">Padrão</Text>
                  </Heading>
                  <List spacing={2} mb={4} fontWeight="bold" color="brand.yellow400">
                    <ListItem>• Toda área dos stands é coberta.</ListItem>
                    <ListItem>• Tamanhos: 9 m², 12 m², 18 m² e 24 m².</ListItem>
                  </List>
                  <Text fontSize="md" lineHeight="tall">
                    Os stands são entregues em sua forma básica: laterais e fundos de octanorm,
                    piso e um ponto de energia elétrica 110v. Todas as demais necessidades podem
                    ser ajustadas com a empresa montadora e valores são cobrados à parte para
                    benfeitorias.
                  </Text>
                </Box>
              </Box>

              {/* Stand Especial */}
              <Box bg="brand.900" color="white" rounded="2xl" overflow="hidden">
                <Image
                  src="/standespecial.png"
                  alt="Stand Especial - Expo Inox 2026"
                  w="full"
                  h="260px"
                  objectFit="cover"
                />
                <Box p={8}>
                  <Heading size="lg" mb={4} textAlign="left">
                    Stand <Text as="span" color="brand.yellow400">Especial</Text>
                  </Heading>
                  <List spacing={2} mb={4} fontWeight="bold" color="brand.yellow400">
                    <ListItem>• Formato: Tenda.</ListItem>
                    <ListItem>• Tamanho: Cobertura 36 m² (6 m x 6 m) e piso 25 m² (5 m x 5 m).</ListItem>
                  </List>
                  <Text fontSize="md" lineHeight="tall">
                    Os stands são entregues em sua forma básica: tenda montada, piso e um ponto
                    de energia elétrica 110v. Todas as demais necessidades podem ser ajustadas com
                    a empresa montadora e valores são cobrados à parte para benfeitorias.
                  </Text>
                </Box>
              </Box>
            </SimpleGrid>
          </Box>

          {/* Form Section */}
          <Box maxW="3xl" mx="auto" w="full">
            <Heading size="lg" mb={6} textAlign="center" color="brand.900">Reserve seu Espaço</Heading>
            <Box p={8} bg="white" rounded="xl" boxShadow="lg" border="1px solid" borderColor="gray.200">
              <GenericForm fields={FORM_FIELDS} formId="expositor" submitLabel="Solicitar Reserva" />
            </Box>
          </Box>

        </Stack>
      </Container>
    </Box>
  )
}
