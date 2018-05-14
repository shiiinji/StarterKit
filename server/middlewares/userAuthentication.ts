import {NextFunction, Request, Response} from 'express';

// Temporary declare code, @types/passport index.d.ts's declare global > Express > Request does not work. You can remove this code, if you can confirm working of @types/passport index.d.ts correctly for isAuthenticated.
declare global {
  namespace Express {
    interface Request {
      isAuthenticated(): boolean;
    }
  }
}

export const isUserAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(240).json({
      message: 'You have no permission...',
    });
  }
};
