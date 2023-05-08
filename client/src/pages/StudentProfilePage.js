import { useState, props } from 'react';

import {
    styled,
    Box,
    Card,
    Grid,
    Table,
    Stack,
    Avatar,
    Button,
    Container,
    Typography,
    TextField,
} from '@mui/material';
import { bgcolor, height } from '@mui/system';
import { purple } from '@mui/material/colors';


export default function TutorProfilePage() {

    const ProfilePic = styled('img')`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.5);
  `;

    ProfilePic.defaultProps = {
        src: '/assets/images/students/student_7.jpg',
    };


    const StyledAvatar = styled('div')(({ theme }) => ({
        width: 200,
        height: 200,
        margin: 'auto',
        marginTop: 5,
        marginBottom: 2,
    }));



    const StyledEditButton = styled('button')(({ theme }) => ({
        margin: 4,
        backgroundColor: '#a200ff'
    }));


    const [teacher, setTeacher] = useState({
        name: 'Ramya Priya',
        class: '11',
        gender: 'Female',
        age: '17',
        subject: 'MATHEMATICS',
        bio: 'My self Aakash Sharma, I am passionate and experienced math teacher with 8 years of experience. My love for mathematics started at a young age. After completing my studies, I began my career as a math teacher, and since then, I have been inspiring and motivating students to love and appreciate math.',
        rate: '300',
        experience: '8 years',
        profilePic: null,
    });

    const [isEditMode, setIsEditMode] = useState(false);

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'file' ? target.files[0] : target.value;
        const name = target.name;

        setTeacher((prevTeacher) => ({
            ...prevTeacher,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(teacher);
        setIsEditMode(false);
    };

    const handleEditClick = () => {
        setIsEditMode(true);
    };

    const renderForm = () => {
        return (
            <Container>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Update Profile
                </Typography>
                <Grid container spacing={3}>
                    <Grid xs={12} sm={12} item>
                        <Typography variant='h6' sx={{ mb: 1 }}>
                            Update Photo
                        </Typography>
                        <TextField
                            type='file'
                            variant='outlined'
                            fullWidth
                            value={teacher.profilePic}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField
                            type='text'
                            label='Name'
                            name='name'
                            placeholder='Enter Name'
                            variant='outlined'
                            value={teacher.name}
                            fullWidth

                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField
                            type='number'
                            name='class'
                            label='Class'
                            placeholder='Enter Class'
                            variant='outlined'
                            value={teacher.class}
                            fullWidth
                            inputProps={{ min: 1, max: 12 }}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField
                            type='text'
                            name='gender'
                            label='Gender'
                            placeholder='Enter Gender'
                            variant='outlined'
                            value={teacher.gender}
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField
                            type='number'
                            name='age'
                            label='Age'
                            placeholder='Enter Age'
                            variant='outlined'
                            value={teacher.age}
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField
                            type='text'
                            name='subject'
                            label='Subject'
                            placeholder='Enter Subject'
                            variant='outlined'
                            value={teacher.subject}
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField
                            type='text'
                            name='bio'
                            label='Bio'
                            placeholder='Enter Bio'
                            variant='outlined'
                            value={teacher.bio}
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField
                            type='text'
                            name='experience'
                            label='Experience'
                            placeholder='Enter Experience'
                            variant='outlined'
                            value={teacher.experience}
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField
                            type='number'
                            name='rate'
                            label='Rate'
                            placeholder='Enter Rate'
                            variant='outlined'
                            value={teacher.rate}
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid xs={12} sm={12} item>
                        <Button
                            sx={{ margin: 2, padding: 1, justifyContent: 'left', backgroundColor: '#a200ff' }}
                            variant="contained"
                            onClick={handleSubmit}>
                            Save Profile
                        </Button>
                    </Grid>
                </Grid>
            </Container>

        );
    };



    const TeacherDetails = () => {
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
                        <Typography variant='h3' sx={{ mb: 1, color: '#9100e6' }} >
                            {teacher.name}
                        </Typography>
                        <Typography variant='h6' sx={{ fontWeight: 500 }}>
                            {teacher.class}th Grade
                        </Typography>
                        <Typography variant='h6' sx={{ fontWeight: 500 }}>
                            {teacher.gender}, India
                        </Typography>
                        <Typography variant='h5'>
                            {teacher.experience} of {teacher.subject}
                        </Typography>
                        <Typography variant='h5' sx={{ fontWeight: 700, marginTop: 2 }} >
                            Bio
                        </Typography>
                        <Typography variant='body2' >
                            {teacher.bio}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={4} sx={{ marginTop: 2 }} justifyContent="ceter" alignItems="center">
                    <Grid item xs={3} >
                        <Typography variant='h6'>
                            {teacher.subject}
                        </Typography>
                    </Grid>
                    <Grid item xs={3} >
                        <Typography variant='h3'>
                            ${teacher.rate}
                        </Typography>
                        <Typography variant='subtitle1' color='#9100e6'>
                            Hourly Rate
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant='h3'>
                            40
                        </Typography>
                        <Typography variant='subtitle1' color='#9100e6'>
                            Classes Taken
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant='h3'>
                            12
                        </Typography>
                        <Typography variant='subtitle1' color='#9100e6'>
                            Videos
                        </Typography>
                    </Grid>
                </Grid>
                <Button
                    sx={{ margin: 2, alignItems: 'left', backgroundColor: '#a200ff' }}
                    variant="contained"
                    onClick={handleEditClick}>
                    Edit Profile
                </Button>



            </Container>
        );
    };


    return (

        <Container sx={{ marginTop: 8 }}>

            {isEditMode ? (
                renderForm()
            ) : (
                <TeacherDetails />
            )}
        </Container>
    );
}