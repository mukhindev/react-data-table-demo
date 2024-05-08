import {
  Table,
  TableBody,
  TableCell,
  TableCellProps,
  TableHead,
  TableRow,
} from "@mui/material";
import { OrderItemModel } from "../../src/types";
import DataTable, { ColumnDef } from "@mukhindev/react-data-table";

export default function TableWithMui() {
  const data: OrderItemModel[] = [
    { id: 1, product: { id: 7, name: "Potato" }, price: 10000 },
    { id: 2, product: { id: 5, name: "Banana" }, price: 32000 },
    { id: 3, product: { id: 9, name: "Orange" }, price: 42500 },
  ];

  const defs: ColumnDef<OrderItemModel, TableCellProps>[] = [
    {
      title: "ID",
      valueKey: "id",
    },
    {
      title: "Product",
      valueKey: "product.name",
    },
    {
      title: "Price",
      render: (item) => `${item.price.toLocaleString("ru")} ₽`,
      cellProps: {
        style: { textAlign: "right" },
        sx: { backgroundColor: "red" },
      },
    },
    {
      title: "Random",
      render: () => Math.random().toFixed(3),
      headCellProps: {},
      bodyCellProps: {},
    },
  ];

  return (
    <DataTable
      data={data}
      defs={defs}
      table={<Table />}
      thead={<TableHead />}
      tbody={<TableBody />}
      tr={<TableRow />}
      td={<TableCell sx={{ backgroundColor: "seagreen" }} />}
    />
  );
}
