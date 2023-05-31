-- Generate a list of all addresses in the system that includes their "line1", "city"."name", and "district". Bragging rights if you get the name of the country in there too.

select "a"."line1",
       "c"."name" as "city",
       "a"."district"
  from "addresses" as "a"
  join "cities" as "c" using ("cityId");
