import { IsEnum } from "class-validator";

export enum ACCES_TYPES {
  SUDO = "SUDO",
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
  USER = "USER",
  VISITOR = "VISITOR"
} ;

export class CreateRoleDto {
  @IsEnum(ACCES_TYPES)
  access: ACCES_TYPES
}