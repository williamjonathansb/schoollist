import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";

export const SchoolListContainer = styled(Box)`
  height: 400px;
  min-width: 300px;
  max-width: 700px;
  width: 100%;

  padding-left: 10px;
  padding-right: 10px;
`;

export const DataGridStyled = styled(DataGrid)`
  .MuiDataGrid-cellContent {
    font-family: "Inter", sans-serif;
    font-weight: bold;
  }

  .MuiDataGrid-columnHeaderTitle {
    font-family: "Inter", sans-serif;
    font-weight: bold;
  }

  & .datagrid-header {
    background-color: ${(props) => props.theme["green-300"]};
  }

  &.MuiDataGrid-root {
    border-radius: 8px;
    border: none;
    background-color: ${(props) => props.theme["white"]};
  }

  &.MuiDataGrid-root,
  .MuiDataGrid-withBorder {
    border-right: none !important;
  }

  & .MuiDataGrid-iconSeparator {
    display: "none";
  }

  & .MuiDataGrid-cell {
    border-right: 2px solid ${(props) => props.theme["green-300"]};
  }

  & .MuiDataGrid-columnsContainer,
  .MuiDataGrid-cell,
  .MuiDataGrid-virtualScrollerContent,
  .MuiDataGrid-virtualScrollerRenderZone {
    border-bottom: 1px solid ${(props) => props.theme["green-300"]};
  }

  & .MuiDataGrid-columnSeparator {
    display: none !important;
  }

  & .MuiPaginationItem-root {
    border-radius: 0;
    border: none !important;
  }

  &.MuiDataGrid-root .MuiDataGrid-columnHeader:focus,
  &.MuiDataGrid-root .MuiDataGrid-cell:focus {
    outline: none;
    border: none;
  }
`;
