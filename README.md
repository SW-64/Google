<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
# Google
## 작동원리
### app.module.ts

GoogleStrategy와 AppController를 imports하고 있습니다.
GoogleStrategy를 providers에 등록하여 의존성 주입이 가능하도록 하고 있습니다.

### google.strategy.ts

GoogleStrategy 클래스는 PassportStrategy를 상속받아 구글 OAuth2 인증 전략을 구현하고 있습니다.
constructor에서 구글 클라이언트 ID, 클라이언트 시크릿, 콜백 URL 등의 옵션을 설정하고 있습니다.
validate 메서드에서는 구글 인증 과정에서 받은 사용자 정보(이메일, 이름, 프로필 사진 등)를 처리하여 done 콜백 함수에 반환하고 있습니다.

### app.controller.ts

@Controller('google') 데코레이터를 사용하여 /google 엔드포인트를 정의하고 있습니다.
@Get() 엔드포인트와 @Get('redirect') 엔드포인트를 정의하고 있습니다.
@UseGuards(AuthGuard('google')) 데코레이터를 사용하여 구글 인증 가드를 적용하고 있습니다.
googleAuth 메서드와 googleAuthRedirect 메서드를 정의하고 있습니다.



1. 사용자가 /google 엔드포인트에 접근하면 googleAuth 메서드가 실행됩니다.
2. @UseGuards(AuthGuard('google')) 데코레이터에 의해 구글 인증 가드가 적용됩니다.
3. 구글 인증 가드는 GoogleStrategy를 사용하여 사용자의 구글 계정 인증 정보를 검증합니다.
4. 인증이 성공하면 googleAuth 메서드의 내부 로직이 실행됩니다. (현재는 구현되어 있지 않음)
5. 사용자가 구글 로그인에 성공하면 /google/redirect 엔드포인트로 리디렉션됩니다.
6. googleAuthRedirect 메서드가 실행되어 AppService의 googleLogin 메서드를 호출합니다.
7. AppService의 googleLogin 메서드가 실행됩니다. 이 메서드에서는 구글 OAuth2 인증 프로세스에서 받은 정보(액세스 토큰, 사용자 프로필 등)를 처리할 것입니다.
8. 사용자 정보를 데이터베이스에 저장하거나 세션에 저장할 수 있습니다.
9. 사용자를 로그인 처리합니다.
10. 클라이언트에게 적절한 응답(예: 토큰, 사용자 정보 등)을 반환합니다.

즉, googleAuthRedirect 메서드는 구글 OAuth2 인증 프로세스의 두 번째 단계를 처리하고, 사용자 정보 저장, 로그인 처리 등의 추가적인 로직을 수행할 것으로 보입니다.

이를 통해 구글 소셜 로그인 기능이 완성되는 것입니다. 사용자가 구글 계정으로 로그인하면 애플리케이션에서 해당 사용자 정보를 활용할 수 있게 됩니다.

