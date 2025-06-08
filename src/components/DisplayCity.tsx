import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { getIcon } from "../utils/weatherIcon";
import { Stack, styled } from "@mui/material";
import type { CityWeather } from "../model/cityweather";

export const DisplayCity: React.FC<{ city: CityWeather }> = ({ city }) => {
  const srcImg = getIcon(city.temp);

  const LabelText = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    marginBottom: theme.spacing(1),
    color: "#444",
  }));

  const ValueText = styled("span")({
    fontWeight: 400,
    marginLeft: 4,
  });

  return (
    <>
      <Card
        key={city.id}
        sx={{
          width: 280,
          borderRadius: 3,
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.25)",
          },
          textAlign: "center",
          backgroundColor: "#f0f4f8", // צבע רקע עדין ונעים לעין
          color: "#333", // טקסט כהה לקריאות
          padding: 2,
        }}
      >
        <CardContent>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="center"
            sx={{ marginBottom: 2 }}
          >
            <img
              src={srcImg}
              style={{ width: 36, height: 36 }}
              alt="weather icon"
            />
            <Typography
              variant="h5"
              component="div"
              fontWeight="700"
              color="#1976d2"
            >
              {city.name}
            </Typography>
          </Stack>

          <LabelText variant="subtitle1" gutterBottom>
            תיאור: <ValueText> {city.description}</ValueText>
          </LabelText>

          <LabelText variant="subtitle1" gutterBottom>
            טמפרטורה:
            <ValueText> {city.temp}°</ValueText>
          </LabelText>

          <LabelText variant="subtitle1" gutterBottom>
            מרגיש כמו:
            <ValueText> {city.feelsLike}°</ValueText>
          </LabelText>
          <LabelText variant="subtitle1" gutterBottom>
            רמת לחות:
            <ValueText> {city.humidity}%</ValueText>
          </LabelText>
        </CardContent>
      </Card>
    </>
  );
};
