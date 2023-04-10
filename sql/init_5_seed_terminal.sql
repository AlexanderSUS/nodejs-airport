DO $$
DECLARE
  f uuid;
BEGIN
  FOR f IN SELECT id
    FROM airport 
    ORDER BY name ASC 
    LOOP
    INSERT INTO terminal (name, airport_id) VALUES
      ('A', f),
      ('B', f),
      ('C', f),
      ('D', f),
      ('E', f),
      ('F', f);
    END LOOP;
END;
$$
