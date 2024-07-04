import { useEffect, useState } from "react";
import { Payment, columns } from "./components/payment/columns";
import { DataTable } from "./components/payment/data-table";

function getData(): Promise<Payment[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "728ed52f",
          amount: 100,
          status: "pending",
          email: "m@example.com",
          date: "2023-07-01",
          method: "credit_card",
          description: "Payment for subscription",
          transactionId: "TXN728ED52F",
        },
        {
          id: "489e1d42",
          amount: 125,
          status: "processing",
          email: "example@gmail.com",
          date: "2023-07-02",
          method: "paypal",
          description: "Payment for services",
          transactionId: "TXN489E1D42",
        },
      ]);
    }, 1000); // Simulate network delay
  });
}

export default function App() {
  const [data, setData] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData().then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10 mt-60">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
