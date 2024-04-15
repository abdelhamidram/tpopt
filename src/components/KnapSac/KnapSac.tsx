"use client";
import React, { useState } from 'react';
import Form from './Form';
import knapsackSolver from './knapsackSolver';

const Knapsack = () => {
  const [weights, setWeights] = useState<string[]>(['', '']);
  const [prices, setPrices] = useState<string[]>(['', '']);
  const [maxWeight, setMaxWeight] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (weights.some(w => w.trim() === '') || prices.some(p => p.trim() === '') || maxWeight.trim() === '') {
      alert('يرجى ملء جميع الحقول قبل التقديم');
      return;
    }
    if (weights.length < 2 || prices.length < 2) {
      alert('يرجى إدخال على الأقل عنصرين للأوزان والأسعار');
      return;
    }
    if (
      weights.some(w => parseFloat(w) <= 0) ||
      prices.some(p => parseFloat(p) <= 0) ||
      parseFloat(maxWeight) <= 0
    ) {
      alert('يرجى إدخال قيم صحيحة ومنطقية (weights و prices و maxWeight أكبر من 0)');
      return;
    }

    const weightsArray = weights.map(Number);
    const pricesArray = prices.map(Number);
    const maxWeightInt = parseFloat(maxWeight);
    const { selectedWeights, totalWeight, totalPrice } = knapsackSolver(pricesArray, weightsArray, maxWeightInt);
    setResult(`Selected weights: ${selectedWeights.join(', ')}. Total weight: ${totalWeight}. Total price: ${totalPrice}`);
  };

  const handleAddItem = () => {
    setWeights([...weights, '']);
    setPrices([...prices, '']);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Knapsack Problem Solver</h1>
      <div className="bg-gray-100 p-6 rounded-md mb-6">
        <Form
          weights={weights}
          prices={prices}
          maxWeight={maxWeight}
          setWeights={setWeights}
          setPrices={setPrices}
          setMaxWeight={setMaxWeight}
          handleAddItem={handleAddItem}
          handleSubmit={handleSubmit}
        />
      </div>
      {result && (
        <div className="bg-gray-100 p-6 rounded-md">
          <div className="font-semibold text-blue-800">{result}</div>
        </div>
      )}
    </div>
  );
};

export default Knapsack;