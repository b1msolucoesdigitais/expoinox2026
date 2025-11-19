'use client'

import { Box, Container, Stack, Text, Heading } from '@chakra-ui/react'
import PageHeader from '@/components/PageHeader'
import GenericForm, { FormField } from '@/components/GenericForm'

const FORM_FIELDS: FormField[] = [
  { name: 'name', label: 'Nome Completo', type: 'text', required: true },
  { name: 'email', label: 'E-mail Corporativo', type: 'email', required: true },
  { name: 'phone', label: 'Telefone / WhatsApp', type: 'tel', required: true },
  { name: 'company', label: 'Empresa', type: 'text', required: true },
  { name: 'role', label: 'Cargo', type: 'text', required: true },
]

export default function RodadaDeNegociosPage() {
  return (
    <Box>
      <PageHeader 
        title="Rodada de Negócios" 
        subtitle="Oportunidades exclusivas para conectar sua empresa a grandes compradores." 
      />
      
      <Container maxW="container.xl" py={16}>
        <Stack spacing={12} direction={{ base: 'column', lg: 'row' }}>
          <Box flex="1">
            <Heading size="lg" mb={6} color="brand.900">Como funciona?</Heading>
            <Stack spacing={4} fontSize="lg" color="gray.700">
              <Text>
                A Rodada de Negócios é um ambiente preparado para reuniões rápidas e objetivas 
                entre empresas compradoras e fornecedoras.
              </Text>
              <Text>
                É a oportunidade ideal para apresentar seus produtos e serviços diretamente 
                para quem decide a compra em grandes indústrias e comércios da região.
              </Text>
              <Text fontWeight="bold">
                Vagas limitadas. Garanta sua participação preenchendo o formulário.
              </Text>
            </Stack>
          </Box>

          <Box flex="1" bg="white" p={8} rounded="xl" boxShadow="lg" border="1px solid" borderColor="gray.200">
            <Heading size="md" mb={6}>Cadastre sua Empresa</Heading>
            <GenericForm fields={FORM_FIELDS} formId="rodada-de-negocios" submitLabel="Quero Participar" />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
