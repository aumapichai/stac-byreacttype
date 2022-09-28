import { HtmlRenderer, Parser } from "commonmark";
import path from "path";
import url from "url";
import bs58 from "bs58";

export const MARKDOWN_READER = new Parser({
  smart: true,
});

export const MARKDOWN_WRITER = new HtmlRenderer({
  safe: true,
  softbreak: "<br />",
});

export const makeRelative = (mainURL: string, uri: string) => {
  const rootURI = url.parse(mainURL);
  const localURI = url.parse(uri);

  if (rootURI.hostname !== localURI.hostname) {
    return uri;
  }

  const rootPath = rootURI?.path?.split("/").slice(0, -1).join("/");
  return path.relative(
    rootPath ? rootPath : "",
    `${localURI.path}${localURI.hash || ""}`
  );
};

export const slugify = (mainURL: string, uri: string) => {
  return bs58.encode(Buffer.from(makeRelative(mainURL, uri)));
};

export const slugURL = (uri: string) => {
  return bs58.encode(Buffer.from(uri));
};

export const decodeURL = (s: string) => {
  const dataAsUint8Arr = bs58.decode(s);
  const jsonString = Buffer.from(dataAsUint8Arr).toString("utf8");
  return jsonString;
};

const resolve = (href: string, base: string) => {
  // Encode colons from all but schema, as they create errors in URL resolving.
  const proxiedUri = href;
  const hrefEncoded = proxiedUri
    .replace(":", encodeURIComponent(":"))
    .replace(encodeURIComponent(":") + "//", "://");
  return new URL(hrefEncoded, base).toString();
};

export const decode = (s: string, b: string) => {
  try {
    return resolve(bs58.decode(s).toString(), b);
  } catch (err) {
    console.warn(err);
    return `/`;
  }
};

export const isValidDate = (date: any) => {
  return (
    date &&
    Object.prototype.toString.call(date) === "[object Date]" &&
    !isNaN(date)
  );
};
