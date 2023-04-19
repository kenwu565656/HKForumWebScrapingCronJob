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
  { id: 'PostName', label: 'PostName', minWidth: 100 },
  { id: 'CommenterName', label: 'CommenterName', minWidth: 100 },
  {
    id: 'CommentText',
    label: 'CommentText',
    align: 'left'
  },
  {
    id: 'CommentFloor',
    label: 'CommentFloor',
    align: 'right'
  },
  {
    id: 'Total_Like',
    label: 'TotalLike',
    align: 'right'
  }
];

function createData(
    PostName,
    CommenterName,
    CommentText,
    CommentFloor,
    Total_Like
  ){
    return { PostName, CommenterName, CommentText, CommentFloor, Total_Like };
  }
  

  const rows = [
    createData('3337772', '荒誕卻又自豪', '<div class=\"_2cNsJna0_hV8tdMj3X6_gJ\" data-ast-root=\"true\">係得亞洲人除罩變樣衰，呢個n95 已經挻身啲<br/>\n<br/>\n啲鬼好鍾意戴布口罩/好薄嘅外科口罩，就仲樣衰<img alt=\"[sosad]\" class=\"D6kLi9J7MXlmcJt-_fNbE\" src=\"https://cdn.lihkg.com/assets/faces/normal/sosad.gif\"/></div>', '50', '1'
    ),
    createData('3337699', '沈姿潤寶寶', '<div class=\"_2cNsJna0_hV8tdMj3X6_gJ\" data-ast-root=\"true\"><a class=\"GsWOYqIgCihyKUG73_Li2\" href=\"https://na.cx/i/vDXde0f.jpg\" rel=\"noopener noreferrer\" target=\"_blank\"><img alt=\"\" data-original=\"https://na.cx/i/vDXde0f.jpg\" src=\"https://i.lih.kg/thumbnail?u=https%3A%2F%2Fna.cx%2Fi%2FvDXde0f.jpg&amp;h=ef26d884&amp;s=540\"/><ins style=\"display: none;\"></ins></a></div>', '1', '57'
    ),
    createData('3337699', 'Yeansoo', '<div class=\"_2cNsJna0_hV8tdMj3X6_gJ\" data-ast-root=\"true\">冇計，嚟緊清明好多人要返大陸</div>', '2', '88'
    ),
    createData('3337699', '麻倉葉', '<div class=\"_2cNsJna0_hV8tdMj3X6_gJ\" data-ast-root=\"true\">老師要帶團<br/>\n被迫申請<img alt=\"#wail#pig\" class=\"D6kLi9J7MXlmcJt-_fNbE\" src=\"https://cdn.lihkg.com/assets/faces/pig/wail.gif\"/></div>', '3', '107'
    ),
    createData('3337699', '沈姿潤寶寶', '<div class=\"_2cNsJna0_hV8tdMj3X6_gJ\" data-ast-root=\"true\"><img alt=\"#wail#pig\" class=\"D6kLi9J7MXlmcJt-_fNbE\" src=\"https://cdn.lihkg.com/assets/faces/pig/wail.gif\"/>被愛國</div>', '4', '7'
    ),
    createData('3337827', '慘過番印度', '<div class=\"_2cNsJna0_hV8tdMj3X6_gJ\" data-ast-root=\"true\">要探討吓食乜先可以痾到咁既屎<img alt=\"#wail#pig\" class=\"D6kLi9J7MXlmcJt-_fNbE\" src=\"https://cdn.lihkg.com/assets/faces/pig/wail.gif\"/></div>', '23', '1'
    ),
    createData('3337820', '鹿特丹斯巴光年', '<div class=\"_2cNsJna0_hV8tdMj3X6_gJ\" data-ast-root=\"true\"><a class=\"GsWOYqIgCihyKUG73_Li2\" href=\"https://na.cx/i/t3ECHyS.jpg\" rel=\"noopener noreferrer\" target=\"_blank\"><img alt=\"\" data-original=\"https://na.cx/i/t3ECHyS.jpg\" src=\"https://i.lih.kg/thumbnail?u=https%3A%2F%2Fna.cx%2Fi%2Ft3ECHyS.jpg&amp;h=f1607096&amp;s=540\"/><ins style=\"display: none;\"></ins></a><br/>\n迪士尼（Disney）在1989年推出動畫《小美人魚》好評不斷，至今都是許多大人小孩喜愛的經典童話，豈料在宣布開拍真人版電影之後，從選角便爭議不斷，女主角愛麗兒由22歲非裔女星荷莉貝利（Halle Bailey）飾演，試圖符合時下「政治正確」風潮，卻頻遭網友攻擊不合適。近日PTT討論版熱議《小美人魚》最新劇照，這一幕讓人不禁想到「黑奴歷史」，讓網友對該電影更加不滿。<br/>\n<br/>\n將在2023年5月上映的真人版《小美人魚》，自選角以來爭議不斷，近日連續發出新預告，也不見風向反轉，反而因為預告中愛麗兒和王子共乘馬車的畫面，讓PTT網友以「小美人魚新劇照」為題發文，表示兩人不僅沒有CP感，甚至愛麗兒駕車，王子漫不精心看著風景的模樣，令人聯想到了「黑奴歷史」。<br/>\n<br/>\n迪士尼翻拍《小美人魚》想要「政確」，卻反倒讓人想到過往的「黑奴歷史」。<br/>\n<br/>\n網友認為迪士尼想要「政確」沒問題，但問題是硬要扯出一個完全沒有CP感的黑白配，只會讓人不斷想起過往歷史，並且有網友直接留言嘲諷該圖根本是「花心浪蕩少爺與採棉花女工的愛情故事」，從選角、宣傳照到預告全部負評滿滿，令人替這部公主系列改編的真人版電影感到憂心。<br/>\n<br/>\n<a href=\"https://lm.facebook.com/l.php?u=https://star.setn.com/news/1266456?fbclid%3DIwAR2SchTs_GVnADIKyJkgI_L7sVtOwiej0cEZIDKUSoZ3w-_ETXiFfm9UQeo&amp;h=AT1dtvmlQcsVueQPPiKsM0rB03P5dlJJdlzg-04JW8lRdod9XPaCvf9J5hFbPUa_q8GrSjEmkfpJmMMwdZFcPngzk-44zBdZ0fmX9gLoXpeNX4BSEs32ZFzbiSuBNDA&amp;s=1&amp;mibextid=ncKXMA\" rel=\"noopener noreferrer\" target=\"_blank\">https://lm.facebook.com/l.php?u=https://star.setn.com/news/1266456?fbclid%3DIwAR2SchTs_GVnADIKyJkgI_L7sVtOwiej0cEZIDKUSoZ3w-_ETXiFfm9UQeo&amp;h=AT1dtvmlQcsVueQPPiKsM0rB03P5dlJJdlzg-04JW8lRdod9XPaCvf9J5hFbPUa_q8GrSjEmkfpJmMMwdZFcPngzk-44zBdZ0fmX9gLoXpeNX4BSEs32ZFzbiSuBNDA&amp;s=1&amp;mibextid=ncKXMA</a></div>', '3', '14'
    ),
    createData('3337766', '阿啤', '<div class=\"_2cNsJna0_hV8tdMj3X6_gJ\" data-ast-root=\"true\">理論上係抵，但佢係個老人家60歲時一野攞走120萬，個老人家都幾驚<img alt=\"[sosad]\" class=\"D6kLi9J7MXlmcJt-_fNbE\" src=\"https://cdn.lihkg.com/assets/faces/normal/sosad.gif\"/><img alt=\"[sosad]\" class=\"D6kLi9J7MXlmcJt-_fNbE\" src=\"https://cdn.lihkg.com/assets/faces/normal/sosad.gif\"/></div>', '16', '1'
    )
  ];

export default function CommentTable() {
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
      <TableContainer sx={{ maxHeight: 175 }}>
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
