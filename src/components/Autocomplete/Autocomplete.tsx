import React, {useEffect, useState} from 'react';
import {AsyncTypeahead, Menu} from 'react-bootstrap-typeahead';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {fetchShows} from '../../store/showThunks';
import {selectSearchList} from '../../store/showSlice';
import {Link} from 'react-router-dom';


const items = [
  {label: 'Home', to: '/'},
  {label: 'About', to: '/about'},
  {label: 'Contact', to: '/contact'},
];
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
          to: `/show/${item.show.id}`,
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
      renderMenu={(results, menuProps) => (
        <Menu {...menuProps}>
          {results.map((option, position) => (
            <Link
              key={position}
              to={option.to}
              onClick={() => ref.current.clear()}
              className="d-block text-secondary text-decoration-none"
            >{option.label}</Link>
          ))}
        </Menu>
      )}
    />
  );
};

export default Autocomplete;