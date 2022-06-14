import { Button, Container, Heading } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <Heading size="4xl" style={{ textAlign: "center" }}>
        Counter App
      </Heading>
      <Container
        maxW="md"
        bg="lightblue"
        style={{
          display: "flex",
          height: "30vh",
          marginTop: "100px",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        borderRadius="lg"
      >
        <Button
          colorScheme="red"
          variant="solid"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
        <Heading style={{ fontSize: "10rem" }}>{counter}</Heading>
        <Button
          colorScheme="green"
          variant="solid"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
      </Container>
    </>
  );
}

export default App;
