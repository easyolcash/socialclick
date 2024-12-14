const db = require('../config/db');

class Platform {
  static async saveCredentials(userId, platformId, credentials) {
    await db.execute(
      'INSERT INTO platform_credentials (user_id, platform_id, credentials) VALUES (?, ?, ?)',
      [userId, platformId, JSON.stringify(credentials)]
    );
  }

  static async getCredentials(userId, platformId) {
    const [credentials] = await db.execute(
      'SELECT credentials FROM platform_credentials WHERE user_id = ? AND platform_id = ?',
      [userId, platformId]
    );
    return credentials[0] ? JSON.parse(credentials[0].credentials) : null;
  }
}

module.exports = Platform;