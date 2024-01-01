import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  pets: [],
  pet: {},
};

const petsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PETS:
      return {
        ...state,
        pets: action.payload,
      };
    case ActionTypes.ADD_PET:
      return {
        ...state,
        pets: [...state.pets, action.payload],
      };
    case ActionTypes.DELETE_PET:
      return {
        ...state,
        pets: state.pets.filter((pet) => pet.id !== action.payload),
      };
    case ActionTypes.SELECT_PET:
      return {
        ...state,
        pet: state.pets.find((pet) => pet.id === action.payload),
      };
    case ActionTypes.UPDATE_PET:
      return {
        ...state,
        pets: state.pets.map((pet) =>
          pet.id === action.payload.id ? action.payload : pet
        ),
      };
    case ActionTypes.SEARCH_PET:
      return {
        ...state,
        searchedPets: state.pets.filter((pet) =>
          Object.values(pet).some((value) =>
            value
              .trim()
              .toLowerCase()
              .includes(action.payload.trim().toLowerCase())
          )
        ),
      };
    case ActionTypes.FILTER_STATUS:
      return {
        ...state,
        filteredStatus: state.pets.filter(
          (pet) => pet.status === action.payload
        ),
      };
    case ActionTypes.FILTER_BREED:
      return {
        ...state,
        filteredBreed: state.pets.filter((pet) => pet.breed === action.payload),
      };
    case ActionTypes.SET_LIMIT:
      return {
        ...state,
        pets: action.payload,
      };
    default:
      return state;
  }
};

export default petsReducer;
