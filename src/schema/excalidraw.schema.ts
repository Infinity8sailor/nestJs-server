import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// export interface DynamicObject {
//   [key: string]: Object;
// }

@Schema()
export class Excalidraw {
  @Prop({ type: String })
  name: string;

  @Prop({ type: Object })
  scene: object;
}
export const ExcalidrawSchema = SchemaFactory.createForClass(Excalidraw);
