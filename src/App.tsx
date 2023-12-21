import {Route, Routes} from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import NotFound from './containers/NotFound/NotFound';
import Home from './containers/Home/Home';
import ShowContainer from './containers/ShowContainer/ShowContainer';
import {Alert} from '@mui/material';
import {useAppDispatch, useAppSelector} from './app/hooks';
import {changeIsError, selectErrorMessage, selectIsError} from './store/showSlice';

const App = () => {
  const message = useAppSelector(selectErrorMessage);
  const error = useAppSelector(selectIsError);
  const dispatch = useAppDispatch();

  return (
    <>
      {error && <Alert severity="error" onClose={() => dispatch(changeIsError())}>{message}</Alert>}
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
