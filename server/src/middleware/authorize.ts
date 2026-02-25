import { Response, NextFunction } from "express";
import { AuthRequest } from "./authenticate";
import { AppError } from "./errorHandler";
import { type RoleType } from "../constants/roles";

export function authorize(...allowedRoles: RoleType[]) {
  return (req: AuthRequest, _res: Response, next: NextFunction): void => {
    if (!req.user) {
      next(new AppError(401, "Authentication required", "UNAUTHORIZED"));
      return;
    }
    if (!allowedRoles.includes(req.user.roleType as RoleType)) {
      next(new AppError(403, "Forbidden", "FORBIDDEN"));
      return;
    }
    next();
  };
}
