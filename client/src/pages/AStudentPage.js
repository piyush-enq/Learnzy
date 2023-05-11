import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { FormControlUnstyledContext } from '@mui/base';
import { Container, Stack, Typography } from '@mui/material';
// components
import AStudentList from '../sections/@dashboard/students/AStudentList';
// mock
import students from '../_mock/students';


// ----------------------------------------------------------------------

export default function AStudentsPage() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  console.log({students});
  return (
    <>
      <Helmet>
        <title>students | Leanrzy </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Students
        </Typography>

        {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <StudentFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <StudentSort />
          </Stack>
        </Stack> */}

        <AStudentList students={students} />
        {/* <StudentCartWidget /> */}
      </Container>
    </>
  );
}
