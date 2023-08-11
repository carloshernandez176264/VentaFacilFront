import { Id } from "./Id.interface";
import { Brand } from "./brand.interface";
import { Code } from "./code.interface";
import { DateRegistry } from "./dateRegistry.interface";
import { Description } from "./description.interface";
import { Model } from "./model.interface";
import { Name } from "./name.interface";
import { Photo } from "./photo.interface";
import { Price } from "./price.interface";
import { Quantity } from "./quantity.interface";
import { Stock } from "./stock.interface";

export interface Product {
  id: Id;
  name: Name;
  price: Price;
  brand: Brand;
  model: Model;
  code: Code;
  description: Description;
  dateRegistry: DateRegistry;
  stock: Stock;
  photo: Photo;
  quantity: Quantity;
}
