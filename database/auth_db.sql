-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 18 jan. 2023 à 16:01
-- Version du serveur : 10.4.25-MariaDB
-- Version de PHP : 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `auth_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

CREATE TABLE `categorie` (
  `categorie_id` int(11) NOT NULL,
  `categorie_nom` varchar(20) NOT NULL,
  `photo` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `categorie`
--

INSERT INTO `categorie` (`categorie_id`, `categorie_nom`, `photo`) VALUES
(1, 'history', 'https://s3.us-east-2'),
(2, 'business', 'https://www.ryrob.co'),
(3, 'education', 'https://www.readinga');

-- --------------------------------------------------------

--
-- Structure de la table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(1);

-- --------------------------------------------------------

--
-- Structure de la table `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `price` bigint(20) NOT NULL,
  `product_description` varchar(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_photo` varchar(255) NOT NULL,
  `stock` bigint(20) NOT NULL,
  `categorie_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `product`
--

INSERT INTO `product` (`product_id`, `price`, `product_description`, `product_name`, `product_photo`, `stock`, `categorie_id`) VALUES
(1, 12, 'Global Empire book jeff besos', 'Global Empire', '4176ZarK+DL.jpg', 12, 2),
(2, 15, 'The money book lessons from The Rich', 'The money book', 'bunes3.jpg', 14, 2),
(3, 17, 'Big Money Book business', 'Big Money', 'busnes2.jpg', 16, 2),
(4, 25, 'The Total Money MakeOver by Dave Ramsey', 'The Total Money', 'busness4.jpg', 11, 2),
(5, 24, 'THE SHADOW KING HISTORY BOOK', 'THE SHADOW KING', 'book3history.jpg', 10, 1),
(6, 27, 'The Upstarts  Book by Brad stone', 'The Upstarts ', 'book2.jpg', 11, 1),
(7, 21, 'Word History book 4th Edition', 'Word History', 'history2.jpg', 15, 1),
(8, 44, 'ASANTE HISTORY BOOK LAST EDITION', 'ASANTE HISTORY', 'history3.jpg', 24, 1),
(9, 22, 'ORIGIN OF CIVILIZATION CHEIKH ANTA DIOP', 'ORIGIN OF CIVILIZATION', 'hystory4.jpg', 13, 1),
(10, 34, 'SAT PREP BLACK BOOK SECOND EDITION', 'SAT PREP', 'education1.jpg', 40, 3),
(11, 27, 'POCKET MEDICINE EIGHTH EDITION ', 'POCKET MEDICINE', 'education2.jpg', 32, 3),
(12, 47, 'SOLVING RESIDENT BURNOUT EDUCATION BOOKS', 'SOLVING RESIDENT BURNOUT', '1education3.jpg', 22, 3),
(13, 29, 'HUMAN ANATOMY THE SKELETON SYSTEM', 'HUMAN ANATOMY', 'education4.jpg', 80, 3);

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) NOT NULL,
  `name` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(2, 'ROLE_ADMIN'),
(1, 'ROLE_USER');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `email` varchar(40) DEFAULT NULL,
  `name` varchar(40) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `username` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `name`, `password`, `username`) VALUES
(1, 'youness.kr02@gmail.com', 'youness', '$2a$10$ILJvAnnmmZvaHucs8ORW.uMRwEMsLVqfbaw1ch/h/24gkZrOItCTm', 'youness');

-- --------------------------------------------------------

--
-- Structure de la table `user_roles`
--

CREATE TABLE `user_roles` (
  `user_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user_roles`
--

INSERT INTO `user_roles` (`user_id`, `role_id`) VALUES
(1, 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`categorie_id`);

--
-- Index pour la table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `FK2arvv8m5bofeta1w9kq08sfw2` (`categorie_id`);

--
-- Index pour la table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_nb4h0p6txrmfc0xbrd1kglp9t` (`name`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`),
  ADD UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`);

--
-- Index pour la table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `FKh8ciramu9cc9q3qcqiv4ue8a6` (`role_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `FK2arvv8m5bofeta1w9kq08sfw2` FOREIGN KEY (`categorie_id`) REFERENCES `categorie` (`categorie_id`);

--
-- Contraintes pour la table `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `FKh8ciramu9cc9q3qcqiv4ue8a6` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  ADD CONSTRAINT `FKhfh9dx7w3ubf1co1vdev94g3f` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
