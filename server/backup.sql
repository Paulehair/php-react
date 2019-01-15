-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  mar. 15 jan. 2019 à 15:15
-- Version du serveur :  10.1.37-MariaDB-0+deb9u1
-- Version de PHP :  7.0.33-0+deb9u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `php-react-test`
--

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

CREATE TABLE `article` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_span` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `subtitle` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `text1` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `video` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `text2` text COLLATE utf8mb4_unicode_ci,
  `text3` text CHARACTER SET utf8 NOT NULL,
  `text4` text CHARACTER SET utf8 NOT NULL,
  `text5` text CHARACTER SET utf8 NOT NULL,
  `text6` text CHARACTER SET utf8 NOT NULL,
  `source` varchar(250) CHARACTER SET utf8 NOT NULL,
  `first_choice` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `first_index` int(11) DEFAULT NULL,
  `second_choice` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `second_index` int(11) DEFAULT NULL,
  `slug` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `article`
--

INSERT INTO `article` (`id`, `title`, `title_span`, `subtitle`, `text1`, `img`, `video`, `text2`, `text3`, `text4`, `text5`, `text6`, `source`, `first_choice`, `first_index`, `second_choice`, `second_index`, `slug`) VALUES
(1, 'Algos détectant les maladies', NULL, '« Grâce aux biotechnologies que sont les implants sous la peau où les bioprothèses, on jure que chacun pourra maîtriser son corps et son esprit, afin de retarder le vieillissement et la mort »', 'Le bouleversement de la médecine a en réalité démarré il y a une vingtaine d\'années avec les progrès saisissant des thérapeutiques médicamenteuses. Que l\'on songe à l\'insuffisance cardiaque, à la trithérapie anti-VIH, aux traitements ciblés des cancers, le pronostic jadis désastreux de certaines maladies a été transformé. Bien plus que la robotique et l\'intelligence artificielle, c\'est l\'amélioration générale de l\'état de santé qui métamorphose la médecine.', NULL, NULL, 'L\'action du médecin, jusqu\'à présent presque exclusivement tournée vers le diagnostic et le traitement de maladies, élargit progressivement ses objectifs vers le maintien de la santé. En ouvrant la possibilité d\'automatiser les tâches fastidieuses et délicates, la robotique, l\'intelligence artificielle et les technologies apparentées viennent poursuivre et amplifier des tendances à l\'oeuvre depuis environ 25 ans.', '', '', '', '', '', 'suivant', 0, NULL, NULL, 'transition'),
(2, 'Les organes bioniques', NULL, 'Un nouvel homme est né.', 'L’avancée des organes bioniques représente beaucoup d’espoir pour les personnes malades. En 1818, Mary Shelley publiait Frankenstein qui raconte l’histoire d’un être vivant créé de toute pièce.\r\nAujourd’hui, les avancées concernant les organes artificielles nous montrent que cette fiction rattrape peu à peu la réalité. Même si nous ne sommes pas encore au stade de prothèse commandée par la pensée ou de l’oeil bionique, la technologie nous a permis de faire de grandes avancées dans le domaine de la santé. Lorsque nous avons un organe malade ou un membre amputé de nos jours, ce dernier peut être remplacer grâce à des greffes ou des prothèses ; mais ce remplacement est limité pour les greffes, et reste un inconvénient pour les personnes bénéficiant de prothèses.', NULL, NULL, 'Une des applications bien connue est le pacemaker qui bénéficie aux malades cardiaques. \r\n\r\nLes greffes d’organes artificiels ou bioniques sont porteuses d’espoir. On peut prendre comme exemple la conception de reins artificiels à partir de cellules souches humaines au Japon ou encore la conception du premier coeur artificiel bioprothétique par la société Carmatsa en France ; ce dernier reste néanmoins à faire tester.\r\nCette avancée technologique va également rendre service aux malentendants et aux aveugles grâce aux inventions d’organes bioniques ainsi qu’à la thérapie génique ( qui consiste à introduire du matériel génétique dans des cellules pour soigner des maladies ) .', '', '', '', '', '', 'Suivant', 0, NULL, NULL, 'transition'),
(3, 'Les prothèses', NULL, 'C’est en 1500 avant notre ère qu’un livre sacré hindou mentionne une certaine Vishpala, une femme amputée de la jambe après avoir été blessée pendant une bataille. Elle serait dotée d’une jambe de fer lui permettant de marcher. \r\nC’est donc sur des m', 'C’est en 1500 avant notre ère qu’un livre sacré hindou mentionne une certaine Vishpala, une femme amputée de la jambe après avoir été blessée pendant une bataille. Elle serait dotée d’une jambe de fer lui permettant de marcher. \r\nC’est donc sur des milliers d’années que l’évolution des prothèses se fait au sein de notre monde. C’est un rassemblement de données et d’études tissé par des centaines de populations différentes qui nous amène aujourd’hui à l’apogée. Si les premières traces remontent plusieurs siècles avant notre ère, les premières prothèses reconnues viennent du Moyen-âge qui se limitaient à des pilons pour remplacer des membres comme les jambes et des crochets pour remplacer les mains. A cette époque, en partie à cause du contexte religieux, les avancées dans ce domaine furent donc très peu nombreuses.', NULL, NULL, 'C’est au XVIème siècle que la poudre à canon sur les champs de batailles infulence grandement le nombre de blessures et d’amputations. Le français Ambroise Paré, un chirurgien français de cette époque mis au point des membre artificiels tels que des pilons articulés. En voulant reproduire le mouvement naturel grâce à la mécanique. \r\n\r\nPlus tard, dans un contexte de guerre de sécession aux Etats-Unis, de nombreuses amputations furent nécessaires. A cette même période, c’était l’invention de l’anesthésie qui permettait de pratiquer des opérations plus longues sur les patients. Le gouvernement de cette époque créa les premières subventions dans le domaine prothétique.\r\n\r\nEn 1922 les premières prothèses de hanche datent de 1922 et sont posées en France par les frères Jean et Robert Judet. Ces prothèses en méthacrylate de méthyle ont eu un très grand succès, surtout en Angleterre où elles ont pris le nom de Prothèses de Moore.\r\n\r\nDe ces différentes créations nait les des avancées chaque fois plus surprenantes et fonctionnelles. En 1970 est inventé le genou hydraulique avec pour but de pouvoir projeter la jambe pour un mouvement naturel. 27 ans plus tard, un modèle avec processeur est mis en place qui permet pour son utilisateur de faire des activités telles que le vélo. Et c’est 1 an plus tard que Aimee Mullins, athlète handisport amputée des deux jambes bat le record du monde au 100m et 200m. \r\n\r\nC’est au début du 21e siècle que le premier bras bionique du monde fût testé par Jess Sullivan. Et c’est Zac Wawter, amputée de la jambe droite, qui en 2012 monte au sommet de la Wilis Tower en 53 minutes afin de présenter l’efficacité de sa prothèse.', '', '', '', '', '', 'Suivant', 0, NULL, NULL, 'transition'),
(5, 'Technoprogressistes', NULL, 'sous-titres des technoprog', 'oui', NULL, NULL, 'oui', '', '', '', '', '', 'Suivant', 1, NULL, NULL, 'endpage'),
(6, 'Californiens', NULL, 'non', 'non', NULL, NULL, 'non', '', '', '', '', '', 'Suivant', 1, NULL, NULL, 'endpage'),
(9, 'Extropiens', NULL, 'sous-titre', 'oui', NULL, NULL, 'non', '', '', '', '', '', 'Suivant', 1, NULL, NULL, 'endpage');

-- --------------------------------------------------------

--
-- Structure de la table `end_point`
--

CREATE TABLE `end_point` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `title_span` varchar(30) DEFAULT NULL,
  `text1` text,
  `text2` text,
  `text3` text NOT NULL,
  `source` varchar(250) DEFAULT NULL,
  `question` varchar(250) DEFAULT NULL,
  `first_choice` varchar(30) DEFAULT NULL,
  `first_index` int(11) DEFAULT NULL,
  `second_choice` varchar(30) DEFAULT NULL,
  `second_index` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `end_point`
--

INSERT INTO `end_point` (`id`, `title`, `title_span`, `text1`, `text2`, `text3`, `source`, `question`, `first_choice`, `first_index`, `second_choice`, `second_index`) VALUES
(1, 'Bienvenue dans la', 'révolution', '« Au cours de l’histoire, les plus grandes transformations se sont produites lorsqu’une ressource jusque-là rare est devenue abondante : le passage d’une société de chasseur-cueilleur à une société agricole (plus de nourriture), l’invention de l’imprimerie (plus d’instruction), l’émergence de nouveaux processus de fabrication et la révolution industrielle (plus de produits fabriqués en grande série), ou encore le web, qui a donné naissance à notre monde interconnecté (plus de données).', 'Ces «révolutions» ont systématiquement généré de nouvelles structures sociales, de nouvelles formes de gouvernance, de nouvelles sources de richesse, de nouvelles opportunités et, il faut le souligner, de nouvelles inégalités. C’est ce qui s’est produit dans le passé et ce qui se produit aujourd’hui, avec la révolution des données. »', '', 'Rapport du groupe de travail franco-britannique sur l’économie de la donnée (2016)', 'Dans quelle mesure pensez-vous que la révolution des données permet à l’homme d’évoluer ?', 'choix 1', 0, 'choix 2', 1),
(2, 'Conclusion', 'test', 'test', 'test', '', 'test', 'test', 'choix 1', 0, 'choix 2', 0);

-- --------------------------------------------------------

--
-- Structure de la table `global_part`
--

CREATE TABLE `global_part` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `title_span` varchar(30) NOT NULL,
  `subtitle` varchar(250) NOT NULL,
  `text1` text NOT NULL,
  `text2` text NOT NULL,
  `text3` text NOT NULL,
  `text4` text NOT NULL,
  `text5` text CHARACTER SET utf8 NOT NULL,
  `data` varchar(30) CHARACTER SET utf8 NOT NULL,
  `data_span` varchar(50) CHARACTER SET utf8 NOT NULL,
  `question` varchar(250) CHARACTER SET utf8 NOT NULL,
  `first_choice` varchar(30) DEFAULT NULL,
  `first_index` int(11) DEFAULT NULL,
  `second_choice` varchar(30) DEFAULT NULL,
  `second_index` int(11) DEFAULT NULL,
  `slug` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `global_part`
--

INSERT INTO `global_part` (`id`, `title`, `title_span`, `subtitle`, `text1`, `text2`, `text3`, `text4`, `text5`, `data`, `data_span`, `question`, `first_choice`, `first_index`, `second_choice`, `second_index`, `slug`) VALUES
(1, 'Vaincre la maladie', 'Le bouleversement de la médeci', 'L\'action du médecin, jusqu\'à présent presque exclusivement tournée vers le diagnostic et le traitement de maladies, élargit progressivement ses objectifs vers le maintien de la santé. En ouvrant la possibilité d\'automatiser les tâches fastidieuses et', 'Un ordinateur contre les maladies chroniques', 'L’intelligence artificielle progresse de jour en jour et suscite de vifs intérêts de la part des firmes informatiques. Ainsi, la société IBM a récemment créé un environnement informatique, baptisé « Watson », entièrement consacré à l’informatique cognitive, tandis que Google rachète de nombreuses entreprises travaillant dans le domaine de l’intelligence artificielle. Mais en quoi consiste exactement l’informatique cognitive ?', 'Cette nouvelle discipline de l’informatique s’appuie sur des systèmes complexes de traitement de l’information pour acquérir, mettre en œuvre et transmettre des connaissances. Le système « Watson » utilise ainsi des algorithmes inspirés de la linguistique, de l’anthropologie, de la psychologie, des neurosciences, de la philosophie ou de l’intelligence artificielle, pour analyser différentes questions. Il génère alors des hypothèses, collecte et met en relation différentes informations, évalue plusieurs réponses possibles et propose un nombre limité de réponses, classées par ordre de pertinence.', 'Chaque choix que nous faisons détermine un peu plus le futur de notre espèce', '', '', '', '', 'Choisir ici', 0, 'Choisir là', 1, 'articles'),
(2, 'Vaincre le handicap', 'Si les fantasme des transhuman', 'Voici par exemples quelques exemples d’innovations pour les personnes en situation de handicap :', 'Une bague liseuse pour les non-voyants', 'Conçue par le MIT, Massachussets Institute of Technology, cette grosse bague est équipée d’une micro-caméra très haute définition qui pourra reconnaître les mots et expression qu’elle filmera. Ceux-ci seront ensuite analysés et retranscrits par le biais d’une synthèse vocale.', 'Comment la faire fonctionner? Il s’agit pour la personne malvoyante de suivre les lignes d’écriture en y passant son doigt. Cependant, ce n’est pas forcément très simple pour une personne atteinte de handicap visuel. C’est pourquoi les ingénieurs du MIT ont incorporé un système de vibration qui, combiné à la précision de la caméra, permettra de guider le doigt afin d’éviter tout décalage de ligne. Cette bague fonctionne sur support papier comme sur support numérique même si elle se limite à une taille de police de caractère de 12 points. Le logiciel de la bague est en open source, ce qui lui permettra d’être en amélioration constante par les contributeurs ayant déjà adhéré au projet.', 'Ne pas choisir c\'est encore choisir', '', '', '', '', 'Choisir', 1, 'Ne pas choisir', 2, 'articles'),
(5, 'Le cerveau augmenté', 'Depuis plusieurs années mainte', 'Certains imaginent déjà différentes méthodes pour hacker le cerveau et repousser ses limites : afin de pouvoir rivaliser avec les machines, si elles venaient à être plus intelligente que les hommes.', 'Augmenter sa mémoire', 'Un implant cérébral pour booster la mémoire humaine a été conçu et testé avec succès par des chercheurs de l\'université de Californie du Sud. ', 'Grâce à une puce implantée dans l’hippocampe, siège de l’apprentissage et de la mémoire, les performances de la mémoire à court terme et de mémoire du travail auraient significativement augmenté.', 'Mais qu’en est-il aujourd’hui, l’Homme augmenté n’est il encore qu’un lointain fantasme ou se cache t-il déjà parmi nous ?', '', '', '', '', 'IA, singularité, et émotions', 0, NULL, NULL, 'map'),
(6, 'Eugénisme', 'olollol', 'lo', 'plkop', 'jiohoi', 'jgui', 'opjo', '', '', '', '', 'IA, singularité, et émotions', 0, 'kopj', NULL, 'map');

-- --------------------------------------------------------

--
-- Structure de la table `map`
--

CREATE TABLE `map` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `first_choice` varchar(50) NOT NULL,
  `first_index` int(11) NOT NULL,
  `slug` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `map`
--

INSERT INTO `map` (`id`, `title`, `first_choice`, `first_index`, `slug`) VALUES
(1, 'Map', 'Suivant', 1, 'transition');

-- --------------------------------------------------------

--
-- Structure de la table `map_article`
--

CREATE TABLE `map_article` (
  `id` int(11) NOT NULL,
  `img_country` varchar(250) CHARACTER SET utf8 NOT NULL,
  `title` varchar(50) NOT NULL,
  `subtitle` varchar(70) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `video` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `text1` text CHARACTER SET utf8 NOT NULL,
  `text2` text CHARACTER SET utf8 NOT NULL,
  `text3` text NOT NULL,
  `source` text CHARACTER SET utf8
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `map_article`
--

INSERT INTO `map_article` (`id`, `img_country`, `title`, `subtitle`, `img`, `video`, `text1`, `text2`, `text3`, `source`) VALUES
(1, 'France', 'Kiwi, un implant dans le cerveau', 'Parkinson, Alzheimer, dépression… un remède ?', NULL, 'https://dai.ly/x6gbudw', 'Connaissez-vous Newton Howard ? Ce professeur à Oxford, par ailleurs créateur du Mind Machine Project au MIT, a mis au point un prototype d\'implant neuronal qui s\'appuie sur la recherche d\'Oxford et du MIT, mais aussi de l\'université de Georgetown et des fabricants de microprocesseurs américains Intel et Qualcomm. Avec sa société ni2o (Neuron Input to Output), il a élaboré Kiwi. De la taille d\'un grain de riz et pesant un peu moins de 2 grammes, cet implant permet de capter des informations envoyées par les neurones, tout comme de leur répondre, après avoir été stimulé par la lumière ou une impulsion électrique. Les informations sont transmises à une appli téléchargée sur un téléphone portable et permettent d\'envoyer des ordres comme allumer ou taper un texte...\r\nImplantée dans le cerveau, cette puce promet de réduire les effets d\'Alzheimer, du Parkinson ou encore de la dépression. À plus long terme, Newton Howard imagine même de cartographier le cerveau en 3D et de se risquer à l\'amélioration cognitive, en augmentant, d\'ici quelques années, la mémoire, la capacité de calcul ou encore la capacité à traduire des phrases.', '', '', 'https://www.20minutes.fr/arts-stars/culture/2276415-20180526-implant-cerveau-newton-howard-donne-raison-etre-homme-augmente'),
(2, 'Etats-Unis', 'Watson, l’intelligence artificielle star d’IBM', 'Une étape dans l’histoire de l’ia', NULL, 'https://youtu.be/dZc8ZW9dJpk', 'Depuis des milliers d’années, un des plus grands rêves de l’Homme a été de créer la vie. Dans notre culture et la mythologie on retrouve le mythe d’Icare, Frankenstein, Ex Machina par exemple. Les machines sont capables de traiter des milliers de données à la seconde, là où cela prendrait des jours pour l’Homme. Cependant les machines répondent simplement à une suite d’instruction mais elles ne sont pas encore capables d’interpréter, prendre des décisions ou même d’apprendre. Vraiment ? L’IA Watson de IBM est capable depuis 2015 de composer de la musique, conseiller des médecins ou même tenter d’évaluer l’humeur de son interlocuteur. C’est une révolution dans l’histoire de l’IA car Watson est capable d\'emmagasiner, de comprendre et de croiser d\'importants volumes d\'informations grâce à des technologies de machine learning, notamment le deep learning. Ce big data est constitué de données structurées chiffrées, mais aussi de données non structurées qui représentent 80% du volume d\'informations existantes. Watson est donc capable de lire des articles de presse ou de recherche, des tweets, des romans ou encore des posts de blogs écrits en anglais et dans sept autres langues, grâce à un entraînement solide réalisé par les chercheurs d\'IBM avec des technique de traitement du langage naturel. Concrètement, ce système de \"cognitive computing\" ingère un corpus de data contextuelles appartenant à un domaine de compétence particulier, comme la cuisine, sélectionnées par les chercheurs et les entreprises clientes. A chaque fois que de nouvelles données pertinentes sont créées sur cette thématique, elles sont ajoutées au corpus pour que la technologie Watson progresse. Les experts d\'IBM entraînent ensuite le logiciel IA à fournir des réponses pertinentes à des centaines de milliers de questions concernant ce corpus de texte, en le corrigeant quand il commet une erreur (technique de machine learning). Une fois qu\'il a compris la question posée, Watson émet une série d\'hypothèses pour y répondre. ', '', '', 'https://www.ibm.com/watson/'),
(3, 'Etats-Unis', 'BrainRobotics', 'Robotique et intelligence artificielle à l\'aide des handicapés', 'https://www.voiture-et-handicap.fr/wordpress/wp-content/uploads/2018/03/main_brain_robotics_une.jpg  ', NULL, 'Grâce aux progrès de la robotique et de l\'intelligence artificielle, le secteur technologique offre de nouveaux espoirs pour améliorer la qualité de vie des handicapés. Le fondateur de BrainRobotics, Bicheng Han, dit vouloir \"fournir une prothèse à bas coût\" mais \"fonctionnelle\", permettant un contrôle précis de la force exercée par chaque doigt. Le système d\'intelligence artificielle repère certaines caractéristiques de ces signaux musculaires, comme leur ampleur par exemple, et \"les passe à travers un algorithme de classification\" qui \"sépare les différents types de gestes\" (poing fermé, index levé, etc). Il transmet ensuite celui qu\'il a identifié et son intensité au moteur de l\'appareil, détaille-t-il. La prothèse est calibrée initialement pour chaque individu en \"entraînant\" l\'intelligence artificielle: l\'utilisateur fournit une base de données de comparaison en répétant chaque \"geste\" à plusieurs reprises. La procédure, qui peut se faire à domicile, devrait prendre moins d\'un mois pour un utilisateur moyen, avec au moins 50% de musculature résiduelle.', '', '', 'https://www.brainrobotics.com/'),
(4, 'Chine', 'Des super-bébés', 'Fécondation in-vitro d’embryon génétiquement modifiés', 'https://img.20mn.fr/1uAWs-LxR_ibQUgCHMS2nA/1200x768_methode-crisp-cas9-permet-modifier-brin-adn.jpg', NULL, 'Lulu et Nana, les premiers bébés génétiquement modifiés, des jumelles, seraient nées en Chine au cours du mois de novembre 2018. Leur génome aurait été altéré alors que leur embryon venait d’être formé par fécondation in vitro afin de désactiver un gène pour leur conférer une résistance à l’infection par le VIH, virus responsable du sida. Les spermatozoïdes auraient été isolés, puis fusionnés avec l’ovule, formant un embryon dans lequel un assemblage Crispr-Cas9 (La technique qui a été utilisée pour modifier le génome des jumelles ) aurait été injecté. Entre trois et cinq jours de développement, quelques cellules auraient été extraites pour s’assurer que l’édition du génome avait bien eu lieu. Au total, seize des vingt-deux embryons obtenus auraient bien été modifiés, onze d’entre eux auraient été utilisés dans six tentatives d’implantation, pour une grossesse double, finalement menée à terme.', '', '', 'https://www.lemonde.fr/sciences/article/2018/11/26/des-bebes-genetiquement-modifies-seraient-nes-en-chine_5388942_1650684.html'),
(5, 'Angleterre', 'Bébé sur-mesure', 'Choisir la couleur des yeux de votre enfant, c’est désormais possible', 'http://futurisme.fr/wp-content/uploads/2018/07/embryon-g%C3%A9n%C3%A9tiquement-modifi%C3%A9-1360x765.jpg', NULL, 'Au Royaume-Uni, une assemblée de scientifique a récemment remis un rapport sur la modification génétique des embryons. Ils militent pour une utilisation encadrée de la manipulation génétique embryonnaire par une technologie appelée CRISPR CAS9. L’objectif premier de cette découverte est de permettre la détection et l’élimination de gènes pouvant causer des maladies tout au long de la vie de l’individu, et ceux, dès la phase embryonnaire. Mais certains en voient une visée plus superficielle comme modifier la couleur des yeux ou des cheveux. D’un point de vue éthique cette avancée scientifique fait débat. Comment CRISPR fonctionne ? Cet acronyme compliqué, désigne le nom d’un « ciseau moléculaire » qui permet de découper des brins d’ADN à des endroits extrêmement précis, permettant aux scientifiques de corriger certaines mutations génétiques pouvant causer des maladies. En laboratoire les chercheurs sont également capables de remplacer certaines portions d’ADN. Cette innovation permet donc de choisir certaines caractéristiques physiques en y implantant la combinaison d’allèles permettant d’obtenir des yeux bleus ou des cheveux blonds.', '', '', 'https://www.breizh-info.com/2018/09/19/102533/crispr-choisir-la-couleur-de-yeux-de-votre-enfant-cest-desormais-possible'),
(6, 'Japon', 'Replay', 'Une caméra dans les yeux', NULL, 'https://youtu.be/-9V9ZaiQ94E', 'La marque Sony a obtenu le feu vert des autorités américaines pour développer des lentilles connectées capables de prendre des photos et des vidéos en un simple clignement d\'oeil. Le système, selon le fabricant, pourrait se déclencher grâce à un simple clignement des yeux de son utilisateur. Des capteurs étant chargés de déterminer s’il s’agit d’un clignement volontaire ou d’un réflexe machinal. Les mouvements de paupières permettent également de faire un zoom ou une mise au point.   Et ce n\'est pas tout. Pour ne dépendre d\'aucune batterie, le système serait rendu autonome en énergie grâce à des capteurs piézoélectriques qui convertirait les mouvements de l’œil en énergie ! ', '', '', 'https://www.numerama.com/tech/168025-sony-imagine-des-lentilles-de-contact-qui-filment-ce-que-vous-voyez.html'),
(7, 'Etats-Unis', 'Micro-Swimmer', 'Le robot qui navigue dans vos veines', NULL, 'https://dai.ly/x3q9j9h', 'Imaginez des robots si miniaturisés qu’ils peuvent s’assembler et naviguer à travers les artères d\'un patient. Des chercheurs à l\'université Drexler, Philadelphie, se sont inspirés d\'une bactérie pour développer ces petites merveilles composées de nanoparticules magnétiques. Leurs missions ? Éviter un acte chirurgical lourd, par exemple en débouchant des artères ou en livrant un médicament à un lieu précis du corps d’un patient. Concrètement, des nanoparticules en fer pilotées par un flux magnétique peuvent s\'assembler et naviguer dans les veines. Une avancée chirurgicale majeure qui pourrait être mise en oeuvre d’ici 2020.', '', '', 'https://www.netexplo.org/fr/veille/innovation/micro-swimmer-robot'),
(8, 'Japon', 'Xenoma e-skin', 'Le T-shirt connecté', NULL, 'https://youtu.be/s3X2NFLY9J0', 'Xenoma, une entreprise Japonaise, travaille sur un prototype de t-shirt connecté destiné à l’usage E-sportif pour les jeux vidéos. Pour les gamers, ce vêtement est une innovation fascinante. Les capteurs présents sur le t-shirt envoient les informations et jouent le rôle d’une manette pour un application ou des jeux vidéos. En portant cet article, le gamer contrôle son personnage par ses propres mouvements. En d’autres termes, les mouvements de l’utilisateur sont transmis sur l’écran. Le t-shirt s-skin pourra même être utilisé avec des casques de réalité virtuelle, pour une immersion encore plus poussée. Cette technologie attire aussi l’attention dans le domaine médical, et plus précisément pour les patients souffrant d’une maladie neurodégénérative. Grâce aux capteurs situés sur le torse, la hanche et les jambes, les mouvements et l’activité du patient peuvent être bien suivis et contrôlés pour détecter des stress ou réflexes. De cette manière, nul besoin de les enfermer ou de les observer. Pour l’instant, la batterie du t-shirt, d’environ 5 cm de diamètre et située au niveau du torse, a une durée d’autonomie de 8 heures. Pour le domaine médical, l’entreprise vise à augmenter cette durée. En effet, Xenoma espère que d’ici 2020, son vêtement sera complètement adapté pour l’utilisation médicale. Lorsque cet objectif sera atteint, le prix du vêtement sera inférieur à 100 €.', '', '', 'https://siecledigital.fr/2018/01/11/xenoma-e-skin-sport-vr/');

-- --------------------------------------------------------

--
-- Structure de la table `transition`
--

CREATE TABLE `transition` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `first_choice` varchar(100) DEFAULT NULL,
  `first_index` int(11) DEFAULT NULL,
  `second_choice` varchar(50) DEFAULT NULL,
  `second_index` int(11) DEFAULT NULL,
  `third_choice` varchar(150) DEFAULT NULL,
  `third_index` int(11) DEFAULT NULL,
  `slug` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `transition`
--

INSERT INTO `transition` (`id`, `title`, `first_choice`, `first_index`, `second_choice`, `second_index`, `third_choice`, `third_index`, `slug`) VALUES
(1, 'transition 1', 'cerveau augmenté', 2, 'eugénisme', 3, NULL, NULL, 'globalpart'),
(2, 'transition 2', 'technoprogressistes', 3, 'californiens', 4, 'extropiens', 5, 'articles');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `end_point`
--
ALTER TABLE `end_point`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `global_part`
--
ALTER TABLE `global_part`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `map`
--
ALTER TABLE `map`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `map_article`
--
ALTER TABLE `map_article`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `transition`
--
ALTER TABLE `transition`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `article`
--
ALTER TABLE `article`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `end_point`
--
ALTER TABLE `end_point`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `global_part`
--
ALTER TABLE `global_part`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `map`
--
ALTER TABLE `map`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `map_article`
--
ALTER TABLE `map_article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `transition`
--
ALTER TABLE `transition`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
