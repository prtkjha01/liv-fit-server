import { Request, Response } from "express";
import { User } from "../interfaces/userInterface";
import TutorialModel from "../models/tutorialModel";
import ExerciseModel from "../models/exerciseModel";
const createTutorial = async (req: User, res: Response) => {
  try {
    const tutorial = new TutorialModel({ ...req.body });
    await tutorial.save();
    res.send({
      message: "Tutorial created successfully!",
    });
  } catch (error: any) {
    res.send({
      statusCode: error.statusCode || 500,
      message: error.message || "Something went wrong!",
    });
  }
};

const getTutorials = async (req: User, res: Response) => {
  try {
    const tutorials = await TutorialModel.find({
      is_deleted: false,
    })
      .populate({
        path: "exercise",
        model: ExerciseModel,
        select: "-updated_at -created_at -is_deleted",
      })
      .select("-updated_at -created_at -is_deleted");

    if (!tutorials) {
      throw new Error("No stats found!");
    } else {
      res.send(tutorials);
    }
  } catch (error: any) {
    res.send({
      statusCode: error.statusCode || 500,
      message: error.message || "Something went wrong!",
    });
  }
};

const updateTutorial = async (req: User, res: Response) => {
  const { userId } = req.user;
  try {
    const stepsRecord = await TutorialModel.findOneAndUpdate(
      { user: userId },
      { $set: { ...req.body } },
      { new: true }
    );
    if (!stepsRecord) {
      throw new Error("No Steps Record found!");
    } else {
      res.send(stepsRecord);
    }
  } catch (error: any) {
    res.send({
      statusCode: error.statusCode || 500,
      message: error.message || "Something went wrong!",
    });
  }
};

const deleteTutorial = async (req: User, res: Response) => {
  const id = req.params.id;
  try {
    const stepsRecord = await TutorialModel.findOneAndUpdate(
      { _id: id },
      { $set: { is_deleted: true } },
      { new: true }
    );
    if (!stepsRecord) {
      throw new Error("No Steps Record found!");
    } else {
      res.send(stepsRecord);
    }
  } catch (error: any) {
    res.send({
      statusCode: error.statusCode || 500,
      message: error.message || "Something went wrong!",
    });
  }
};

export default {
  createTutorial,
  getTutorials,
  updateTutorial,
  deleteTutorial,
};
