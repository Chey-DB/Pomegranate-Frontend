import React from 'react';
import {Routes, Route} from 'react-router-dom';

import { LoginPage} from './pages';
//import { Header } from './components';


function App() {

  return (
    <div>
      <Routes>
            <Route path="/" element={<LoginPage />} >
                
                {/* <Route path="/signup" element={<SignUpPage />} /> */}
                

                
                {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Route>
            
        </Routes>
      <h1>
        App Component
      </h1>
    </div>
  
  )
}

export default App
