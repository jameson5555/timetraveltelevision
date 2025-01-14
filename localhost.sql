-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 17, 2024 at 02:06 PM
-- Server version: 5.7.23-23
-- PHP Version: 8.1.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ttt_videos`
--
CREATE DATABASE IF NOT EXISTS `ttt_videos` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `ttt_videos`;

-- --------------------------------------------------------

--
-- Table structure for table `video_ids`
--

CREATE TABLE `video_ids` (
  `index` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id` text COLLATE utf8_unicode_ci NOT NULL,
  `decade` enum('50s','60s','70s','80s','90s','00s','10s','20s') COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `video_ids`
--

INSERT INTO `video_ids` (`index`, `id`, `decade`, `description`) VALUES
('2024-12-17 14:53:38', 'b1c3GcQGd5U', '50s', 'peter gunn'),
('2024-12-17 15:52:20', 'Nk3ZN3dSeDk', '60s', 'beach blanket bingo'),
('2024-12-17 15:54:37', 'bBk9-m3wNLc', '60s', '60s commercials (cigarrettes, etc.)'),
('2024-12-17 15:55:07', 'TzclE11RNhc', '60s', '60s commercials boys toys'),
('2024-12-17 15:55:31', 'XHQ-35uRlfA', '60s', 'dragnet'),
('2024-12-17 15:55:48', 'Qi5BM3nZ2kM', '60s', 'dick van dyke promo'),
('2024-12-17 15:58:38', 'F5zM5FfloSw', '60s', 'the lucy show - lucy the bean queen'),
('2024-12-17 16:03:50', 'A_kO77jPGuU', '60s', 'beverly hillbillies'),
('2024-12-17 16:04:06', 'hRsfKK34SFY', '60s', 'tardis takes off for first time'),
('2024-12-17 16:04:27', 'YN7pCuNtO6Q', '60s', 'doctor who first intro'),
('2024-12-17 16:05:20', 'N8fkjTjM-lE', '70s', 'funny 70s commercials'),
('2024-12-17 16:05:35', 'VbGCM3vgack', '70s', 'benny hill'),
('2024-12-17 16:05:51', 'on2fRhovQP8', '70s', 'shazam'),
('2024-12-17 16:06:05', 'IrwMyQ3_7P8', '70s', 'the amazing spiderman'),
('2024-12-17 16:06:36', 'SyKD4KagqbA', '70s', 'steve martin standup snl'),
('2024-12-17 16:06:51', '09h9SCp94s8', '70s', 'doctor who tom baker'),
('2024-12-17 16:07:12', 'XBf0yJVMSzI', '80s', 'mtv first airing'),
('2024-12-17 16:07:27', 'q6LWeVkzTTA', '80s', 'mtv early top 20 countdown'),
('2024-12-17 16:07:43', 'sOnqjkJTMaA', '80s', 'thriller'),
('2024-12-17 16:07:59', 'dnq08Krap6g', '80s', '80s commercials vol 1'),
('2024-12-17 16:08:16', 'pv5Zvi0OsvE', '80s', '80s commercials vol 2'),
('2024-12-17 16:08:32', 'asSgIrIcMZc', '80s', '80s commercials vol 3'),
('2024-12-17 16:08:49', 'w2BCG4YZy8Y', '80s', '80s commercials vol 4'),
('2024-12-17 16:09:02', 'N6uEMOeDZsA', '80s', 'want a new drug'),
('2024-12-17 16:09:17', 'lAD6Obi7Cag', '80s', 'want my mtv'),
('2024-12-17 16:09:36', 'J-7be88JnJ0', '80s', 'different strokes'),
('2024-12-17 16:09:50', 'Zn5OJGucveg', '80s', 'madonna crazy for you'),
('2024-12-17 16:10:04', 'rSaC-YbSDpo', '80s', 'madonna borderline'),
('2024-12-17 16:11:50', 'idnwh6iDnXA', '80s', 'where is the beef'),
('2024-12-17 16:12:04', 'acJktomTrT0', '90s', 'pearl jam unplugged'),
('2024-12-17 16:12:40', 'ms61I54CeQA', '00s', 'creed parody'),
('2024-12-17 16:13:02', '0kYYiRmtMH4', '90s', '90s commercials vol 1'),
('2024-12-17 16:13:16', 'qFSAds56rcQ', '90s', '90s commercials vol 2'),
('2024-12-17 16:13:31', '5wdfwh_o6DE', '90s', '90s commercials vol 3'),
('2024-12-17 16:13:48', 'Jne9t8sHpUc', '90s', 'alanis morisette ironic'),
('2024-12-17 16:14:04', '010KyIQjkTk', '90s', 'kris kross jump'),
('2024-12-17 16:14:22', 'esEdC0c3YI4', '90s', 'only happy when it rains'),
('2024-12-17 16:14:51', 'QbZI387PCew', '90s', 'home improvement'),
('2024-12-17 16:15:08', 'cZaglHQOgt8', '90s', 'outshined live'),
('2024-12-17 16:15:21', 'Kr0tTbTbmVA', '90s', 'summertime by fresh prince');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `video_ids`
--
ALTER TABLE `video_ids`
  ADD PRIMARY KEY (`index`);
COMMIT;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `password`) VALUES
('2025-01-14 15:42:11', 'jameson', 'jam123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
