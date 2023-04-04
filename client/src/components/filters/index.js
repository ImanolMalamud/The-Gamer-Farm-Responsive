import { Divider, Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { FilterButton, FiltersContainer } from "styles/filters";
import { MessageText, PromotionsContainer } from "../../styles/promotions";
import { Colors } from "../../styles/theme";

export default function Promotions() {
  const [show, setShow] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);

  return (
    <FiltersContainer>
      <Divider orientation="vertical" flexItem />

      <FilterButton>CONSOLAS</FilterButton>
      <Divider orientation="vertical" flexItem />
      <FilterButton>JUEGOS</FilterButton>
      <Divider orientation="vertical" flexItem />

      <FilterButton>MANDOS</FilterButton>
      <Divider orientation="vertical" flexItem />

      <FilterButton>PRECIO</FilterButton>
      <Divider orientation="vertical" flexItem />
    </FiltersContainer>
  );
}
