"use client";

import { createContext, useContext, useEffect, useReducer } from "react";
import { data } from "../assets/mockdata";
const MyContext = createContext();

const DataProvider = ({ children }) => {
  const initialState = {
    selectedTab: "All",
    data: [],
    openModal: false,
    apidata: [],
    sortBy: {
      clientName: "",
      createdAt: "",
      updatedAt: "",
      clientId: "",
    },
    searchClick: false,
    searchText: "",
    inputFocused: false,
    openModalFilter: false,
    filterBy: {
      status: [],
      updatedBy: [],
    },
    openModalAdd: false,
  };
  const reducer = (state, newState) => {
    return { ...state, ...newState };
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleState = (obj) => {
    dispatch(obj);
  };
  const fetchData = () => {
    handleState({ data: [...data.data], apidata: [...data.data] });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleTab = () => {
    if (state.selectedTab === "Individual" || state.selectedTab === "Company") {
      const arr = state.apidata?.filter(
        (ele) => ele.clientType === state.selectedTab
      );
      handleState({ data: arr });
    } else {
      handleState({ data: [...data.data] });
    }
  };
  useEffect(() => {
    handleTab();
  }, [state.selectedTab]);

  const contextValue = {
    state,
    handleState,
  };
  return (
    <div>
      <div>
        <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
      </div>
    </div>
  );
};
const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a DataProvider");
  }
  return context;
};

export { DataProvider, useMyContext };
