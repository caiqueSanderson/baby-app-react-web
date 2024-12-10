import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  AppBar,
  Eat,
  Diaper,
  Sleep,
} from "../../components";

import "../styles/form.scss";

export default function Form() {
  const { itemType, id } = useParams();
  const [item, setItem] = useState({ name: "", data: {} });

  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (id) {
      const storedItems = JSON.parse(localStorage.getItem("@items")) || [];
      const existingItem = storedItems.find((i) => i.id === id);
      if (existingItem) {
        setItem(existingItem);
      }
    }
  }, [id]);

  function handleSave() {
    const storedItems = JSON.parse(localStorage.getItem("@items")) || [];
    if (id) {
      const updatedItems = storedItems.map((i) =>
        i.id === id ? { ...i, ...item } : i
      );
      localStorage.setItem("@items", JSON.stringify(updatedItems));
    } else {
      const newItem = { ...item, id: Date.now().toString(), type: itemType };
      storedItems.push(newItem);
      localStorage.setItem("@items", JSON.stringify(storedItems));
    }
    navigate("/");
  }

  function handleDelete() {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    const updatedItems = storedItems.filter((i) => i.id !== id);
    localStorage.setItem("@items", JSON.stringify(updatedItems));
    navigate("/");
  }

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
      <AppBar isEditMode={!!id} title={t(itemType)} onDelete={handleDelete} />

      <Grid className="data-container">
        <Container>
          <Typography variant="h4">
            {id ? t("editItem") : t("addItem")}
          </Typography>

          {renderFormType()}

          <Button
            className="form-button"
            variant="contained"
            onClick={handleSave}
          >
            {id ? t("uptade") : t("save")}
          </Button>
        </Container>
      </Grid>
    </Box>
  );
}
