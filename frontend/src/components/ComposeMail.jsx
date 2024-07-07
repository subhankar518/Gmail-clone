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
import { useState } from "react";
import useApi from "../customHooks/useApi";
import { API_ENDPOINTS } from "../services/api.endpoints";

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
  const [emailData, setEmailData] = useState({});
  const sendEmailService = useApi(API_ENDPOINTS.saveSentEmail);

  const closeCompposeMail = (e) => {
    e.preventDefault();

    setOpenComposeMail(!openComposeMail);
  };

  const onValueChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
    // console.log(emailData);
  };

  const sendMail = async (e) => {
    e.preventDefault();

    if (window.Email) {
      window.Email.send({
        Host: process.env.REACT_APP_SERVER_HOST,
        Username: process.env.REACT_APP_SERVER_USERNAME,
        Password: process.env.REACT_APP_SERVER_PASSWORD,
        Port: process.env.REACT_APP_SERVER_PORT,

        To: emailData?.to,
        From: "subhankarmanna518@gmail.com", // need to create dynamic
        Subject: emailData?.subject,
        Body: emailData?.body,
      }).then((message) => console.log(message));
    }

    const payload = {
      to: emailData?.to,
      from: "subhankarmanna518@gmail.com", // need to create dynamic
      subject: emailData?.subject,
      body: emailData?.body,
      date: new Date(),
      attachment: "",
      sender_name: "Subhankar Manna",
      starred: false,
      type: "sent",
    };

    sendEmailService.call(payload);

    // if (!sendEmailService.error) {
    //   setOpenComposeMail(!openComposeMail);
    //   setEmailData({});
    // }
    setOpenComposeMail(!openComposeMail);
    setEmailData({});
  };

  return (
    <Dialog open={openComposeMail} PaperProps={{ sx: dailogStyle }}>
      <Header>
        <Typography>New Message</Typography>
        <Close fontSize="small" onClick={(e) => closeCompposeMail(e)} />
      </Header>
      <RecipientsWrapper>
        <InputBase
          placeholder="Recipients"
          name="to"
          onChange={(e) => onValueChange(e)}
        />
        <InputBase
          placeholder="Subject"
          name="subject"
          onChange={(e) => onValueChange(e)}
        />
      </RecipientsWrapper>
      <TextField
        multiline
        rows={20}
        sx={{
          " & .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
        name="body"
        onChange={(e) => onValueChange(e)}
      />
      <Footer>
        <SendButton onClick={(e) => sendMail(e)}>Send</SendButton>
        <DeleteOutlined onClick={() => setOpenComposeMail(!openComposeMail)} />
      </Footer>
    </Dialog>
  );
};

export default ComposeMail;
