import React, { useEffect, useState } from "react";
import { DisplayCity } from "./DisplayCity";
import type { CityWeather } from "../model/cityweather";
import { Box, Grid, Typography } from "@mui/material";
import { fetchWeatherData } from "../service/getWeather";

export const DisplayWeather: React.FC = () => {
  const [weatherdata, setWeatherData] = useState<CityWeather[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const fetched = await fetchWeatherData();
      const filtered = fetched.filter((data) => data !== null) as CityWeather[];
      setWeatherData(filtered);
    };
    loadData();
  }, []);
  return (
    
    <Box
  sx={{
    minHeight: '100vh',
    width: '100vw',
    background: 'linear-gradient(to right, #e0eafc, #cfdef3)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 4,
  }}
>
      <Typography
        variant="h2"
        gutterBottom
        padding={8}
        textAlign="center"
        color="black"
      >
        {"מזג האויר בערים השונות"}
      </Typography>
      <Grid container spacing={3} justifyContent="center" sx={{ padding: 4 }}>
        {weatherdata.map((city) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={city.id}>
            <DisplayCity city={city} />
          </Grid>
        ))}
      </Grid>
    </Box>
    
  );
};
