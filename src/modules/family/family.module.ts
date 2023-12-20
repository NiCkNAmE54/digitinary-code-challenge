import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { FamilyService } from "./family.service";
import { FamilyController } from "./family.controller";
import { Family } from "src/database/entities/Family";

@Module({
  imports: [
    TypeOrmModule.forFeature([
        Family
    ])
  ],
  controllers: [FamilyController],
  providers: [FamilyService],
})
export class FamilyModule {}
