import App from "./App";
import "./App.css";

function Form() {

const [search, setSearch] = useState("");
const [query, setQuery] = useState("");


    const updateSearch = e => {
        setSearch(e.target.value);
      };

      const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("")
      }
  


    return (
        <form className="search-box" onSubmit={getSearch}>
        <input className="search-bar" 
        type="text" 
        placeholder="Chicken, peppers etc" 
        onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>

      </form>
    )

}
export default Form; 