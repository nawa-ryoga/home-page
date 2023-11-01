import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";

export const domPurify = () => {
  const window = new JSDOM("").window;
  const purify = DOMPurify(window);

  return purify;
};
