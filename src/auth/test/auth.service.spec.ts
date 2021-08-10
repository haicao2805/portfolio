import { INestApplication } from '@nestjs/common';
import { initTestModule } from '../../test/initTest';
import { fakeData } from '../../test/test.helper';

// --- Service --- //
import { UserService } from '../../user/user.service';
import { AuthService } from '../auth.service';

// --- Entity --- //
import { User } from '../../user/entities/user.entity';
import { Token } from '../entities/token.entity';

describe('AuthService', () => {
      let app: INestApplication;
      let authService: AuthService;
      let userService: UserService;
      let resetDB: any;

      beforeAll(async () => {
            const { appTest, getAppTest, module, resetDataBase } = await initTestModule();
            app = getAppTest; // or app = await appTest.init();
            authService = module.get<AuthService>(AuthService);
            userService = module.get<UserService>(UserService);
            resetDB = resetDataBase;
      });

      describe('createToken', () => {
            let googleIdFake: string;
            beforeEach(() => {
                  googleIdFake = fakeData(21, 'numbers');
            });

            it('Pass', async () => {
                  const res = await authService.createToken(googleIdFake);
                  const verifyRes = authService.verifyToken<Token>(res);
                  expect(res).toBeDefined();
                  expect(verifyRes.data).toBe(googleIdFake);
            });
      });

      describe('clearToken', () => {
            let googleIdFake: string;
            beforeEach(async () => {
                  googleIdFake = fakeData(21, 'numbers');
                  await authService.createToken(googleIdFake);
            });

            it('Pass', async () => {
                  const res = await authService.clearToken(googleIdFake);
                  expect(res.affected).toBe(1);
            });
      });

      describe('encryptToken', () => {
            let googleIdFake: string;
            let token: Token;
            beforeEach(async () => {
                  googleIdFake = fakeData(21, 'numbers');
                  token = new Token();
                  token.data = googleIdFake;
            });

            it('Pass', () => {
                  const res = authService.encryptToken(token);
                  expect(res).toBeDefined();
            });
      });

      describe('verifyToken', () => {
            let googleIdFake: string;
            let jwtString: string;
            let token: Token;
            beforeEach(async () => {
                  googleIdFake = fakeData(21, 'numbers');
                  token = new Token();
                  token.data = googleIdFake;
                  jwtString = authService.encryptToken(token);
            });

            it('Pass', () => {
                  const res = authService.verifyToken<Token>(jwtString);
                  expect(res.data).toBe(googleIdFake);
            });
      });

      describe('findTokenByField', () => {
            let googleIdFake: string;

            beforeEach(async () => {
                  googleIdFake = fakeData(21, 'numbers');
                  await authService.createToken(googleIdFake);
            });

            it('Pass', async () => {
                  const res = await authService.findTokenByField('data', googleIdFake);

                  expect(res).toBeDefined();
                  expect(res.data).toBe(googleIdFake);
            });

            it('Fail (not found)', async () => {
                  const res = await authService.findTokenByField('data', fakeData(21, 'numbers'));

                  expect(res).toBeUndefined();
            });
      });

      describe('getUserByToken', () => {
            let googleIdFake: string;
            let user: User;
            let jwtString: string;

            beforeEach(async () => {
                  googleIdFake = fakeData(21, 'numbers');
                  user = new User();
                  user.googleId = googleIdFake;
                  user = await userService.saveUser(user);
                  jwtString = await authService.createToken(user.googleId);
            });

            it('Pass', async () => {
                  const res = await authService.getUserByToken(jwtString);
                  console.log(res);
                  expect(res.googleId).toBe(googleIdFake);
            });
      });

      afterAll(async () => {
            await resetDB();
            await app.close;
      });
});
