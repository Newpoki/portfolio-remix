import React, { useState, useCallback } from "react";
import Box from "@mui/material/Box";
import { drawerContext } from "./drawerContext";
import { Header } from "~/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleCloseDrawer = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  const handleOpenDrawer = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);

  return (
    <drawerContext.Provider
      value={{ onClose: handleCloseDrawer, onOpen: handleOpenDrawer, isOpen: isDrawerOpen }}
    >
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          backgroundImage: "linear-gradient(to top, #fddb92 0%, #d1fdff 100%)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        {children}
      </Box>
    </drawerContext.Provider>
  );
}
