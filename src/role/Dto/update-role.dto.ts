import { PartialType } from '@nestjs/swagger';
import { ACCES_TYPES, CreateRoleDto } from './create-role.dto';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {}

export interface RoleI {
  id: string;
  access: ACCES_TYPES
}
