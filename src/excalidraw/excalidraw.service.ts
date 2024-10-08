import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IFExcalidraw } from '../interface/excalidraw.interface';
import { CreateExcalidrawDto } from '../dto/create-excalidraw.dto';

@Injectable()
export class ExcalidrawService {

  constructor(
    @InjectModel('Excalidraw') private ExcalidrawModel: Model<IFExcalidraw>,
  ) {}

  async createExcalidraw(
    createExcalidrawDto: CreateExcalidrawDto,
  ): Promise<IFExcalidraw> {
    const newExcalidraw = await new this.ExcalidrawModel(createExcalidrawDto);
    return newExcalidraw.save();
  }
}
