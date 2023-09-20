let connection;

const handleUserInput = function (key, conn) {
  //special exit key
  if (key === "\u0003") {
    process.exit();
  }

  //check for movement keys and corresponding commands
  if (key === "w") {
    conn.write("Move: up");
  } else if (key === "a") {
    conn.write("Move: left");
  } else if (key === "s") {
    conn.write("Move: down");
  } else if (key === "d") {
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
