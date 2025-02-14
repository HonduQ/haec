INSERT INTO horses (name,show_name,feed)
VALUES ('Black Beauty', 'Beauty', '1 scoop grain and supplements');
INSERT INTO horses (name,show_name,feed)
VALUES ('Shadowfax', 'Shadow', '2 scoops grain');
INSERT INTO horses (name,show_name,feed)
VALUES ('Extra Terrific', 'ET', 'Half scoop grain and supplements');
INSERT INTO horses (name,show_name,feed)
VALUES ('Cinderella', 'Cinderella', '1 scoop grain and supplements');
INSERT INTO horses (name,show_name,feed)
VALUES ('Shilo', 'Shilo', '4 scoops grain');
INSERT INTO horses (name,show_name,feed)
VALUES ('Eye of the Tiger', 'Tiger', '2 scoops grain, supplements');
INSERT INTO horses (name,show_name,feed)
VALUES ('Shooting Star Estrella', 'Estrella', '1 and a half scoops grain, supplements');
INSERT INTO horses (name,show_name,feed)
VALUES ('Fern', 'Fern', '1 scoops grain, 1/2 cup sweet feed');
INSERT INTO horses (name,show_name,feed)
VALUES ('Clover', 'Clover', '1 scoops grain, 1/2 cup sweet feed');
INSERT INTO horses (name,show_name,feed)
VALUES ('Clyde', 'Clyde', '1 scoops beet pulp');

UPDATE horses
SET feed = REPLACE(feed,'half','1/2');

UPDATE horses
SET feed = REPLACE(feed,'Half','1/2');

----(deleted_at was originally DateTime @default(now()))
-- UPDATE horses
-- SET deleted_at = NULL;

--soft delete
UPDATE horses
SET deleted_at = CURRENT_TIMESTAMP
WHERE id = 1;

--select "deleted" records
SELECT * 
FROM horses
WHERE deleted_at IS NOT NULL
ORDER BY id;

--select active records
SELECT * 
FROM horses
WHERE deleted_at IS NULL
ORDER BY id;