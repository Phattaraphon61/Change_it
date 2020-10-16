import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';


const columns = [
    { id: 'สินค้า', label: 'สินค้า', minWidth: 170 },
    { id: 'รายละเอียด', label: 'รายละเอียด', minWidth: 170 },
    {
        id: 'บัญชีผู้ใช้',
        label: 'บัญชีผู้ใช้',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'ตอบกลับข้อเสนอ',
        label: 'ตอบกลับข้อเสนอ',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
];

function createData(สินค้า, รายละเอียด, บัญชีผู้ใช้, ตอบกลับข้อเสนอ) {
    return { สินค้า, รายละเอียด, บัญชีผู้ใช้, ตอบกลับข้อเสนอ };
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

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        flexGrow: 1,
    },
    container: {
        maxHeight: 440,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function StickyHeadTable() {
    const classes = useStyles();
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
        <div className={classes.root}>

            <br></br>
            <center><h2><b>คำขอยื่นข้อเสนอของฉัน</b></h2></center>
            <br></br>

            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}>
                <Grid item xs={10}>
                    <Paper className={classes.paper}>
                        <Paper className={classes.root}>
                            <TableContainer className={classes.container}>
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

                                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                    {columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            <TableCell key={column.id} align={column.align}>
                                                                {column.format && typeof value === 'number' ? column.format(value) : value}
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
                                rowsPerPageOptions={[5, 10, 15, 20, 25]}
                                component="div"
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                            />
                        </Paper>
                    </Paper>
                </Grid>

                <Grid item xs={10}>
                    <br></br>
                    <center><h5><b><ins><mark>WARNING !!!</mark></ins></b></h5></center>
                    <Paper className={classes.paper}>
                        <p><b>________________ ข้อควรระวังเกี่ยวกับการแลกเปลี่ยน ________________</b></p>
                        <p>เพื่อปกป้องสิทธิของคุณเราขขอแนะนำให้คุณมีการเจรจาซื้อขายที่นี่และตรวจสอบให้แน่ใจว่าให้ข้อมูลเกี่ยวกับการแลกเปลี่ยนที่เพียงพอ
                        หากคุณใช้โปรแกรมสนทนาอื่นนอกเหนือจากที่นี่ เราจะไม่สามารถบันทึกกระบวนการแลกเปลี่ยนทั้งหมดของคุณได้อย่างสมบรูณ์
            จึงขอความร่วมมือมา ณ ที่นี้ </p>
          ___________________________________________________________________
          </Paper>
                </Grid>

            </Grid>
        </div>
    );
}
