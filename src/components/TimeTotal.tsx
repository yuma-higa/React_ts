import React from "react";
import { Typography, Box } from "@mui/material";

type Props = {
  totalTime: number;
};

const TimeTotal: React.FC<Props> = ({ totalTime }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        whiteSpace: "nowrap",
        flexDirection: { xs: "column", sm: "row" },
        gap: 2,
      }}
    >
      <Typography variant="h1">合計時間:</Typography>
      <Typography
        sx={{
          fontSize: "40px",
        }}
      >
        {totalTime}分
      </Typography>
    </Box>
  );
};

export default TimeTotal;
