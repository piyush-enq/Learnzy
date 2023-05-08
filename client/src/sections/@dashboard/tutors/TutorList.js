import PropTypes from 'prop-types';
// @mui
import { Grid } from '@mui/material';
import ShopTutorCard from './TutorsCard';

// ----------------------------------------------------------------------

TutorList.propTypes = {
  Tutors: PropTypes.array.isRequired,
};

export default function TutorList({ tutors}) {
  return (
    <Grid container spacing={3}>
      {tutors.map((tutor) => (
        <Grid key={tutor.id} item xs={12} sm={6} md={3}>
          <ShopTutorCard tutor={tutor} />
        </Grid>
      ))}
    </Grid>
  );
}
