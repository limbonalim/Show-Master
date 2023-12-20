import React from 'react';
import {AsyncTypeahead, Menu} from 'react-bootstrap-typeahead';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {fetchShows} from '../../store/showThunks';
import {selectIsSearchLoading, selectListOfOptions} from '../../store/showSlice';

const Autocomplete = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectIsSearchLoading);
  const options = useAppSelector(selectListOfOptions);
  const ref = React.createRef();

  return (
    <AsyncTypeahead
      id="Autocomplete"
      isLoading={loading}
      ref={ref}
      onSearch={async (query) => {
        await dispatch(fetchShows(query));
      }}
      options={options}
      renderMenu={(results) => (
        <Menu className="rbt-menu dropdown-menu show w-100 overflow-y-scroll" id="Autocomplete">
          {results.map(({to, label}) => (
            <Link
              key={to}
              to={to}
              onClick={() => ref.current.clear()}
              className="d-block text-secondary text-decoration-none"
            >{label}</Link>
          ))}
        </Menu>
      )}
    />
  );
};

export default Autocomplete;