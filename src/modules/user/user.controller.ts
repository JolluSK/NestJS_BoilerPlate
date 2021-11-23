import {
  Controller, Get,
  HttpCode,
  HttpStatus,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { UserDto } from './dto/user.dto';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(
    private userService: UserService,
  ) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get users list',
  })
  getUsers(): Promise<any> {
    return this.userService.getAll();
  }
}
