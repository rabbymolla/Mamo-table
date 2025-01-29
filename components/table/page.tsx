"use client";
import React from "react";
import Table from "rc-table";

const columns = [
  {
    title: "Sl",
    dataIndex: "sl",
    key: "sl",
    width: 50,
    className: "border text-left font-DmSans text-sm text-bold py-2 px-1",
  },
  {
    title: "Product Description",
    dataIndex: "descroption",
    key: "descroption",
    width: 500,
    className: "border w-1/2 text-left font-DmSans text-sm text-bold py-2 px-1",
  },
  {
    title: "Pieces",
    dataIndex: "pices",
    key: "pices",
    width: 50,
    className: "border text-left font-DmSans text-sm text-bold py-2 px-1",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    width: 200,
    className: "border text-left font-DmSans text-sm text-bold py-2 px-1",
  },
  {
    title: "Total Price",
    dataIndex: "totalprice",
    key: "totalprice",
    width: 200,
    className: "border text-left font-DmSans text-sm text-bold py-2 px-1",
  },
];

const data = [
  {
    key: 1,
    sl: 1,
    descroption:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, velit. Cumque",
    pices: 1,
    price: 100000,
    totalprice: 100000,
  },
  {
    key: 2,
    sl: 2,
    descroption: "Product B",
    pices: 2,
    price: 50000,
    totalprice: 50000,
  },
];

// Calculate total price
const totalAmount = data.reduce((sum, item) => sum + item.totalprice, 0);

// Add total row
const totalRow = {
  key: "total",
  price: "Total",
  totalprice: totalAmount,
};

const tableData = [...data, totalRow];

const DynamicTable = () => {
  return (
    <div>
      <Table columns={columns} data={tableData} />
    </div>
  );
};

export default DynamicTable;
