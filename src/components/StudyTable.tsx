import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  IconButton,
  Box,
} from "@mui/material";
import { StudyRecord } from "./types";

type Props = {
  records: StudyRecord[];
  onDelete: (index: number) => void;
};

export const StudyTable: React.FC<Props> = ({ records, onDelete }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
      <TableContainer
        component={Paper}
        sx={{
          display: "flex",
          justifyContents: "center",
          backgroundColor: "transparent",
          width: "80%",
          mb: 5,
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>科目</TableCell>
              <TableCell>勉強時間(分)</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.map((rec, idx) => (
              <TableRow key={idx}>
                <TableCell>{rec.subject}</TableCell>
                <TableCell>{rec.time}</TableCell>
                <TableCell>
                  <IconButton color="error" onClick={() => onDelete(idx)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
