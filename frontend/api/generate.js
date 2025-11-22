import { generateCourseFromJamUrl } from "../../server/mockJamProcessor.js";
import { courses } from "./courses.js";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { jamUrl } = req.body;

  if (!jamUrl) {
    return res.status(400).json({ error: "missing jamUrl" });
  }

  try {
    const c = generateCourseFromJamUrl(jamUrl);
    if (c.topics) c.description += " — Topics: " + c.topics.join(" | ");
    courses.unshift(c);

    return res.status(200).json(c);
  } catch (e) {
    return res.status(500).json({ error: "invalid url" });
  }
}
