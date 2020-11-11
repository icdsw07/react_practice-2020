import React, { useEffect, useState, useCallback, useMemo} from 'react';
import logo from './logo.svg';
import './App.css';

import Name from './shared/Name';
import NameButton from './shared/NameButton';

import One from './pages/One';
import Two from './pages/Two';
import Three from './pages/Three';

const players = [
  {
    name : '흥민',
    age : 17,
  },
  {
    name : '지성',
    age : 36,
  },
]

const pages = [
  {
    displayName : 'One',
    value: 1,
  },
  {
    displayName: 'Two',
    value:2,

  },
  {
    displayName: 'Three',
    value:3,
  },
]
function App () {  
  const [historyIndex, setHistoryIndex] = useState(0);

  const currentPage = useMemo(()=>{
    console.log('currentPage: ', window.location.pathname.split('/')[1]);
    return Number(window.location.pathname.split('/')[1]);
  }, [historyIndex]);


  return (
    <div className={StyleSheet.container}>
      <div>
      {pages.map((page,pI)=>{
        const current = page.value === currentPage;
        return(          
          <span
          onClick={()=>{
            window.history.pushState({},page.displayName, `/${page.value}`);
            setHistoryIndex(historyIndex + 1);
          }}
          style={{
            marginRight: '10px',
            textDecoration: 'none',
            color: current? 'skyblue' : 'black',
          }}
          >
            {page.displayName}
          </span>
        )

      })}
      </div>
      {currentPage === 1 && <One/>}
      {currentPage === 2 && <Two/>}
      {currentPage === 3 && <Three/>}
    </div>
  );

}


export default App;
