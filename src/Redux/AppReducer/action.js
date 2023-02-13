import * as types from "./actionType";
import axios from "axios";

const getMusicRecordRequest = () => {
  return {
    type: types.GET_MUSIC_RECORD_REQUEST,
  };
};

export const getMusicRecord =(queryParams)=>(dispatch) => {
  dispatch(getMusicRecordRequest);

  return axios
    .get(`http://localhost:8080/albums`,queryParams)
    .then((r) => {
      dispatch({
        type: types.GET_MUSIC_RECORD_SUCCESS,
        payload: r.data,
      });
      // console.log(r.data)
    })
    .catch((e) => {
      dispatch({ type: types.GET_MUSIC_RECORD_FAILURE });
    });
};


export const updateMusicRecord=(id,payload)=>dispatch=>{
  dispatch({type:types.UPDATE_MUSIC_RECORD_REQUEST})
  return axios.patch(`http://localhost:8080/albums/${id}`,payload).then(r=>{
    dispatch({type:types.UPDATE_MUSIC_RECORD_SUCCESS})
  }).catch(e=>{
    dispatch({type:types.UPDATE_MUSIC_RECORD_FAILURE})
  })
}