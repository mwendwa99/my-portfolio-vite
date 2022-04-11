import { Divider, Chip } from "@mui/material";

export default function DividerComponent({ label, icon }) {
  return (
    <Divider>
      <Chip label={label} icon={icon} />
    </Divider>
  );
}
