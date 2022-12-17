import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../fire";
import { PROFILE } from "../helpers/consts";
const setProfileContext = createContext();
export const useSetProfile = () => useContext(setProfileContext);

const INIT_STATE = {
  profiles: [],
  profileDetails: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case PROFILE.GET_PROFILES:
      return { ...state, profiles: action.payload };

    case PROFILE.GET_PROFILE_DETAILS:
      return { ...state, profileDetails: action.payload };

    default:
      return state;
  }
}

const SetProfileContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const authorsCollectioRef = collection(db, "authors");

  async function getProfiles() {
    const data = await getDocs(authorsCollectioRef);

    dispatch({
      type: PROFILE.GET_PROFILES,
      payload: data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
    });

    // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

  // useEffect(() => {
  //   getProfiles();
  // }, []);

  async function createProfile(newProfile) {
    console.log(newProfile);
    await addDoc(authorsCollectioRef, newProfile);
  }

  async function getProfileDetails(id) {
    const profileDocRef = doc(db, "authors", id);
    const profileDetails = await getDoc(profileDocRef);
    console.log(profileDetails.data());
    dispatch({
      type: PROFILE.GET_PROFILE_DETAILS,
      payload: profileDetails.data(),
    });
  }

  async function saveEditedProfile(id, updatedProfile) {
    const profileDocref = doc(db, "authors", id);
    await updateDoc(profileDocref, updatedProfile);
    getProfiles();
  }

  async function deleteProfile(id) {
    const profileDocRef = doc(db, "authors", id);
    await deleteDoc(profileDocRef);
    getProfiles();
  }

  const values = {
    createProfile,
    getProfiles,
    profiles: state.profiles,
    getProfileDetails,
    profileDetails: state.profileDetails,
    saveEditedProfile,
    deleteProfile
  };

  return (
    <setProfileContext.Provider value={values}>
      {children}
    </setProfileContext.Provider>
  );
};

export default SetProfileContextProvider;
