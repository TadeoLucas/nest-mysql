
export type ACCES_TYPES = "SUDO" | "ADMIN" | "EDITOR" | "USER" | "VISITOR";

export class CreateRoleDto {
  access: ACCES_TYPES
}