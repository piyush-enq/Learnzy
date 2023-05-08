// import { CardContent, styled, TextField } from '@mui/material';

import {
    Card,
    CardContent,
    TextField,
    Grid,
    Table,
    Stack,
    Paper,
    Avatar,
    Button,
    Popover,
    Checkbox,
    TableRow,
    MenuItem,
    TableBody,
    TableCell,
    Container,
    Typography,
    IconButton,
    TableContainer,
    TablePagination,
}
from '@mui/material';
import Label from '../components/label';

import Iconify from '../components/iconify';

export default function TutorAssignPage() {
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