import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

/**
 * Access the user role from the request object i.e `req.user.role`.
 *
 * You can pass an optional property key to the decorator to get it from the user object
 * e.g `@UserRole('permissions')` will return the `req.user.permissions` instead.
 */
export const UserRole = createParamDecorator(
  (data: string, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext<{ req: { user: any } }>().req;
    if (!request.user) {
      return null;
    }
    return data ? request.user[data] : request.user.role;
  },
);
