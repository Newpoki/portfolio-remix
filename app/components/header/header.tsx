import { IconButton, List, ListItem, ListItemText, Drawer } from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import { drawerContext } from "~/src/drawerContext";
import * as Styled from "./header.styles";

export const Header = () => {
  const { isOpen, onClose, onOpen } = useContext(drawerContext);

  return (
    <Box sx={{ p: 1 }}>
      <IconButton size="medium" color="inherit" aria-label="menu" onClick={onOpen}>
        <MenuIcon sx={{ fontSize: "3rem" }} />
      </IconButton>
      <Drawer anchor="left" open={isOpen} onClose={onClose}>
        <Box
          sx={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            px: 2,
            backgroundImage: "linear-gradient(to top, #fddb92 0%, #d1fdff 100%)",
          }}
        >
          <List>
            <ListItem>
              <ListItemText>
                <Styled.Link onClick={onClose} to="/">
                  home
                </Styled.Link>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>
                <Styled.Link onClick={onClose} to="/cv">
                  cv
                </Styled.Link>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>
                <Styled.Link onClick={onClose} to="/contact">
                  contact
                </Styled.Link>
              </ListItemText>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
