import dbConnect from '../../backend/lib/dbConnect.js';
import Card from '../../backend/models/Card.js';

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
    console.log(currentId);
    await Card.findByIdAndDelete(currentId);
    return res.status(204).send();
  }
}
