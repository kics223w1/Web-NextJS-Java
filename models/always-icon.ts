class AlwaysIcon {
  public readonly idShoe: string;
  public readonly shoeName: string;
  public readonly image: string;

  constructor(idShoe: string, shoeName: string, image: string) {
    this.idShoe = idShoe;
    this.shoeName = shoeName;
    this.image = image;
  }

  public static fromJson(json: any): AlwaysIcon {
    return new AlwaysIcon(json.idShoe, json.shoeName, json.image);
  }
}

export default AlwaysIcon;
