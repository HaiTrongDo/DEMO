import { Module } from '@nestjs/common';
import { Application } from './application.gateway';

@Module({ imports: [Application] })
export class GatewayModule {}
