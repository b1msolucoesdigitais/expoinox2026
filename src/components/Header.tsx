'use client'

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItem {
  label: string
  href?: string
  children?: Array<{
    label: string
    href: string
  }>
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Expo Inox 2026',
    children: [
      { label: 'Sobre a Feira', href: '/expoinox-2026' },
      { label: 'Seja um Expositor', href: '/seja-um-expositor' },
      { label: 'Seja um Patrocinador', href: '/seja-um-patrocinador' },
    ],
  },
  { label: 'Rodada de Negócios', href: '/rodada-de-negocios' },
  { label: 'Compre seu Ingresso', href: '/compre-seu-ingresso' },
  { label: 'Mini Cursos', href: '/mini-cursos' },
  { label: 'Palestras', href: '/palestras' },
  { label: 'Contatos', href: '/contato' },
]

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const pathname = usePathname()

  return (
    <Box as="header" bg="brand.900" color="white" position="sticky" top={0} zIndex={1000} boxShadow="md">
      {/* Top Bar with Date/Location */}
      <Box bg="brand.yellow400" color="brand.900" py={1} px={4} textAlign="center" fontSize="sm" fontWeight="bold">
        4 A 6 DE JUNHO · PRAÇA 1º DE MAIO · TIMÓTEO – MG
      </Box>

      <Flex h={24} alignItems="center" justifyContent="space-between" px={{ base: 4, md: 8 }} maxW="1200px" mx="auto">
        {/* Logo and Nav Container */}
        <HStack spacing={8} alignItems="center">
          {/* Logo */}
          <Box>
            <NextLink href="/">
              <Image 
                src="/logobranca.png" 
                alt="Expo Inox 2026" 
                h="80px" 
                objectFit="contain" 
              />
            </NextLink>
          </Box>

          {/* Desktop Nav */}
          <HStack as="nav" spacing={4} display={{ base: 'none', xl: 'flex' }}>
            {NAV_ITEMS.map((item) => {
              if (item.children) {
                return (
                  <Menu key={item.label} isLazy>
                    <MenuButton
                      as={Button}
                      variant="ghost"
                      color="white"
                      fontSize="xs"
                      fontWeight="bold"
                      rightIcon={<ChevronDownIcon />}
                      _hover={{ bg: 'brand.600', color: 'brand.yellow400' }}
                      _active={{ bg: 'brand.600' }}
                    >
                      {item.label.toUpperCase()}
                    </MenuButton>
                    <MenuList bg="brand.900" borderColor="brand.600">
                      {item.children.map((child) => (
                        <MenuItem
                          key={child.label}
                          as={NextLink}
                          href={child.href}
                          bg="brand.900"
                          color="white"
                          _hover={{ bg: 'brand.600', color: 'brand.yellow400' }}
                          fontSize="sm"
                        >
                          {child.label.toUpperCase()}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                )
              }

              return (
                <Button
                  key={item.label}
                  as={NextLink}
                  href={item.href!}
                  variant="ghost"
                  color="white"
                  fontSize="xs"
                  fontWeight="bold"
                  _hover={{ bg: 'brand.600', color: 'brand.yellow400' }}
                  _active={{ bg: 'brand.600' }}
                  isActive={pathname === item.href}
                >
                  {item.label.toUpperCase()}
                </Button>
              )
            })}
          </HStack>
        </HStack>

        {/* Mobile Nav Toggle */}
        <IconButton
          size="md"
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          display={{ base: 'flex', xl: 'none' }}
          onClick={onOpen}
          variant="outline"
          colorScheme="whiteAlpha"
        />
      </Flex>

      {/* Mobile Menu Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="brand.900" color="white">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" borderColor="whiteAlpha.200">MENU</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4} mt={4}>
              {NAV_ITEMS.map((item) => {
                if (item.children) {
                  return (
                    <Box key={item.label}>
                      <Box
                        fontWeight="bold"
                        fontSize="sm"
                        color="brand.yellow400"
                        mb={2}
                        px={4}
                      >
                        {item.label.toUpperCase()}
                      </Box>
                      <Stack spacing={2} pl={4}>
                        {item.children.map((child) => (
                          <Button
                            key={child.label}
                            as={NextLink}
                            href={child.href}
                            variant="ghost"
                            justifyContent="flex-start"
                            color="white"
                            size="sm"
                            _hover={{ bg: 'brand.600' }}
                            onClick={onClose}
                          >
                            {child.label.toUpperCase()}
                          </Button>
                        ))}
                      </Stack>
                    </Box>
                  )
                }
                return (
                  <Button
                    key={item.label}
                    as={NextLink}
                    href={item.href!}
                    variant="ghost"
                    justifyContent="flex-start"
                    color="white"
                    _hover={{ bg: 'brand.600' }}
                    onClick={onClose}
                  >
                    {item.label.toUpperCase()}
                  </Button>
                )
              })}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
