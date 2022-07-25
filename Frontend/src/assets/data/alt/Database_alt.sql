-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema BackendMichiPortfolio
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema BackendMichiPortfolio
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `BackendMichiPortfolio` DEFAULT CHARACTER SET utf8 ;
USE `BackendMichiPortfolio` ;

-- -----------------------------------------------------
-- Table `BackendMichiPortfolio`.`Persona`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BackendMichiPortfolio`.`Persona` (
  `idPersona` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(60) NOT NULL,
  `cuil` VARCHAR(11) NOT NULL,
  `fecha_nacimiento` DATE NULL,
  `avatar` VARCHAR(200) NULL,
  `descripcion` VARCHAR(200) NULL,
  `posicion` VARCHAR(45) NULL,
  PRIMARY KEY (`idPersona`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `BackendMichiPortfolio`.`Contacto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BackendMichiPortfolio`.`Contacto` (
  `idContacto` INT NOT NULL AUTO_INCREMENT,
  `telefono` VARCHAR(60) NULL,
  `tel_celular` VARCHAR(20) NOT NULL,
  `mail` VARCHAR(75) NOT NULL,
  `Persona_idPersona` INT NOT NULL,
  PRIMARY KEY (`idContacto`),
  INDEX `fk_Telefono_Persona1_idx` (`Persona_idPersona` ASC),
  CONSTRAINT `fk_Telefono_Persona1`
    FOREIGN KEY (`Persona_idPersona`)
    REFERENCES `BackendMichiPortfolio`.`Persona` (`idPersona`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `BackendMichiPortfolio`.`NivelED`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BackendMichiPortfolio`.`NivelED` (
  `idNivelED` INT NOT NULL AUTO_INCREMENT,
  `nivel` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idNivelED`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `BackendMichiPortfolio`.`Educación`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BackendMichiPortfolio`.`Educación` (
  `idEducacion` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(150) NOT NULL,
  `institucion` VARCHAR(150) NOT NULL,
  `anio_inicio` SMALLINT(4) NOT NULL,
  `anio_egreso` SMALLINT(4) NULL,
  `Persona_idPersona` INT NOT NULL,
  `NivelED_idNivelED` INT NOT NULL,
  PRIMARY KEY (`idEducacion`),
  INDEX `fk_Educación_Persona_idx` (`Persona_idPersona` ASC),
  INDEX `fk_Educación_Nivel1_idx` (`NivelED_idNivelED` ASC),
  CONSTRAINT `fk_Educación_Persona`
    FOREIGN KEY (`Persona_idPersona`)
    REFERENCES `BackendMichiPortfolio`.`Persona` (`idPersona`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Educación_Nivel1`
    FOREIGN KEY (`NivelED_idNivelED`)
    REFERENCES `BackendMichiPortfolio`.`NivelED` (`idNivelED`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `BackendMichiPortfolio`.`Experiencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BackendMichiPortfolio`.`Experiencia` (
  `idExperiencia` INT NOT NULL AUTO_INCREMENT,
  `posicion` VARCHAR(60) NULL,
  `lugar` VARCHAR(150) NULL,
  `anio_inicio` SMALLINT(4) NULL,
  `anio_egreso` SMALLINT(4) NULL,
  `Persona_idPersona` INT NOT NULL,
  PRIMARY KEY (`idExperiencia`),
  INDEX `fk_Experiencia_Persona1_idx` (`Persona_idPersona` ASC),
  CONSTRAINT `fk_Experiencia_Persona1`
    FOREIGN KEY (`Persona_idPersona`)
    REFERENCES `BackendMichiPortfolio`.`Persona` (`idPersona`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `BackendMichiPortfolio`.`TipoSkill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BackendMichiPortfolio`.`TipoSkill` (
  `idTipoSkill` INT NOT NULL,
  `tipo_skill` VARCHAR(4) NOT NULL,
  PRIMARY KEY (`idTipoSkill`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `BackendMichiPortfolio`.`Skills`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BackendMichiPortfolio`.`Skills` (
  `idSkills` INT NOT NULL AUTO_INCREMENT,
  `habilidad` VARCHAR(100) NOT NULL,
  `nivel` VARCHAR(14) NOT NULL,
  `Persona_idPersona` INT NOT NULL,
  `TipoSkill_idTipoSkill` INT NOT NULL,
  PRIMARY KEY (`idSkills`),
  INDEX `fk_Skills_Persona1_idx` (`Persona_idPersona` ASC),
  INDEX `fk_Skills_TipoSkill1_idx` (`TipoSkill_idTipoSkill` ASC),
  CONSTRAINT `fk_Skills_Persona1`
    FOREIGN KEY (`Persona_idPersona`)
    REFERENCES `BackendMichiPortfolio`.`Persona` (`idPersona`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Skills_TipoSkill1`
    FOREIGN KEY (`TipoSkill_idTipoSkill`)
    REFERENCES `BackendMichiPortfolio`.`TipoSkill` (`idTipoSkill`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `BackendMichiPortfolio`.`Provincia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BackendMichiPortfolio`.`Provincia` (
  `idProvincia` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`idProvincia`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `BackendMichiPortfolio`.`Localidad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BackendMichiPortfolio`.`Localidad` (
  `idLocalidad` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(60) NOT NULL,
  `Provincia_idProvincia` INT NOT NULL,
  PRIMARY KEY (`idLocalidad`),
  INDEX `fk_Localidad_Provincia1_idx` (`Provincia_idProvincia` ASC),
  CONSTRAINT `fk_Localidad_Provincia1`
    FOREIGN KEY (`Provincia_idProvincia`)
    REFERENCES `BackendMichiPortfolio`.`Provincia` (`idProvincia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `BackendMichiPortfolio`.`Domicilio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BackendMichiPortfolio`.`Domicilio` (
  `idDomicilio` INT NOT NULL AUTO_INCREMENT,
  `calle` VARCHAR(50) NOT NULL,
  `numero` VARCHAR(10) NOT NULL,
  `piso` VARCHAR(3) NULL,
  `departamento` VARCHAR(5) NULL,
  `barrio` VARCHAR(60) NOT NULL,
  `Persona_idPersona` INT NOT NULL,
  `Localidad_idLocalidad` INT NOT NULL,
  PRIMARY KEY (`idDomicilio`),
  INDEX `fk_Domicilio_Persona1_idx` (`Persona_idPersona` ASC),
  INDEX `fk_Domicilio_Localidad1_idx` (`Localidad_idLocalidad` ASC),
  CONSTRAINT `fk_Domicilio_Persona1`
    FOREIGN KEY (`Persona_idPersona`)
    REFERENCES `BackendMichiPortfolio`.`Persona` (`idPersona`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Domicilio_Localidad1`
    FOREIGN KEY (`Localidad_idLocalidad`)
    REFERENCES `BackendMichiPortfolio`.`Localidad` (`idLocalidad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `BackendMichiPortfolio`.`Mensajeria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BackendMichiPortfolio`.`Mensajeria` (
  `idMensajeria` INT NOT NULL AUTO_INCREMENT,
  `tag` VARCHAR(45) NOT NULL,
  `Contacto_idContacto` INT NOT NULL,
  PRIMARY KEY (`idMensajeria`),
  INDEX `fk_Mensajeria_Telefono1_idx` (`Contacto_idContacto` ASC),
  CONSTRAINT `fk_Mensajeria_Telefono1`
    FOREIGN KEY (`Contacto_idContacto`)
    REFERENCES `BackendMichiPortfolio`.`Contacto` (`idContacto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `BackendMichiPortfolio`.`RedSocial`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BackendMichiPortfolio`.`RedSocial` (
  `idRedSocial` INT NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(45) NOT NULL,
  `repositorio` VARCHAR(45) NULL,
  `Contacto_idContacto` INT NOT NULL,
  PRIMARY KEY (`idRedSocial`),
  INDEX `fk_Red social_Telefono1_idx` (`Contacto_idContacto` ASC),
  CONSTRAINT `fk_Red social_Telefono1`
    FOREIGN KEY (`Contacto_idContacto`)
    REFERENCES `BackendMichiPortfolio`.`Contacto` (`idContacto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
