import { globalStyle } from "@vanilla-extract/css";
import { DEFAULT_BACKGROUND_COLOR } from "../kuma.config";

/**
 * 現在(2023年10月時点)の Kuma UI では、グローバルなCSSを指定することができない
 * よって、これだけは vanilla-extract を使用して設定する
 */
globalStyle("html, body", {
  background: DEFAULT_BACKGROUND_COLOR,
  color: "white",
});
