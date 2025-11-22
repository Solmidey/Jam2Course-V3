let courses = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(courses);
  }

  // Not allowed
  return res.status(405).json({ error: "Method not allowed" });
}

// Export courses so other functions can modify it
export { courses };
