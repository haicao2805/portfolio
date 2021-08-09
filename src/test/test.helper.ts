interface FakeDataType {
      letters: string;
      numbers: string;
      lowwercaseLetters: string;
      uppercaseLetters: string;
      lowwercaseLettersAndNumbers: string;
      uppercaseLettersAndNumbers: string;
      lettersAndNumbers: string;
}

const fakeDataPattern: FakeDataType = {
      letters: 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM',
      numbers: '0123456789',
      lowwercaseLetters: 'qwertyuiopasdfghjklzxcvbnm',
      uppercaseLetters: 'QWERTYUIOPASDFGHJKLZXCVBNM',
      lowwercaseLettersAndNumbers: 'qwertyuiopasdfghjklzxcvbnm0123456789',
      uppercaseLettersAndNumbers: 'QWERTYUIOPASDFGHJKLZXCVBNM0123456789',
      lettersAndNumbers: 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789',
};

export function fakeData(length: number, type: keyof FakeDataType = 'lettersAndNumbers') {
      let result = '';
      const pattern = fakeDataPattern[type];
      const patternLength = fakeDataPattern[type].length;
      for (let i = 1; i <= length; i++) {
            result += pattern.charAt(Math.floor(Math.random() * patternLength));
      }
      return result;
}

export const generateCookie = (token: string) => `token=${token}; `;
