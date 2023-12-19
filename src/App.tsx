import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import NotFound from './containers/NotFound/NotFound';
import Home from './containers/Home/Home';
import ShowContainer from './containers/ShowContainer/ShowContainer';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={(<Home/>)}/>
          <Route path="/shows/:id" element={<ShowContainer/>}/>
          <Route path="*" element={(<NotFound/>)}/>
        </Routes>
      </Layout>

    </>
  );
};

export default App;
