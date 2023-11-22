export const viteConfig = `import solid from "solid-start/vite";
import { defineConfig } from "vite";
import staticGenerator from "solid-start-static";

export default defineConfig({
  plugins: [solid({ adapter: staticGenerator() })],
});
`;
