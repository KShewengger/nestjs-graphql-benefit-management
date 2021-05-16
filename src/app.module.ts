import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { TypeOrmProviderModule } from '@providers/typeorm/typeorm.module';
import { CompaniesModule } from '@companies/companies.module';
import { EmployeesModule } from '@employees/employees.module';
import { PartnersModule } from '@partners/partners.module';
import { VouchersModule } from '@vouchers/vouchers.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    TypeOrmProviderModule,
    CompaniesModule,
    EmployeesModule,
    PartnersModule,
    VouchersModule
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {}
