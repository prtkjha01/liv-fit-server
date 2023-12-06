import { Request, Response } from "express";
import { User } from "../interfaces/userInterface";
import SleepModel from "../models/sleepModel";

const createSleepRecord = async (req: User, res: Response) => {
  const { userId } = req.user;
  try {
    const newSleepRecord = new SleepModel({ ...req.body, user: userId });
    await newSleepRecord.save();
    res.send({
      message: "Sleep Record created successfully!",
    });
  } catch (error: any) {
    res.send({
      statusCode: error.statusCode || 500,
      message: error.message || "Something went wrong!",
    });
  }
};
const getSleepRecord = async (req: User, res: Response) => {
  const { userId } = req.user;
  try {
    const sleepRecord = await SleepModel.find(
      {
        user: userId,
        is_deleted: false,
      },
      { updated_at: 0 }
    );
    if (!sleepRecord) {
      throw new Error("No Sleep Record found!");
    } else {
      res.send(sleepRecord);
    }
  } catch (error: any) {
    res.send({
      statusCode: error.statusCode || 500,
      message: error.message || "Something went wrong!",
    });
  }
};
const updateSleepRecord = async (req: User, res: Response) => {
  const { userId } = req.user;
  try {
    const sleepRecord = await SleepModel.findOneAndUpdate(
      { user: userId },
      { $set: { ...req.body } },
      { new: true }
    );
    if (!sleepRecord) {
      throw new Error("No Sleep Record found!");
    } else {
      res.send(sleepRecord);
    }
  } catch (error: any) {
    res.send({
      statusCode: error.statusCode || 500,
      message: error.message || "Something went wrong!",
    });
  }
};
const deleteSleepRecord = async (req: User, res: Response) => {
  const id = req.params.id;
  try {
    const sleepRecord = await SleepModel.findOneAndUpdate(
      { _id: id },
      { $set: { is_deleted: true } },
      { new: true }
    );
    if (!sleepRecord) {
      throw new Error("No Sleep Record found!");
    } else {
      res.send(sleepRecord);
    }
  } catch (error: any) {
    res.send({
      statusCode: error.statusCode || 500,
      message: error.message || "Something went wrong!",
    });
  }
};

export default {
  createSleepRecord,
  getSleepRecord,
  updateSleepRecord,
  deleteSleepRecord,
};
