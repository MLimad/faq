import React, { useState } from 'react'
import "./App.css"
import SingleQuestion from './SingleQuestion';
import data from './data'

function App() {
  const [questions,setquestions] = useState(data);

  return (
    <div className="container">
      <section>
        <h1>FAQ</h1>

      {
          questions.map((question) => {
            return <SingleQuestion key={question.id} {...question}/>;
          })
      }
        

      </section>
    </div>
  );
}

export default App;
