import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";

export const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "5px",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
    border: "1px solid black",
  }));
  
  export const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "1",
    width: "5px",
    borderRadius: "5px",
  }));
  
  export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    // width: "20%",
    [theme.breakpoints.down("sm")]: {
      // width: "20%",
    },
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      // width: "100%",
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(0.1, 0.1, 0.1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(3)})`,
        width: "6ch",
        // "&:focus": {
        //   width: "20ch",
        // },
      },
      [theme.breakpoints.up("lg")]: {
        width: "20ch",
        // "&:focus": {
        //   width: "20ch",
        // },
      },
    },
    borderRadius: "5px",
  }));