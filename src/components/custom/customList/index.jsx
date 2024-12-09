import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

import CribIcon from "@mui/icons-material/Crib";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import SpaIcon from "@mui/icons-material/Spa";

import { useTranslation } from "react-i18next";

const CustomList = ({ items }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  function getIcon(actionType) {
    switch (actionType) {
      case "sleep":
        return <CribIcon />;
      case "eat":
        return <RestaurantMenuIcon />;
      case "diaper":
        return <SpaIcon />;
      default:
        return <RestaurantMenuIcon />;
    }
  }

  const typeColor = {
    sleep: "#4b10a9",
    eat: "#47c869",
    diaper: "#f4cc1d",
  };

  function subtitleSleep() {
    return "O bebê está dormindo";
  }
  function subtitleEat() {
    return "O bebê está comendo";
  }
  function subtitleDiaper() {
    return "O bebê está trocando a fralda";
  }

  function generateSubtitle(actionType) {
    switch (actionType) {
      case "sleep":
        return subtitleSleep();
      case "eat":
        return subtitleEat();
      case "diaper":
        return subtitleDiaper();
      default:
        return subtitleEat();
    }
  }

  return (
    <List
      sx={{
        width: "100%",
        padding: 0,
      }}
    >
      {items.map((item, index) => (
        <ListItem
          key={item.id}
          sx={{
            backgroundColor: "#fff",
            borderRadius: "60px",
            marginTop: "1em",
            width: "100%",
          }}
          id={`new-item-list-${index}`}
          onClick={() => navigate(`/${item.type}/${item.id}`)}
        >
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: typeColor[item.type] }}>
              {getIcon(item.type)}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={t(item.type)}
            secondary={generateSubtitle(item.type)}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default CustomList;
