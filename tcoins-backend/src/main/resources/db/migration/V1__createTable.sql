--CREATE DATABASE IF NOT EXISTS tcoins CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
--USE tcoins;

-- -----------------------------------------------------
-- Table planos
-- -----------------------------------------------------
CREATE TABLE planos (
  id SERIAL,
  nome VARCHAR(45) NOT NULL,
  preco DECIMAL(10,2) NOT NULL,
  lojas INT NOT NULL,
  produtos_por_loja INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);


-- -----------------------------------------------------
-- Table user_plano
-- -----------------------------------------------------
CREATE TABLE user_plano (
  id SERIAL,
  user_id INT NOT NULL,
  plano_id INT NOT NULL,
  preco_pago INT NOT NULL,
  data_expiracao DATE NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (plano_id) REFERENCES planos (id)
);


-- -----------------------------------------------------
-- Table user
-- -----------------------------------------------------
CREATE TABLE users (
  id SERIAL,
  plano_vigente INT NULL,
  nome VARCHAR(45) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  codigo_user VARCHAR(10) NOT NULL,
  senha VARCHAR(45) NOT NULL,
  google_token_id VARCHAR(45) NULL,
  imagem BYTEA NULL,
  deleted BOOL NOT NULL DEFAULT false,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (plano_vigente) REFERENCES user_plano (id)
);

-- -----------------------------------------------------
-- Alter table user_plano
-- -----------------------------------------------------
ALTER TABLE user_plano ADD FOREIGN KEY (user_id) REFERENCES users (id);


-- -----------------------------------------------------
-- Table loja_ramos
-- -----------------------------------------------------
CREATE TABLE loja_ramos (
  id SERIAL,
  ramo VARCHAR(30) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);



-- -----------------------------------------------------
-- Table loja
-- -----------------------------------------------------
CREATE TABLE loja (
  id SERIAL,
  dono_id INT NOT NULL,
  ramo_id INT NOT NULL,
  nome VARCHAR(45) NOT NULL UNIQUE,
  descricao TEXT NULL,
  latitude DECIMAL(10,8) NOT NULL,
  longitude DECIMAL(11,8) NOT NULL,
  imagem BYTEA NULL,
  deleted BOOL NOT NULL DEFAULT false,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (dono_id) REFERENCES users (id),
  FOREIGN KEY (ramo_id) REFERENCES loja_ramos (id)
);



-- -----------------------------------------------------
-- Table produto
-- -----------------------------------------------------
CREATE TABLE produto (
  id SERIAL,
  loja_id INT NOT NULL,
  nome VARCHAR(45) NOT NULL,
  descricao TEXT NOT NULL,
  preco_tcoins DECIMAL(10,2) NULL,
  valor_recompensa DECIMAL(10,2) NULL,
  imagem BYTEA NULL,
  deleted BOOL NOT NULL DEFAULT false,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (loja_id) REFERENCES loja (id)
);



-- -----------------------------------------------------
-- Table receita_mensal
-- -----------------------------------------------------
CREATE TABLE receita_mensal (
  id SERIAL,
  user_id INT NOT NULL,
  loja_id INT NOT NULL,
  valor DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (loja_id) REFERENCES loja (id)
);



-- -----------------------------------------------------
-- Table pedido
-- -----------------------------------------------------
CREATE TABLE pedido (
  id SERIAL,
  cliente_id INT NOT NULL,
  uso_saldo BOOL NOT NULL DEFAULT false,
  deleted BOOL NOT NULL DEFAULT false,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (cliente_id) REFERENCES users (id)
);



-- -----------------------------------------------------
-- Table pedido_produto
-- -----------------------------------------------------
CREATE TABLE pedido_produto (
  id SERIAL,
  pedido_id INT NOT NULL,
  produto_id INT NOT NULL,
  qtd_produto INT NOT NULL,
  preco_tcoins DECIMAL(10,2) NULL,
  valor_recompensa DECIMAL(10,2) NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (pedido_id) REFERENCES pedido (id),
  FOREIGN KEY (produto_id) REFERENCES produto (id)
);



-- -----------------------------------------------------
-- Table despesa_mensal
-- -----------------------------------------------------
CREATE TABLE despesa_mensal (
  id SERIAL,
  user_id INT NOT NULL,
  loja_id INT NOT NULL,
  valor DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (loja_id) REFERENCES loja (id)
);
