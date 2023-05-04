import { useState } from 'react';
// import { styled } from '@mui/material';
import {
    styled,
    Card,
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
} from '@mui/material';


export default function TutorProfilePage() {

    const MyStyledComponent = styled('div')`
    backgroundImage: url(/assets/images/tutors/tutor_6.jpg)
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: 100,
    height: 100,
    borderRadius: '50%',
    backgroundColor: 'gray', // provide a fallback background color
  `;

    const ProfilePic = styled('img')`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  `;

  ProfilePic.defaultProps = {
    src: '/assets/images/tutors/tutor_6.jpg',
  };

    return (
        <Container>
            <Typography variant="h4" sx={{ mb: 5 }}>
                My Profile
            </Typography>

            <Grid container spacing={2} alignItems='center'>
                <Grid item xs={4}>
                    <ProfilePic sx={{ backgroundColor: 'gray' }} />
                </Grid>
                <Grid item xs={8}>
                    <Typography variant='h3' sx={{mb:1}}>
                        Aakash Sharma
                    </Typography>
                    <Typography variant='h6' sx={{fontWeight:500}}>
                        Rajkot, India
                    </Typography>
                    <Typography variant='h5'>
                    MATHEMATICS EDUCATOR - Specialized in IIT-JEE || SAT || AP || GRE || CBSE || ISC || IGCSE || IB
                    </Typography>
                    <Typography variant='h5' sx={{fontWeight:700, marginTop:2}} >
                        Bio
                    </Typography>
                    <Typography variant='body2'>
                    My self Aakash Sharma, I am passionate and experienced math teacher with 8 years of experience. My love for mathematics started at a young age. After completing my studies, I began my career as a math teacher, and since then, I have been inspiring and motivating students to love and appreciate math.
                    </Typography>
                </Grid>
                <Grid item xs={8} sx={{justifyContent:'center'}}>
                    <Typography variant='button' sx={{fontWeight:200}}>
                        Male, 30 Years
                    </Typography>
                
                </Grid>
                <Grid>
                    <Typography variant='h3'>
                        $70
                    </Typography>
                    <Typography variant='subtitle1'>
                        Hourly Rate
                    </Typography>
                </Grid>
                <Grid>
                    <Typography variant='h3'>
                        40
                    </Typography>
                    <Typography variant='subtitle1'>
                        Classes Taken
                    </Typography>
                </Grid>
                <Grid>
                    <Typography  variant='h3'>
                        12
                    </Typography>
                    <Typography variant='subtitle1'>
                        Videos
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}
