/* eslint-disable prefer-arrow-callback */
// import { CardContent, styled, TextField } from '@mui/material';

import {
    Card,
    CardContent,
    TextField,
    Grid,
    Button,
    Typography,
    Snackbar,
    Alert,

}
from '@mui/material';

import React, { useState , forwardRef} from 'react';

import Label from '../components/label';

import Iconify from '../components/iconify';


export default function TutorAssignPage() {

    const SnackbarAlert = forwardRef(function(props, ref) {
        return <Alert elevation={6} ref={ref} {...props} />;
      });
      
      

    const [open, setOpen]= useState(false);
    const handleClose=(event , reason)=>{
        if(reason==='clickaway')
        return
        setOpen(false)
    }
    return (
        <Card>
            <CardContent>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Assignments
                </Typography>
                <Grid container spacing={2}>
                    <Grid xs={12} sm={6} item>
                        <TextField label="Subject" placeholder='Enter Subject' variant='outlined' fullWidth />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField label="Topic" placeholder='Enter Topic' variant='outlined' fullWidth />
                    </Grid>
                    <Grid xs={12} sm={12} item>
                        <TextField label="Body" placeholder='Enter body of the assignment' variant='outlined' fullWidth />
                    </Grid>
                    <Grid xs={12} sm={12} item >
                    <TextField type='file' variant='outlined' fullWidth/>
                    </Grid>
                </Grid>
                
                <Button 
                    sx={{margin:2, alignItems:'left' , backgroundColor:'#a200ff'}} 
                    variant="contained" 
                    // startIcon={<Iconify icon="eva:plus-fill" />}
                    onClick={()=>setOpen(true)}  >
                    Upload
                </Button>
                {/* <Snackbar
                    message='Assignment Uploaded successfully!'
                    autoHideDuration={4000}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical:'bottom',
                        horizontal:'center'
                    }}/> */}

                <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{
                    vertical:'bottom',
                    horizontal:'center'
                }}>
                    <SnackbarAlert onClose={handleClose} severity='success'>
                        Assignment uploaded successfully!
                    </SnackbarAlert>
                </Snackbar>
            </CardContent>
        </Card>
    );
}