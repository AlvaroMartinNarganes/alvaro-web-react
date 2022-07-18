import './App.scss';
import * as React from 'react';
import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { cardData } from './data';
import CardFramer from './components/CardFramer';
function App() {
  //Switch theme mode
  const [isDarkMode, setDarkMode] = useState(true);
  const [theme, setTheme] = useState('dark');
  const toggleDarkMode = (checked: boolean) => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setDarkMode(checked);
  };

  //Open Card
  const [cardOpen, setIsOpen] = useState(false);

  const toggleCard = (event: React.MouseEvent<HTMLElement>) => {
    setIsOpen(!cardOpen);
  };
  return (
    <div className='app'>
      <div className={theme}>
        <header className='App-header'>
          <DarkModeSwitch
            style={{ marginBottom: '0rem' }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={50}
            className='switch-mode'
          />
        </header>
        <main>
          <h1>Álvaro Martín Narganes</h1>
          <h2>Web Developer</h2>
          <div>
            <Container fluid='sm'>
              <Row>
                {cardData.map((item) => (
                  <Col key={item.title} xs={12} md={6} lg>
                    <CardFramer {...item} />
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
