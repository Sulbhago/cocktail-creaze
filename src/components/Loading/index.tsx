import * as React from "react";
import { TopNavBar } from "../TopNavigationBar";
import './loading.css'

export const Loading: React.FC = () => {
  return( <><TopNavBar searchValue={''} handelSearch={undefined} showSearch={true}/><h1 className="Loading-text">Loading...</h1></>);
};
