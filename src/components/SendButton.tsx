import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";

type Props = {
  onClick: () => void;
};

export const SendButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      endIcon={<SendIcon />}
      size="large"
      sx={{
        width: 120,
        height: 50,
        whiteSpace: "nowrap",
      }}
      onClick={onClick}
    >
      送信
    </Button>
  );
};
