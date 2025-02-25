import { Key } from 'path-to-regexp';
import { HandlerMethod, HttpMethod, HTTP_METHOD_TOKEN } from '../decorators';
import { loadPackage } from './loadPackage';

export function findRoute(
  cls: Record<string, any>,
  requestMethod: string,
  path: string
): [Key[], RegExpExecArray | null | undefined, HandlerMethod | undefined] {
  const methods: Array<HandlerMethod> = Reflect.getMetadata(HTTP_METHOD_TOKEN, cls);

  const { pathToRegexp } = loadPackage('path-to-regexp');
  if (!pathToRegexp) {
    const method = methods.find(
      f =>
        f.path === path &&
        (f.method === requestMethod || f.options?.extraMethods?.includes(requestMethod as HttpMethod))
    );
    return [
      [],
      undefined,
      method ??
        methods.find(
          f =>
            f.path === '/' &&
            (f.method === requestMethod || f.options?.extraMethods?.includes(requestMethod as HttpMethod))
        )
    ];
  }

  let keys: Key[] = [];
  let match: RegExpExecArray | null | undefined;
  const method = methods.reverse().find(f => {
    const { regexp, keys: keysTmp } = pathToRegexp(f.path);
    keys = keysTmp;
    match = regexp.exec(path);

    const condition =
      (f.method === requestMethod || f.options?.extraMethods?.includes(requestMethod as HttpMethod)) && match?.length;

    if (!condition) {
      keys = [];
      match = undefined;
    }

    return condition;
  });

  return [keys, match, method];
}
