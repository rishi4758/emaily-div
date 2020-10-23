import axios from "axios";
import { FETCH_USER } from "./types";
import { FETCH_SURVEY } from "./types";
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handletoken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/rishav", values);
  history.push("/surveys");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchsurvey = () => async (dispatch) => {
  const res = await axios.get("/api/surveys");
  console.log(res.data + "the data is");
  const data = [];
  for (const obj of res.data) {
    data.push(obj);
  }
  console.log(data + "this is the data");
  dispatch({ type: FETCH_SURVEY, payload: res.data });
};
