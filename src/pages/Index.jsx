import { Box, Container, VStack, Text, Image, Grid, GridItem, Heading, Link, Flex, Spacer, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} align="center">
        <Heading size="md">ElectroShop</Heading>
        <Spacer />
        <Link p={2} href="#">Home</Link>
        <Link p={2} href="#">Products</Link>
        <Link p={2} href="#">About Us</Link>
        <Link p={2} href="#">Contact Us</Link>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" p={10} textAlign="center">
        <Heading size="2xl" mb={4}>Featured Product</Heading>
        <Image src="/images/featured-product.jpg" alt="Featured Product" boxSize="300px" objectFit="cover" mx="auto" />
        <Text fontSize="xl" mt={4}>Amazing Electronic Gadget</Text>
        <Button colorScheme="blue" mt={4}>Shop Now</Button>
      </Box>

      {/* Product Grid */}
      <Box as="section" p={10}>
        <Heading size="lg" mb={6}>Our Products</Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product1.jpg" alt="Product 1" />
              <Box p={4}>
                <Text fontWeight="bold">Product 1</Text>
                <Text>$199.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product2.jpg" alt="Product 2" />
              <Box p={4}>
                <Text fontWeight="bold">Product 2</Text>
                <Text>$299.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product3.jpg" alt="Product 3" />
              <Box p={4}>
                <Text fontWeight="bold">Product 3</Text>
                <Text>$399.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product4.jpg" alt="Product 4" />
              <Box p={4}>
                <Text fontWeight="bold">Product 4</Text>
                <Text>$499.99</Text>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" p={4} textAlign="center">
        <Flex justify="center" mb={4}>
          <Link href="#" mx={2}><FaFacebook /></Link>
          <Link href="#" mx={2}><FaTwitter /></Link>
          <Link href="#" mx={2}><FaInstagram /></Link>
        </Flex>
        <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
        <Flex justify="center" mt={2}>
          <Link href="#" mx={2}>Terms of Service</Link>
          <Link href="#" mx={2}>Privacy Policy</Link>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;