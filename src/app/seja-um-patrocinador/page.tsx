'use client'

import { Box, Container, Stack, Text, Heading, SimpleGrid } from '@chakra-ui/react'
import PageHeader from '@/components/PageHeader'
import GenericForm, { FormField } from '@/components/GenericForm'

const FORM_FIELDS: FormField[] = [
  { name: 'name', label: 'Nome do Contato', type: 'text', required: true },
  { name: 'email', label: 'E-mail Corporativo', type: 'email', required: true },
  { name: 'phone', label: 'Telefone', type: 'tel', required: true },
  { name: 'company', label: 'Empresa', type: 'text', required: true },
  { name: 'role', label: 'Cargo', type: 'text', required: true },
  { name: 'message', label: 'Mensagem (Opcional)', type: 'textarea' },
]

export default function SejaUmPatrocinadorPage() {
  return (
    <Box>
      <PageHeader 
        title="Seja um Patrocinador" 
        subtitle="Associe sua marca ao maior evento de negócios da região." 
      />
      
      <Container maxW="container.xl" py={16}>
        <Stack spacing={12} direction={{ base: 'column', lg: 'row' }}>
          <Box flex="1">
            <Heading size="lg" mb={6} color="brand.900">Por que patrocinar?</Heading>
            <Stack spacing={4} fontSize="lg" color="gray.700">
              <Text>
                A Expo Inox oferece visibilidade única para sua marca, conectando-a a um público 
                qualificado e decisor.
              </Text>
              <Text>
                Temos diversas cotas de patrocínio (Diamante, Ouro, Prata, Bronze) que se adequam 
                aos objetivos de marketing da sua empresa.
              </Text>
              <Text fontWeight="bold" color="brand.600">
                Entre em contato conosco para receber o Mídia Kit completo.
              </Text>
              <Text fontSize="sm" color="gray.500" mt={4}>
                Ou envie um e-mail diretamente para: <br />
                <Text as="span" fontWeight="bold" color="brand.900">diretoria@expoinox.com.br</Text>
              </Text>
            </Stack>
          </Box>

          <Box flex="1" bg="white" p={8} rounded="xl" boxShadow="lg" border="1px solid" borderColor="gray.200">
            <Heading size="md" mb={6}>Solicite uma Proposta</Heading>
            <GenericForm fields={FORM_FIELDS} formId="patrocinador" submitLabel="Quero ser Patrocinador" />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
