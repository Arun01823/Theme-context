// src/App.js
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import './styles/lightTheme.css'; 
import './styles/darkTheme.css';  

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Global Theme Switcher</h1>
        <ThemeSwitcher />
        <p>This is an example of how to switch themes globally in React.</p>
      </div>
    </ThemeProvider>
  );
};

export default App;
