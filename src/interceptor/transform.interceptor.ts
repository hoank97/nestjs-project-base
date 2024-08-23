import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<Response<T>>> {
    console.log('INTERCEPTOR-BEGIN');

    const now = Date.now();
    return next.handle().pipe(
      switchMap(async (data) => {
        // Run your async logic here
        // await this.sleep(2); // Assuming you have an async function to run

        // Return the transformed data
        console.log('INTERCEPTOR-END');
        return { data, statusCode: HttpStatus.OK };
      }),
      tap(() => {
        console.log('INTERCEPTOR-END');
        return console.log({ Take: `${Date.now() - now}ms` });
      }),
    );
  }

  async sleep(seconds: number) {
    await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }
}
