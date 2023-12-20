import React, {PropsWithChildren} from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import Autocomplete from '../../components/Autocomplete/Autocomplete';

interface Props extends PropsWithChildren {

}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <>
      <header className="mb-5">
        <Toolbar/>
        <div className="col-8 container">
          <span className="fs-4 text-secondary">Search:</span>
          <Autocomplete></Autocomplete>
        </div>
      </header>
      <main className="container">
        {children}
      </main>
    </>
  );
};

export default Layout;