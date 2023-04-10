DO $$
DECLARE
  f record;
BEGIN
  FOR f IN SELECT id, airport_id 
    FROM terminal 
    ORDER BY name ASC 
    LOOP
    INSERT INTO gate (number, terminal_id, airport_id) VALUES
      ('1', f.id, f.airport_id)
     ,('2', f.id, f.airport_id)
     ,('3', f.id, f.airport_id)
     ,('4', f.id, f.airport_id)
     ,('5', f.id, f.airport_id)
     ,('6', f.id, f.airport_id)
     ,('7', f.id, f.airport_id)
     ,('8', f.id, f.airport_id)
     ,('9', f.id, f.airport_id)
    ,('10', f.id, f.airport_id)
    ,('11', f.id, f.airport_id)
    ,('12', f.id, f.airport_id)
    ,('13', f.id, f.airport_id)
    ,('14', f.id, f.airport_id)
    ,('15', f.id, f.airport_id)
    ,('16', f.id, f.airport_id)
    ,('17', f.id, f.airport_id)
    ,('18', f.id, f.airport_id)
    ,('19', f.id, f.airport_id)
    ,('20', f.id, f.airport_id)
    ;
    END LOOP;
END;
$$
