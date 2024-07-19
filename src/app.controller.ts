import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('google')
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly appService: AppService) {}

  // 구글 인증 가드  AuthGuard('google')
  // UseGuards를 사용하면 특정 엔드포인트에 대한 접근권한 제어
  // 즉 구글 인증 가드로 인해 인증 정보를 검증하고 성공해야만 googldAuth 메소드를 실행할 수 있다.
  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.appService.googleLogin(req);
  }
}
