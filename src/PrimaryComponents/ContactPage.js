import React, { useRef } from "react";
import Box from "@mui/material/Box";
import emailjs from "@emailjs/browser";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function ContactPage(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_egmbqcc",
        "template_9b7i0gb",
        form.current,
        "4_NE7-Wk3G8d8tgmG"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          paddingTop: "100px",
          paddingBottom: "100px",
          margin: "auto",
          textAlign: "center",
          backgroundColor: props.themeLight ? "primary.light" : "dark",
          fontFamily: "Shrikhand",
        }}
        ref={props.contactRef}
      >
        Contact 😊
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: props.themeLight ? "primary.light" : "dark",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContant: "center",
        }}
      >
        <Card
          style={{
            maxWidth: "850px",
            marginBottom: "50px",
            marginRight: "auto",
            marginLeft: "auto",
            padding: "20px 5px",
            border: "3px solid",
            borderColor: props.themeLight ? "error.main" : "white",
            background: "black",
            borderRadius: "50px",
            margin: "13px",
            backgroundColor: props.themeLight ? "white" : "black",
          }}
        >
          <CardContent sx={{ color: props.themeLight ? "black" : "white" }}>
            <Typography gutterBottom variant="h5">
              Contact Me!
            </Typography>
            <Typography sx={{ paddingBottom: "15px" }}>
              Once you press submit, I will get back to you within 24 hours!
            </Typography>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <Grid container spacing={2}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    sx={{
                      backgroundColor: props.themeLight ? "white" : "black",
                      color: "grey",
                    }}
                    name="user_firstname"
                    label="First Name"
                    placeholder="Enter First Name"
                    variant="standard"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    sx={{
                      backgroundColor: props.themeLight ? "white" : "black",
                    }}
                    name="user_lastname"
                    label="Last Name"
                    placeholder="Enter Last Name"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    sx={{
                      backgroundColor: props.themeLight ? "white" : "black",
                    }}
                    type="email"
                    name="user_email"
                    label="Email"
                    placeholder="Enter email"
                    variant="standard"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    sx={{
                      backgroundColor: props.themeLight ? "white" : "black",
                    }}
                    type="number"
                    name="user_phone"
                    label="Number"
                    placeholder="Enter Phone Number"
                    variant="standard"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    sx={{
                      backgroundColor: props.themeLight ? "white" : "black",
                    }}
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    placeholder="Enter information about your issue here"
                    variant="standard"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <Button
                    type="submit"
                    value="Send"
                    variant="contained"
                    color="error"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
