INSERT INTO users (
    email,
    first_name,
    last_name,
    hash,
    profile_pic,
    date_created TIMESTAMP,
    date_updated TIMESTAMP)
VALUES ($1, $2, $3, $4, $5, $6, $7)
returning user_id, email

