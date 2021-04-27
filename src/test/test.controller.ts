import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  SetMetadata,
  UnauthorizedException,
  UseFilters,
} from '@nestjs/common';
import { ForbiddenException } from './forbidden.exception';
import { HttpExceptionFilter } from './http-exception.filter';
import { Roles } from './roles.decorator';
import { User } from './user.decotator';
@Controller('test')
export class TestController {
  @Post()
  @Roles('admin')
  async test() {
    throw new UnauthorizedException();
    return 'hello';
  }
  @Get()
  @SetMetadata('roles', ['admin'])
  @UseFilters(new HttpExceptionFilter())
  async create() {
    throw new ForbiddenException();
  }

  @Get()
  async findOne(@User() user: UserEntity) {
    console.log(user);
  }

}
