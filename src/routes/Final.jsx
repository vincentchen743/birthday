import * as React from 'react';

import 'dayjs/locale/en-gb';
import '../App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';

import { Navigate } from 'react-router-dom';

function Final() {
    const [letter1, setLetter1] = React.useState('');
    const [letter2, setLetter2] = React.useState('');
    const [letter3, setLetter3] = React.useState('');
    const [letter4, setLetter4] = React.useState('');
    
    const [correct, setCorrect] = React.useState(null);

    React.useEffect(() => {
        if (letter1 === 'P' && letter2 === 'O' && letter3 === 'L' && letter4 === 'Y') {
            setCorrect(true);
        } else {
            setCorrect(false);
        }
    }, [letter1, letter2, letter3, letter4]);

    return (
        <Box>
            <Box sx={{ mb: 10 }}>
                <h1>Where are we going for your borbeeday??</h1>
                <Box sx={{ textAlign: 'left' }}>
                    <p>What is the first letter of...</p>
                    <p><em>Hint for Letter 1:</em> Our newest nickname</p>
                    <p><em>Hint for Letter 2:</em> Our most commonly used 3 letter exclamation?</p>
                    <p><em>Hint for Letter 3:</em> I_Y?</p>
                    <p><em>Hint for Letter 4:</em> _ is you so spicy?</p>
                </Box>
                <Grid sx={{ mt: 1 }} container spacing={2} className="grid">
                    <Grid item xs={2} sx={{boxSizing: 'content-box'}} >
                        <TextField
                            inputProps={{ maxLength: 1 }}
                            autoComplete="off"
                            onChange={(input) => setLetter1(input.target.value.toUpperCase())}
                        />
                    </Grid>
                    <Grid item xs={2} sx={{boxSizing: 'content-box'}} >
                        <TextField
                            inputProps={{ maxLength: 1 }}
                            autoComplete="off"
                            onChange={(input) => setLetter2(input.target.value.toUpperCase())}
                        />
                    </Grid>
                    <Grid item xs={2} sx={{boxSizing: 'content-box'}} >
                        <TextField
                            inputProps={{ maxLength: 1 }} 
                            autoComplete="off"
                            onChange={(input) => setLetter3(input.target.value.toUpperCase())}
                        />
                    </Grid>
                    <Grid item xs={2} sx={{boxSizing: 'content-box'}} >
                        <TextField
                            inputProps={{ maxLength: 1 }} 
                            autoComplete="off"
                            onChange={(input) => setLetter4(input.target.value.toUpperCase())}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box>
                {correct && 
                    <Box sx={{
                        typography: 'body1',
                        '& > :not(style) ~ :not(style)': {
                          ml: 2,
                        },
                      }}
                    >
                        <h1>Poly</h1>
                        <Link href="https://www.polysurryhills.com.au/">Restaurant</Link>
                        <Link href="https://www.instagram.com/poly_au/">Instagram</Link>
                    </Box>
                }
            </Box>
        </Box>
    )
}

export default Final;