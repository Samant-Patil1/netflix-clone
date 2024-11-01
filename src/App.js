import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <MovieList />
      </main>
    </div>
  );
};

export default App;
