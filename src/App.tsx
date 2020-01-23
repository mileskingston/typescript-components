import * as React from 'react';
import ComponentSection from './components/ComponentSection/ComponentSection';
import Button from './components/Button/Button';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app__header">
        <h1>Typescript Components</h1>
      </header>
      <div className="app__body">
        <ComponentSection title="title">
          <Button style="primary">Button</Button>
          <Button style="secondary">Button</Button>
          <Button style="tertiary">Button</Button>
        </ComponentSection>
      </div>
    </div>
  );
}

export default App;
