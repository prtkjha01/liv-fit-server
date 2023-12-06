import { Request, Response } from "express";
import { User } from "../interfaces/userInterface";
import StepsModel from "../models/stepsModel";

const createStepsRecord = async (req: User, res: Response) => {
  const { userId } = req.user;
  try {
    const newStepsRecord = new StepsModel({ ...req.body, user: userId });
    await newStepsRecord.save();
    res.send({
      message: "Steps Record created successfully!",
    });
  } catch (error: any) {
    res.send({
      statusCode: error.statusCode || 500,
      message: error.message || "Something went wrong!",
    });
  }
};

const getStepsRecord = async (req: User, res: Response) => {
  const { userId } = req.user;
  console.log(new Date(new Date().setDate(new Date().getDate() - 1)));

  try {
    const stepsRecord = await StepsModel.find(
      {
        user: userId,
        is_deleted: false,
        // count: { $gte: 10000 },
        created_at: {
          $gt: new Date(new Date().setDate(new Date().getDate() - 1)),
        },
      },
      { updated_at: 0 }
      // { sort: { created_at: -1 } }
    );
    if (!stepsRecord) {
      throw new Error("No stats found!");
    } else {
      res.send(stepsRecord[stepsRecord.length - 1]);
    }
  } catch (error: any) {
    res.send({
      statusCode: error.statusCode || 500,
      message: error.message || "Something went wrong!",
    });
  }
};

const updateStepsRecord = async (req: User, res: Response) => {
  const { userId } = req.user;
  try {
    const stepsRecord = await StepsModel.findOneAndUpdate(
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

const deleteStepsRecord = async (req: User, res: Response) => {
  const id = req.params.id;
  try {
    const stepsRecord = await StepsModel.findOneAndUpdate(
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
  createStepsRecord,
  getStepsRecord,
  updateStepsRecord,
  deleteStepsRecord,
};
