import { Card, CardBody, CardHeader, Heading, Box } from "@chakra-ui/react";

interface FeatureCardProps {
  icon: JSX.Element,
  title: string,
  content: string,
}

const FeatureCard = ({ icon, title, content }: FeatureCardProps) => (
  <Card py='1.5rem'>
    <Box ml='1.25rem' bgColor='gray.200' borderRadius='50%' alignSelf='start' p='0.5rem' fontSize='1.5rem'>
      {icon}
    </Box>
    <CardHeader mt='1rem' py='0'>
      <Heading fontSize={{ base: '1rem', lg: '1.25rem' }}>{title}</Heading>
    </CardHeader>
    <CardBody mt='0.5rem' py='0' fontSize={{ base: '0.8rem', lg: '1.15rem' }}>
      {content}
    </CardBody>
  </Card>
)

export default FeatureCard