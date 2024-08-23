import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // console.log({ middleware: { path: req.path, body: req.body } });
    console.log('MIDDLEWARE-BEGIN');
    

    const { ip, method, path: url } = req;
    const userAgent = req.get('user-agent') || '';

    res.on('close', () => {
      const { statusCode } = res;
      const contentLength = res.get('content-length');
      console.log('MIDDLEWARE-END');

      // console.log({
      //   middleware: { method, url, statusCode, contentLength, userAgent, ip },
      // });
    });

    next();
  }
}
