export const getPosts = (req, res) => {
  //     const q =
  //     userId !== "undefined"
  //       ? `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) WHERE p.userId = ? ORDER BY p.createdAt DESC`
  //       : `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)
  //   LEFT JOIN relationships AS r ON (p.userId = r.followedUserId) WHERE r.followerUserId= ? OR p.userId =?
  //   ORDER BY p.createdAt DESC`;

  const q = `SELECT * FROM posts AS p JOIN users AS u`;
};
