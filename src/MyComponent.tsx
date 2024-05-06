import DataTable, { ColumnDef } from "@mukhindev/react-data-table";
import styles from "./MyComponent.module.css";

type ProductModel = {
  id: number;
  name: string;
};

type OrderItemModel = {
  id: number;
  product: ProductModel;
  price: number;
};

const data: OrderItemModel[] = [
  { id: 1, product: { id: 7, name: "Potato" }, price: 10000 },
  { id: 2, product: { id: 5, name: "Banana" }, price: 32000 },
  { id: 3, product: { id: 9, name: "Orange" }, price: 42500 },
];

function MyComponent() {
  const defs: ColumnDef<OrderItemModel>[] = [
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
      cellProps: { style: { textAlign: "right" } },
    },
    {
      title: "Random",
      render: () => Math.random().toFixed(3),
      headCellProps: { className: styles.RandomHeadCell },
      bodyCellProps: { className: styles.RandomBodyCell },
    },
  ];

  return <DataTable className={styles.DataTable} data={data} defs={defs} />;
}

export default MyComponent;
