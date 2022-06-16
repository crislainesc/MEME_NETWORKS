const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const { searchUrl, createUrl, showUrl } = require("@urls");
const { fetchApiRequestNoBody, fetchApiRequestWithBody } = require("@services");

app.get("/", (res: any) => {
  res.status(200).send({ message: "Meme Networks" });
});

io.on("connection", (socket: any) => {
  console.log("new user connected");

  socket.on("request", async (data: any) => {
    switch (data.requestId) {
      case 1:
        if (data.operation && data.key) {
          const response = await fetchApiRequestNoBody(
            `${searchUrl}/${data.key}.json`
          );

          if (response.error) {
            socket.emit("searchWithKey", {
              requestId: 1,
              status: "not found",
              response: "Not possible search the image",
            });
          }

          socket.emit("searchWithKey", {
            requestId: 1,
            status: "ok",
            response: response,
          });
        } else {
          socket.emit("searchWithKey", {
            requestId: 1,
            status: "missing parameters",
            response: "Request parameters are not complete",
          });
        }
        break;

      case 2:
        if (data.operation) {
          const response = await fetchApiRequestNoBody(`${searchUrl}.json`);

          if (response.error) {
            socket.emit("search", {
              requestId: 2,
              status: "not found",
              response: "Not possible search the images",
            });
          }

          socket.emit("search", {
            requestId: 2,
            status: "ok",
            response: response,
          });
        } else {
          socket.emit("search", {
            requestId: 2,
            status: "missing parameters",
            response: "Request parameters are not complete",
          });
        }
        break;

      case 3:
        if (data.operation && data.key && data.body) {
          const response = await fetchApiRequestWithBody(
            `${createUrl}/${data.key}.json`,
            data.body
          );

          if (response.error) {
            socket.emit("create", {
              requestId: 3,
              status: "not saved",
              response: "Not possible saved the image",
            });
          }

          socket.emit("create", {
            requestId: 3,
            status: "ok",
            response: response,
          });
        } else {
          socket.emit("create", {
            requestId: 3,
            status: "missing parameters",
            response: "Request parameters are not complete",
          });
        }
        break;

      case 4:
        if (data.operation && data.key) {
          const response = await fetchApiRequestNoBody(
            `${showUrl}/${data.key}.json`
          );

          if (response.error) {
            socket.emit("showWithKey", {
              requestId: 4,
              status: "not found",
              response: "Not possible search the image",
            });
          }

          socket.emit("showWithKey", {
            requestId: 4,
            status: "ok",
            response: response,
          });
        } else {
          socket.emit("showWithKey", {
            requestId: 4,
            status: "missing parameters",
            response: "Request parameters are not complete",
          });
        }
        break;

      case 5:
        if (data.operation) {
          const response = await fetchApiRequestNoBody(`${showUrl}.json`);

          if (response.error) {
            socket.emit("showWithKey", {
              requestId: 4,
              status: "not found",
              response: "Not possible search the images",
            });
          }

          socket.emit("show", {
            requestId: 5,
            status: "ok",
            response: response,
          });
        } else {
          socket.emit("show", {
            requestId: 5,
            status: "missing parameters",
            response: "Request parameters are not complete",
          });
        }
        break;

      default:
        socket.emit("request", {
          requestId: data.requestId,
          status: "invalid request",
          response: "This is a invalid request",
        });
        break;
    }
  });

  socket.on("disconnect", () => {
    console.log("user disconnect");
  });
});

server.prependListener("request", (req: any, res: any) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
});

server.listen(4000, () => {
  console.log("listening server on *:4000");
});
