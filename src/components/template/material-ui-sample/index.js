import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Switch } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: "none",
  },
}));

export const MaterialUISample = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div>
      <div>
        <Button variant="contained" className={classes.button}>
          Default
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
          Primary
        </Button>
        <Button variant="contained" color="secondary" className={classes.button}>
          Secondary
        </Button>
        <Button variant="contained" color="secondary" disabled className={classes.button}>
          Disabled
        </Button>
        <Button variant="contained" href="#contained-buttons" className={classes.button}>
          Link
        </Button>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" component="span" className={classes.button}>
            Upload
          </Button>
        </label>
      </div>
      <hr />
      <div>
        <Button className={classes.button}>Default</Button>
        <Button color="primary" className={classes.button}>
          Primary
        </Button>
        <Button color="secondary" className={classes.button}>
          Secondary
        </Button>
        <Button disabled className={classes.button}>
          Disabled
        </Button>
        <Button href="#text-buttons" className={classes.button}>
          Link
        </Button>
        <input
          accept="image/*"
          className={classes.input}
          id="text-button-file"
          multiple
          type="file"
        />
        <label htmlFor="text-button-file">
          <Button component="span" className={classes.button}>
            Upload
          </Button>
        </label>
      </div>
      <div>
        <Switch
          checked={state.checkedA}
          onChange={handleChange("checkedA")}
          value="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <Switch
          checked={state.checkedB}
          onChange={handleChange("checkedB")}
          value="checkedB"
          color="primary"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <Switch value="checkedC" inputProps={{ "aria-label": "primary checkbox" }} />
        <Switch disabled value="checkedD" inputProps={{ "aria-label": "disabled checkbox" }} />
        <Switch
          disabled
          checked
          value="checkedE"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <Switch
          defaultChecked
          value="checkedF"
          color="default"
          inputProps={{ "aria-label": "checkbox with default color" }}
        />
      </div>
    </div>
  );
};

export default MaterialUISample;
