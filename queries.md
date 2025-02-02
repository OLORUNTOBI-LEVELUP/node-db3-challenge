# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT categoryName, productName
FROM categories
JOIN products
ON Categories.CategoryID = Products.CategoryID


### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT OrderID, ShipperName
FROM Orders AS o
JOIN Shippers AS s
ON s.ShipperID = o.ShipperID
WHERE OrderDate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT productName, quantity
FROM Products AS p
JOIN OrderDetails AS o
ON p.ProductID = o.ProductID
WHERE OrderID = 10251

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT OrderID, CustomerName, LastName AS EmployeeName
FROM Orders as o
LEFT JOIN Customers AS c ON o.CustomerID = c.CustomerID
LEFT JOIN Employees AS c ON o.EmployeeID = c.EmployeeID

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

SELECT CategoryName, Count(*) AS Count
FROM Products AS P
JOIN Categories AS C
ON P.CategoryID = C.CategoryID
GROUP BY CategoryName
ORDER BY Count DESC

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 

SELECT OrderID, Count(*) AS ItemCount
FROM OrderDetails
GROUP BY OrderID 