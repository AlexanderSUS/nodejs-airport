import { Module } from '@nestjs/common';
import { TerminalsService } from './terminals.service';
import { TerminalsController } from './terminals.controller';
import { TerminalsRepository } from './terminals.repository';

@Module({
  controllers: [TerminalsController],
  providers: [TerminalsService, TerminalsRepository],
})
export class TerminalsModule {}
