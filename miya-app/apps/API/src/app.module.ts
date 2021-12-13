import { Module } from '@nestjs/common';
import { RetrieversModule } from './retrievers/retrievers.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    RetrieversModule,
    MongooseModule.forRoot(
      'mongodb+srv://MiyaGolden:<password>@cluster0.5kcwy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
