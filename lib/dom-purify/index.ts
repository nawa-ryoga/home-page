// import DOMPurify from "dompurify";
// import type { DOMPurify as DOMPurifyType } from "dompurify";
// import { JSDOM } from "jsdom";

// export const purify = () => {
// 	const window = new JSDOM("").window;
// 	const purify = DOMPurify(window);

// 	return purify;
// };

// export const sanitize = (evilHTML: string, purify: DOMPurifyType) => {
// 	return purify.sanitize(evilHTML, {
// 		USE_PROFILES: { html: true },
// 	});
// };
