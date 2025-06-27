export const sharedInputBoxStyle = {
  height: 48,

  borderRadius: "8px",
  fontFamily: '"Noto Sans JP", sans-serif',
  fontSize: "1rem",
  backgroundColor: "#fff",
  padding: "0 12px",
  transition: "border-color 0.2s, box-shadow 0.2s",
  "&:hover": {
    borderColor: "#1976d2",
  },
  "&.Mui-focused, &:focus-within": {
    borderColor: "#1976d2",
    boxShadow: "0 0 0 2px rgba(25, 118, 210, 0.25)",
  },
};
