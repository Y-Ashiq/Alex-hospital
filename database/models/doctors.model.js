import sequelize from "../DBconnection.js";
import { DataTypes } from "sequelize";

const doctorSchema = sequelize.define("doctors", {
  id: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  specialty: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  availableDates: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default doctorSchema;
