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
            estimatedBuildDate: row[4],
            actualBuildDate: row[5],
            estimatedDeliveryDate: row[6],
            actualDeliveryDate: row[7],
            vin: row[8],
            vinReceived: row[9].toLocaleLowerCase() === "yes",
            daysBetweenOrderAndBuild: parseInt(row[10]),
            daysBetweenOrderAndDelivery: parseInt(row[11]),
            daysBetweenBuildAndDelivery: parseInt(row[12]),
            location: row[13],
            locationNonUS: row[14],
            exteriorColor: row[15],
            modelYear: row[16],
            model: row[17],
            driveTrain: row[18],
            battery: row[19],
          });
        }
      });

      return mmeForumOrders;
    });
  });
};
