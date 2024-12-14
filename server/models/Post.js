const db = require('../config/db');

class Post {
  static async create(userId, content, platforms, scheduledTime = null) {
    const [result] = await db.execute(
      'INSERT INTO posts (user_id, content, scheduled_time) VALUES (?, ?, ?)',
      [userId, content, scheduledTime]
    );
    
    const postId = result.insertId;
    
    // Insert platform associations
    for (const platform of platforms) {
      await db.execute(
        'INSERT INTO post_platforms (post_id, platform_id) VALUES (?, ?)',
        [postId, platform]
      );
    }
    
    return postId;
  }

  static async getByUserId(userId) {
    const [posts] = await db.execute(
      'SELECT * FROM posts WHERE user_id = ? ORDER BY created_at DESC',
      [userId]
    );
    return posts;
  }

  static async update(postId, content, platforms) {
    await db.execute(
      'UPDATE posts SET content = ? WHERE id = ?',
      [content, postId]
    );
    
    // Update platform associations
    await db.execute('DELETE FROM post_platforms WHERE post_id = ?', [postId]);
    
    for (const platform of platforms) {
      await db.execute(
        'INSERT INTO post_platforms (post_id, platform_id) VALUES (?, ?)',
        [postId, platform]
      );
    }
  }
}

module.exports = Post;