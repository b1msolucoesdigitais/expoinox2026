'use client'

import {
  Box,
  Container,
  Stack,
  Text,
  Heading,
  SimpleGrid,
  List,
  ListItem,
  Image,
} from '@chakra-ui/react'
import PageHeader from '@/components/PageHeader'
import StatsSection from '@/components/StatsSection'

export default function ExpoInox2026Page() {
  return (
    <Box>
      <PageHeader
        title="Expo Inox 2026"
        subtitle="Conheça a história, a evolução e o impacto da maior feira de negócios do Leste Mineiro."
      />

      <Container maxW="container.xl" py={16}>
        <Stack spacing={16}>
          {/* Sobre a feira */}
          <Box>
            <Heading size="lg" mb={4} color="brand.900">
              A feira que movimenta o Vale do Aço
            </Heading>
            <Text fontSize="lg" color="gray.700" mb={4}>
              A Expo Inox nasceu com o propósito de impulsionar o desenvolvimento econômico
              de Timóteo e das cidades que compõem o Vale do Aço. Em poucos anos o evento
              se consolidou como a principal vitrine de negócios da região, conectando
              indústria, comércio, serviços, tecnologia e poder público em um mesmo
              ambiente.
            </Text>
            <Text fontSize="lg" color="gray.700">
              Em 2026 a Expo Inox chega à sua 8ª edição, mantendo a essência de feira de
              negócios, mas ampliando a entrega de conteúdo, relacionamento e experiências
              para expositores e visitantes. Os números de público e volume de negócios
              alcançados nas edições anteriores confirmam a relevância do evento no
              calendário empresarial de Minas Gerais.
            </Text>
          </Box>

          {/* Foto geral da feira */}
          <Box>
            <Image
              src="/feirastands.png"
              alt="Vista geral dos stands da Expo Inox"
              w="full"
              rounded="2xl"
              boxShadow="2xl"
            />
          </Box>

          {/* Contadores principais (mesma seção da Home) */}
          <StatsSection />

          {/* Objetivo e impacto */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12}>
            <Box>
              <Heading size="lg" mb={4} color="brand.900">
                Objetivo
              </Heading>
              <Text color="gray.700" mb={4}>
                A EXPOINOX é uma feira pensada para desenvolver a cidade de Timóteo e todo
                o Vale do Aço. Nosso objetivo é criar um ambiente de negócios que cresça a
                médio e longo prazo, consolidando parcerias, atraindo investimentos e
                fortalecendo a imagem da região como polo de inovação, indústria e
                serviços.
              </Text>
              <Text color="gray.700">
                Desde 2017 o evento atua como alavanca de desenvolvimento econômico e
                cultural, movimentando a cadeia de turismo, lazer e serviços – lotando
                hotéis, bares, restaurantes e fomentando o consumo de produtos e serviços
                locais.
              </Text>
            </Box>

            <Box>
              <Heading size="lg" mb={4} color="brand.900">
                Público-alvo
              </Heading>
              <List spacing={2} color="gray.700">
                <ListItem>
                  • Formadores de opinião, empresários e investidores interessados em
                  projetos sustentáveis e criativos.
                </ListItem>
                <ListItem>
                  • Profissionais da indústria de transformação do inox e cadeias
                  produtivas relacionadas.
                </ListItem>
                <ListItem>
                  • Empresários do comércio e de serviços que buscam novos fornecedores e
                  oportunidades de expansão.
                </ListItem>
                <ListItem>
                  • Estudantes, pesquisadores e empreendedores interessados em temas como
                  inovação, tecnologia e sustentabilidade.
                </ListItem>
                <ListItem>
                  • Membros da sociedade civil de todo o Vale do Aço que enxergam na feira
                  um espaço de conhecimento, cultura e entretenimento.
                </ListItem>
              </List>
            </Box>
          </SimpleGrid>

          {/* Principais novidades 2026 */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={12}>
            <Box>
              <Heading size="md" mb={4} color="brand.900">
                Principais novidades para 2026
              </Heading>
              <List spacing={2} color="gray.700">
                <ListItem>
                  • Estrutura renovada da feira, retomando o formato em que os stands e a
                  área de shows compartilham o mesmo espaço físico.
                </ListItem>
                <ListItem>
                  • Fortalecimento do pavilhão industrial e do inox, trazendo novas marcas
                  âncoras e lançamentos para o setor.
                </ListItem>
                <ListItem>
                  • Criação do Pavilhão de Tecnologia, reunindo empresas 100% focadas em
                  inovação, softwares, automação e soluções digitais.
                </ListItem>
              </List>
            </Box>

            <Box>
              <Heading size="md" mb={4} color="brand.900">
                Benefícios para os expositores
              </Heading>
              <List spacing={2} color="gray.700">
                <ListItem>
                  • Agenda estruturada de negócios com foco na indústria, conectando
                  fornecedores a grandes compradores da região.
                </ListItem>
                <ListItem>
                  • Criação de agenda específica para comércio e serviços, aproximando
                  lojistas, prestadores de serviços e marcas que desejam vender mais.
                </ListItem>
                <ListItem>
                  • Maior visibilidade institucional para as empresas que acreditam no
                  desenvolvimento do Vale do Aço.
                </ListItem>
              </List>
            </Box>

            <Box>
              <Heading size="md" mb={4} color="brand.900">
                Estratégias para atrair público
              </Heading>
              <List spacing={2} color="gray.700">
                <ListItem>
                  • Retirada on-line antecipada dos ingressos de pista, gerando base de
                  dados qualificada de convidados das empresas expositoras.
                </ListItem>
                <ListItem>
                  • Integração entre feira e shows de encerramento, garantindo fluxo
                  constante de visitantes durante todos os dias.
                </ListItem>
                <ListItem>
                  • Ampliação do número de stands e marcas participantes, superando as
                  edições anteriores em volume de expositores.
                </ListItem>
              </List>
            </Box>
          </SimpleGrid>

          {/* ExpoInox, Timóteo e Vale do Aço */}
          <Box>
            <Heading size="lg" mb={4} color="brand.900">
              Expo Inox, Timóteo e Vale do Aço
            </Heading>
            <List spacing={2} color="gray.700">
              <ListItem>
                • Milhões de reais em negócios gerados dentro do evento e no pós‑evento
                todos os anos.
              </ListItem>
              <ListItem>
                • Impacto direto no comércio, na hotelaria, na gastronomia e em serviços
                de lazer da região.
              </ListItem>
              <ListItem>
                • Evento com data consolidada há 8 anos, criando expectativa recorrente no
                calendário da cidade.
              </ListItem>
              <ListItem>
                • Maior evento em presença de público do Vale do Aço nas últimas edições,
                com recordes de visitação entre 2022 e 2025.
              </ListItem>
            </List>
          </Box>

          {/* Missão, Visão e Eixos */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12}>
            <Box>
              <Heading size="lg" mb={4} color="brand.900">
                Missão
              </Heading>
              <Text color="gray.700">
                Promover um evento inclusivo e colaborativo, que gere soluções inovadoras
                para o desenvolvimento econômico e social de Timóteo e do Vale do Aço,
                entregando excelência tanto para o público expositor quanto para o
                visitante e valorizando a experiência cultural através dos shows de
                encerramento.
              </Text>
            </Box>

            <Box>
              <Heading size="lg" mb={4} color="brand.900">
                Visão
              </Heading>
              <Text color="gray.700">
                Ser um catalisador de mudanças positivas para que a cidade de Timóteo e o
                Vale do Aço caminhem em direção a um futuro sustentável, inovador e
                socialmente desenvolvido, tornando‑se referência nacional em eventos de
                negócios regionais.
              </Text>
            </Box>
          </SimpleGrid>

          <Box>
            <Heading size="lg" mb={4} color="brand.900">
              Principais eixos 2026
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              <Box>
                <Heading size="md" mb={2} color="brand.900">
                  Desenvolvimento Sustentável
                </Heading>
                <Text color="gray.700">
                  Projetos, soluções e empresas comprometidas com responsabilidade
                  ambiental, uso eficiente de recursos e economia de baixo carbono.
                </Text>
              </Box>
              <Box>
                <Heading size="md" mb={2} color="brand.900">
                  Economia Criativa
                </Heading>
                <Text color="gray.700">
                  Negócios que unem cultura, design, comunicação e tecnologia para gerar
                  valor, novas marcas e experiências originais.
                </Text>
              </Box>
              <Box>
                <Heading size="md" mb={2} color="brand.900">
                  Desenvolvimento Sociocultural
                </Heading>
                <Text color="gray.700">
                  Ações que fortalecem a identidade local, promovem inclusão social e
                  aproximam a comunidade da feira por meio de cultura, educação e
                  entretenimento.
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
