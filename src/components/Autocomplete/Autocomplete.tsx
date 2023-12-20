import React, {useEffect, useState} from 'react';
import {AsyncTypeahead, Menu} from 'react-bootstrap-typeahead';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {fetchShows} from '../../store/showThunks';
import {selectSearchList} from '../../store/showSlice';
import {Link} from 'react-router-dom';

const Autocomplete = () => {
  const dispatch = useAppDispatch();
  const searchList = useAppSelector(selectSearchList);
  const [options, setOptions] = useState([]);
  const ref = React.createRef();

  useEffect(() => {
    if (searchList.length > 0) {
      setOptions(searchList.map((item) => {
        return {
          label: item.show.name,
          to: `/shows/${item.show.id}`,
        };
      }));
    }
  }, [searchList]);

  return (
    <AsyncTypeahead
      id="Autocomplete"
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