import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  IconButton,
  Eat,
  Diaper,
  Sleep,
} from "../../components";
import { ArrowBack } from "@mui/icons-material";

import "../styles/form.scss";

export default function Form() {
  const { itemType, id } = useParams();
  const [item, setItem] = useState({ name: "", data: {} });
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (id) {
      const storedItems = JSON.parse(localStorage.getItem("items")) || [];
      const existingItem = storedItems.find((i) => i.id === id);
      if (existingItem) {
        setItem(existingItem);
      }
    }
  }, [id]);

  const handleSave = () => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    if (id) {
      const updatedItems = storedItems.map((i) =>
        i.id === id ? { ...i, ...item } : i
      );
      localStorage.setItem("items", JSON.stringify(updatedItems));
    } else {
      const newItem = { ...item, id: Date.now().toString() };
      storedItems.push(newItem);
      localStorage.setItem("items", JSON.stringify(storedItems));
    }
    navigate("/");
  };

  const renderFormType = () => {
    switch (itemType) {
      case "sleep":
        return <Sleep item={item} setItem={setItem} />;
      case "eat":
        return <Eat item={item} setItem={setItem} />;
      case "diaper":
        return <Diaper item={item} setItem={setItem} />;
      default:
        return null;
    }
  };

  return (
    <Box className="form-container">
      <Box className="top-bar">
        <IconButton className="back-button" onClick={() => navigate("/")}>
          <ArrowBack sx={{ color: "#fff" }} />
        </IconButton>
        <Typography variant="h6" className="item-type">
          {t(itemType)}
        </Typography>
      </Box>

      <Container>
        <Typography variant="h4">
          {id ? t("editItem") : t("addItem")}
        </Typography>

        {renderFormType()}

        <Button className="form-button" variant="contained" onClick={handleSave}>
          {id ? t("uptade") : t("save")}
        </Button>
      </Container>
    </Box>
  );
}
