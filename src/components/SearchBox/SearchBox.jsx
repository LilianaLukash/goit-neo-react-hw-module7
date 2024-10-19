
import styles from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectNameFilter, setFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.filter}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        className={styles.input}
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
}
