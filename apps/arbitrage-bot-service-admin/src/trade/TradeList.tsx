import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TradeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Trades"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="tokenPair" source="tokenPair" />
        <TextField label="profit" source="profit" />
        <TextField label="status" source="status" />
        <TextField label="executionTime" source="executionTime" />
        <TextField label="tradeDetails" source="tradeDetails" />
      </Datagrid>
    </List>
  );
};
