import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

function IncomeChart({ transactions }) {
  const totals = transactions
    .filter(t => t.type === "income")
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  const data = Object.entries(totals).map(([name, value]) => ({ name, value }));

  return (
    <div className="expense-chart">
      <h2>Income by Category</h2>
      {data.length === 0 ? (
        <p>No income to chart</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={v => `$${v}`} />
            <Bar dataKey="value" fill="#59a14f" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default IncomeChart
