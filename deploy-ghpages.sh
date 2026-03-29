#!/bin/bash
set -e

echo "=== 1. Construindo o site com o caminho correto... ==="
BASE_PATH=/laboptima-labios-website/ pnpm --filter @workspace/lab-website run build

echo "=== 2. Criando 404.html para navegação SPA... ==="
cp artifacts/lab-website/dist/public/index.html artifacts/lab-website/dist/public/404.html

echo "=== 3. Preparando branch gh-pages... ==="
DIST_DIR=$(pwd)/artifacts/lab-website/dist/public
TMP_DIR=/tmp/gh-pages-deploy
rm -rf "$TMP_DIR"
mkdir -p "$TMP_DIR"
cd "$TMP_DIR"

git init
git config user.email "deploy@laboptima.br"
git config user.name "Deploy Bot"
git remote add origin "https://engphb:$GITHUB_PERSONAL_ACCESS_TOKEN@github.com/engphb/laboptima-labios-website.git"

echo "=== 4. Copiando arquivos gerados... ==="
cp -r "$DIST_DIR"/. .

echo "=== 5. Commitando e enviando para gh-pages... ==="
git checkout --orphan gh-pages
git add -A
git commit -m "Deploy automatico: $(date '+%Y-%m-%d %H:%M')"
git push --force origin gh-pages

echo ""
echo "✅ Pronto! Agora faça o seguinte no GitHub:"
echo "   Settings → Pages → Source → Branch: gh-pages → / (root) → Save"
echo ""
echo "O site estará disponível em:"
echo "   https://engphb.github.io/laboptima-labios-website/"
