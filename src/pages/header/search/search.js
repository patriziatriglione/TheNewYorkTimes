import React, { useState } from "react";
import { InputGroup, Input, InputGroupText } from "reactstrap";
import { FaSearch } from "react-icons/fa";
import { useDispatch} from "react-redux";
import { fetchDataSearch } from "../../../features/redux/actions/articleSearch";
import { useNavigate } from "react-router-dom";



export default function Search() {
  // status for the search query
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // function that sends the request based on the query and leads to the page with the results
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchDataSearch(searchQuery));
    navigate(`/search-results?query=${encodeURIComponent(searchQuery)}`);
    setSearchQuery("")
  };

  return (
    <div>
      <InputGroup>
        <InputGroupText>
          <button onClick={handleSubmit}>
            <FaSearch />
          </button>
        </InputGroupText>
        <Input value={searchQuery} type="text" onChange={(e) => setSearchQuery(e.target.value)} />
      </InputGroup>
    </div>
  );
}


