"use client";

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  // Exemplo de dados, substitua pelos dados reais
  { date: '2023-07-01', hackRecovery: 4000, distributions: 2400 },
  { date: '2023-07-02', hackRecovery: 3000, distributions: 1398 },
  { date: '2023-07-03', hackRecovery: 2000, distributions: 9800 },
  { date: '2023-07-04', hackRecovery: 2780, distributions: 3908 },
  { date: '2023-07-05', hackRecovery: 1890, distributions: 4800 },
  { date: '2023-07-06', hackRecovery: 2390, distributions: 3800 },
  { date: '2023-07-07', hackRecovery: 3490, distributions: 4300 },
];

const TreasuryOutflowsChart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="hackRecovery" stroke="#8884d8" />
      <Line type="monotone" dataKey="distributions" stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>
);

export default TreasuryOutflowsChart;
