import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";

import axios from "axios";
import theme from "styles/theme";

function ResponsiveSlider(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [news, setNews] = useState([]);

  // fetch xml data and return an array of news
  useEffect(() => {
    axios.get("https://vandal.elespanol.com/xml.cgi").then((response) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(response.data, "text/xml");
      console.log(xmlDoc);
      const items = xmlDoc.getElementsByTagName("item");
      const data = Array.from(items).map((item) => {
        const imageRegex = /<img[^>]+src="?([^"\s]+)"?[^>]*\/>/g;
        const match = imageRegex.exec(
          item.getElementsByTagName("description")[0]?.textContent
        );
        const imageUrl = match ? match[1] : null;
        return {
          title: item.getElementsByTagName("title")[0]?.textContent || "",
          link: item.getElementsByTagName("link")[0]?.textContent || "",
          pubDate: item.getElementsByTagName("pubDate")[0]?.textContent || "",
          creator:
            item.getElementsByTagNameNS(
              "http://purl.org/dc/elements/1.1/",
              "creator"
            )[0]?.textContent || "",
          imageUrl: imageUrl,
        };
      });
      setNews(data.slice(0, 8));
    });
  }, []);

  return (
    <Box display="flex" justifyContent="center" mb="25px">
      <Carousel
        sx={{
          backgroundColor: theme.palette.primary[700],
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
        stopAutoPlayOnHover={true}
        interval={4000}
        animation="slide"
        duration={800}
        swipe={true}
        indicatorIconButtonProps={{
          style: {
            padding: "10px", // 1
            color: theme.palette.secondary[500], // 3
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            backgroundColor: theme.palette.secondary[200], // 2
          },
        }}
      >
        {news.map((item, i) => {
          return matches ? (
            <Box display="flex" columnGap="20px" margin="10px">
              <Item key={i} item={news[i]} />
            </Box>
          ) : (
            <Box
              display="flex"
              columnGap="20px"
              margin="10px"
              backgroundColor={theme.palette.primary[600]}
            >
              <Item key={i} item={news[i]} />
              {news[i + 1] ? (
                <Item key={i} item={news[i + 1]} />
              ) : (
                <Item key={i} item={news[0]} />
              )}
            </Box>
          );
        })}
      </Carousel>
    </Box>
  );
}

function Item(props) {
  const theme = useTheme();

  return (
    <a
      className="CheckButton"
      href={props.item.link}
      target="_blank"
      style={{
        color: theme.palette.primary[200],
        backgroundColor: theme.palette.primary[700],
      }}
    >
      <Paper
        sx={{
          backgroundImage: props.item.imageUrl && `url(${props.item.imageUrl})`,
          backgroundSize: "cover",
          height: "450px",
        }}
      >
        <h2
          style={{
            backgroundColor: theme.palette.grey[300],
            color: theme.palette.primary[400],
          }}
        >
          {props.item.title}
        </h2>

        <p>{props.item.creator}</p>
        <p
          style={{
            backgroundColor: theme.palette.grey[500],
            color: theme.palette.secondary[900],
            position: "absolute",
            bottom: 0,
          }}
        >
          {props.item.pubDate}
        </p>
        {/* {props.item.imageUrl && (
          <img
            src={props.item.imageUrl}
            alt={props.item.title}
            style={{ maxWidth: "30vw" }}
          />
        )} */}
      </Paper>
    </a>
  );
}

export default ResponsiveSlider;
