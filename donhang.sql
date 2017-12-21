-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 21, 2017 lúc 08:19 PM
-- Phiên bản máy phục vụ: 10.1.28-MariaDB
-- Phiên bản PHP: 7.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `db_app`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `donhang`
--

CREATE TABLE `donhang` (
  `id` int(11) NOT NULL,
  `cart_detail` varchar(255) NOT NULL,
  `nameuser` varchar(50) NOT NULL,
  `email` varchar(200) NOT NULL,
  `address` varchar(1000) NOT NULL,
  `total` float NOT NULL,
  `date_order` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `donhang`
--

INSERT INTO `donhang` (`id`, `cart_detail`, `nameuser`, `email`, `address`, `total`, `date_order`) VALUES
(5, '[{\"id\":\"30\",\"quantity\":2},{\"id\":\"29\",\"quantity\":1}]', 'aaa', 'tec@gmail.com', 'ha noi', 366, '2017-12-21 09:17:45'),
(6, '[{\"id\":\"29\",\"quantity\":1},{\"id\":\"46\",\"quantity\":2}]', 'binh', 'binh@gmail.com', 'ha noi', 358, '2017-12-21 09:40:32'),
(7, '[{\"id\":\"29\",\"quantity\":1},{\"id\":\"46\",\"quantity\":2},{\"id\":\"49\",\"quantity\":2}]', 'thang', 'anhthang@gmail.com', 'ha noi', 624, '2017-12-21 09:46:25'),
(8, '[{\"id\":\"32\",\"quantity\":2},{\"id\":\"52\",\"quantity\":1}]', 'son', 'son@gmail.com', 'ha noi', 3210, '2017-12-22 01:31:16'),
(9, '[{\"id\":\"32\",\"quantity\":2},{\"id\":\"48\",\"quantity\":1}]', 'ten1', 'ten1@gmail.com', 'ha noi', 3150, '2017-12-22 01:54:28');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `donhang`
--
ALTER TABLE `donhang`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `donhang`
--
ALTER TABLE `donhang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
