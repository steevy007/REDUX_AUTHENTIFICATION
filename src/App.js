import React from 'react';
import Signin from './containers/signin/Signin';
import Signup from './containers/signup/Signup';
function App() {
  const toggleForm = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
  };
  return (
    <section>
      <div className="container">
        <Signin onToggleForm={toggleForm}/>
        <Signup onToggleForm={toggleForm}/>
      </div>
    </section>
  );
}

export default App;
