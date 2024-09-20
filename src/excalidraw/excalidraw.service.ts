import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateExcalidrawDto } from 'src/dto/create-excalidraw.dto';
import { IFExcalidraw } from 'src/interface/excalidraw.interface';

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
