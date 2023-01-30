import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Page A', 2020: 4000, 2021: 2400, 2022: 2400 },
  { name: 'Page B', 2020: 3000, 2021: 1398, 2022: 2210 },
  { name: 'Page C', 2020: 2000, 2021: 9800, 2022: 2290 },
  { name: 'Page D', 2020: 2780, 2021: 3908, 2022: 2000 },
  { name: 'Page E', 2020: 1890, 2021: 4800, 2022: 2181 },
  { name: 'Page F', 2020: 2390, 2021: 3800, 2022: 2500 },
  { name: 'Page G', 2020: 3490, 2021: 4300, 2022: 2100 },
];

const Example = () => {
  const [year, setYear] = useState(2020);

  const handleChange = (event) => {
    setYear(parseInt(event.target.value));
  };

  const filteredData = data.map((item) => ({
    name: item.name,
    [year]: item[year],
  }));

  return (
    <div>
      <select value={year} onChange={handleChange}>
        <option value={2020}>2020</option>
        <option value={2021}>2021</option>
        <option value={2022}>2022</option>
      </select>
      
      <LineChart
        width={500}
        height={300}
        data={filteredData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={year} stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
};

export default Example;
