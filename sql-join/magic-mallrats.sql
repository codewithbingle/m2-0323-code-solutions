-- Find the first and last name of every customer who rented 'Magic Mallrats'.


select  "c"."firstName",
        "c"."lastName"
  from "rentals" as "r"
  join "customers" as "c" using ("customerId")
  join "inventory" as "i" using ("inventoryId")
  join "films" as "f" using("filmId")
  where "f"."title" = 'Magic Mallrats';
