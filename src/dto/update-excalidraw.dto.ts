import { PartialType } from '@nestjs/mapped-types';
import { CreateExcalidrawDto } from './create-excalidraw.dto';

export class UpdateStudentDto extends PartialType(CreateExcalidrawDto) {}