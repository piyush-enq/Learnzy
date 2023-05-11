/* eslint-disable prefer-arrow-callback */
import PropTypes from 'prop-types';
import { React, useState, forwardRef } from 'react';
// @mui
import {
  Alert,
  AlertProps,
  Snackbar,
  Box,
  Card,
  CardContent,
  CardActions,
  Link,
  Typography,
  Stack,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  TextField,
} from '@mui/material';


// ----------------------------------------------------------------------



// ----------------------------------------------------------------------

StudentAssignCard.propTypes = {
  Assignment: PropTypes.object,
};

export default function StudentAssignCard({ assignment }) {
  const { id, subject, topic, body } = assignment;
  const [open, setOpen] = useState(false);
  // const [formSubmitted, setFormSubmitted] = useState(false);
  // const [showSnackbar, setShowSnackbar] = useState(false);

  // const SnackbarAlert = forwardRef(function (props, ref) {
  //   return <Alert elevation={6} ref={ref} {...props} />;
  // });

  // const handleFormSubmit = () => {
  //   setFormSubmitted(true);
  //   setOpen(false);
  //   setShowSnackbar(true);
  // }

  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway')
  //     return
  //   setOpen(false)
  // }

  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {subject}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {topic}
        </Typography>
        <Typography variant="body2">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='outlined'>Done</Button>
      </CardActions>
    </Card>
  );
}
