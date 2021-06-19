-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 18, 2021 at 06:58 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cms_evoucher`
--
CREATE DATABASE IF NOT EXISTS `cms_evoucher` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `cms_evoucher`;

-- --------------------------------------------------------

--
-- Table structure for table `pay_method`
--

DROP TABLE IF EXISTS `pay_method`;
CREATE TABLE IF NOT EXISTS `pay_method` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pay_method`
--

INSERT INTO `pay_method` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'VISA', '2021-06-18 06:56:29', '2021-06-18 06:56:29'),
(2, 'MasterCard', '2021-06-18 06:56:29', '2021-06-18 06:56:29'),
(3, 'JCB', '2021-06-18 06:56:29', '2021-06-18 06:56:29'),
(4, 'PayPal', '2021-06-18 06:56:30', '2021-06-18 06:56:30');

-- --------------------------------------------------------

--
-- Table structure for table `voucher`
--

DROP TABLE IF EXISTS `voucher`;
CREATE TABLE IF NOT EXISTS `voucher` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `expiry_date` date NOT NULL,
  `img` varchar(500) DEFAULT NULL,
  `amount` varchar(30) NOT NULL,
  `qty` int(11) NOT NULL,
  `buy_type` int(11) NOT NULL,
  `disc_pay_method` int(11) NOT NULL,
  `active_state` int(11) NOT NULL DEFAULT '1',
  `max_buy_limit` int(11) DEFAULT NULL,
  `max_gift_limit` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
