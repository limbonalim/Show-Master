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
        <Autocomplete></Autocomplete>
      </header>
      <main>
        {children}
      </main>
    </>
  );
};

export default Layout;