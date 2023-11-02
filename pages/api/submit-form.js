import { accessGoogleSheet } from "./auth"



export default async function handler(req, res) {
    try {
        const formData = JSON.parse(req.body);
        const { values } = formData

        console.log("callllll", values)

        const result = await accessGoogleSheet(values)

        res.status(200).json({ message: result });

    } catch (error) {

        res.status(500).json({ error: 'Failed to submit the form data.' });

    }



}