import React, { Component } from "react";
import {
  Button,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
} from "@material-ui/core";
import ImageCard from "./ImageCard";

export default class UploadPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      imageData: [],
    };
    this.onFileChange = this.onFileChange.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);
    this.getImages = this.getImages.bind(this);
  }

  async componentDidMount() {
    this.getImages();
  }

  onFileChange(event) {
    this.setState({ selectedFile: event.target.files[0] });
  }

  onFileUpload() {
    const formData = new FormData();

    formData.append("image", this.state.selectedFile);

    console.log(this.state.selectedFile);

    const requestOption = {
      method: "POST",
      body: formData,
    };
    fetch("api/upload", requestOption)
      .then((response) => response.json())
      .then((data) => this.getImages());
  }

  getImages() {
    return fetch("/api/store")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          imageData: data,
        });
      });
  }

  render() {
    const imageData = this.state.imageData;

    console.log("imagedata", imageData);
    return (
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          align="center"
          style={{ paddingTop: 20, paddingBottom: 20 }}
        >
          <Typography component="h4" variant="h4">
            Image Store
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            variant="contained"
            color="secondary"
            component="label"
            onChange={this.onFileChange}
          >
            Select Image
            <input type="file" hidden />
          </Button>
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            variant="contained"
            color="primary"
            component="label"
            onClick={this.onFileUpload}
          >
            Upload
          </Button>
        </Grid>

        {imageData.map((item) => (
          <ImageCard
            id={item.id}
            key={item.id}
            imageUrl={item.image}
            updateCallback={this.getImages}
          />
        ))}
      </Grid>
      //   <Card
      //     align="center"
      //     key={item.id}
      //     style={{ marginTop: 20, marginLeft: 20 }}
      //   >
      //     <CardActionArea>
      //       <img src={item.image} style={{ height: 250, width: 300 }} />
      //     </CardActionArea>
      //     <CardActions style={{ justifyContent: "center" }}>
      //       <Button
      //         size="small"
      //         variant="contained"
      //         component="label"
      //         color="secondary"
      //         onClick={this.deleteImage.bind(this, item.id)}
      //       >
      //         Delete
      //       </Button>
      //     </CardActions>
      //   </Card>
    );
  }
}
