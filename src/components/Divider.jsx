import React from "react";
import { Divider, Chip } from "@mui/material";

const DividerComponent = React.memo(({ label, icon }) => {
  return (
    <Divider>
      <Chip label={label} icon={icon} />
    </Divider>
  );
});

export default DividerComponent;
