import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCommentTable1606696640706 implements MigrationInterface {
    name = 'CreateCommentTable1606696640706'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "comment" ("id" SERIAL NOT NULL, "body" character varying(500) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "taskId" integer, CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_9fc19c95c33ef4d97d09b72ee95" FOREIGN KEY ("taskId") REFERENCES "task"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_9fc19c95c33ef4d97d09b72ee95"`);
        await queryRunner.query(`DROP TABLE "comment"`);
    }

}
