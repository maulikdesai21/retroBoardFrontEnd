import React from 'react';
import { Container } from "react-bootstrap";
import './App.css';
import { Layout } from "./layout";

const App: React.FC = () => {
  return (
    <div className="App">
      <Container fluid={true}>
        <Layout />
      </Container>

    </div>
  );
}

export default App;
