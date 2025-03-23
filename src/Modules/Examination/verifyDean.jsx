import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Select,
  Text,
  Container,
  Paper,
  Grid,
  ScrollArea,
  Box,
  LoadingOverlay,
  Alert,
} from "@mantine/core";
import axios from "axios";
import { update_grades } from "./routes/examinationRoutes"; // API URL

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "./styles/verify.css";

const COLORS = ["#4caf50", "#2196f3", "#ff9800", "#f44336", "#9e9e9e"];

function VerifyGrades() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showContent, setShowContent] = useState(false);

  const [courses, setCourses] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const [gradesData, setGradesData] = useState([]); // Store fetched grade data

  // **Fetch Courses & Years from API**
  useEffect(() => {
    const fetchCoursesAndYears = async () => {
      setLoading(true);
      setError(null);
      const token = localStorage.getItem("authToken");

      if (!token) {
        setError("No authentication token found!");
        setLoading(false);
        return;
      }

      try {
        const requestData = {
          Role: "acadadmin",
        };

        const { data } = await axios.post(update_grades, requestData, {
          headers: { Authorization: `Token ${token}` },
        });

        // **Format courses for dropdown (Course Code - Course Name)**
        const formattedCourses = data.courses_info.map((c) => ({
          value: c.id.toString(), // Store ID but display Name & Code
          label: `${c.code} - ${c.name}`,
        }));

        // **Extract unique years**
        const uniqueYears = data.unique_year_ids.map((y) => ({
          value: y.year.toString(),
          label: y.year.toString(),
        }));

        setCourses(formattedCourses);
        setYears(uniqueYears);
      } catch (err) {
        setError(`Error fetching courses and years: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchCoursesAndYears();
  }, []);

  const handleSearch = async () => {
    if (!selectedCourse || !selectedYear) {
      alert("Please select a course and year.");
      return;
    }

    // Simulating grade data (replace with API call)
    setGradesData([
      { id: "22bcs184", batch: 2023, semester: "SEM 1", courseid: "CS2003", remarks: "S", grade: "B" },
      { id: "22bcs184", batch: 2024, semester: "SEM 2", courseid: "CS2002", remarks: "S", grade: "A" },
    ]);

    setShowContent(true);
  };

  const handlePublish = () => {
    alert("Results published successfully!");
  };

  // **Create table rows dynamically**
  const rows = gradesData.map((item, index) => (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.batch}</td>
      <td>{item.semester}</td>
      <td>{item.courseid}</td>
      <td>{item.remarks}</td>
      <td>{item.grade}</td>
    </tr>
  ));

  return (
    <Container
      size="xl"
      style={{
        borderRadius: "15px",
        padding: "0 20px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
        borderLeft: "10px solid #1E90FF",
        backgroundColor: "white",
      }}
    >
      <Paper p="md">
        <h1>Verify Grades</h1>

        {error && <Alert color="red">{error}</Alert>}

        <Grid>
          <Grid.Col xs={12} sm={4}>
            <Select
              label="Course"
              placeholder="Select course"
              value={selectedCourse}
              onChange={setSelectedCourse}
              data={courses}
              disabled={loading}
            />
          </Grid.Col>
          <Grid.Col xs={12} sm={4}>
            <Select
              label="Academic Year"
              placeholder="Select year"
              value={selectedYear}
              onChange={setSelectedYear}
              data={years}
              disabled={loading}
            />
          </Grid.Col>
        </Grid>

        <Box mt="md">
          <Button onClick={handleSearch} size="sm" disabled={!selectedCourse || !selectedYear}>
            Search
          </Button>
        </Box>

        {showContent && (
          <>
            <ScrollArea mt="lg">
              <Table striped highlightOnHover>
                <thead>
                  <tr>
                    <th>Student ID</th>
                    <th>Batch</th>
                    <th>Semester</th>
                    <th>Course ID</th>
                    <th>Remarks</th>
                    <th>Grades</th>
                  </tr>
                </thead>
                <tbody>{rows}</tbody>
              </Table>
            </ScrollArea>

            <Grid mt="xl">
              <Grid.Col xs={12} md={6}>
                <Paper p="md" className="statistics">
                  <Text style={{ fontSize: "20px", fontWeight: "bold" }} mb="sm">
                    Statistics
                  </Text>
                  <PieChart width={400} height={300} className="pie-chart">
                    <Pie dataKey="value" data={[
                      { name: "A/A+", value: 30, color: "#4caf50" },
                      { name: "B/B+", value: 25, color: "#2196f3" },
                      { name: "C/C+", value: 35, color: "#ff9800" },
                      { name: "D/D+", value: 10, color: "#f44336" },
                      { name: "F", value: 5, color: "#9e9e9e" },
                    ]} cx="50%" cy="50%" outerRadius={70} fill="#8884d8" label>
                      {COLORS.map((color, index) => (
                        <Cell key={`cell-${index}`} fill={color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend layout="horizontal" verticalAlign="bottom" align="center" wrapperStyle={{ fontSize: "1rem" }} />
                  </PieChart>
                </Paper>
              </Grid.Col>
              <Grid.Col xs={12} md={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Button ml="md" onClick={handlePublish} color="blue">
                  Verify
                </Button>
                <Button ml="md" color="blue">
                  Download Sheet
                </Button>
              </Grid.Col>
            </Grid>
          </>
        )}

        <LoadingOverlay visible={loading} overlayBlur={2} />
      </Paper>
    </Container>
  );
}

export default VerifyGrades;
