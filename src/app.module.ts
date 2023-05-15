import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configModuleOptions } from './config/config-module-options.config';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';
import { databaseModuleOptions } from './config/database-module-options';
import { AircraftModule } from './aircraft/aircraft.module';
import { PersonsModule } from './persons/persons.module';
import { DocumentModule } from './document/document.module';
import { AirportsModule } from './airports/airports.module';
import { TerminalsModule } from './terminals/terminals.module';
import { GatesModule } from './gates/gates.module';
import { FlightsModule } from './flights/flights.module';
import { FlightDocumentsModule } from './flight-documents/flight-documents.module';
import { FlightsSearchModule } from './flights-search/flights-search.module';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    AuthModule,
    DatabaseModule.forRootAsync(databaseModuleOptions),
    EmployeesModule,
    AircraftModule,
    PersonsModule,
    DocumentModule,
    AirportsModule,
    TerminalsModule,
    GatesModule,
    FlightsModule,
    FlightDocumentsModule,
    FlightsSearchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
