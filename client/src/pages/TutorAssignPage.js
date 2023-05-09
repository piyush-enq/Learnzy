/* eslint-disable prefer-arrow-callback */
// import { CardContent, styled, TextField } from '@mui/material';
// eslint-disable-next-line import/no-unresolved
import axios from 'axios';
import {
    Card,
    CardContent,
    TextField,
    Grid,
    Button,
    Typography,
    Snackbar,
    Alert
} from '@mui/material';

import React, { useState, forwardRef } from 'react';
// import axios from 'axios';

export default function TutorAssignPage() {

    const SnackbarAlert = forwardRef(function (props, ref) {
        return <Alert elevation={6} ref={ref} {...props} />;
    });

    const [open, setOpen] = useState(false);
    const [subject, setSubject] = useState('');
    const [topic, setTopic] = useState('');
    const [body, setBody] = useState('');

    const handleClose = (event, reason) => {
        if (reason === 'clickaway')
            return
        setOpen(false)
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/api/assignments', { subject, topic, body });
            console.log(response.data);
            setOpen(true);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Card>
            <CardContent>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Assignments
                </Typography>
                <form onSubmit={handleFormSubmit}>
                    <Grid container spacing={2}>
                        <Grid xs={12} sm={6} item>
                            <TextField label="Subject" placeholder='Enter Subject' variant='outlined' fullWidth value={subject} onChange={(event) => setSubject(event.target.value)} />
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <TextField label="Topic" placeholder='Enter Topic' variant='outlined' fullWidth value={topic} onChange={(event) => setTopic(event.target.value)} />
                        </Grid>
                        <Grid xs={12} sm={12} item>
                            <TextField label="Body" placeholder='Enter body of the assignment' variant='outlined' fullWidth value={body} onChange={(event) => setBody(event.target.value)} />
                        </Grid>
                        <Grid xs={12} sm={12} item >
                            <TextField type='file' variant='outlined' fullWidth />
                        </Grid>
                    </Grid>

                    {/* <Button
                        sx={{ margin: 2, alignItems: 'left', backgroundColor: '#a200ff' }}
                        variant="contained"
                        type="submit"
                    >
                        Upload
                    </Button> */}

                <Button 
                    sx={{margin:2, alignItems:'left' , backgroundColor:'#a200ff'}} 
                    variant="contained" 
                    // startIcon={<Iconify icon="eva:plus-fill" />}
                    onClick={()=>setOpen(true)}  >
                    Upload
                </Button>


                </form>

                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center'
                    }}>
                    <SnackbarAlert onClose={handleClose} severity='success'>
                        Assignment uploaded successfully!
                    </SnackbarAlert>
                </Snackbar>
            </CardContent>
        </Card>
    );
}

  