import { Link } from "react-router-dom";
import {Helmet} from 'react-helmet-async';
import{ filter} from 'lodash';
import{sentanceCase} from 'change-case';
import{useState,useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid'

import {
    Alert,
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

const CustomButton = styled(Button)
// Displaying the list of selected tutors
const columns = [
    // { field: 'email', headerName: 'Email' },
    { field: 'name', headerName: 'Name', width: 300 },
    { field: 'phone', headerName: 'Phone Number', width: 300 },
    { field: 'email', headerName: 'Email', width: 300 },
    // { field: 'button', headerName: 'Button', formatter: ({ row }) => <button color='red' onClick={() => handleClick(row)}>Click me</button> },
    {
        field: "actions",
    headerName: "Approve",
    sortable: false,
    renderCell: ({ row }) =>
      <Button onClick={() =>  alert('Approve')}>
        Approve
      </Button>,
      },
      {
        field: "action",
    headerName: "Deny",
    sortable: false,
    renderCell: ({ row }) =>
      <Button onClick={() => alert('Deny')}>
        Deny
      </Button>,
      },
];
function handleClick(row) {
    console.log(`Button clicked for row with id \${row.id}`);
  }

const DummyReview = () => {
    const [tableData, setTableData] = useState([])
   
  
    useEffect(() => {
      fetch("http://localhost:5000/trial")
        .then((data) => data.json())
        .then((data) => setTableData(data))
  
    }, [])
  
    console.log(tableData)
    return (
        <div style={{ height: 700, width: '100%' }}>
          <DataGrid
            getRowId={(row) =>  row.name }
            rows={tableData}
            columns={columns}
            pageSize={12}
          />
        </div>
      )

};

export default DummyReview;