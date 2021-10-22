import React, { useEffect, useState } from "react";
import AllRoute from './pages/router'
import './App.css';

const App = () => {
  const [offSetY, setOffSetY] = useState(0);

  const handleScroll = () => setOffSetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    
      return (
        <div className="App" style={{transform: `translateY(${offSetY *0.5} px)`}}>
                      <AllRoute/>
          <div className="copyRight">
                  <p>
                Website Create By: Carlos Abril Jr
                
                </p>
          </div>
        </div>
      );
}

export default App;
