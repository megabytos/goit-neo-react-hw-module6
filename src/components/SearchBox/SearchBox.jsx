import css from './SearchBox.module.css';

export default function SearchBox({ query, onSearch }) {
  return (
    <div className={css.searchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input type="text" id="search" value={query} onChange={e => onSearch(e.target.value)} />
    </div>
  );
}
