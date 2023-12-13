import { useRef } from 'react';
import Input from './components/Input';
// import Button from './components/ButtonFirstApproach';
import Button from './components/Button.tsx';
import Container from './components/Container.tsx';

function App() {
  const input = useRef<HTMLInputElement>(null);

  return (
    <main>
      {/* ---Input.tsx component--- */}
      <Input label="Your name" id="name" type="text" ref={input} />
      {/* <Input label="Your age" id="age" type="number" /> */}

      {/* ---ButtonFirstApproach.tsx component--- */}
      {/* <Button el="button">Button</Button>
      <Button el="anchor" href="https://google.com">
        Link
      </Button> */}

      {/* ---Button.tsx component--- */}
      {/* <p>
        <Button>Button</Button>
      </p>
      <p>
        <Button href="https://google.com">Link</Button>
      </p> */}

      <Container as={Button}>Click me!</Container>
    </main>
  );
}

export default App;
