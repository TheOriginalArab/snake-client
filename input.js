const {
  MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  MOVE_LEFT_KEY,
  EXIT,
} = require("./constants");
let connection;

const handleUserInput = function (key, conn) {
  //special exit key
  if (key === EXIT) {
    process.exit();
  }

  //check for movement keys and corresponding commands
  if (key === MOVE_UP_KEY) {
    conn.write("Move: up");
  } else if (key === MOVE_LEFT_KEY) {
    conn.write("Move: left");
  } else if (key === MOVE_DOWN_KEY) {
    conn.write("Move: down");
  } else if (key === MOVE_RIGHT_KEY) {
    conn.write("Move: right");
  }

  //Implement special keys for canned messages
  if (key === "1") {
    conn.write("Say: Greetings!");
  } else if (key === "2") {
    conn.write("Say: Let's Slither!");
  }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => handleUserInput(key, conn));
  return stdin;
};

module.exports = {
  setupInput,
};
