import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import {Search, SearchIconWrapper, StyledInputBase} from "./NavSearchStyle"

const NavSearch = ({handleSubmit, handleQueryChange, searchQuery}) => {
  return (
    <Search className="search_field">
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <form
            onSubmit={handleSubmit}
          >
            <StyledInputBase
              placeholder="Search for a movie"
              inputProps={{ "aria-label": "search" }}
              onChange={handleQueryChange}
              value={searchQuery}
            />
          </form>
        </Search>
  )
}

export default NavSearch