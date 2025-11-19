'use client'

import { Box, Container, Stack, Text, Heading, SimpleGrid, Link } from '@chakra-ui/react'
import PageHeader from '@/components/PageHeader'
import GenericForm, { FormField } from '@/components/GenericForm'

const FORM_FIELDS: FormField[] = [
  { name: 'name', label: 'Nome Completo', type: 'text', required: true },
  { name: 'email', label: 'E-mail', type: 'email', required: true },
  { name: 'phone', label: 'Telefone / WhatsApp', type: 'tel', required: true },
  { name: 'vehicle', label: 'Veículo de Comunicação', type: 'text', required: true },
  { name: 'role', label: 'Cargo / Função', type: 'text', required: true },
]

export default function ImprensaPage() {
  return (
    <Box>
      <PageHeader 
        title="Imprensa" 
        subtitle="Informações, releases e credenciamento para jornalistas." 
      />
      
      <Container maxW="container.xl" py={16}>
        <Stack spacing={16}>
          
          {/* Releases Section */}
          <Box>
            <Heading size="lg" mb={6} color="brand.900">Últimos Releases</Heading>
            <Stack spacing={4}>
              {[1, 2, 3].map((i) => (
                <Box key={i} p={4} border="1px solid" borderColor="gray.200" rounded="md" _hover={{ bg: 'gray.50' }}>
                  <Link href="#" fontWeight="bold" fontSize="lg" color="brand.600">
                    Título da Matéria ou Release {i} - Expo Inox 2026
                  </Link>
                  <Text fontSize="sm" color="gray.500">Publicado em 01/05/2026</Text>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Partners Section */}
          <Box>
            <Heading size="lg" mb={6} color="brand.900">Veículos Parceiros</Heading>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
              {[1, 2, 3, 4].map((i) => (
                <Box key={i} h="100px" bg="gray.100" rounded="lg" display="flex" alignItems="center" justifyContent="center">
                  <Text color="gray.400">Logo Veículo {i}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          {/* Form Section */}
          <Box maxW="3xl" mx="auto" w="full">
            <Heading size="lg" mb={6} textAlign="center" color="brand.900">Credenciamento de Imprensa</Heading>
            <Box p={8} bg="white" rounded="xl" boxShadow="lg" border="1px solid" borderColor="gray.200">
              <GenericForm fields={FORM_FIELDS} formId="imprensa" submitLabel="Solicitar Credenciamento" />
            </Box>
          </Box>

        </Stack>
      </Container>
    </Box>
  )
}
