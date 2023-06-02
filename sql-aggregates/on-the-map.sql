-- List the number of "cities" per country in the "countries" table.

select "countries"."name" as "country",
        count("cities"."cityId") as "totalCities"
  from "cities"
  join "countries" using ("countryId")
group by "countries"."countryId";
