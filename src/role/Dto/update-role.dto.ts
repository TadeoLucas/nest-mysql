import { PartialType } from '@nestjs/swagger';
import { IsEnum, IsUUID } from 'class-validator';
import { ACCES_TYPES, CreateRoleDto } from './create-role.dto';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
  @IsUUID()
  id: string;

  @IsEnum(ACCES_TYPES)
  access: ACCES_TYPES
}
