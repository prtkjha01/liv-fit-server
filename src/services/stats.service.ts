import { Request, Response } from "express";
import { User } from "../interfaces/userInterface";
import StatsModel from "../models/statsModel";

const createStats = async (req: User, res: Response) => {
  const { userId } = req.user;
  try {
    const newStats = new StatsModel({ ...req.body, user: userId });
    await newStats.save();
    res.send({
      message: "Stats created successfully!",
    });
  } catch (error: any) {
    res.send({
      statusCode: error.statusCode || 500,
      message: error.message || "Something went wrong!",
    });
  }
};
const getStats = async (req: User, res: Response) => {
  const { userId } = req.user;
  try {
    const stats = await StatsModel.findOne(
      {
        user: userId,
        is_deleted: false,
      },
      { updated_at: 0 }
    );
    if (!stats) {
      throw new Error("No stats found!");
    } else {
      res.send(stats);
    }
  } catch (error: any) {
    res.send({
      statusCode: error.statusCode || 500,
      message: error.message || "Something went wrong!",
    });
  }
};
const updateStats = async (req: User, res: Response) => {
  const { userId } = req.user;
  try {
    const stats = await StatsModel.findOneAndUpdate(
      { user: userId },
      { $set: { ...req.body } },
      { new: true }
    );
    if (!stats) {
      throw new Error("No stats found!");
    } else {
      res.send(stats);
    }
  } catch (error: any) {
    res.send({
      statusCode: error.statusCode || 500,
      message: error.message || "Something went wrong!",
    });
  }
};
const deleteStats = async (req: User, res: Response) => {
  const id = req.params.id;
  try {
    const stats = await StatsModel.findOneAndUpdate(
      { _id: id },
      { $set: { is_deleted: true } },
      { new: true }
    );
    if (!stats) {
      throw new Error("No stats found!");
    } else {
      res.send(stats);
    }
  } catch (error: any) {
    res.send({
      statusCode: error.statusCode || 500,
      message: error.message || "Something went wrong!",
    });
  }
};

export default { createStats, getStats, updateStats, deleteStats };
