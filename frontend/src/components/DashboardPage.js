import React, { useState } from "react";
import props from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Divider, Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ChartPage from "./ChartPage";
import DateRangeIcon from "@material-ui/icons/DateRange";
import PieChartPage from "./PieChartPage";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const PostCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <div style={{ zIndex: 1 }}>
          <Typography
            className={classes.title}
            gutterBottom
            variant="overline"
            align="center"
          >
            {props.title}
          </Typography>
          <Typography variant="h3" component="h3" align="center">
            {props.data}
          </Typography>
          <Typography className={classes.pos} variant="caption" align="center">
            {props.dif}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default function DashboardPage() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="overline" compact="overline">
            Dashboard
          </Typography>
          <Typography variant="h4" compact="h4">
            Blog Overview
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginTop: 20 }}>
        <Grid item xs sm>
          <PostCard title="Posts" data="2,390" dif="4.7%" />
        </Grid>
        <Grid item xs sm>
          <PostCard title="Pages" data="182" dif="12.4" />
        </Grid>
        <Grid item xs sm>
          <PostCard title="Posts" data="8,175" dif="3.8%" />
        </Grid>
        <Grid item xs sm>
          <PostCard title="Posts" data="29" dif="2.71%" />
        </Grid>
        <Grid item xs sm>
          <PostCard title="Posts" data="17,281" dif="2.4%" />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={8} sm={6}>
          <Card>
            <CardContent>
              <Grid item xs={12}>
                <Typography variant="h4">Users Overview</Typography>
              </Grid>
              <Divider />
              <Grid
                item
                xs={12}
                style={{ padding: 10, flexBasis: "100%", marginBottom: 10 }}
              >
                <Button variant="outlined" size="small">
                  Start Date
                </Button>
                <Button variant="outlined" size="small">
                  End Date
                </Button>
                <Button variant="outlined" size="small">
                  <DateRangeIcon />
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  style={{ float: "right" }}
                >
                  View Full Report
                </Button>
              </Grid>
              <Divider />
              <ChartPage />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} sm={6}>
          <Card>
            <CardContent>
              <Grid item xs={12}>
                <Typography variant="h4">Users by device</Typography>
              </Grid>
              <Divider />
              <PieChartPage />
              <Divider />
              <Grid
                item
                xs={12}
                sm={12}
                style={{ padding: 10, flexBasis: "100%", marginTop: 10 }}
              >
                <Button variant="outlined" size="small">
                  Last Week
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  style={{ float: "right" }}
                >
                  View Full Report
                </Button>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
