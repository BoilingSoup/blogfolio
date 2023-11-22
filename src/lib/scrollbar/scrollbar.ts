export const scrollBorderCssVar = "--scroll-border-color";
export const scrollThumbBgCssVar = "--scroll-thumb-bg";
export const scrollTrackBgCssVar = "--scroll-track-bg";

export const scrollBorderLight = "#52525b";
export const scrollThumbBgLight = "#e2e8f0";
export const scrollTrackBgLight = "#27272a";

export const scrollBorderDark = "#1c1c1c";
export const scrollThumbBgDark = "#6b6b6b";
export const scrollTrackBgDark = "#1c1c1c";

export function setDarkScrollBar(isDarkMode: boolean) {
  if (isDarkMode) {
    _applyStyles({
      border: scrollBorderDark,
      thumbBg: scrollThumbBgDark,
      trackBg: scrollTrackBgDark
    });
    return;
  }
  _applyStyles({
    border: scrollBorderLight,
    thumbBg: scrollThumbBgLight,
    trackBg: scrollTrackBgLight
  });
}

/** internal junk below
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

type _scrollBarVar = typeof scrollBorderCssVar | typeof scrollThumbBgCssVar | typeof scrollTrackBgCssVar;

type _borderOptions = typeof scrollBorderDark | typeof scrollBorderLight;
type _thumbBgOptions = typeof scrollThumbBgDark | typeof scrollThumbBgLight;
type _trackBgOptions = typeof scrollTrackBgDark | typeof scrollTrackBgLight;

type _scrollBarValue = _borderOptions | _thumbBgOptions | _trackBgOptions;

type _scrollStyles = {
  border: _borderOptions;
  thumbBg: _thumbBgOptions;
  trackBg: _trackBgOptions;
};

function _setScrollBarProperty(property: _scrollBarVar, value: _scrollBarValue) {
  document.documentElement.style.setProperty(property, value);
}

function _applyStyles(styles: _scrollStyles) {
  _setScrollBarProperty(scrollBorderCssVar, styles.border);
  _setScrollBarProperty(scrollThumbBgCssVar, styles.thumbBg);
  _setScrollBarProperty(scrollTrackBgCssVar, styles.trackBg);
}
