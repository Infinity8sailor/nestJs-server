import { Document } from 'mongoose';
export interface IFExcalidraw extends Document{
    readonly name: string;
    readonly scene: object;
}