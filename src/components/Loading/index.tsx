import * as React from "react";
import { StyledTypography } from "../Cocktails/styles";
import { TopNavBar } from "../TopNavigationBar";

export const Loading: React.FC = () => {
  
  return( <><TopNavBar searchValue={''} handelSearch={undefined} /><StyledTypography marginTop={10}>Loading...</StyledTypography></>);
};
