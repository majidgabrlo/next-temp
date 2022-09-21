import { MongoClient } from "mongodb";
async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (!email || !name || !message) {
      res.status(422).json({ message: "invalid input" });
      return;
    }
    const newMessage = { email, name, message };
    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://majidgabrlo:fuchs333@cluster0.rw6ikjf.mongodb.net/next-blog?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500);
      return;
    }

    const db = client.db();

    const result = await db.collection("messages").insertOne(newMessage);
    const insertedId = result.insertedId;
    client.close();
    console.log({ ...newMessage, insertedId });
    res.status(201).json({ message: "successful" });
  }
}

export default handler;
