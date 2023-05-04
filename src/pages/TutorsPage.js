import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { FormControlUnstyledContext } from '@mui/base';
import { Container, Stack, Typography } from '@mui/material';
// components
import TutorList from '../sections/@dashboard/tutors/TutorList';
// mock
import tutors from '../_mock/tutors';


// ----------------------------------------------------------------------

export default function TutorsPage() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  console.log({tutors});
  return (
    <>
      <Helmet>
        <title>Tutors | Leanrzy </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Tutors
        </Typography>

        {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <StudentFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <tutorsort />
          </Stack>
        </Stack> */}

        <TutorList tutors={tutors} />
        {/* <StudentCartWidget /> */}
      </Container>
    </>
  );
}
