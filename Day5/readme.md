# Date 07-April-2021
1. Create a Data Entry Application for storing Product Information. The Data for the Product will be captured as follows
    - ProductId, string
    - ProductName, string
    - CategoryName, string, but can be from 'ECT','ECL','FOD-FAST', 'FOD-DRK' 
    - Manufacturer, string, but can be from 'HP','IBM','TATA','BAJAJ','PARLE'
    - Description, string
    - Price, string
- The data must be stored in the locatsorage as Key Value pair, wher the Key will be ProductRowId which will be automatically generated when the new product is saved. Make sure that the values of string type for Product are must, the numeric values cannot be -Ve
- Make sure that the ProductId is not repeated, (check this against the localhosrage)
- If the enduser want gto delete the product from localStorage, make sure that is is present
- When the Product is saved it must be displayed in the dynaically generated table
- Provide a search feature for Product based on ProductName, CategoryName or Description on the page
- Create a Radio-Button list for Categories and Manufactirers 
    - Input type="radio", same name of arr radio button
