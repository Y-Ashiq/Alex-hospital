import sequelize from "../DBconnection.js";
import { DataTypes } from "sequelize";

const specialtySchema = sequelize.define("specialty", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

export default specialtySchema;
