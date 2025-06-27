// src/App.tsx
import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Box, Typography } from "@mui/material";
import theme from "./theme";
import SubjectOption from "./components/SubjectOption";
import StudyMinutes from "./components/StudyMinutes";
import { StudyTable } from "./components/StudyTable";
import { SendButton } from "./components/SendButton";
import TotalTime from "./components/TimeTotal";
import { StudyRecord } from "./components/types";

export default function App() {
  const [subject, setSubject] = useState("国語");
  const [time, setTime] = useState(0);
  const [records, setRecords] = useState<StudyRecord[]>([]);
  const [showError, setShowError] = useState(false);

  const addRecord = (record: StudyRecord) => {
    setRecords((prev) => [...prev, record]);
    setTime(0);
  };

  const totalTime = records.reduce((sum, record) => sum + record.time, 0);

  const handleDelete = (index: number) => {
    setRecords((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSend = () => {
    if (time > 0) {
      addRecord({ subject, time });
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={2}
        p={2}
        flexDirection={{ xs: "column", sm: "row" }}
        sx={{ mt: 4 }}
      >
        <Typography variant="h6">科目</Typography>
        <SubjectOption subject={subject} setSubject={setSubject} />

        <Typography variant="h6">勉強時間(分)</Typography>

        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <StudyMinutes time={time} setTime={setTime} />
          {showError && (
            <Typography color="error" variant="caption" sx={{ mt: 0.5 }}>
              勉強時間は0より大きい数値を指定してください
            </Typography>
          )}
        </Box>

        <SendButton onClick={handleSend} />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          mr: 20,
        }}
      >
        <TotalTime totalTime={totalTime} />
      </Box>

      <Box display="flex" justifyContent="center" mt={3}>
        <Box sx={{ width: "80%", maxWidth: 800 }}>
          <StudyTable records={records} onDelete={handleDelete} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
