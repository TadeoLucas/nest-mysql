import { IsString, IsEmail, IsEnum, IsUUID, Matches } from "class-validator";

// export class CreateUserDto {
//   username: string
//   name: string
//   password: string
//   email: string
// }

export enum STATUS_TYPES {
  PENDING = "PENDING",
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE"
};


export class CreateUserDto {
  @IsString()
  @Matches('^[a-zñA-ZÑ0-9_-]{3,20}$', 'i')
  account_name: string | undefined;

  @IsString()
  @Matches("^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$")
  firstName: string | undefined;

  @IsString()
  @Matches("^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$")
  lastName: string | undefined;

  @IsString()
  password: string;

  @IsEmail()
  email: string;

  @IsEnum(STATUS_TYPES)
  status: STATUS_TYPES;

  @IsUUID()
  userId?: string | undefined;
}