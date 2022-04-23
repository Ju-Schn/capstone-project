import dbConnect from '../../backend/lib/dbConnect.mjs';
import Cards from '../../backend/models/Cards.mjs';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    const cards = await Cards.find();
    return res.json(cards);
  }

  if (req.method === 'POST') {
    const result = await Cards.create(req.body);
    return res.status(201).json(result);
  }

  if (req.method === 'DELETE') {
    const { _id } = req.body;
    await Cards.findByIdAndDelete(_id);
    return res.status(204).send();
  }
}
