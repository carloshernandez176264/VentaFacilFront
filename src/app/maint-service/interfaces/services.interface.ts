import { Description } from "./description.interface";
import { Frequency } from "./frequency.interface";
import { ID } from "./id.interface";
import { ItemCharacteristics } from "./itemCharacteristics.interface";
import { TypeService } from "./typeService.interface";
import { UnitMeasure } from "./unitMeasure.interface";



export interface Services{

  Id:ID;
  typeService: TypeService;
  description: Description;
  itemCharacteristics: ItemCharacteristics;
  frequency: Frequency;
  unitMeasure: UnitMeasure;

}
