'use client'

import { useEffect, useState } from 'react'
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react'

interface StatItem {
  label: string
  value: number
  iconSrc: string
  suffix?: string
  prefix?: string
}

interface AnimatedCounterProps {
  value: number
  durationMs?: number
  prefix?: string
  suffix?: string
}

function AnimatedCounter({
  value,
  durationMs = 1200,
  prefix = '',
  suffix = '',
}: AnimatedCounterProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    let frameId: number
    const start = performance.now()

    const animate = (time: number) => {
      const progress = Math.min((time - start) / durationMs, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out
      setCurrent(Math.floor(eased * value))
      if (progress < 1) {
        frameId = requestAnimationFrame(animate)
      }
    }

    frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [value, durationMs])

  const formatted = current.toLocaleString('pt-BR')

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const stats: StatItem[] = [
    {
      label: 'visitantes',
      value: 30000,
      iconSrc: '/icone1.png',
      prefix: '+',
    },
    {
      label: 'Palestras Técnicas',
      value: 70,
      iconSrc: '/icone2.png',
    },
    {
      label: 'expositores',
      value: 300,
      iconSrc: '/icone3.png',
      prefix: '+',
    },
    {
      label: 'encontros de negócios',
      value: 2500,
      iconSrc: '/icone4.png',
      prefix: '+',
    },
    {
      label: 'área de exposição',
      value: 20000,
      iconSrc: '/icone5.png',
      prefix: '+',
      suffix: 'm²',
    },
  ]

  return (
    <Box bg="gray.100" py={16}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 3, lg: 5 }} spacing={10} alignItems="center">
          {stats.map((stat) => (
            <Stack key={stat.label} align="center" textAlign="center" spacing={3}>
              <Box
                w={16}
                h={16}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src={stat.iconSrc}
                  alt={stat.label}
                  w="full"
                  h="full"
                  objectFit="contain"
                />
              </Box>
              <Heading size="lg" color="brand.500">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </Heading>
              <Text
                fontSize="sm"
                color="gray.700"
                textTransform="uppercase"
                fontWeight="bold"
              >
                {stat.label}
              </Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}


