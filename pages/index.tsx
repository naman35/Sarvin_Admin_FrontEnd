import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { NextjsLogo, ChakraLogo } from "components/logos";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";
import { BackgroundGradient } from "components/gradients/background-gradient";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import testimonials from "data/testimonials";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Sarvin Admin-Panel"
        description="Admin Panel for Sarvin Employees"
      />
      <Box>
        <HeroSection />

        <HighlightsSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Only{" "}
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "relative",
                    maxWidth: "100%",
                  }}
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "transparent",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%",
                    }}
                  >
                    <div
                      style={{
                        color: "#E65C55",
                        transition: "color 2s",
                        fontSize: "50px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        letterSpacing: "-1px",
                      }}
                    >
                      <u>SARVIN</u>
                    </div>
                  </span>
                </span>{" "}
                Builders
                <Br /> Are Allowed!
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                This heading welcomes users to the admin portal of{" "}
                <Em>Sarvin</Em>, setting the tone for a professional and
                efficient administrative experience.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <br />

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="red" size="lg" href="/login">
                  Login
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="https://demo.saas-ui.dev"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  View demo
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list_.png"
                  layout="fixed"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Sarvin Foundation">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            At Sarvin, we revolutionize influencer marketing by connecting
            brands and influencers seamlessly, enhancing transparency and
            simplicity. Our platform empowers brands to achieve broader product
            reach cost-effectively while enabling influencers to drive business
            growth with increased orders and expanded opportunities. Join us in
            transforming the influencer landscape and amplifying your brand's
            success.
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="red.400"
            _dark={{ bg: "gray.900" }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                Sarvin
              </Text>{" "}
              <Text color="cyan.300" display="inline">
                About us Page
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="For Influencers">
        <Text color="muted" fontSize="lg">
          Welcome to Sarvin, where we've reimagined influencer marketing with a
          tech-driven platform that enhances transparency and accessibility. You
          can easily browse all brand deals, optimizing your chances with
          competitive bidding options that benefit both influencers and brands
          alike. By facilitating direct communication and eliminating agency
          intermediaries, Sarvin fosters genuine collaborations. Discover
          collaborations seamlessly and grow your brand with Sarvin.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Naman Agarwal"
        description="Co-Founder"
        avatar="/static/images/profilepic.jpeg"
        gradient={["red.200", "red.500"]}
      >
        “ Our vision extends beyond mere transactions; we envision a community
        where creativity meets opportunity, where influencers can expand their
        influence and brands can amplify their impact. Join us at Sarvin and
        together, let's redefine the future of influencer marketing.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="How Brands or Business grow through Sarvin?"
      >
        <Text color="muted" fontSize="lg">
          Our interface offers a clear, single-page view of all candidate bids,
          ensuring transparency and efficiency. Brands can leverage
          sophisticated filters to narrow down candidates based on reach,
          demographics, location, follower count, audience type, pricing
          preferences, and past performance indicators like previous records and
          sample videos. Our unique bidding system allows brands to optimize
          their marketing budgets by selecting influencers who offer competitive
          rates for similar services. Direct communication tools facilitate
          seamless interactions between brands and influencers, fostering
          collaborations not only for marketing campaigns but also for
          influencer merchandise initiatives. As we evolve, our robust analytics
          provide comprehensive insights into candidate performance and
          historical data, empowering brands to make data-driven decisions and
          achieve impactful marketing results.
        </Text>
        <Wrap mt="8">
          {[
            "Platform",
            "Brands",
            "Influencers",
            "Product marketing",
            "Interface",
            "Bids",
            "Transparency",
            "Efficiency",
            "Filters",
            "Reach",
            "Demographics",
            "Location",
            "Follower count",
            "Pricing preferences",
            "Performance indicators",
            "Marketing budgets",
            "Direct communication",
            "Collaborations",
            "Marketing campaigns",
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "Click here to get Deployed View of Sarvin 🚀 ",
        description: "<div>Click Here</div>",
        href: "https://sarvin-introductory-repo.vercel.app/",
        action: false,
      },
    },
  };
}
