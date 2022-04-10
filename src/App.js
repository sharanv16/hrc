//import logo from './images/favicon.png';
import logohighradius from './images/logohighradius.png'
import group_logo from './images/Group 20399.png'
import * as React from 'react';
import './App.css';
import Tabledatagrid from './Tabledatagrid'; 
import Button from '@mui/material/Button';
//import SearchAppBar from './search';
import ButtonGroup from '@mui/material/ButtonGroup';
import {styled,alpha} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function App() {
  return (
    <div className = "container">
      
      <div className = "header">
        <div className = "company_name">< img src={group_logo} alt = "group logo"></img></div>
        <div className = "logo"><img src={logohighradius} alt="high_radius icon"></img></div>
        </div>


        <div className = "body">
        <div className = "body_header">
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <p>
          <Button variant="contained">Predict</Button> 
            </p>
          <p>
          <Button variant="contained" fullWidth>Analytics Search</Button>
            </p>
          <p>
          <Button variant="contained">Advance view</Button> 
            </p>
            </ButtonGroup>

            <Search>
            <StyledInputBase
              placeholder="Search Custumer id"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

        <ButtonGroup variant="contained" aria-label="outlined primary button group" align-text = "right">
          <p>
          <Button variant="contained">add</Button> 
            </p>
          <p>
          <Button variant="contained">edit</Button>
            </p>
          <p>
          <Button variant="contained">delete</Button> 
            </p>
            </ButtonGroup>
        </div>
        <div className="body_data">
        <Tabledatagrid /> 
            </div>
        </div>
        <div className = "footer" ><a href="#">Privacy Policy </a>| © 2022 HighRadius Corporation. All rights reserved.</div>
    </div>
  );
}

export default App;
