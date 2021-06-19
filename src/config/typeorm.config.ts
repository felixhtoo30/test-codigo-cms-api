import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'freedb.tech',
    port: 3306,
    username: 'freedbtech_htooantdev',
    password: 'admin123',
    database: 'freedbtech_cmsevoucher',
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}'
    ],
    synchronize: false,
  }