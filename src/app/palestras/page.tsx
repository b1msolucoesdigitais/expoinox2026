'use client'

import { Box, Container, Stack, Text, Heading } from '@chakra-ui/react'
import PageHeader from '@/components/PageHeader'
import GenericForm, { FormField } from '@/components/GenericForm'

const FORM_FIELDS: FormField[] = [
  { name: 'name', label: 'Nome Completo', type: 'text', required: true },
  { name: 'email', label: 'E-mail', type: 'email', required: true },
  { name: 'phone', label: 'Telefone / WhatsApp', type: 'tel', required: true },
]

export default function PalestrasPage() {
  return (
    <Box>
      <PageHeader 
        title="Palestras" 
        subtitle="Conteúdo de alto nível com especialistas do mercado." 
      />
      
      <Container maxW="container.xl" py={16}>
        <Stack spacing={12} align="center">
          <Box textAlign="center" maxW="2xl">
            <Heading size="lg" mb={6} color="brand.900">Programação em Breve</Heading>
            <Text fontSize="lg" color="gray.700">
              Grandes nomes estão sendo confirmados para o nosso ciclo de palestras. 
              Não perca a oportunidade de aprender com quem é referência.
            </Text>
          </Box>

          <Box w="full" maxW="md" bg="white" p={8} rounded="xl" boxShadow="lg" border="1px solid" borderColor="gray.200">
            <Heading size="md" mb={6}>Avise-me</Heading>
            <GenericForm fields={FORM_FIELDS} formId="newsletter-palestras" submitLabel="Quero ser avisado" />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
