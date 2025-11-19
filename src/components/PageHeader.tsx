'use client'

import { Box, Container, Heading, Text } from '@chakra-ui/react'

interface PageHeaderProps {
  title: string
  subtitle?: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <Box bg="brand.900" color="white" py={16}>
      <Container maxW="container.xl">
        <Heading
          as="h1"
          size="2xl"
          mb={4}
          textTransform="uppercase"
          color="white"
        >
          {title}
        </Heading>
        {subtitle && (
          <Text fontSize="xl" color="brand.yellow400" maxW="2xl">
            {subtitle}
          </Text>
        )}
      </Container>
    </Box>
  )
}

