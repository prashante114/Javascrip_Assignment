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
-- Table structure for table `productimage`
--

DROP TABLE IF EXISTS `productimage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productimage` (
  `RowId` int NOT NULL AUTO_INCREMENT,
  `fieldname` varchar(200) NOT NULL,
  `originalname` varchar(200) NOT NULL,
  `mimetype` varchar(200) NOT NULL,
  `filename` varchar(200) NOT NULL,
  `path` varchar(200) NOT NULL,
  `ProductId` varchar(20) NOT NULL,
  PRIMARY KEY (`RowId`),
  KEY `ProductId` (`ProductId`),
  CONSTRAINT `productimage_ibfk_1` FOREIGN KEY (`ProductId`) REFERENCES `product` (`ProductId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productimage`
--

LOCK TABLES `productimage` WRITE;
/*!40000 ALTER TABLE `productimage` DISABLE KEYS */;
INSERT INTO `productimage` VALUES (1,'myfile','lap2.jpg','image/jpeg','lap2.jpg','..\\reactecommerce\\src\\uploads\\lap2.jpg','3001'),(2,'myfile','lap1.jpg','image/jpeg','lap1.jpg','..\\reactecommerce\\src\\uploads\\lap1.jpg','3002'),(3,'myfile','lap3.jpg','image/jpeg','lap3.jpg','..\\reactecommerce\\src\\uploads\\lap3.jpg','3003'),(4,'myfile','lap4.jpg','image/jpeg','lap4.jpg','..\\reactecommerce\\src\\uploads\\lap4.jpg','3004'),(5,'myfile','lap5.jpg','image/jpeg','lap5.jpg','..\\reactecommerce\\src\\uploads\\lap5.jpg','3005'),(6,'myfile','lap6.jpg','image/jpeg','lap6.jpg','..\\reactecommerce\\src\\uploads\\lap6.jpg','3006'),(7,'myfile','mob1.jpg','image/jpeg','mob1.jpg','..\\reactecommerce\\src\\uploads\\mob1.jpg','3007');
/*!40000 ALTER TABLE `productimage` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-22 14:27:31
