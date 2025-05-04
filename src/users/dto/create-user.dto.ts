import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Fábio Moura dos Santos' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'fabio@empresa.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'senha123' })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'gerente', required: false })
  @IsString()
  role?: string;
}
