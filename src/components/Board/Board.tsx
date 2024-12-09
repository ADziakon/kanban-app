import React from 'react';
import { Column } from '../Column/Column';

const Board: React.FC = () => {
  return (
    <div className="board-container">
      <h1 className="board-title">Kanban Board</h1>
      <div className="columns-container">
        <Column title="To Do" />
        <Column title="In Progress" />
        <Column title="Done" />
      </div>
    </div>
  );
};

export default Board;