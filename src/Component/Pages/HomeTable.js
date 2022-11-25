import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import tableimage from "../Images/table-image.png";
import tableimagecheck from "../Images/table-image-check.png";
import "./HomeTable.css";

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

export default function DenseTable() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>COLLECTION</TableCell>
              <TableCell align="center">FLOOR PRICE</TableCell>
              <TableCell align="center">VOLUME</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell >
                  {" "}
                  <span> 1 </span> &nbsp;{" "}
                  <span>
                    {" "}
                    <img src={tableimage} alt="" className="table-image" />{" "}
                  </span>{" "}
                  &nbsp; <span> RENGA </span> &nbsp;{" "}
                  <span>
                    <img src={tableimagecheck} alt="" />
                  </span>
                </TableCell>
                <TableCell align="center">3.09 ETH</TableCell>
                <TableCell align="center">1,189 ETH</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
