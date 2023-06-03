-- List the first and last name of all customers, plus the total amount they've spent on rentals. Order them by total paid, descending.

select "c"."firstName",
        "c"."lastName",
        sum("p"."amount") as "totalSpent"
  from "payments" as "p"
  join "customers" as "c" using ("customerId")
  group by "c"."customerId"
  order by "totalSpent" desc;
