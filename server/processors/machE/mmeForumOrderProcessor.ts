import { MmeForumOrder } from "../../models/machE/MmeForumOrder";
import axios, { AxiosResponse } from "axios";
import { DateTime } from "luxon";
import {
  EntryEntity,
  Sheet,
} from "../../models/GoogleSheets/GoogleSheetsInterfaces";

export const getMmeForumOrders = (): Promise<Array<MmeForumOrder>> => {
  return new Promise(async (resolve, reject) => {
    try {
      axios
        .get(
          "https://spreadsheets.google.com/feeds/cells/1lBgAEQVufjImIIq3wllYvqupRNTZD3wfSoiRZRrJlAg/1/public/full?alt=json"
        )
        .then((axiosResponse: AxiosResponse<Sheet>) => {
          const mmeForumOrders: MmeForumOrder[] = generateMmeForumOrders(
            axiosResponse.data.feed.entry
          );
          resolve(mmeForumOrders);
        });
    } catch (error) {
      reject(error);
    }
  });
};

const generateMmeForumOrders = (sheetEntries: Array<EntryEntity>) => {
  const mmeForumOrders: MmeForumOrder[] = [];

  const rows = generateSheetRows(sheetEntries);

  rows.forEach((rowEntries) => {
    mmeForumOrders.push(mapRowEntriesToOrder(rowEntries));
  });

  return mmeForumOrders;
};

const generateSheetRows = (
  sheetEntries: Array<EntryEntity>
): Map<number, EntryEntity[]> => {
  const rowMap: Map<number, EntryEntity[]> = new Map<number, EntryEntity[]>();

  sheetEntries.forEach((entry) => {
    if (parseInt(entry.gs$cell.row) >= 7) {
      const rowNumber = parseInt(entry.gs$cell.row);
      const rowEntries = rowMap.get(rowNumber) || [];
      rowEntries.push(entry);
      rowMap.set(rowNumber, rowEntries);
    }
  });

  return rowMap;
};

const mapRowEntriesToOrder = (rowEntries: EntryEntity[]): MmeForumOrder => {
  // @ts-ignore
  let mmeForumOrder: MmeForumOrder = {};

  rowEntries.forEach((entry) => {
    switch (entry.gs$cell.col) {
      case "2":
        mmeForumOrder.orderEntryNumber = parseInt(entry.gs$cell.inputValue);
        break;
      case "3":
        mmeForumOrder.mmeForumUsername = entry.gs$cell.inputValue;
        break;
      case "4":
        mmeForumOrder.orderNumber = entry.gs$cell.inputValue;
        break;
      case "5":
        mmeForumOrder.orderDate = buildDate(entry.gs$cell.inputValue);
        break;
      case "7":
        mmeForumOrder.estimatedBuildDate = buildDate(entry.gs$cell.inputValue);
        break;
      case "8":
        mmeForumOrder.actualBuildDate = buildDate(entry.gs$cell.inputValue);
        break;
      case "9":
        mmeForumOrder.estimatedDeliveryDate = buildDate(
          entry.gs$cell.inputValue
        );
        break;
      case "10":
        mmeForumOrder.actualDeliveryDate = buildDate(entry.gs$cell.inputValue);
        break;
      case "11":
        mmeForumOrder.vin = entry.gs$cell.inputValue;
        break;
      case "12":
        mmeForumOrder.vinReceived =
          entry.gs$cell.inputValue.toLocaleLowerCase() === "yes";
        break;
      case "13":
        mmeForumOrder.daysBetweenOrderAndBuild = parseInt(
          entry.gs$cell.inputValue
        );
        break;
      case "14":
        mmeForumOrder.daysBetweenOrderAndDelivery = parseInt(
          entry.gs$cell.inputValue
        );
        break;
      case "15":
        mmeForumOrder.daysBetweenBuildAndDelivery = parseInt(
          entry.gs$cell.inputValue
        );
        break;
      case "16":
        mmeForumOrder.location = entry.gs$cell.inputValue;
        break;
      case "17":
        mmeForumOrder.locationNonUS = entry.gs$cell.inputValue;
        break;
      case "18":
        mmeForumOrder.exteriorColor = entry.gs$cell.inputValue;
        break;
      case "19":
        mmeForumOrder.modelYear = entry.gs$cell.inputValue;
        break;
      case "20":
        mmeForumOrder.model = entry.gs$cell.inputValue;
        break;
      case "21":
        mmeForumOrder.driveTrain = entry.gs$cell.inputValue;
        break;
      case "22":
        mmeForumOrder.battery = entry.gs$cell.inputValue;
        break;
      default:
        break;
    }
  });

  return mmeForumOrder;
};

const buildDate = (dateString: string): Date => {
  const dateTime = DateTime.fromFormat(dateString, "M/d/yyyy");
  return dateTime.toJSDate();
};
