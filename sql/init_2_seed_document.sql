DO $$
DECLARE
  u uuid;
BEGIN
  for u IN SELECT id
    FROM person p  
    ORDER BY last_name ASC 
    LOOP
    INSERT INTO document (type, person_id) VALUES
      ('passport', u),
      ('visa', u),
      ('driver_licence', u)
     ;
    END LOOP;
END;
$$