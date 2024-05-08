import TableWithCss from "../components/TableWithCss";
import TableWithMui from "../components/TableWithMui";
import { Stack } from "@mui/material";
import "./App.css";

export default function App() {
  return (
    <Stack direction="column" gap={3}>
      <TableWithCss />
      <TableWithMui />
    </Stack>
  );
}
