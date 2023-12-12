// import Input from './components/Input';
// import Button from './components/ButtonFirstApproach';
import Button from './components/Button.tsx';

function App() {
  return (
    <main>
      {/* ---Input.tsx component--- */}
      {/* <Input label="Your name" id="name" type="text" />
      <Input label="Your age" id="age" type="number" /> */}

      {/* ---ButtonFirstApproach.tsx component--- */}
      {/* <Button el="button">Button</Button>
      <Button el="anchor" href="https://google.com">
        Link
      </Button> */}

      <p>
        <Button>Button</Button>
      </p>
      <p>
        <Button href="https://google.com">Link</Button>
      </p>
    </main>
  );
}

export default App;
