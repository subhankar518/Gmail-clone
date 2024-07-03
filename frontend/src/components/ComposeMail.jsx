import {
  Dialog,
  Box,
  Typography,
  styled,
  InputBase,
  TextField,
  Button,
} from "@mui/material";
import { Close, DeleteOutlined } from "@mui/icons-material";

const dailogStyle = {
  height: "90%",
  width: "80%",
  maxHeight: "100%",
  maxWidth: "100%",
  boxShadow: "none",
  borderRedius: "10px 10px 0 0",
};

const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  background: "#f2f6fc",
  "& > p": {
    fontSize: 14,
    fontweight: 500,
  },
});

const RecipientsWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  margin: "0 15px",
  "& > div": {
    fontSize: 14,
    borderButton: "1px solid #F5F5F5",
    marginTop: 10,
  },
});

const Footer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
});

const SendButton = styled(Button)({
  background: "#0B57D0",
  color: "#fff",
  fontWeight: 500,
  textTransform: "none",
  borderRadius: 18,
  width: "100px",
});

// Typography is p tag replacement

const ComposeMail = ({ openComposeMail, setOpenComposeMail }) => {
  const closeCompposeMail = (e) => {
    e.preventDefault();

    setOpenComposeMail(!openComposeMail);
  };

  const sendMail = () => {
    setOpenComposeMail(!openComposeMail);
  };

  return (
    <Dialog open={openComposeMail} PaperProps={{ sx: dailogStyle }}>
      <Header>
        <Typography>New Message</Typography>
        <Close fontSize="small" onClick={(e) => closeCompposeMail(e)} />
      </Header>
      <RecipientsWrapper>
        <InputBase placeholder="Recipients" />
        <InputBase placeholder="Subject" />
      </RecipientsWrapper>
      <TextField
        multiline
        rows={20}
        sx={{
          " & .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      />
      <Footer>
        <SendButton onClick={sendMail}>Send</SendButton>
        <DeleteOutlined onClick={() => setOpenComposeMail(!openComposeMail)} />
      </Footer>
    </Dialog>
  );
};

export default ComposeMail;
