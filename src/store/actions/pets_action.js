import { ActionTypes } from "../constants/actionTypes";
import { apiCall } from "../../services/apiService";
import { toast } from "react-toastify";

export const getPets = () => {
  return async (dispatch) => {
    const res = await apiCall("pets", "get");
    dispatch({
      type: ActionTypes.SET_PETS,
      payload: res.data,
    });
  };
};

export const addPet = (newPet) => {
  return async (dispatch) => {
    const res = await apiCall("pets", "post", newPet);
    dispatch({
      type: ActionTypes.ADD_PET,
      payload: res.data,
    });
    toast.success("Patient added successfully");
  };
};

export const deletePet = (petId) => {
  return async (dispatch) => {
    await apiCall(`pets/${petId}`, "delete");
    dispatch({
      type: ActionTypes.DELETE_PET,
      payload: petId,
    });
    toast.warn("Patient deleted successfully");
  };
};

export const selectPet = (petId) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.SELECT_PET,
      payload: petId,
    });
  };
};

export const updatePet = (petId, pet) => {
  return async (dispatch) => {
    const res = await apiCall(`pets/${petId}`, "put", pet);
    dispatch({
      type: ActionTypes.UPDATE_PET,
      payload: res.data,
    });
    toast.success("Patient updated successfully");
  };
};

export const searchPet = (searchTerm) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.SEARCH_PET,
      payload: searchTerm,
    });
  };
};

export const filterStatus = (status) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.FILTER_STATUS,
      payload: status,
    });
  };
};

export const filterBreed = (breed) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.FILTER_BREED,
      payload: breed,
    });
  };
};

export const setLimitRows = (limit) => {
  return async (dispatch) => {
    const res = await apiCall(`pets?_limit=${limit}`, "get");
    dispatch({
      type: ActionTypes.SET_LIMIT,
      payload: res.data,
    });
  };
};
