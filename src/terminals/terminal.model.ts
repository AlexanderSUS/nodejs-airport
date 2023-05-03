import { Expose } from 'class-transformer';

export class TerminalModel {
  id: string;
  name: string;

  @Expose({ name: 'airport_id' })
  airportId: string;
}
