import './App.css';
import React from 'react';
import FunctionContextComponent from './FunctionContextComponent'
import { ThemeProvider } from './ThemeContext';

function App() {
  
  return (
    // <>
    //   <ThemeContext.Provider value={darkTheme}>
    //     <button onClick={toggleTheme}>Toggle Theme</button>
    //     <FunctionContextComponent />
    //   </ThemeContext.Provider>
    // </>
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  );
}

export default App;
