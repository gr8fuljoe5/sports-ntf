import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable(props) {
  const { data } = props;
  console.log(props);
  console.log(data);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Athlete</TableCell>
            <TableCell align="right">Collection</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Manufacturer</TableCell>
            <TableCell align="right">Set</TableCell>
            <TableCell align="right">Card Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((row) => (
              <TableRow
                key={row.athlete}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.athlete}
                </TableCell>
                <TableCell align="right">{row.collection}</TableCell>
                <TableCell align="right">{row.year}</TableCell>
                <TableCell align="right">{row.manufacturer}</TableCell>
                <TableCell align="right">{row.set}</TableCell>
                <TableCell align="right">{row.cardNumber}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
