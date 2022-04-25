import dbConnect from '../../backend/lib/dbConnect.mjs';
import Card from '../../backend/models/Card.mjs';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    const cards = await Card.find();
    return res.json(cards);
  }

  if (req.method === 'POST') {
    const result = await Card.create(req.body);
    return res.status(201).json(result);
  }

  if (req.method === 'DELETE') {
    const { currentId } = req.body;

    await Card.findByIdAndDelete(currentId);
    return res.status(204).send();
  }
}
