import { SideNav as MedlySideNav} from "@medly-components/layout";
import { HomeIcon, ReceiptIcon } from "@medly-components/icons";
import { Text } from "@medly-components/core";
import { FC } from "react";
import React from "react";

const SideNavv: FC = () => {
  return (
    <MedlySideNav>
      <MedlySideNav.List>
        <MedlySideNav.Nav path="/home">
          <HomeIcon />
          <Text>Home</Text>
        </MedlySideNav.Nav>
        <MedlySideNav.Nav path="/records">
          <ReceiptIcon />
          <Text>Records</Text>
        </MedlySideNav.Nav>
      </MedlySideNav.List>
    </MedlySideNav>
  );
};

export default SideNavv;
