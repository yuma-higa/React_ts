import React from "react";
import { sharedInputBoxStyle } from "../styles/sharedInputStyle";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Box,
} from "@mui/material";

type Props = {
  subject: string;
  setSubject: (subject: string) => void;
};

const SubjectOption: React.FC<Props> = ({ subject, setSubject }) => {
  const handleChange = (event: SelectChangeEvent) => {
    setSubject(event.target.value);
  };

  return (
    <Box>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="subject-label">教科</InputLabel>
        <Select
          labelId="subject-label"
          value={subject}
          label="教科"
          sx={sharedInputBoxStyle}
          autoWidth
          onChange={handleChange}
        >
          <MenuItem value="国語">国語</MenuItem>
          <MenuItem value="数学">数学</MenuItem>
          <MenuItem value="英語">英語</MenuItem>
          <MenuItem value="理科">理科</MenuItem>
          <MenuItem value="社会">社会</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SubjectOption;
