import { Request, Response } from "express";
import waterService from "../services/water.service";
import { User } from "../interfaces/userInterface";
// Create User Water Record
export const createWaterRecord = (req: User, res: Response) => {
  return waterService.createWaterRecord(req, res);
};
//Fetch User Water Record
export const getWaterRecord = (req: User, res: Response) => {
  return waterService.getWaterRecord(req, res);
};
//Update User Water Record
export const updateWaterRecord = (req: User, res: Response) => {
  return waterService.updateWaterRecord(req, res);
};
//Delete User Water Record
export const deleteWaterRecord = (req: User, res: Response) => {
  return waterService.deleteWaterRecord(req, res);
};
