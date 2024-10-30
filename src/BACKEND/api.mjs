import tablerData from "./schema.mjs";

const tableInfo = tablerData();

const api = (app) => {
  // create a table data
  app.post("/", async (req, res) => {
    try {
      console.log("reqBody", req.body);
      const response = await tableInfo.create(req.body);
      res.send(response);
      console.log("response", response);
    } catch (error) {
      console.error("error", error);
      res.send(JSON.stringify("data is not created"));
    }
  });
  // display a created data
  app.get("/", async (req, res) => {
    try {
      const response = await tableInfo.find();
      res.send(response);
      console.log("response", response);
    } catch (error) {
      console.error("error", error);
      res.send(
        JSON.stringify({
          message: error,
        })
      );
    }
  });
  // update a created data
  app.put("/", async (req, res) => {
    try {
      console.log("reqBody", req.body);
      const response = await tableInfo.updateMany(req.body);
      res.send(response);
      console.log("response", response);
    } catch (error) {
      console.error("error", error);
      res.send(
        JSON.stringify({
          message: error,
        })
      );
    }
  });
  // update a particular a value in created value
  app.patch("/", async (req, res) => {
    try {
      const response = await tableInfo.updateOne(req.body);
      res.send(response);
      console.log("response", response);
    } catch (error) {
      console.error("error", error);
      res.send(
        JSON.stringify({
          message: error,
        })
      );
    }
  });
  // delete a created a data
  app.delete("/", async (req, res) => {
    try {
      console.log("reqBody", req.body);
      const response = await tableInfo.deleteOne(req.body);
      res.send(response);
    } catch (error) {
      console.error("error", error);
      res.send(
        JSON.stringify({
          message: error,
        })
      );
    }
  });
};

export default api;
