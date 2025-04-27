"use client"

import React, { useState } from "react";
import { X, Circle } from "lucide-react";

const squareColors = [
  "bg-soft-purple", "bg-soft-pink", "bg-soft-blue",
  "bg-soft-yellow", "bg-soft-green", "bg-soft-orange",
  "bg-soft-peach", "bg-soft-gray", "bg-vivid-purple"
];

const PLAYER_X = "X";
const PLAYER_O = "O";
const EMPTY = null;

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function calculateWinner(squares: (string | null)[]): number[] | null {
  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return combo;
    }
  }
  return null;
}

function isBoardFull(squares: (string | null)[]) {
  return squares.every(square => square !== EMPTY);
}

export default function TicTacToe() {
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(EMPTY));
  const [xIsNext, setXIsNext] = useState(true);

  const winnerCombo = calculateWinner(squares);
  const winner = winnerCombo ? squares[winnerCombo[0]] : null;
  const isDraw = !winner && isBoardFull(squares);

  function handleSquare(idx: number) {
    if (squares[idx] !== EMPTY || winner) return;
    const next = squares.slice();
    next[idx] = xIsNext ? PLAYER_X : PLAYER_O;
    setSquares(next);
    setXIsNext(!xIsNext);
  }

  function handleReset() {
    setSquares(Array(9).fill(EMPTY));
    setXIsNext(true);
  }

  function renderSquare(idx: number) {
    const value = squares[idx];
    const isWinning = winnerCombo?.includes(idx);
    let color =
      isWinning
        ? "bg-emerald-200 border-emerald-500"
        : "bg-white hover:bg-violet-100 border-vivid-purple";
    return (
      <button
        key={idx}
        className={`w-20 h-20 md:w-24 md:h-24 border-2 ${color} flex items-center justify-center text-[2.3rem] md:text-5xl font-bold rounded-lg transition-colors duration-200 select-none focus:outline-none disabled:opacity-60`}
        onClick={() => handleSquare(idx)}
        disabled={!!value || !!winner}
        aria-label={`Cell ${idx + 1}: ${value || "empty"}`}
      >
        {value === PLAYER_X && <X color="#8B5CF6" strokeWidth={2.3} size={46} />}
        {value === PLAYER_O && <Circle color="#F97316" strokeWidth={2.3} size={42} />}
      </button>
    );
  }

  let status;
  if (winner) {
    status = (
      <div className="text-2xl font-bold text-vivid-purple mb-2">
        {winner === PLAYER_X && (
          <>
            <span className="inline-block align-middle"><X color="#8B5CF6" /> </span>
            <span> wins!</span>
          </>
        )}
        {winner === PLAYER_O && (
          <>
            <span className="inline-block align-middle"><Circle color="#F97316" /> </span>
            <span> wins!</span>
          </>
        )}
      </div>
    );
  } else if (isDraw) {
    status = (
      <div className="text-2xl font-bold text-sky-500 mb-2">
        🤝 It's a draw!
      </div>
    );
  } else {
    status = (
      <div className="text-lg text-gray-500 mb-2">
        Next:{" "}
        {xIsNext ? (
          <span className="inline-flex items-center text-vivid-purple font-semibold"><X color="#8B5CF6" /> X</span>
        ) : (
          <span className="inline-flex items-center text-orange-400 font-semibold"><Circle color="#F97316" /> O</span>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 items-center py-6 px-2 md:px-0 w-full">
      <h2 className="text-3xl font-extrabold text-dark-purple mb-1 tracking-wide"></h2>
      {status}
      <div className="grid grid-cols-3 gap-3 w-[260px] h-[260px] md:w-[310px] md:h-[310px] bg-gradient-to-tr from-soft-purple to-soft-blue p-3 rounded-2xl border-4 border-soft-purple shadow-xl">
        {Array(9)
          .fill(0)
          .map((_, idx) => renderSquare(idx))}
      </div>
      <button
        onClick={handleReset}
        className="mt-3 px-5 py-2 bg-vivid-purple border text-white rounded-lg font-semibold shadow hover:bg-purple-700 transition-colors"
        aria-label="Restart game"
      >
        Restart
      </button>
      
    </div>
  );
}