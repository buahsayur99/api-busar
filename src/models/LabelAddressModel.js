import { Sequelize } from "sequelize";
import db from "../database/index.js";

const { DataTypes } = Sequelize;

const LabelAddress = db.define("labelAddress", {
    name: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true
        }
    }
}, {
    freezeTableName: true
})

export default LabelAddress;