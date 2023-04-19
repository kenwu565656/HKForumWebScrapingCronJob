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
  { id: 'Url', label: 'Url', minWidth: 100 },
  { id: 'Topic', label: 'Topic', minWidth: 100 },
  {
    id: 'category',
    label: 'category',
    align: 'right'
  },
  {
    id: 'Poster',
    label: 'Poster',
    align: 'right'
  },
  {
    id: 'Total_Like',
    label: 'Total Like',
    align: 'right'
  }
];

function createData(
    Url,
    Topic,
    category,
    Poster,
    Total_Like
  ){
    return { Url, Topic, category, Poster, Total_Like };
  }

  const rows = [
    createData('https://lihkg.com/thread/3331276', '第16屆亞洲電影大獎討論區', '影視台', '重過無涯的鐵路', 0),
    createData('https://lihkg.com/thread/3331329', '日女遊印度遭男子熊抱非禮 惟女事主事後竟發文道歉', '時事台', '感情戲', -79),
    createData('https://lihkg.com/thread/3331197', 'Hkust學生會班傻仔俾林作鬧', '創意台', "彤彤豬（8歲）", 385),
    createData('https://lihkg.com/thread/3331276', '第16屆亞洲電影大獎討論區', '影視台', '重過無涯的鐵路', 0),
    createData('https://lihkg.com/thread/3331329', '日女遊印度遭男子熊抱非禮 惟女事主事後竟發文道歉', '時事台', '感情戲', -79),
    createData('https://lihkg.com/thread/3331197', 'Hkust學生會班傻仔俾林作鬧', '創意台', "彤彤豬（8歲）", 385),
    createData('https://lihkg.com/thread/3331276', '第16屆亞洲電影大獎討論區', '影視台', '重過無涯的鐵路', 0),
    createData('https://lihkg.com/thread/3331329', '日女遊印度遭男子熊抱非禮 惟女事主事後竟發文道歉', '時事台', '感情戲', -79)
  ];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '98%', overflow: 'scroll' }}>
      <TableContainer sx={{ maxHeight: 200 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead maxHeight={5}>
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
            {rows
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
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
