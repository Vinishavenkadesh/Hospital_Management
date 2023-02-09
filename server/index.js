const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const port = 3000;

// Google sheet npm package
const { GoogleSpreadsheet } = require("google-spreadsheet");

// File handling package
const fs = require("fs");

// spreadsheet key is the long id in the sheets URL
const RESPONSES_SHEET_ID = "1Fuaa1vNyi6t8J_P0tA8KhnJeA-SEU5krB7yAPVpeeuY";

// Create a new document
const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);

// Credentials for the service account
const CREDENTIALS = JSON.parse(
  fs.readFileSync("hospital-management-dentist-6e3bf941b848.json")
);

app.get("/alldata", async (req, res) => {
  let allData = [];

  // use service account creds
  await doc.useServiceAccountAuth({
    client_email: CREDENTIALS.client_email,
    private_key: CREDENTIALS.private_key,
  });

  // load the documents info
  await doc.loadInfo();

  // Index of the sheet
  let sheet = doc.sheetsByIndex[0];

  // Get all the rows
  let rows = await sheet.getRows();

  for (let index = 0; index < rows.length; index++) {
    const row = rows[index];
    let map = {
      Id: row.Id,
      Name: row.Name,
      Age: row.Age,
      Gender: row.Gender,
      Date: row.Date,
      Temperature: row.Temperature,
      BloodPressure: row.BloodPressure,
      Disease: row.Disease,
      Treatment: row.Treatment,
    };
    allData.push(map);
  }
  res.send(allData);
});

app.post("/postdata", async (req, res) => {
  let row = req.body;

  // use service account creds
  await doc.useServiceAccountAuth({
    client_email: CREDENTIALS.client_email,
    private_key: CREDENTIALS.private_key,
  });

  await doc.loadInfo();

  // Index of the sheet
  let sheet = doc.sheetsByIndex[0];

  try {
    await sheet.addRow(row);
    res.send(row);
  } catch (error) {
    res.send("error");
  }
});

app.post("/deletedata", async (req, res) => {
  let value = req.body.value;
  console.log(value, "is going to be deleted");
  // use service account creds
  await doc.useServiceAccountAuth({
    client_email: CREDENTIALS.client_email,
    private_key: CREDENTIALS.private_key,
  });

  await doc.loadInfo();

  // Index of the sheet
  let sheet = doc.sheetsByIndex[0];

  let rows = await sheet.getRows();

  for (let index = 0; index < rows.length; index++) {
    const row = rows[index];
    if (row["Id"] === value) {
      try {
        await rows[index].delete();
        console.log(row.Id, "is deleted");

        let allData = [];
        for (let index = 0; index < rows.length; index++) {
          const row = rows[index];
          let map = {
            Id: row.Id,
            Name: row.Name,
            Age: row.Age,
            Gender: row.Gender,
            Date: row.Date,
            Temperature: row.Temperature,
            BloodPressure: row.BloodPressure,
            Disease: row.Disease,
            Treatment: row.Treatment,
          };
          allData.push(map);
        }
        allData.splice(index, 1);
        res.send(allData);
        // break;
      } catch (error) {
        console.log(error);
        res.send("error");
      }
    }
  }
});

// const updateRow = async (keyValue, oldValue, newValue) => {

//     // use service account creds
//     await doc.useServiceAccountAuth({
//         client_email: CREDENTIALS.client_email,
//         private_key: CREDENTIALS.private_key
//     });

//     await doc.loadInfo();

//     // Index of the sheet
//     let sheet = doc.sheetsByIndex[0];

//     let rows = await sheet.getRows();

//     for (let index = 0; index < rows.length; index++) {
//         const row = rows[index];
//         if (row[keyValue] === oldValue) {
//             rows[index][keyValue] = newValue;
//             await rows[index].save();
//             break;
//         }
//     };
// };

// updateRow('email', 'email@gmail.com', 'ramesh@ramesh.com')

// deleteRow('Id', 'ramesh@ramesh.com')

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
