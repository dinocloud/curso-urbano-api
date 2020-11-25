import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTaskTable1606246155031 implements MigrationInterface {
    name = 'CreateTaskTable1606246155031'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "task" ("id" SERIAL NOT NULL, "title" character varying(10) NOT NULL, "description" character varying(500) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_3399e2710196ea4bf734751558f" UNIQUE ("title"), CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "task"`);
    }

}
