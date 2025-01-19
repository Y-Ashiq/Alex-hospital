import sequelize from "../DBconnection.js";
import { DataTypes } from "sequelize";

const specialtySchema = sequelize.define("specialties", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

export default specialtySchema;
