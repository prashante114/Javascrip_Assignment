# Date : 05-April-2021
 Application Development Assignment w/o using third party library

- Ex 1 : Create function that will accept two date parameters and the function will perform the following operations
    - Check is First Parameters Date is greater than Second Parameter Date
    - Findout the DIfference between date based of
        - Seconds
            - if differencfe is more than 60, then add 1 min and rest are seconds
        - Minuts
            - if difference is more than 60, then add 1 hour an rest are minuts
        - Hours
            - if difference is more than 24, then add 1 Day and rest are hours
        - Days
            - if difference is more than 28,30,31, then add 1 month and rest are days
        - Months
            - - if difference is more than 12, then add 1 year and rest are months
        - Years
    - e.g.
        - D1 : 1980, 00, 01, 01:30:20 , 01-Jan-1980
        - D2 : 1981, 11, 31, 01:40:20 , 31-Dec-1981
            - 2 Years 20 mins

- Ex 2 : Sort the string array based on length of each string in array
    - ["ABC", "AA", "BAD", "BADA", "CARD", "BADARAE"]
        - ["AA", "ABC", "BAD", "BADA", "CARD", "BADARAE"]

- Ex 3 : Create a function that will accept an array as input parameter and the function will returns a new array as the new array where 0th index elements will take 1st index element as its power, likewise 1st element will take 2n element as its power (use pow() function of Math object)

- Ex 4 : write a function to convert the date in descriptive manner, e.g. if the input date is 05-04-2021, then the output should be Monday, 5th April, 2021
    - An Array for Days (Monday to Sunday), then using getDay() function get the index of day and then for the index reteriev day from array and then generate output
- Ex 5: Explore indexOf() and lastIndexOf() methods of array    
