import { TestingModule, Test } from '@nestjs/testing';
import { AppModule } from '../app.module';
import { router } from '../router';

// --- Repository --- //
import { UserRepository } from '../user/entities/user.repository';
import { TokenRepository } from '../auth/entities/token.repository';
import { BlogRepository } from '../blog/entities/blog.repository';

export const resetDatabase = async (module: TestingModule) => {
      const blogRepository = module.get<BlogRepository>(BlogRepository);
      blogRepository.clear();

      const tokenRepository = module.get<TokenRepository>(TokenRepository);
      tokenRepository.clear();

      const userRepository = module.get<UserRepository>(UserRepository);
      userRepository.clear();
};

export const initTestModule = async () => {
      const module: TestingModule = await Test.createTestingModule({ imports: [AppModule] }).compile();

      const appTest = module.createNestApplication();
      router(appTest);

      const getAppTest = await appTest.init();

      return {
            module,
            getAppTest,
            appTest,
            resetDataBase: async () => resetDatabase(module),
      };
};
