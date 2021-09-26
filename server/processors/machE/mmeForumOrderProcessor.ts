import { MmeForumOrder } from "../../models/machE/MmeForumOrder";
import { google, sheets_v4 } from "googleapis";
import { EntryEntity } from "../../models/GoogleSheets/GoogleSheetsInterfaces";

export const getMmeForumOrders = (): Promise<Array<MmeForumOrder>> => {
  const sheets = google.sheets("v4");
  const auth = new google.auth.GoogleAuth({
    scopes: [
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/spreadsheets.readonly",
    ],
  });

  return auth.getClient().then((authClient) => {
    google.options({ auth: authClient });

    const request: sheets_v4.Params$Resource$Spreadsheets$Values$Get = {
      spreadsheetId: "1lBgAEQVufjImIIq3wllYvqupRNTZD3wfSoiRZRrJlAg",
      range: "B7:V100000",
    };

    return sheets.spreadsheets.values.get(request).then((response) => {
      const mmeForumOrders: MmeForumOrder[] = [];

      response.data.values.forEach((row) => {
        if (row) {
          mmeForumOrders.push({
            orderEntryNumber: parseInt(row[0]),
            mmeForumUsername: row[1],
            orderNumber: row[2],
            orderDate: row[3],
            estimatedBuildDate: row[5],
            actualBuildDate: row[6],
            estimatedDeliveryDate: row[7],
            actualDeliveryDate: row[8],
            vin: row[9],
            vinReceived: row[10]
              ? row[10].toLocaleLowerCase() === "yes"
              : false,
            daysBetweenOrderAndBuild: parseInt(row[11]),
            daysBetweenOrderAndDelivery: parseInt(row[12]),
            daysBetweenBuildAndDelivery: parseInt(row[13]),
            location: row[14],
            locationNonUS: row[15],
            exteriorColor: row[16],
            modelYear: row[17],
            model: row[18],
            driveTrain: row[19],
            battery: row[20],
          });
        }
      });

      return mmeForumOrders;
    });
  });
};
