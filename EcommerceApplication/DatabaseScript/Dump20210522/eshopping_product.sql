-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: eshopping
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `RowId` int NOT NULL AUTO_INCREMENT,
  `ProductId` varchar(20) NOT NULL,
  `ProducName` varchar(20) NOT NULL,
  `CategoryId` varchar(20) NOT NULL,
  `SubCategoryId` varchar(20) NOT NULL,
  `ManufacturerId` varchar(20) NOT NULL,
  `VendorId` varchar(20) NOT NULL,
  `ProductPrice` decimal(10,2) NOT NULL,
  PRIMARY KEY (`ProductId`),
  UNIQUE KEY `RowId` (`RowId`),
  UNIQUE KEY `ProductId` (`ProductId`) USING BTREE,
  KEY `CategoryId` (`CategoryId`),
  KEY `SubCategoryId` (`SubCategoryId`),
  KEY `ManufacturerId` (`ManufacturerId`),
  KEY `VendorId` (`VendorId`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`CategoryId`) REFERENCES `category` (`CategoryId`),
  CONSTRAINT `product_ibfk_2` FOREIGN KEY (`SubCategoryId`) REFERENCES `subcategories` (`SubCategoryId`),
  CONSTRAINT `product_ibfk_3` FOREIGN KEY (`ManufacturerId`) REFERENCES `manufacturer` (`ManufacturerId`),
  CONSTRAINT `product_ibfk_4` FOREIGN KEY (`VendorId`) REFERENCES `vendor` (`VendorId`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (36,'3001','Dell Laptop','1','1','2','1',23000.00),(37,'3002','HPLaptop','1','1','2','1',25000.00),(38,'3003','Lenevo Laptop','1','1','2','1',26000.00),(39,'3004','Asus Laptop','1','1','2','1',26000.00),(40,'3005','Me Laptop','1','1','2','1',26000.00),(41,'3006','SonyLaptop','1','1','2','1',26000.00),(42,'3007','Vivo Mobile','1','1','2','1',15000.00);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-22 14:27:39
