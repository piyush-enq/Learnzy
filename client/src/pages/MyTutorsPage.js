import { Link, useLocation } from "react-router-dom";
import {Helmet} from 'react-helmet-async';
import{ filter} from 'lodash';
import{sentanceCase} from 'change-case';
import{useState, useEffect} from 'react';



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
// mock

import USERLIST from '../_mock/user';
import palette from '../theme/palette';




// Displaying the list of selected tutor
const TABLE_HEAD = [
    { id: 'name', label: 'Name', alignRight: false },
    { id: 'city', label: 'City', alignRight: false },
    { id: 'subject', label: 'Subject', alignRight: false },
    { id: 'remove', label: 'Remove', alignRight:false }
]

// --------------------------------------------------------
// sorting functions

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    if (query) {
      return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el) => el[0]);
  }

  export default function MyTutorsPage() {
    const [open, setOpen] = useState(null);

    const [page, setPage] = useState(0);
  
    const [order, setOrder] = useState('asc');
  
    const [selected, setSelected] = useState([]);
  
    const [orderBy, setOrderBy] = useState('name');
  
    const [filterName, setFilterName] = useState('');
  
    const [rowsPerPage, setRowsPerPage] = useState(5);
  
  
  
    const handleOpenMenu = (event) => {
      setOpen(event.currentTarget);
    };
  
    const handleCloseMenu = () => {
      setOpen(null);
    };
  
    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };
  
    // select all
    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelecteds = USERLIST.map((n) => n.name);
        setSelected(newSelecteds);
        return;
      }
      setSelected([]);
    };
  
    const handleCheckBox = (event, name) => {
      const selectedIndex = selected.indexOf(name);
      let newSelected = [];
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
      }
      setSelected(newSelected);
    };
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setPage(0);
      setRowsPerPage(parseInt(event.target.value, 10));
    };
  
    const handleFilterByName = (event) => {
      setPage(0);
      setFilterName(event.target.value);
    };

    const [newTableData, setNewTableData] = useState([]);

    // retrieve the locally stored data
    useEffect(() => {
      const storedData = JSON.parse(localStorage.getItem('newTableData'));
      if (storedData) {
        setNewTableData(storedData);
      }
    },[]);

    // remove from local once the component is unmounted
    useEffect(() => {
      return () => {
        localStorage.removeItem('newTableData');
      };
    }, []);


  
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;
  
    const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);
  
    const isNotFound = !filteredUsers.length && !!filterName;
  
    const CustomButton = styled(Button)`
    
    font-weight: bold;
    font-size: 0.875rem;
    background-color:${palette.success.light};
    padding: 6px 8px;
    border-radius: 6px;
    color:${palette.success.darker};
    transition: all 150ms ease;
    cursor: pointer;
    border: solid 1px;
    border-color:${palette.success.darker};
  
    &:hover {
      background-color: ${palette.success.dark};
      color:${palette.success.light};
    }
  `;

  // body

  return(
      <>
        <Helmet>
            <title>My Tutors</title>
        </Helmet>

        <Container>
            <Stack direction='row' alignItems='center' justifyContent='space-between' mb={5}>
                <Typography variant='h4' gutterBottom>
                    My Tutors
                </Typography>
            </Stack>
            
            <Card>
              <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />
              
                <TableContainer sx = {{minWidth: 800}}>
                    <Table>
                        <UserListHead
                          order={order}
                          orderBy = {orderBy}
                          headLabel = {TABLE_HEAD}
                          rowCount = {USERLIST.length}
                          numSelected={selected.length}
                          onRequestSort={handleRequestSort}
                          onSelectAllClick = {handleSelectAllClick}
                        />
                        <TableBody>
                            {newTableData.map((row, index) => {
                                const {id, name, subject, select, city, avatarUrl} = row;
                                const selectedUser = selected.indexOf(name) !== -1;

                                return(
                                    <TableRow hover key={id} tabIndex={-1} selected={selectedUser}>
                                        <TableCell padding = "checkbox">
                                            <Checkbox   checked={selectedUser} onChange={(event) => handleCheckBox(event, name)} />
                                        </TableCell>
                                        <TableCell>{name}</TableCell>
                                        <TableCell>{city}</TableCell>
                                        <TableCell>{subject}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>

                    
                    </Table>
                </TableContainer>

            </Card>

        </Container>
      </>
  )
  }