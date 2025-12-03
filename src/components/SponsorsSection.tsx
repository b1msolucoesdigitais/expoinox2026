'use client'

import { Box, Container, Text, Image, Stack, Flex } from '@chakra-ui/react'

interface SponsorGroupProps {
    title: string
    children: React.ReactNode
}

const SponsorGroup = ({ title, children }: SponsorGroupProps) => (
    <Stack align="center" spacing={4} w="full">
        <Text
            fontSize="xs"
            fontWeight="bold"
            color="gray.500"
            textTransform="uppercase"
            letterSpacing="wider"
        >
            {title}
        </Text>
        <Flex
            wrap="wrap"
            gap={8}
            justify="center"
            align="center"
            w="full"
        >
            {children}
        </Flex>
    </Stack>
)

export default function SponsorsSection() {
    return (
        <Box bg="white" py={8} borderTopWidth={1} borderColor="gray.100">
            <Container maxW="6xl">
                <Stack spacing={{ base: 12, md: 10 }}>

                    {/* Row 1: Diamante & Ouro */}
                    <Flex
                        direction={{ base: 'column', md: 'row' }}
                        gap={{ base: 8, md: 12 }}
                        align={{ base: 'center', md: 'flex-start' }}
                    >
                        {/* Diamante - Takes less space */}
                        <Box flex={{ base: 'auto', md: 1 }} w="full">
                            <SponsorGroup title="Patrocínio Diamante">
                                <Image
                                    src="/logos/aperam.png"
                                    alt="Aperam"
                                    h="60px"
                                    objectFit="contain"
                                />
                            </SponsorGroup>
                        </Box>

                        {/* Ouro - Takes more space */}
                        <Box flex={{ base: 'auto', md: 2 }} w="full">
                            <SponsorGroup title="Patrocínio Ouro">
                                <Text fontWeight="bold" color="gray.400" fontSize="lg">GRUPO CONECTTA</Text>
                                <Image
                                    src="/logos/unimedvaledoaco.png"
                                    alt="Unimed Vale do Aço"
                                    h="50px"
                                    objectFit="contain"
                                />
                                <Image
                                    src="/logos/anhanguera.png"
                                    alt="Faculdade Anhanguera"
                                    h="50px"
                                    objectFit="contain"
                                />
                            </SponsorGroup>
                        </Box>
                    </Flex>

                    {/* Row 2: Apoio, Cerveja & Rádio */}
                    <Flex
                        direction={{ base: 'column', md: 'row' }}
                        gap={{ base: 8, md: 12 }}
                        align={{ base: 'center', md: 'flex-start' }}
                    >
                        {/* Apoio - Comes first and takes much more space */}
                        <Box flex={{ base: 'auto', md: 3 }} w="full">
                            <SponsorGroup title="Apoio">
                                <Image
                                    src="/logos/prefeituratimoteo.png"
                                    alt="Prefeitura de Timóteo"
                                    h="40px"
                                    objectFit="contain"
                                />
                                <Image
                                    src="/logos/ace.png"
                                    alt="ACE/CDL"
                                    h="40px"
                                    objectFit="contain"
                                />
                                <Image
                                    src="/logos/fiemg.jpeg"
                                    alt="FIEMG Vale do Aço"
                                    h="40px"
                                    objectFit="contain"
                                />
                                <Image
                                    src="/logos/sindimiva.jpeg"
                                    alt="SINDIMIVA"
                                    h="40px"
                                    objectFit="contain"
                                />
                            </SponsorGroup>
                        </Box>

                        {/* Cerveja Oficial */}
                        <Box flex={{ base: 'auto', md: 1 }} w="full">
                            <SponsorGroup title="Cerveja Oficial">
                                <Image
                                    src="/logos/amstel.png"
                                    alt="Amstel"
                                    h="50px"
                                    objectFit="contain"
                                />
                            </SponsorGroup>
                        </Box>

                        {/* Rádio Oficial */}
                        <Box flex={{ base: 'auto', md: 1 }} w="full">
                            <SponsorGroup title="Rádio Oficial">
                                <Image
                                    src="/logos/vox97.png"
                                    alt="Vox FM"
                                    h="50px"
                                    objectFit="contain"
                                />
                            </SponsorGroup>
                        </Box>
                    </Flex>

                </Stack>
            </Container>
        </Box>
    )
}
