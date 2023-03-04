import '../css/CreateAccount.css'
import { useState } from 'react';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { Checkbox, FormControlLabel, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import ImageUploading, { ImageListType } from "react-images-uploading";

const theme = createTheme();
const CreateAccount = () => {

    const [images, setImages] = useState([]);
    const maxNumber = 6;
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };

  const gender = [
    {
      value: "male",
      label: "Male",
    },
    {
      value: "female",
      label: "Female",
    },
    {
      value: "other",
      label: "Other",
    },
  ];

  const prefGender = [
    {
      value: "male",
      label: "Men",
    },
    {
      value: "female",
      label: "Women",
    },
    {
      value: "other",
      label: "Other",
    },
  ];

  const lookingFor = [
    {
      value: "relationship",
      label: "Relationship",
    },
    {
      value: "casual",
      label: "Casual",
    },
    {
      value: "friendship",
      label: "Friendship",
    },
    {
      value: "connections",
      label: "Connections",
    },
    {
      value: "notSure",
      label: "Not Sure",
    },
  ];
  let navigate = useNavigate();
  const handleSubmit = async (event) => {
    // try {
    //   event.preventDefault();
    //   const data = new FormData(event.currentTarget);

    //   const response = await axios.post(
    //     "https://flatmate.pythonanywhere.com/account/signup/",
    //     data
    //   );
    //   console.log(response);
    //   localStorage.setItem("email", response.data.email);
      let pathname = "/app";
      navigate(pathname);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className='create-account'>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
        className="box"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
        <div className="create-acc-card">

          <div className="title">
            CREATE ACCOUNT
          </div>

          <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
                className="btn"
                style={isDragging ? { color: "red" } : null}
                onClick={onImageUpload}
                {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button className="btn" onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button className="btn update-btn" onClick={() => onImageUpdate(index)}>Update</button>
                  <button className="btn" onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
            className="form"
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstname"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastname"
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="DOB"
                  inputformat="YYYY-MM-DD"
                  label="DOB(YYYY-MM-DD)"
                  name="DOB"
                  autoComplete="dob"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Gender"
                  defaultValue="male"
                  name="gender"
                >
                  {gender.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>

            <h4 className="optional">Optional</h4>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="collegeName"
                  label="College Name"
                  name="collegename"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Show Me"
                  defaultValue="male"
                  name="gender"
                >
                  {prefGender.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Looking For"
                  defaultValue="relationship"
                  name="looking-for"
                >
                  {lookingFor.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className="continue btn"
            >
              Continue
            </Button>
          </Box>
          <div className="already-has-account">
            Already have an Account?<NavLink to="/">Log In</NavLink>
          </div>
          </div>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
};

export default CreateAccount;