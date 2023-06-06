import React from "react";
import cars from "../cars.json";
import { useParams } from "react-router-dom";
import { Container, Paper, Chip, Typography } from "@mui/material";

const Car = () => {
  const { id } = useParams();
  console.log("id:", id);
  console.log("cars:", cars);
  const car = cars.find((car) => String(car.id) === id);
  console.log("car:", car);
  return (
    <div>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "450px",
          width: "600px",
          padding: "30px",
        }}
      >
        <Paper
          elevation={4}
          sx={{ display: "inline-block", marginTop: "25px" }}
        >
          <Typography
            variant="h6"
            sx={{ marginTop: "80px", marginLeft: "50px", fontWeight: "bold" }}
          >
            {car.Name}
          </Typography>

          <div
            style={{
              marginBottom: "10px",
              padding: "10px",
              marginLeft: "35px",
            }}
          >
            <Chip label={`ID: ${car.id}`} />
            <Chip label={`Name: ${car.Name}`} />
            <Chip label={`Miles per Gallon: ${car.Miles_per_Gallon}`} />
            <Chip label={`Cylinders: ${car.Cylinders}`} />
            <Chip label={`Displacement: ${car.Displacement}`} />
            <Chip label={`Horsepower: ${car.Horsepower}`} />
            <Chip label={`Weight in lbs: ${car.Weight_in_lbs}`} />
            <Chip label={`Acceleration: ${car.Acceleration}`} />
            <Chip label={`Year: ${car.Year}`} />
            <Chip label={`Origin: ${car.Origin}`} />
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default Car;
