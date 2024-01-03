{
  type Commands = 'up' | 'down' | 'left' | 'right';
  type Position = { x: number; y: number };

  let position: Position = { x: 0, y: 0 };
  let updatedPosition: Position;

  function move(command: Commands) {
    switch (command) {
      case 'up':
        updatedPosition = { ...position, y: position.y + 1 };
        position = updatedPosition;
        console.log(position);
        break;
      case 'down':
        updatedPosition = { ...position, y: position.y - 1 };
        position = updatedPosition;
        console.log(position);
        break;
      case 'left':
        updatedPosition = { ...position, x: position.x - 1 };
        position = updatedPosition;
        console.log(position);
        break;
      case 'right':
        updatedPosition = { ...position, x: position.x + 1 };
        position = updatedPosition;
        console.log(position);
        break;
      default:
        const _exhuastiveCheck: never = command;
        throw new Error(`Invalid command : ${command}`);
    }
  }
  move('up');
  move('right');
  move('up');
  move('right');
  move('right');
  move('down');
  move('left');
}
