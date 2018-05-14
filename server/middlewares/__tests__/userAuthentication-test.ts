import {NextFunction, Request, Response} from 'express';
import httpMocks from 'node-mocks-http';
import {isUserAuthenticated} from '../userAuthentication';

describe('isUserAuthenticated()', () => {
  let req: Request;
  let res: Response;
  let next: NextFunction;
  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn();
  });

  test('should have call next() if user authenticated', async () => {
    req.isAuthenticated = () => true;
    await isUserAuthenticated(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  test('should not call next() if user not authenticated', async () => {
    req.isAuthenticated = () => false;
    await isUserAuthenticated(req, res, next);
    expect(next).not.toHaveBeenCalled();
  });
});
