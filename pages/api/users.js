export default async (req, res) => {
  const { users } = await getAllUsers();

  res.status(200).json({ users });
};
