import { Box, Button, styled, List, ListItem } from "@mui/material";
import { CreateOutlined } from "@mui/icons-material";
import { SIDEBAR_DATA } from "../config/Sidebar.config";
import ComposeMail from "./ComposeMail";
import { useState } from "react";

const ComposeButton = styled(Button)({
  background: "#c2e7ff",
  color: "#001d35",
  padding: 15,
  borderRadius: 16,
  minWidth: 140,
  textTransform: "none",
});

const Container = styled(Box)({
  padding: 8,
  "& > ul": {
    padding: "10px 0 0 5px",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
  },
  "& > ul > li > svg": {
    marginRight: 18,
  },
});

const SidebarContent = () => {
  const [openComposeMail, setOpenComposeMail] = useState(false);

  return (
    <Container>
      <ComposeButton onClick={() => setOpenComposeMail(!openComposeMail)}>
        <CreateOutlined />
        Compose
      </ComposeButton>
      <List>
        {SIDEBAR_DATA.map((item) => (
          <ListItem>
            <item.icon fontSize="small" />
            {item.title}
          </ListItem>
        ))}
      </List>
      {openComposeMail ? (
        <ComposeMail
          openComposeMail={openComposeMail}
          setOpenComposeMail={setOpenComposeMail}
        />
      ) : null}
    </Container>
  );
};

export default SidebarContent;
