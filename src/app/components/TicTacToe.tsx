 'use client'
 import React, { useState } from 'react';

const TicTacToe: React.FC = () => {
  const initialBoard = Array(9).fill('');
  const [board, setBoard] = useState<string[]>(initialBoard);
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const handleClick = (index: number) => {
    if (calculateWinner(board) || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const resetBoard = () => {
    setBoard(initialBoard);
    setXIsNext(true);
  };

  const renderSquare = (index: number) => {
    return (
      <button
        className="w-14 h-14 text-3xl bg-white border border-gray-300 flex items-center justify-center focus:outline-none"
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </button>
    );
  };

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="flex flex-col items-center">
      <div className="font-semibold text-lg mb-4">{status}</div>
      <div className="grid grid-cols-3 gap-1">{[0, 1, 2].map((row) => [0, 1, 2].map((col) => renderSquare(row * 3 + col)))}</div>
      <button onClick={resetBoard} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">Reset</button>
    </div>
  );
};

function calculateWinner(board: string[]): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

export default TicTacToe;