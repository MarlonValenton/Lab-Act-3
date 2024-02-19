import React, { useState, useEffect } from "react";
import {ThemeProvider} from "styled-components";
import  {useDarkMode} from "./useDarkMode"
import { GlobalStyles } from "./GlobalStyle";
import { lightTheme, darkTheme } from "./Themes"
import Toggle from "./Toggler"
import "./App.css";
import dummyData from "./Data";
import CardList from "./CardList";
import Navbar from './Navbar';
import Sidebar from './Sidebar'
import Filters from './Filters';
import VideoCard from './VideoCard';

const App= () => {

  
  const [videos, setVideos] = useState([]);
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideos(dummyData);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if(!mountedComponent) return <div/>

  return (
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
        <div className="App">
          <Toggle theme={theme} toggleTheme={themeToggler} />
          {
            <>
                  <Navbar/>
                  <Sidebar/>
                  <Filters/>
                  <VideoCard/>
                  </>
}
        </div>
      </>
    </ThemeProvider>
    
  );
};

export default App;
