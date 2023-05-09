import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState } from 'react';

// @mui
import {
  Card,
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
// components
import { styled } from '@mui/system';
import Label from '../components/label';
import Iconify from '../components/iconify';
import Scrollbar from '../components/scrollbar';
// sections
import { UserListHead, UserListToolbar } from '../sections/@dashboard/user';
// mock

import USERLIST from '../_mock/user';
import palette from '../theme/palette';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'city', label: 'City', alignRight: false },
  { id: 'subject', label: 'Subject', alignRight: false },
//   { id: 'isVerified', label: 'Verified', alignRight: false },
  { id: 'select', label: 'Select', alignRight:false },
  // { id: '' },
];




const MyTutorsPage = () => {
    return (

        <div >

            <h4>HIII this is student selected tutors </h4>

        </div>

    );

};





export default MyTutorsPage;