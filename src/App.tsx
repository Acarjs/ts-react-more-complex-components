// import Input from './components/Input';
import Button from './components/Button';

function App() {
  return (
    <main>
      {/* <Input label="Your name" id="name" type="text" />
      <Input label="Your age" id="age" type="number" /> */}

      <Button el="button">Button</Button>
      <Button el="anchor" href="https://google.com">
        Link
      </Button>
    </main>
  );
}

export default App;
