-- MySQL dump 10.13  Distrib 5.7.21, for macos10.13 (x86_64)
--
-- Host: localhost    Database: php-react-test
-- ------------------------------------------------------
-- Server version	5.7.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `article` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstText` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `secondText` text COLLATE utf8mb4_unicode_ci,
  `firstChoice` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `firstIndex` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,'Algo qui detectent maladie','Sous-titre','Lorem','Lorem','Suivant','0','transition'),(2,'Organes bioniques','Sous-titre que tu crois','Lorem','Lorem','suivant','0','transition'),(3,'Prothèses','sous-titre','lorem','lorem','suivant','0',NULL),(4,'Technoprogressistes','lorem','lorem','lorem','suivant','1','endpage'),(5,'Californiens','lorem','lorem','lorem','Suivant','1','endpage'),(6,'extropiens','lorem','lorem','lorem','suivant','1','endpage');
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `end_page`
--

DROP TABLE IF EXISTS `end_page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `end_page` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `spanTitle` varchar(75) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `text` text COLLATE utf8mb4_unicode_ci,
  `moreText` text COLLATE utf8mb4_unicode_ci,
  `reference` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `question` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `firstChoice` varchar(155) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `firstIndex` int(11) DEFAULT NULL,
  `secondChoice` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `secondIndex` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `end_page`
--

LOCK TABLES `end_page` WRITE;
/*!40000 ALTER TABLE `end_page` DISABLE KEYS */;
INSERT INTO `end_page` VALUES (1,'Bienvenue dans la','révolution','« Au cours de l’histoire, les plus grandes transformations se sont produites lorsqu’une ressource jusque-là rare est devenue abondante : le passage d’une société de chasseur-cueilleur à une société agricole (plus de nourriture), l’invention de l’imprimerie (plus d’instruction), l’émergence de nouveaux processus de fabrication et la révolution industrielle (plus de produits fabriqués en grande série), ou encore le web, qui a donné naissance à notre monde interconnecté (plus de données). ','Ces «révolutions» ont systématiquement généré de nouvelles structures sociales, de nouvelles formes de gouvernance, de nouvelles sources de richesse, de nouvelles opportunités et, il faut le souligner, de nouvelles inégalités. C’est ce qui s’est produit dans le passé et ce qui se produit aujourd’hui, avec la révolution des données. »','Rapport du groupe de travail franco-britannique sur l’économie de la donnée (2016)','Dans quelle mesure pensez-vous que la révolution des données permet à l’homme d’évoluer ?','Je vais essayer ici ',0,'Je vais tenter là',1),(2,'Conclusion','lorem','lorem','lorem','lorem','lorem','lorem',0,'lorem',1);
/*!40000 ALTER TABLE `end_page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `global_part`
--

DROP TABLE IF EXISTS `global_part`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `global_part` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `quotation` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `spanQuotation` varchar(145) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `quotationMore` varchar(145) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `colorQuotation` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sourceQuotation` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mainText` text COLLATE utf8mb4_unicode_ci,
  `mainText2` text COLLATE utf8mb4_unicode_ci,
  `firstSubtitle` varchar(145) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `firstContent` text COLLATE utf8mb4_unicode_ci,
  `secondSubtitle` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `secondContent` text COLLATE utf8mb4_unicode_ci,
  `secondContentMore` text COLLATE utf8mb4_unicode_ci,
  `firstChoice` varchar(75) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `firstIndex` int(11) DEFAULT NULL,
  `secondChoice` varchar(75) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `secondIndex` int(11) DEFAULT NULL,
  `slug` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `global_part`
--

LOCK TABLES `global_part` WRITE;
/*!40000 ALTER TABLE `global_part` DISABLE KEYS */;
INSERT INTO `global_part` VALUES (3,'VAINCRE LA MALADIE','« Grâce aux biotechnologies que sont les implants sous la peau où les bioprothèses, on jure que chacun pourra maîtriser son corps et son esprit, afin de ','retarder le vieillissement','et la','mort ».','Véronique Lefebvre des Noettes, membre du conseil scientifique de l’espace national d’éthique sur les maladies neuro-dégénératives et la maladie d’Alzheimer','Le bouleversement de la médecine a en réalité démarré il y a une vingtaine d\'années avec les progrès saisissant des thérapeutiques médicamenteuses. Que l\'on songe à l\'insuffisance cardiaque, à la trithérapie anti-VIH, aux traitements ciblés des cancers, le pronostic jadis désastreux de certaines maladies a été transformé. Bien plus que la robotique et l\'intelligence artificielle, c\'est l\'amélioration générale de l\'état de santé qui métamorphose la médecine. ','L\'action du médecin, jusqu\'à présent presque exclusivement tournée vers le diagnostic et le traitement de maladies, élargit progressivement ses objectifs vers le maintien de la santé. En ouvrant la possibilité d\'automatiser les tâches fastidieuses et délicates, la robotique, l\'intelligence artificielle et les technologies apparentées viennent poursuivre et amplifier des tendances à l\'oeuvre depuis environ 25 ans.','L’enjeu des nanotechnologies','Les nanotechnologies et les nano-objets regroupent les techniques et les outils du monde de l’infiniment petit : le millionième de millimètre. Travailler à une telle échelle offre des perspectives immenses dans de nombreux domaines : informatique, cosmétique, énergie… En santé, les \"nanos\" devraient conduire à d’importants progrès dans les méthodes diagnostiques et les approches thérapeutiques. Un champ d\'innovation dont, probablement, on aperçoit encore à peine le potentiel.','Un ordinateur contre les maladies chroniques ','L’intelligence artificielle progresse de jour en jour et suscite de vifs intérêts de la part des firmes informatiques. Ainsi, la société IBM a récemment créé un environnement informatique, baptisé « Watson », entièrement consacré à l’informatique cognitive, tandis que Google rachète de nombreuses entreprises travaillant dans le domaine de l’intelligence artificielle. Mais en quoi consiste exactement l’informatique cognitive ?','Cette nouvelle discipline de l’informatique s’appuie sur des systèmes complexes de traitement de l’information pour acquérir, mettre en œuvre et transmettre des connaissances. Le système « Watson » utilise ainsi des algorithmes inspirés de la linguistique, de l’anthropologie, de la psychologie, des neurosciences, de la philosophie ou de l’intelligence artificielle, pour analyser différentes questions. Il génère alors des hypothèses, collecte et met en relation différentes informations, évalue plusieurs réponses possibles et propose un nombre limité de réponses, classées par ordre de pertinence.','les algos',0,'les organes bioniques',1,'article'),(4,'Vaincre le handicap','De tout temps, l’homme a utilisé la médecine pour','se soigner','et se « ','réparer ».','Qu’en est-il aujourd’hui, comment la technoscience – l’alliance des sciences et de la technologie modernes – permet-elle de traiter l’humain ?','Si les fantasme des transhumanistes sont calqués sur des faits de science fiction qui ne sont pas encore pour la plupart réalisable, un espoir naît pour les personnes atteintes d’handicap, de voir leur quotidien améliorer.','Voici par exemples quelques exemples d’innovations pour les personnes en situation de handicap :','Une application pour réguler son taux de sucre','Des chercheurs de l’université de Boston ont mis au point l’application « Bionic Pancreas ». Son principe ? L’ajout sur le smartphone d’un récepteur, lui même connecté à un capteur situé sur le corps du patient. Ce dernier va effectuer régulièrement des analyses et les transmettre à l’application via le récepteur. Une fois ces résultats reçus, celle-ci déterminera et commandera alors l’injection d’insuline ou de glucagon par les deux pompes correspondantes, elles aussi connectées. Cette innovation permet aux personnes atteintes de diabète d’avoir un dosage très précis de leurs injections et de voir s’estomper en grande partie leur handicap.','Une bague liseuse pour les non-voyants','Conçue par le MIT, Massachussets Institute of Technology, cette grosse bague est équipée d’une micro-caméra très haute définition qui pourra reconnaître les mots et expression qu’elle filmera. Ceux-ci seront ensuite analysés et retranscrits par le biais d’une synthèse vocale.','Comment la faire fonctionner? Il s’agit pour la personne malvoyante de suivre les lignes d’écriture en y passant son doigt. Cependant, ce n’est pas forcément très simple pour une personne atteinte de handicap visuel. C’est pourquoi les ingénieurs du MIT ont incorporé un système de vibration qui, combiné à la précision de la caméra, permettra de guider le doigt afin d’éviter tout décalage de ligne. Cette bague fonctionne sur support papier comme sur support numérique même si elle se limite à une taille de police de caractère de 12 points. Le logiciel de la bague est en open source, ce qui lui permettra d’être en amélioration constante par les contributeurs ayant déjà adhéré au projet.','organes bioniques',1,'prothèses ++ ',2,'article'),(5,'Cerveau augmenté','lorem','lorem','lorem','lorem','lorem','lorem','lorem','lorem','lorem','lorem','lorem','lorem','Suivant',0,NULL,NULL,'map'),(6,'Eugénisme','lorem','lorem','lorem','lorem','lorem','lorem','lorem','lorem','lorem','lorem','lorem','lorem','Suivant',0,NULL,NULL,'map');
/*!40000 ALTER TABLE `global_part` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `map`
--

DROP TABLE IF EXISTS `map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `map` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(155) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `firstChoice` varchar(75) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `firstIndex` int(11) DEFAULT NULL,
  `slug` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `map`
--

LOCK TABLES `map` WRITE;
/*!40000 ALTER TABLE `map` DISABLE KEYS */;
INSERT INTO `map` VALUES (1,'Map','Suivant',1,'transition');
/*!40000 ALTER TABLE `map` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `map_article`
--

DROP TABLE IF EXISTS `map_article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `map_article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(155) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subtitle` varchar(155) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `map_article`
--

LOCK TABLES `map_article` WRITE;
/*!40000 ALTER TABLE `map_article` DISABLE KEYS */;
INSERT INTO `map_article` VALUES (1,'Article de la map','lorem','lorem.png'),(2,'Autre article','lorem','lorem.jpg');
/*!40000 ALTER TABLE `map_article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transition`
--

DROP TABLE IF EXISTS `transition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transition` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(145) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `firstChoice` varchar(145) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `firstIndex` int(11) DEFAULT NULL,
  `secondChoice` varchar(145) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `secondIndex` int(11) DEFAULT NULL,
  `thirdChoice` varchar(145) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `thirdIndex` int(11) DEFAULT NULL,
  `slug` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transition`
--

LOCK TABLES `transition` WRITE;
/*!40000 ALTER TABLE `transition` DISABLE KEYS */;
INSERT INTO `transition` VALUES (1,'transition 1','Cerveau augmenté',2,'Eugénisme',3,NULL,NULL,'globalpart'),(2,'transition 2','Technoprogressistes',3,'Californiens',4,'Extropiens',5,'article');
/*!40000 ALTER TABLE `transition` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-12 19:58:36
