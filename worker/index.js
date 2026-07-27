/**
 * Static Sites adapter.
 *
 * Astro generates the complete website into `dist/`; the Sites runtime exposes
 * those files through the ASSETS binding.
 */
export default {
  fetch(request, env) {
    return env.ASSETS.fetch(request);
  }
};
