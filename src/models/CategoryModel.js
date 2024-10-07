import { Sequelize } from "sequelize";
import db from "../database/index.js";

const { DataTypes } = Sequelize;

const Categorys = db.define("categorys", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
}, {
    freezeTableName: true
});

export default Categorys;