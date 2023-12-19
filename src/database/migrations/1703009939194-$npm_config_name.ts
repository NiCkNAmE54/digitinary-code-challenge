import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1703009939194 implements MigrationInterface {
    name = ' $npmConfigName1703009939194'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`weather\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`type\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pokemon\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`pokedexNumber\` int NOT NULL, \`imgName\` varchar(255) NOT NULL, \`generation\` int NOT NULL, \`evolutionStage\` int NOT NULL, \`evolved\` tinyint NOT NULL, \`crossGen\` tinyint NOT NULL, \`statTotal\` int NOT NULL, \`attack\` int NOT NULL, \`defense\` int NOT NULL, \`stamina\` int NOT NULL, \`legendary\` tinyint NOT NULL, \`acquireable\` tinyint NOT NULL, \`spawns\` tinyint NOT NULL, \`regional\` tinyint NOT NULL, \`raidable\` tinyint NOT NULL, \`hatchable\` tinyint NOT NULL, \`shiny\` tinyint NOT NULL, \`nest\` tinyint NOT NULL, \`isNew\` tinyint NOT NULL, \`notGettable\` tinyint NOT NULL, \`futureEvolve\` tinyint NOT NULL, \`cpAt40\` int NOT NULL, \`cpAt39\` int NOT NULL, \`familyIdId\` int NULL, \`type1Id\` int NULL, \`type2Id\` int NULL, \`weather1Id\` int NULL, \`weather2Id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`family\` (\`id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`pokemon\` ADD CONSTRAINT \`FK_2cc7f96ad849b6a53fca5819415\` FOREIGN KEY (\`familyIdId\`) REFERENCES \`family\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pokemon\` ADD CONSTRAINT \`FK_a32423ad7e4bbba8526319cd500\` FOREIGN KEY (\`type1Id\`) REFERENCES \`type\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pokemon\` ADD CONSTRAINT \`FK_9197e5a4b4b64e6dff69ceb2c89\` FOREIGN KEY (\`type2Id\`) REFERENCES \`type\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pokemon\` ADD CONSTRAINT \`FK_2d3e6e047d3a2da18214f536885\` FOREIGN KEY (\`weather1Id\`) REFERENCES \`weather\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pokemon\` ADD CONSTRAINT \`FK_48aa02e32501e715b3077993f3c\` FOREIGN KEY (\`weather2Id\`) REFERENCES \`weather\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pokemon\` DROP FOREIGN KEY \`FK_48aa02e32501e715b3077993f3c\``);
        await queryRunner.query(`ALTER TABLE \`pokemon\` DROP FOREIGN KEY \`FK_2d3e6e047d3a2da18214f536885\``);
        await queryRunner.query(`ALTER TABLE \`pokemon\` DROP FOREIGN KEY \`FK_9197e5a4b4b64e6dff69ceb2c89\``);
        await queryRunner.query(`ALTER TABLE \`pokemon\` DROP FOREIGN KEY \`FK_a32423ad7e4bbba8526319cd500\``);
        await queryRunner.query(`ALTER TABLE \`pokemon\` DROP FOREIGN KEY \`FK_2cc7f96ad849b6a53fca5819415\``);
        await queryRunner.query(`DROP TABLE \`family\``);
        await queryRunner.query(`DROP TABLE \`pokemon\``);
        await queryRunner.query(`DROP TABLE \`type\``);
        await queryRunner.query(`DROP TABLE \`weather\``);
    }

}
