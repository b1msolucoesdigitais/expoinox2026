'use client';

import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Text,
    Image,
    Stack,
    Link,
    Flex,
    Skeleton,
    SkeletonText,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface NewsItem {
    title: string;
    link: string;
    pubDate: string;
    image: string;
    description: string;
}

export default function NewsSection() {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchNews() {
            try {
                const res = await fetch('/api/news');
                const data = await res.json();
                if (data.items) {
                    setNews(data.items);
                }
            } catch (error) {
                console.error('Failed to fetch news', error);
            } finally {
                setLoading(false);
            }
        }

        fetchNews();
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        }).format(date);
    };

    const featuredNews = news.slice(0, 4);
    const listNews = news.slice(4, 10);

    return (
        <Box py={20} bg="white">
            <Container maxW="container.xl">
                <Stack spacing={12}>
                    <Box textAlign="center">
                        <Heading size="xl" color="brand.900" mb={4}>
                            ÚLTIMAS NOTÍCIAS
                        </Heading>
                        <Text fontSize="lg" color="gray.600">
                            Fique por dentro de tudo o que acontece na feira e do mundo do Inox...
                        </Text>
                    </Box>

                    {loading ? (
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
                            {[1, 2, 3, 4].map((i) => (
                                <Box key={i} rounded="lg" overflow="hidden" boxShadow="md">
                                    <Skeleton height="200px" />
                                    <Box p={6}>
                                        <SkeletonText mt="4" noOfLines={3} spacing="4" />
                                    </Box>
                                </Box>
                            ))}
                        </SimpleGrid>
                    ) : (
                        <>
                            {/* Featured Cards */}
                            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
                                {featuredNews.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.link}
                                        isExternal
                                        _hover={{ textDecoration: 'none' }}
                                    >
                                        <Box
                                            bg="white"
                                            rounded="lg"
                                            overflow="hidden"
                                            boxShadow="lg"
                                            transition="all 0.3s"
                                            _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
                                            height="100%"
                                            display="flex"
                                            flexDirection="column"
                                        >
                                            <Box height="200px" overflow="hidden">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    width="100%"
                                                    height="100%"
                                                    objectFit="cover"
                                                    transition="transform 0.3s"
                                                    _hover={{ transform: 'scale(1.05)' }}
                                                />
                                            </Box>
                                            <Box p={6} flex="1" display="flex" flexDirection="column">
                                                <Text fontSize="sm" color="brand.500" fontWeight="bold" mb={2}>
                                                    {formatDate(item.pubDate)}
                                                </Text>
                                                <Heading size="sm" color="gray.800" mb={3} lineHeight="tall" textTransform="none">
                                                    {item.title}
                                                </Heading>
                                            </Box>
                                        </Box>
                                    </Link>
                                ))}
                            </SimpleGrid>

                            {/* List View */}
                            {listNews.length > 0 && (
                                <Box mt={8}>
                                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                                        {listNews.map((item, index) => (
                                            <Link
                                                key={index}
                                                href={item.link}
                                                isExternal
                                                _hover={{ textDecoration: 'none' }}
                                            >
                                                <Flex
                                                    align="center"
                                                    p={4}
                                                    bg="gray.50"
                                                    rounded="md"
                                                    transition="all 0.2s"
                                                    _hover={{ bg: 'gray.100' }}
                                                >
                                                    <Box flex="1">
                                                        <Text fontSize="xs" color="brand.500" fontWeight="bold" mb={1}>
                                                            {formatDate(item.pubDate)}
                                                        </Text>
                                                        <Text fontWeight="medium" color="gray.700" noOfLines={2}>
                                                            {item.title}
                                                        </Text>
                                                    </Box>
                                                    <Box ml={4} color="brand.500">
                                                        →
                                                    </Box>
                                                </Flex>
                                            </Link>
                                        ))}
                                    </SimpleGrid>
                                </Box>
                            )}
                        </>
                    )}
                </Stack>
            </Container>
        </Box>
    );
}
