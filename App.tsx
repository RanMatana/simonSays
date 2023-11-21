import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';

const App: React.FC = () => {
  return <Provider store={store}></Provider>;
};

export default App;
