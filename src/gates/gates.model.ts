import { Expose } from 'class-transformer';

export class GatesModel {
  id: string;
  number: string;

  @Expose({ name: 'terminal_id' })
  terminalId: string;

  @Expose({ name: 'airport_id' })
  airportId: string;
}
