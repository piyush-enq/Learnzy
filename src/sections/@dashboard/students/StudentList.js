import PropTypes from 'prop-types';
// @mui
import { Grid } from '@mui/material';
import ShopStudentCard from './StudentCard';

// ----------------------------------------------------------------------

StudentList.propTypes = {
  Students: PropTypes.array.isRequired,
};

export default function StudentList({ Students}) {
  return (
    <Grid container spacing={3}>
      {Students.map((student) => (
        <Grid key={student.id} item xs={12} sm={6} md={3}>
          <ShopStudentCard student={student} />
        </Grid>
      ))}
    </Grid>
  );
}
