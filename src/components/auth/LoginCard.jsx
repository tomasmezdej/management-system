import { Card, CardHeader, Heading, CardBody, Box, FormLabel, Input, FormHelperText, FormControl, CardFooter, Button } from "@chakra-ui/react"
import { useNavigate } from "react-router"
const LoginCard = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // navigate('/', { replace: true })
    navigate('/', { replace: false })
  }

  return (
    <Card w={card.cardWidth} shadow="2xl">
      <CardHeader>
        <Heading size='md'>
          Log in please
        </Heading>
      </CardHeader>
      <CardBody>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type='email' />
          <FormHelperText>We'll never share your email.</FormHelperText>
          <FormLabel>Password</FormLabel>
          <Input type='password' />
        </FormControl>
      </CardBody>
      <CardFooter>
        <Box w={"100%"} display="flex" justifyContent="end">
          <Button
            w={button.buttonWidth}
            colorScheme="blue"
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      </CardFooter>
    </Card>
  )
}

const card = {
  cardWidth: ['100vh', '100vh', '50vh', '40vh']
}
const button = {
  buttonWidth: ['100%', '100%', '80%', '40%']
}


export default LoginCard