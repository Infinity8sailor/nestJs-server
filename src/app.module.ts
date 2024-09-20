import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ExcalidrawSchema } from './schema/excalidraw.schema';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ExcalidrawService } from './excalidraw/excalidraw.service';
import { ExcalidrawController } from './excalidraw/excalidraw.controller';
import configuration from './config/configuration';

// Loading the Envirement variables
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      load: [configuration],
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_DB_URI'), 
      }),
      inject: [ConfigService],
    }),
    // MongooseModule.forRoot('mongodb://localhost:27017/', {
    //   dbName: 'excalidraw',
    // }),
    MongooseModule.forFeature([
      { name: 'Excalidraw', schema: ExcalidrawSchema },
    ]),
  ],
  controllers: [AppController, ExcalidrawController],
  providers: [AppService, ExcalidrawService],
})
export class AppModule {}
