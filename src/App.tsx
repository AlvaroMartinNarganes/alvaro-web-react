import "./App.scss";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

function App() {
  const [isDarkMode, setDarkMode] = React.useState(true);
  const [theme, setTheme] = React.useState("dark");
  const toggleDarkMode = (checked: boolean) => {
    setTheme(theme === "dark" ? "light" : "dark");
    setDarkMode(checked);
  };
  return (
    <div className="app">
      <div className={theme}>
        <header className="App-header">
          <DarkModeSwitch
            style={{ marginBottom: "0rem" }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={50}
            className="switch-mode"
          />
        </header>
        <main>
          <h1>Álvaro Martín Narganes</h1>
          <h2>Web Developer</h2>
          <div>
            <Container fluid="sm">
              <Row>
                <Col>HOLA</Col>
                <Col>ADIOS</Col>
                <Col>QUE TAL</Col>
              </Row>
            </Container>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
