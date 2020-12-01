import {MigrationInterface, QueryRunner} from "typeorm";

export class AddDoneField1606827803792 implements MigrationInterface {
    name = 'AddDoneField1606827803792'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" RENAME COLUMN "description" TO "done"`);
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "done"`);
        await queryRunner.query(`ALTER TABLE "task" ADD "done" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "done"`);
        await queryRunner.query(`ALTER TABLE "task" ADD "done" character varying(500) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "task" RENAME COLUMN "done" TO "description"`);
    }

}
