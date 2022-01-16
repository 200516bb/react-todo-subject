import React, { useState } from 'react';
import Template from './Template.js';
import Header from './Header.js';
import TodoList from './TodoList.js';
import TodoCreate from './TodoCreate.js';

/**
 * todo interface
 * {
 *   id: string
 *   text: string
 *   completed: boolean
 *   createdAt: string
 * }
 */

function App() {
  
  return (
    <main className="App">
      <Template>
        <Header/>
        <TodoList/>
        <TodoCreate/>
      </Template>
      
      
    </main>
  );
}

export default App;
