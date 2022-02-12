import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MultipleSelect(props) {

   const [event, setEvent] = React.useState('');

  const handleChange = (event) => {
    props.setEvent(event.target.value);
    setEvent(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Event</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={event}
          label="Event"
          onChange={handleChange}
        >
          <MenuItem value='CADegorized'>CADegorized</MenuItem>
          <MenuItem value='Yantra Search'>Yantra Search</MenuItem>
          <MenuItem value='Heatovation'>Heatovation</MenuItem>
          <MenuItem value='Trade Assemble'>Trade Assemble</MenuItem>
          <MenuItem value='Quizario'>Quizario</MenuItem>
          <MenuItem value='TrustMe'>TrustMe</MenuItem>
          <MenuItem value='Chess'>Chess</MenuItem>
          <MenuItem value='Valorant'>Valorant</MenuItem>
          <MenuItem value='BGMI'>BGMI</MenuItem>
          <MenuItem value='Roadmap - Strategy Design Contest'>Roadmap - Strategy Design Contest</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
