import { Box, useMediaQuery, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./style.css";

import axios from "axios";

function NewsCarrousel() {
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
      // I will use only 13 news
      setNews(data.slice(0, 12));
    });
  }, []);

  return (
    <Box display="flex" justifyContent="center">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={matches ? 1 : 3}
        slidesPerColumn={matches ? 1 : 3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {news.map((item, i) => (
          <SwiperSlide>
            <Item key={i} item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

function Item(props) {
  const theme = useTheme();

  return (
    <Box>
      <a
        className="CheckButton"
        href={props.item.link}
        target="_blank"
        style={{
          color: theme.palette.primary[200],
          backgroundColor: theme.palette.primary[700],
        }}
      >
        <Box
          sx={{
            backgroundImage:
              props.item.imageUrl && `url(${props.item.imageUrl})`,
            backgroundSize: "100%",
            backgroundPositionY: "75px",
            backgroundRepeat: "no-repeat",
            height: "450px",
          }}
        >
          <Typography
            variant="h4"
            // component="h2"
            // gutterBottom
            sx={{
              color: theme.palette.primary[700],
              backgroundColor: theme.palette.grey[300],
              textAlign: "center",
              padding: "2px",
              opacity: 0.7,
              ":hover": {
                opacity: 0.9,
              },
            }}
          >
            {props.item.title}
          </Typography>
          <p>{props.item.creator}</p>
          <p
            style={{
              backgroundColor: theme.palette.grey[400],
              color: "black",
              position: "absolute",
              bottom: "80px",
            }}
          >
            {props.item.pubDate}
          </p>
        </Box>
      </a>
    </Box>
  );
}

export default NewsCarrousel;
