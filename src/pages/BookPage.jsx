import React, { useEffect, useState } from "react";
import { DataTable } from "../components/book/data-table";
import { columns } from "../components/book/columns";
import { Description } from "@radix-ui/react-dialog";
async function getData() {
  const url = "api/books"; // Replace with your actual API endpoint
  try {
    const response = await fetch(url, {
      // You can try adding these headers, but they won't solve CORS issues
      // if the server doesn't support them
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      mode: "no-cors",
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Return some fallback data for development
    return [
      {
        id: "728ed52f",
        BookID: 100,
        Title: "pending",
        Description: "m@example.com",
      },
    ];
  }
}

export default function BookPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Book Page</h1>
      <p>This page will display a book or a list of books.</p>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>{" "}
    </div>
  );
}
