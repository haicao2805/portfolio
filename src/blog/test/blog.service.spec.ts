import { INestApplication } from '@nestjs/common';
import { initTestModule } from '../../test/initTest';
import { BlogService } from '../blog.service';

describe('BlogService', () => {
      let app: INestApplication;
      let resetDB: any;
      let blogService: BlogService;

      beforeAll(async () => {
            const { getAppTest, module, resetDataBase } = await initTestModule();
            app = getAppTest;
            blogService = module.get<BlogService>(BlogService);
            resetDB = resetDataBase;
      });
});
