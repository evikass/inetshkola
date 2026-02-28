import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'inetshkola';

const nextConfig: NextConfig = {
  // Для GitHub Pages используем статический экспорт
  output: isGitHubPages ? "export" : "standalone",
  
  // Базовый путь для GitHub Pages
  basePath: isGitHubPages ? `/${repoName}` : '',
  
  // Отключить оптимизацию изображений для статического экспорта
  images: isGitHubPages ? {
    unoptimized: true,
  } : undefined,
  
  // Трейлинг слеш для корректной работы на GitHub Pages
  trailingSlash: isGitHubPages,
  
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
