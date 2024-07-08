"use client";

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  // Exemplo de dados, substitua pelos dados reais
  { date: '2023-07-01', breeding: 4000, minting: 2400, marketplace: 2400 },
  { date: '2023-07-02', breeding: 3000, minting: 1398, marketplace: 2210 },
  { date: '2023-07-03', breeding: 2000, minting: 9800, marketplace: 2290 },
  { date: '2023-07-04', breeding: 2780, minting: 3908, marketplace: 2000 },
  { date: '2023-07-05', breeding: 1890, minting: 4800, marketplace: 2181 },
  { date: '2023-07-06', breeding: 2390, minting: 3800, marketplace: 2500 },
  { date: '2023-07-07', breeding: 3490, minting: 4300, marketplace: 2100 },
];

const TreasuryInflowsChart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="breeding" stroke="#8884d8" />
      <Line type="monotone" dataKey="minting" stroke="#82ca9d" />
      <Line type="monotone" dataKey="marketplace" stroke="#ffc658" />
    </LineChart>
  </ResponsiveContainer>
);

export default TreasuryInflowsChart;
