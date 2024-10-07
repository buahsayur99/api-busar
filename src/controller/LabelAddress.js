import LabelAddress from "../models/LabelAddressModel.js";

export const getLabelAddress = async (req, res) => {
    try {
        const response = await LabelAddress.findAll();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const createLabelAddress = async (req, res) => {
    const { name } = req.body

    try {
        const labelAddress = await LabelAddress.findOne({
            where: {
                name: name
            }
        });
        if (labelAddress) return res.status(409).json({ message: "label address sudah ada" });

        await LabelAddress.create({
            name: name
        });
        res.status(200).json({ message: "create label address success" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}