export class LocationClass {
  key: string;
  name: string;
  source: {
    name: string;
    apiUrl: string;
    infoUrl: string;
  };

  constructor() {
    this.key = "";
    this.name = "";
    this.source.name = "";
    this.source.apiUrl = "";
    this.source.infoUrl = "";
  }
}
