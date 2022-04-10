import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: '#business_code',
    headerName: 'business_code ',
    width: 150,
    editable: true,
  },
  {
    field: 'cust_number',
    headerName: 'cust_number',
    width: 150,
    editable: true,
  },
  {
    field: 'clear_date',
    headerName: 'clear_date',
    type: 'date',
    width: 110,
    editable: true,
  },
  {
    field: 'business_year',
    headerName: 'business_year',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'doc_id',
    headerName: 'doc_id',
    type: 'date',
    width: 110,
    editable: true,
  },
  {
    field: 'postingDate',
    headerName: 'postingDate',
    type: 'date',
    width: 110,
    editable: true,
  },
  {
    field: 'document_create_date',
    headerName: 'document_create_date',
    type: 'date',
    width: 110,
    editable: true,
  },
  {
    field: 'document_create_date1',
    headerName: 'document_create_date1',
    type: 'date',
    width: 110,
    editable: true,
  },
  {
    field: 'due_in_date',
    headerName: 'due_in_date',
    type: 'date',
    width: 110,
    editable: true,
  },
  {
    field: 'invoice_currency',
    headerName: 'invoice_currency',
    type: 'integer',
    width: 110,
    editable: true,
  },
  {
    field: 'document_type',
    headerName: 'document_type',
    type: 'text',
    width: 110,
    editable: true,
  },
  {
    field: 'posting_id',
    headerName: 'posting_id',
    type: 'text',
    width: 110,
    editable: true,
  },
  {
    field: 'area_business',
    headerName: 'area_business',
    type: 'text',
    width: 110,
    editable: true,
  },
  {
    field: 'total_open_amount',
    headerName: 'total_open_amount',
    type: 'integer',
    width: 110,
    editable: true,
  },
  {
    field: 'baseline_create_date',
    headerName: 'baseline_create_date',
    type: 'date',
    width: 110,
    editable: true,
  },
  {
    field: 'clear_date',
    headerName: 'clear_date',
    type: 'date',
    width: 110,
    editable: true,
  },
  {
    field: 'customer_payment_terms',
    headerName: 'customer_payment_terms',
    type: 'text',
    width: 110,
    editable: true,
  },
  {
    field: 'invoice_id',
    headerName: 'invoice_id',
    type: 'text',
    width: 110,
    editable: true,
  },
  {
    field: 'isOpen',
    headerName: 'isOpen',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'aging_bucket',
    headerName: 'aging_bucket',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'is_deleted',
    headerName: 'is_deleted',
    type: 'number',
    width: 110,
    editable: true,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function Tabledatagrid() {
  return (
    <div style={{ height: 650, width: '100%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}