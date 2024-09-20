import { IsNotEmpty, IsObject, IsString, MaxLength } from "class-validator";
export class CreateExcalidrawDto {

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;

    @IsObject()
    readonly scene: object;

}