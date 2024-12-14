CREATE DATABASE IF NOT EXISTS social_poster;
USE social_poster;

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE platforms (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  icon VARCHAR(50)
);

CREATE TABLE platform_credentials (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  platform_id INT,
  credentials JSON NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (platform_id) REFERENCES platforms(id)
);

CREATE TABLE posts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  content TEXT NOT NULL,
  scheduled_time DATETIME,
  status ENUM('draft', 'scheduled', 'published', 'failed') DEFAULT 'draft',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE post_platforms (
  post_id INT,
  platform_id INT,
  status ENUM('pending', 'published', 'failed') DEFAULT 'pending',
  published_at TIMESTAMP,
  FOREIGN KEY (post_id) REFERENCES posts(id),
  FOREIGN KEY (platform_id) REFERENCES platforms(id),
  PRIMARY KEY (post_id, platform_id)
);

-- Insert supported platforms
INSERT INTO platforms (name, icon) VALUES
  ('Facebook', 'facebook'),
  ('Twitter', 'twitter'),
  ('LinkedIn', 'linkedin'),
  ('YouTube', 'youtube'),
  ('Pinterest', 'pinterest'),
  ('WhatsApp', 'whatsapp');