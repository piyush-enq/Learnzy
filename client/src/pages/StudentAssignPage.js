
import { Link } from "react-router-dom";
// import { CardContent, styled, TextField } from '@mui/material';
import { useState, forwardRef } from 'react';
import {

    Card,
    CardContent,

    Typography,

}
    from '@mui/material';
import Label from '../components/label';


export default function StudentAssignPage() {

    return (
        <Card>
            <CardContent>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Your Assignments are here!
                </Typography>
                {/* <Grid container spacing={2}>
                    <Grid xs={12} sm={6} item>
                        <TextField label="Subject" placeholder='Enter Subject' variant='outlined' fullWidth />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField label="Topic" placeholder='Enter Topic' variant='outlined' fullWidth />
                    </Grid>
                    <Grid xs={12} sm={12} item >
                    <TextField type='file' variant='outlined' fullWidth/>
                    </Grid>
                </Grid> */}

                {/* <Button sx={{margin:2, alignItems:'left' , backgroundColor:'#a200ff'}} variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} >
                    Upload
                </Button> */}
            </CardContent>
        </Card>
    );
}