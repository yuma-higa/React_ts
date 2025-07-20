import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import BusinessIcon from "@mui/icons-material/Business";

const ProfileSelection: React.FC = () => {
  const navigate = useNavigate();

  const handleStudentClick = () => {
    navigate("/student");
  };

  const handleCompanyClick = () => {
    navigate("/company");
  };

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        gap={4}
      >
        <Typography variant="h3" component="h1" textAlign="center" gutterBottom>
          プロフィールを選択してください
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" mb={4}>
          あなたのプロフィールタイプを選択してください
        </Typography>

        <Box
          display="flex"
          justifyContent="center"
          gap={4}
          flexWrap="wrap"
          sx={{
            "& > *": {
              flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 30%" },
              maxWidth: { xs: "100%", sm: "400px", md: "350px" },
            },
          }}
        >
          <Card
            sx={{
              height: "100%",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: 6,
              },
            }}
            onClick={handleStudentClick}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                p: 4,
              }}
            >
              <SchoolIcon sx={{ fontSize: 64, color: "primary.main" }} />
              <Typography variant="h5" component="h2" textAlign="center">
                学生
              </Typography>
              <Typography variant="body1" textAlign="center" color="text.secondary">
                勉強時間を記録し、学習進度を管理できます
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{ mt: 2 }}
                onClick={handleStudentClick}
              >
                学生として続行
              </Button>
            </CardContent>
          </Card>

          <Card
            sx={{
              height: "100%",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: 6,
              },
            }}
            onClick={handleCompanyClick}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                p: 4,
              }}
            >
              <BusinessIcon sx={{ fontSize: 64, color: "secondary.main" }} />
              <Typography variant="h5" component="h2" textAlign="center">
                企業
              </Typography>
              <Typography variant="body1" textAlign="center" color="text.secondary">
                企業向けの機能とダッシュボードにアクセスできます
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{ mt: 2 }}
                onClick={handleCompanyClick}
              >
                企業として続行
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default ProfileSelection;