import {
  Dialog,
  Box,
  Typography,
  styled,
  InputBase,
  TextField,
} from "@mui/material";
import { Close } from "@mui/icons-material";

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

// Typography is p tag replacement

const ComposeMail = () => {
  return (
    <Dialog open={true} PaperProps={{ sx: dailogStyle }}>
      <Header>
        <Typography>New Message</Typography>
        <Close fontSize="small" />
      </Header>
      <RecipientsWrapper>
        <InputBase placeholder="Recipients" />
        <InputBase placeholder="Subject" />
      </RecipientsWrapper>
      <TextField
        multiline
        row={20}
        sx={{
          " & .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      />
    </Dialog>
  );
};

export default ComposeMail;
