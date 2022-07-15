import "./App.scss";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";

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
          <p>Modo oscuro: {isDarkMode.toString()}</p>
          <DarkModeSwitch
            style={{ marginBottom: "2rem" }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={50}
          />
        </header>
      </div>
    </div>
  );
}

export default App;
