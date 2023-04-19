import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'time', label: 'time', minWidth: 170 },
  { id: 'rx', label: 'rx', minWidth: 100 },
  {
    id: 'tx',
    label: 'tx',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'total_tran',
    label: 'total_tran',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'submitByOrg1MSP',
    label: 'submitByOrg1MSP',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'submitByOrg2MSP',
    label: 'submitByOrg2MSP',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'chaincode_fabcar_count',
    label: 'chaincode_fabcar_count',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'chaincode_lifecycle_count',
    label: 'chaincode_lifecycle_count',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'function_createCar_count',
    label: 'function_createCar_count',
    minWidth: 170,
    align: 'right'
  },{
    id: 'function_changeCarOwner_count',
    label: 'function_changeCarOwner_count',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'function_deleteCar_count',
    label: 'function_deleteCar_count',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'function_initLedger_count',
    label: 'function_initLedger_count',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'function_commit_count',
    label: 'function_commit_count',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'function_approval_count',
    label: 'function_approval_count',
    minWidth: 170,
    align: 'right'
  },

];

function trans(mydata){
    var myObject = new Object();
    myObject["time"] = mydata.time;
    myObject["rx"] = mydata.block_number;
    myObject["chaincode"] = mydata.chaincode;
    myObject["function"] = mydata.function;
    myObject["arg"] = mydata.arg;
    myObject["submiter"] = mydata.submiter;
    return myObject;
}


function createData(
  name,
  code,
  population,
  size
){
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

export default function StickyHeadTable({data}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '98%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
