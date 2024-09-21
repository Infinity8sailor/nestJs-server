import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { ExcalidrawService } from './excalidraw.service';
import { CreateExcalidrawDto } from '../dto/create-excalidraw.dto';

@Controller('excalidraw')
export class ExcalidrawController {
  constructor(private readonly excalidrawService: ExcalidrawService) {}

  @Post()
  async createStudent(
    @Res() response,
    @Body() createExcalidrawDto: CreateExcalidrawDto,
  ) {
    try {
      const newExcalidraw =
        await this.excalidrawService.createExcalidraw(createExcalidrawDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Excalidraw has been created successfully',
        newExcalidraw,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Excalidraw not created!',
        error: 'Bad Request',
      });
    }
  }
}
