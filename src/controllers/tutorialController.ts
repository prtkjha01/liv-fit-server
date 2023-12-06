import { Request, Response } from "express";
import tutorialService from "../services/tutorial.service";
import { User } from "../interfaces/userInterface";
// Create Tutorial
export const createTutorial = (req: User, res: Response) => {
  return tutorialService.createTutorial(req, res);
};
//Fetch Tutorials
export const getTutorials = (req: User, res: Response) => {
  return tutorialService.getTutorials(req, res);
};
//Update Tutorial
export const updateTutorial = (req: User, res: Response) => {
  return tutorialService.updateTutorial(req, res);
};
//Delete Tutorial
export const deleteTutorial = (req: User, res: Response) => {
  return tutorialService.deleteTutorial(req, res);
};
