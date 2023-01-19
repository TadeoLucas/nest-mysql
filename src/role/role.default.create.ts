import { ACCES_TYPES } from "./dto/create-role.dto";
import { RoleController } from "./role.controller";


export const defaultCreateRoles = async () => {
  try {
    const rolesArray = await RoleController.prototype.findAll();

    if (rolesArray.length !== 0) return;

    const values = await Promise.all([
      RoleController.prototype.create({ access: ACCES_TYPES.SUDO }),
      RoleController.prototype.create({ access: ACCES_TYPES.ADMIN }),
      RoleController.prototype.create({ access: ACCES_TYPES.EDITOR }),
      RoleController.prototype.create({ access: ACCES_TYPES.USER }),
      RoleController.prototype.create({ access: ACCES_TYPES.VISITOR })
    ]);

    return console.log('defaultRoles: values :::::', values)

  } catch (error) {
    console.log("🚀 ~ file: role.default.create.ts:18 ~ defaultRoles ~ error", error)
    return
  }
}