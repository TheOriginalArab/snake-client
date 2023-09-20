const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //Add a connect event listener
  conn.on("connect", () => {
    console.log("Successfully connected to server!");
    conn.write("Name: PH");
  });

  //Add a data event listener
  conn.on("data", (data) => {
    console.log("Server Says: ", data);
  });

  return conn;
};

module.exports = connect;
