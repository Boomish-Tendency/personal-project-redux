INSERT INTO users (email, hash)
  
VALUES ($1, $2)
returning user_id, email

-- Old Code
-- INSERT INTO users (
--     email,
--     first_name,
--     last_name,
--     about_me,   
--     hash,
--     profile_pic,
--     date_created TIMESTAMP,
--     date_updated TIMESTAMP)
-- VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
-- returning user_id, email