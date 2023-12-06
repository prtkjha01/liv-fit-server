import { Request, Response } from "express";
import { User } from "../interfaces/userInterface";
import WaterModel from "../models/waterModel";

const createWaterRecord = async (req: User, res: Response) => {
  const { userId } = req.user;
  try {
    const newWaterRecord = new WaterModel({ ...req.body, user: userId });
    await newWaterRecord.save();
    res.send({
      message: "Water Record created successfully!",
    });
  } catch (error: any) {
    res.send({
      statusCode: error.statusCode || 500,
      message: error.message || "Something went wrong!",
    });
  }
};

const getWaterRecord = async (req: User, res: Response) => {
  const { userId } = req.user;
  try {
    const waterRecord = await WaterModel.findOne(
      {
        user: userId,
        is_deleted: false,
      },
      { updated_at: 0 }
    );
    if (!waterRecord) {
      throw new Error("No Water Record found!");
    } else {
      res.send(waterRecord);
    }
  } catch (error: any) {
    res.send({
      statusCode: error.statusCode || 500,
      message: error.message || "Something went wrong!",
    });
  }
};

const updateWaterRecord = async (req: User, res: Response) => {
  const { userId } = req.user;
  try {
    const waterRecord = await WaterModel.findOneAndUpdate(
      { user: userId },
      { $set: { ...req.body } },
      { new: true }
    );
    if (!waterRecord) {
      throw new Error("No Water Record found!");
    } else {
      res.send(waterRecord);
    }
  } catch (error: any) {
    res.send({
      statusCode: error.statusCode || 500,
      message: error.message || "Something went wrong!",
    });
  }
};

const deleteWaterRecord = async (req: User, res: Response) => {
  const id = req.params.id;
  try {
    const waterRecord = await WaterModel.findOneAndUpdate(
      { _id: id },
      { $set: { is_deleted: true } },
      { new: true }
    );
    if (!waterRecord) {
      throw new Error("No Water Record found!");
    } else {
      res.send(waterRecord);
    }
  } catch (error: any) {
    res.send({
      statusCode: error.statusCode || 500,
      message: error.message || "Something went wrong!",
    });
  }
};

export default {
  createWaterRecord,
  getWaterRecord,
  updateWaterRecord,
  deleteWaterRecord,
};
