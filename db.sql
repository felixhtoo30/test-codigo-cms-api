CREATE TABLE `voucher`
(
  `id`            INT(11) NOT NULL auto_increment,
  `title`          VARCHAR(255) NULL,
  `description` VARCHAR(500) NULL,
  `expiry_date`   DATE NOT NULL,
  `img`     VARCHAR(500) NULL,
  `amount`    VARCHAR(30) NOT NULL,
  `qty`    INT NOT NULL,
  `buy_type`    INT NOT NULL,
  `pay_method`    INT NOT NULL,
  `active_state` INT NOT NULL DEFAULT 1,
  `max_buy_limit` INT NULL,
  `max_gift_limit` INT NULL,
  `created_at`    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  `updated_at`    TIMESTAMP on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (`id`)
);

CREATE TABLE `pay_method`
(
  `id`            INT(11) NOT NULL auto_increment,
  `name`          VARCHAR(50) NOT NULL,
  `created_at`    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  `updated_at`    TIMESTAMP on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (`id`)
);
INSERT INTO `pay_method` (`id`, `name`, `created_at`, `updated_at`) VALUES (NULL, 'VISA', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO `pay_method` (`id`, `name`, `created_at`, `updated_at`) VALUES (NULL, 'MasterCard', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO `pay_method` (`id`, `name`, `created_at`, `updated_at`) VALUES (NULL, 'JCB', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO `pay_method` (`id`, `name`, `created_at`, `updated_at`) VALUES (NULL, 'PayPal', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
engine = innodb charset=utf8mb4 COLLATE utf8mb4_general_ci;