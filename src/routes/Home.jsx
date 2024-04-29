import * as React from 'react';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/en-gb';

import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const defaultDate = "2020-10-01"
    const [date, setDate] = React.useState(defaultDate);
    const [name, setName] = React.useState('');
    const [place, setPlace] = React.useState('');

    const [correct, setCorrect] = React.useState(null);

    const handleSubmit = async () => {
        const selectedDate = new Date(date);
        const correctDate = new Date('2020-10-20T00:00:00');

        if (selectedDate.getDate() === correctDate.getDate() &&
            ['borb', 'pookie', 'ellen'].includes(name) &&
            place === 'dopa'
        ) {
            console.log('loggedin');
            setCorrect(true);
            localStorage.setItem('token', 'loggedIn');
            navigate('/final');
        } else {
            console.log('failed');
            setCorrect(false);
            localStorage.removeItem('token');
        }
    }

    return (
        <Box className="homeForm" >
            <h1>Welcome</h1>
               <Box sx={{  mb: 2 }}>
                <p>What's your name?</p>
                <TextField
                    fullWidth 
                    label="Name" 
                    onChange={(e) => {
                        setName(String(e.target.value).toLowerCase());
                        setCorrect(null);
                    }} 
                />
                <p>When did it all begin?</p>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                    <DatePicker 
                        sx={{ width: 300 }}
                        defaultValue={dayjs(defaultDate)} 
                        onChange={(selectedDate) => {
                            setDate(selectedDate);
                            setCorrect(null);
                            console.log(selectedDate);
                        }} 
                    />
                </LocalizationProvider>
                <p>Where did it all begin? (hint: first date)</p>
                <TextField 
                    fullWidth
                    label="Place" 
                    onChange={(e) => {
                        setPlace(String(e.target.value).toLowerCase());
                        setCorrect(null);
                    }} 
                />
            </Box>
            <Box>
                <Button 
                    sx={{ mb: 2 }} 
                    variant="contained" 
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
                {correct === false && 
                    <Alert severity="error">Wrong!</Alert>
                }
            </Box>
        </Box>
    )
}

export default Home;