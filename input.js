let connection;

const handleUserInput = function (key, conn) {
  if (key === "\u0003") {
    process.exit();
  }

  if (key === "w") {
    conn.write("Move: up");
  } else if (key === "a") {
    conn.write("Move: left");
  } else if (key === "s") {
    conn.write("Move: down");
  } else if (key === "d") {
    conn.write("Move: right");
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
