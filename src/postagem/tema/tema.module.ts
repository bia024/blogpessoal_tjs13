import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([Tema])],
    controllers: [TemaController],
    providers: [TemaService],
    exports: [TemaService],
})
export class TemaModule {}