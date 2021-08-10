import { EntityRepository, Repository } from 'typeorm';

// --- Entity --- //
import { Token } from './token.entity';

@EntityRepository(Token)
export class TokenRepository extends Repository<Token> {}
