import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';

import { ApiConfigService } from './services/api-config.service';
import { GeneratorService } from './services/generator.service';
import { ValidatorService } from './services/validator.service';

const providers = [
  ApiConfigService,
  ValidatorService,
  GeneratorService
];

@Global()
@Module({
  providers,
  imports: [HttpModule],
  exports: [...providers, HttpModule]
})
export class SharedModule {}
