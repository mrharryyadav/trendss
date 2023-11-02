import { accessGoogleSheet } from "./authwithGet"

export default async function handler(req, res) {
    try {
        const result = await accessGoogleSheet()
        console.log('result',result)
        res.status(200).json({ data: result });
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit the form data.' });

    }
}