
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


import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";



export default function TutorProfilePage()

{
    const ProfilePic = styled('img')`
        width: 200px;
        height: 200px;
        border-radius: 50%;
        box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.5);
    `;

    // const [selectedSubjects, setSelectedSubjects] = useState([]);

    // const handleSubjectChange = (event) => {
    //     const { value, checked } = event.target;
    //     if (checked) {
    //       setSelectedSubjects((prevSelectedSubjects) => [
    //         ...prevSelectedSubjects,
    //         value,
    //       ]);
    //     } else {
    //       setSelectedSubjects((prevSelectedSubjects) =>
    //         prevSelectedSubjects.filter((subject) => subject !== value)
    //       );
    //     }
    //   };

    
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
        gender: 'Female',
        subject: 'Mathematics',
        email:"ramyapriyas@gmail.com",
        class: '11',
        age: '17',
        gpa: '8.0',
        medium: 'English',
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
        // const updatedTeacher = {
        //     ...teacher,
        //     subjects: selectedSubjects,
        // };
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
                        <Typography variant='h6' sx={{mb:1}}>
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
                    {/* <Grid xs={12} sm={6} item>
                        <Typography variant="subtitle1" sx={{ mb: 1 }}>
                            Select Subjects
                        </Typography>  
                    </Grid>
                     <Grid xs={12} sm={6} item>
                        <label htmlFor="subject">Subject</label>
                        <select
                            name="subject"
                            id="subject"
                            value={teacher.subject}
                            onChange={handleInputChange}
                            aria-label="Select a subject"
                        >
                            <option value="">-- Select a subject --</option>
                            <option value="math">Mathematics</option>
                            <option value="science">Science</option>
                            <option value="english">English</option>
                            <option value="history">History</option>
                        </select>
                    </Grid>  */}
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
                            type='email'
                            label='email'
                            name='email'
                            placeholder='Enter email'
                            variant='outlined'
                            value={teacher.email}
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
                            inputProps={{min:1,max:12}}
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
                            inputProps={{min:1,max:150}}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    
                    <Grid xs={12} sm={6} item>
                        <TextField
                            type='number'
                            name='gpa'
                            label='GPA'
                            placeholder='Enter GPA'
                            variant='outlined'
                            value={teacher.gpa}
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField
                            type='text'
                            name='medium'
                            label='Medium of Instruction'
                            placeholder='Enter Medium of instruction'
                            variant='outlined'
                            value={teacher.medium}
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </Grid>
                    {/* <Grid xs={12} sm={6} item>
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
                    </Grid> */}
                    <Grid xs={12} sm={12} item>
                        <Button
                            sx={{ margin: 2,padding:1 , justifyContent:'left', backgroundColor: '#a200ff' }}
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
                <Typography variant="h3" sx={{ mb: 5 }}>
                    My Profile
                </Typography>
                <Grid container spacing={2} alignItems='center'>
                    <Grid item xs={4}>
                        <ProfilePic  sx={{ backgroundColor: 'gray' }} />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant='h3' sx={{ mb: 1, color: '#9100e6' }} >
                            {teacher.name}
                        </Typography>
                        <Typography variant='h6' >
                            {teacher.age} yrs
                        </Typography>
                        <Typography variant='h6' >
                            {teacher.gender}, India
                        </Typography>
                        <Typography variant='h5' >
                            {teacher.email}
                        </Typography>
                        {/* <Typography variant='h5'>
                            {teacher.experience} of {teacher.subject} 
                        </Typography> */}
                        <Typography variant='h5' sx={{ fontWeight: 700, marginTop: 2 }} >
                            {/* Bio */}
                        </Typography>
                        {/* <Typography variant='body2' >
                            {teacher.bio}
                        </Typography> */}
                    </Grid>
                </Grid>
                {/* <Grid container spacing={4} sx={{ margin:2 }} justifyContent="ceter" alignItems="center">
                    <Grid item xs={3} > 
                        <Typography variant='h3'>
                            {teacher.class}
                        </Typography>
                    </Grid>
                    <Grid item xs={3} >
                        <Typography variant='h3'>
                            {teacher.class}th Grade
                        </Typography>
                        <Typography variant='h4' color='#9100e6'>
                            Class/Std
                        </Typography>
                    </Grid>
                    <Grid item xs={3} >
                        <Typography variant='h3'>
                            {teacher.gpa}
                        </Typography>
                        <Typography variant='h5' color='#9100e6'>
                            GPA
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                   
                    <Typography variant='h3'>
                        {teacher.subject}
                       
                    </Typography>
                    <Typography variant='h5' color='#9100e6'>
                        Subjects
                    </Typography>
                 
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant='h3'>
                            {teacher.medium}
                        </Typography>
                        <Typography variant='h5' color='#9100e6'>
                            Medium of instruction
                        </Typography>
                    </Grid>
                </Grid> */}
                
                <Grid container spacing={4} sx={{ marginTop: 2 }} justifyContent="ceter" alignItems="center">
                    <Grid item xs={3} >
                        <Typography variant='button' sx={{ fontWeight: 200 }}>
                            {teacher.gender}, {teacher.age} Years
                        </Typography>
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
                    sx={{ margin: 0, alignItems: 'left', backgroundColor: '#a200ff', fontSize:'15px'}}
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
    