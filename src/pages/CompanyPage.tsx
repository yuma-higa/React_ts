import React from "react";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Container,
  Card,
  CardContent,
  Chip,
  LinearProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import BusinessIcon from "@mui/icons-material/Business";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AssignmentIcon from "@mui/icons-material/Assignment";

const CompanyPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  // Mock data for company dashboard
  const companyStats = [
    {
      title: "従業員数",
      value: "245",
      icon: <PeopleIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      change: "+12%",
    },
    {
      title: "月間成長率",
      value: "8.5%",
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: "success.main" }} />,
      change: "+2.1%",
    },
    {
      title: "アクティブプロジェクト",
      value: "18",
      icon: <AssignmentIcon sx={{ fontSize: 40, color: "warning.main" }} />,
      change: "+3",
    },
  ];

  const recentProjects = [
    { name: "新商品開発プロジェクト", status: "進行中", progress: 75 },
    { name: "マーケティング戦略", status: "レビュー中", progress: 60 },
    { name: "システム改善", status: "完了", progress: 100 },
    { name: "顧客満足度調査", status: "開始", progress: 25 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "完了":
        return "success";
      case "進行中":
        return "primary";
      case "レビュー中":
        return "warning";
      case "開始":
        return "info";
      default:
        return "default";
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <BusinessIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            企業ダッシュボード
          </Typography>
          <Button
            color="inherit"
            startIcon={<HomeIcon />}
            onClick={handleBackToHome}
          >
            ホームに戻る
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, pb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          企業管理画面へようこそ
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          企業向けの分析とプロジェクト管理機能をご利用いただけます。
        </Typography>

        {/* Stats Cards */}
        <Box 
          display="flex"
          gap={3}
          mb={4}
          flexWrap="wrap"
          sx={{
            "& > *": {
              flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 30%" },
            },
          }}
        >
          {companyStats.map((stat, index) => (
            <Card key={index}>
              <CardContent>
                <Box display="flex" alignItems="center" gap={2}>
                  {stat.icon}
                  <Box>
                    <Typography variant="h4" component="div">
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.title}
                    </Typography>
                    <Chip
                      label={stat.change}
                      color="success"
                      size="small"
                      sx={{ mt: 1 }}
                    />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Recent Projects */}
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              最近のプロジェクト
            </Typography>
            <Box 
              display="flex"
              gap={2}
              flexWrap="wrap"
              sx={{
                "& > *": {
                  flex: { xs: "1 1 100%", md: "1 1 45%" },
                },
              }}
            >
              {recentProjects.map((project, index) => (
                <Box
                  key={index}
                  sx={{
                    p: 2,
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 1,
                    mb: 2,
                  }}
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={1}
                  >
                    <Typography variant="h6" component="h3">
                      {project.name}
                    </Typography>
                    <Chip
                      label={project.status}
                      color={getStatusColor(project.status)}
                      size="small"
                    />
                  </Box>
                  <Box sx={{ mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      進捗: {project.progress}%
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={project.progress}
                      sx={{ mt: 0.5 }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <Box sx={{ mt: 4, display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Button variant="contained" size="large">
            新プロジェクト作成
          </Button>
          <Button variant="outlined" size="large">
            レポートを表示
          </Button>
          <Button variant="outlined" size="large">
            従業員管理
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default CompanyPage;