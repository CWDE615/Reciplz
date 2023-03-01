import React from 'react';
import './style.css';
import { Stage, Layer, Rect, Text } from 'react-konva';
import { Html } from 'react-konva-utils';
import React, { Component } from 'react';
import {
  Switch,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
} from '@mui/material';

class Home extends Component {
  render() {
    let menu_width = 800
    let central_position = 0.5 * (window.innerWidth - menu_width)
    return (
      <Stage Stage width={screen.width} height={screen.height}>
        <Layer>
          <Rect
            x={ central_position }
            y={165}
            width={ menu_width }
            height={54}
            fill="#A0a0a0"
            cornerRadius={7}
          />

          <Html>
            <div
              style={{
                marginLeft: 30,
                marginTop: 475,
                width: 100,
                height: 40,
                cornerRadius: 7,
              }}
            >
              <Button variant="contained">Search</Button>
            </div>
          </Html>

          <Rect
            x={30}
            y={240}
            width={screen.width - 60}
            height={220}
            fill="#A0a0a0"
            cornerRadius={7}
          />

          <Text
            x={40}
            y={250}
            fontSize={18}
            fontStyle="bold"
            fill="black"
            text="Max Prep Time"
          />

          <Rect
            x={40}
            y={275}
            width={screen.width - 80}
            height={40}
            fill="#77b4ff"
            shadowColor="#585858"
            shadowBlur={10}
            shadowOffset={[10, 10]}
            cornerRadius={7}
          />

          <Text
            x={500}
            y={334}
            align="center"
            fontSize={20}
            fill="black"
            text="Food Intolerances"
          />

          <Html>
            <div style={{ marginLeft: 380, marginTop: 410 }}>
              <FormControlLabel
                value="seafood"
                control={<Switch color="primary" size="small" />}
                label="Seafood"
                labelPlacement="top"
              />
              <FormControlLabel
                value="shellfish"
                control={<Switch color="primary" size="small" />}
                label="Shellfish"
                labelPlacement="top"
              />
              <FormControlLabel
                value="soy"
                control={<Switch color="primary" size="small" />}
                label="Soy"
                labelPlacement="top"
              />
              <FormControlLabel
                value="treenuts"
                control={<Switch color="primary" size="small" />}
                label="Treenuts"
                labelPlacement="top"
              />
              <FormControlLabel
                value="wheat"
                control={<Switch color="primary" size="small" />}
                label="Wheat"
                labelPlacement="top"
              />
            </div>
          </Html>
          <Html>
            <div style={{ marginLeft: 380, marginTop: 360 }}>
              <FormControlLabel
                value="dairy"
                control={<Switch color="primary" size="small" />}
                label="Dairy"
                labelPlacement="top"
              />
              <FormControlLabel
                value="eggs"
                control={<Switch color="primary" size="small" />}
                label="Eggs"
                labelPlacement="top"
              />
              <FormControlLabel
                value="gluten"
                control={<Switch color="primary" size="small" />}
                label="Gluten"
                labelPlacement="top"
              />
              <FormControlLabel
                value="peanuts"
                control={<Switch color="primary" size="small" />}
                label="Peanuts"
                labelPlacement="top"
              />
              <FormControlLabel
                value="sesame"
                control={<Switch color="primary" size="small" />}
                label="Sesame"
                labelPlacement="top"
              />
            </div>
          </Html>

          <Html>
            <div
              style={{ marginLeft: 33, marginTop: 330, width: 100, height: 20 }}
            >
              <FormControl
                variant="filled"
                sx={{ m: 1, minWidth: 120 }}
                size="small"
              >
                <InputLabel id="demo-select-small">Cuisine</InputLabel>
                <Select labelId="demo-select-small" id="demo-select-small">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'African'}>African</MenuItem>
                  <MenuItem value={'Chinese'}>Chinese</MenuItem>
                  <MenuItem value={'Japanese'}>Japanese</MenuItem>
                  <MenuItem value={'Korean'}>Korean</MenuItem>
                  <MenuItem value={'Vietnamese'}>Vietnamese</MenuItem>
                  <MenuItem value={'Thai'}>Thai</MenuItem>
                  <MenuItem value={'Indian'}>Indian</MenuItem>
                  <MenuItem value={'British'}>British</MenuItem>
                  <MenuItem value={'Irish'}>Irish</MenuItem>
                  <MenuItem value={'French'}>French</MenuItem>
                  <MenuItem value={'Italian'}>Italian</MenuItem>
                  <MenuItem value={'Mexican'}>Mexican</MenuItem>
                  <MenuItem value={'Spanish'}>Spanish</MenuItem>
                  <MenuItem value={'MiddleEastern'}>Middle Eastern</MenuItem>
                  <MenuItem value={'Jewish'}>Jewish</MenuItem>
                  <MenuItem value={'American'}>American</MenuItem>
                  <MenuItem value={'Cajun'}>Cajun</MenuItem>
                  <MenuItem value={'Southern'}>Southern</MenuItem>
                  <MenuItem value={'Greek'}>Greek</MenuItem>
                  <MenuItem value={'German'}>German</MenuItem>
                  <MenuItem value={'Nordic'}>Nordic</MenuItem>
                  <MenuItem value={'EasternEuropean'}>
                    Eastern European
                  </MenuItem>
                  <MenuItem value={'Caribbean'}>Caribbean</MenuItem>
                  <MenuItem value={'LatinAmerican'}>Latin American</MenuItem>
                </Select>
              </FormControl>

              <FormControl
                variant="filled"
                sx={{ m: 1, minWidth: 120 }}
                size="small"
              >
                <InputLabel id="demo-select-small">Diet Type</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'Pescetarian'}>Pescetarian</MenuItem>
                  <MenuItem value={'LactoVegetarian'}>
                    Lacto Vegetarian
                  </MenuItem>
                  <MenuItem value={'OvoVegetarian'}>Ovo Vegetarian</MenuItem>
                  <MenuItem value={'Vegan'}>Vegan</MenuItem>
                  <MenuItem value={'Paleo'}>Paleo</MenuItem>
                  <MenuItem value={'Primal'}>Primal</MenuItem>
                  <MenuItem value={'Vegetarian'}>Vegetarian</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Html>

          <Html>
            <div style={{ marginLeft: 50, marginTop: 275, width: 800 }}>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value={10}
                    control={<Radio />}
                    label="10 mins"
                  />
                  <FormControlLabel
                    value={20}
                    control={<Radio />}
                    label="20 mins"
                  />
                  <FormControlLabel
                    value={30}
                    control={<Radio />}
                    label="30 mins"
                  />
                  <FormControlLabel
                    value={40}
                    control={<Radio />}
                    label="40 mins"
                  />
                  <FormControlLabel
                    value={50}
                    control={<Radio />}
                    label="50 mins"
                  />
                  <FormControlLabel
                    value={60}
                    control={<Radio />}
                    label="60 mins"
                  />
                  <FormControlLabel
                    value={70}
                    control={<Radio />}
                    label="∞ mins"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </Html>

          <Html>
            <div style={{ marginLeft: 30, marginTop: 165 }}>
              <TextField variant="outlined" label="Description of food" />
            </div>
          </Html>
        </Layer>
      </Stage>
    );
  }
}

export default Home;
