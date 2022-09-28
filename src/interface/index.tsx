export interface IHrefandtitle {
  href: string;
  title: string;
}

export interface ICatalog {
  catalog: any;
  urlSelf: string;
  child: IHrefandtitle[];
  items: IHrefandtitle[];
  breadcrumb: IHrefandtitle[];
  type:
    | "Collection"
    | "Catalog"
    | "Item"
    | "ItemDetail"
    | "Assets"
    | "Links"
    | "Thumbnail";
  type_detail: "preview" | "thumbnail" | "assets";
}
