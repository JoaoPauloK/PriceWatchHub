import { PriceChart } from "../dashboard/PriceChart";

const mockData = [
  { date: "2024-01-01", price: 7899 },
  { date: "2024-01-05", price: 7799 },
  { date: "2024-01-10", price: 7699 },
  { date: "2024-01-15", price: 7599 },
  { date: "2024-01-20", price: 7499 },
  { date: "2024-01-25", price: 7399 },
  { date: "2024-01-30", price: 7299 },
];

export default function PriceChartExample() {
  return (
    <div className="p-8">
      <PriceChart data={mockData} targetPrice={7200} />
    </div>
  );
}
