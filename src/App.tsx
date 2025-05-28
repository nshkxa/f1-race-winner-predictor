import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import PredictorApp from './components/PredictorApp';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <PredictorApp />
      </Layout>
    </ThemeProvider>
  );
}

export default App;