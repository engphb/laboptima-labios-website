#!/bin/bash

echo "Enviando alterações para o GitHub..."

git push --force https://engphb:$GITHUB_PERSONAL_ACCESS_TOKEN@github.com/engphb/laboptima-labios-website.git HEAD:main

if [ $? -eq 0 ]; then
  echo ""
  echo "Pronto! Código enviado com sucesso para o GitHub."
  echo "O deploy vai iniciar automaticamente em alguns segundos."
else
  echo ""
  echo "Erro ao enviar. Verifique se o token GITHUB_PERSONAL_ACCESS_TOKEN está configurado."
fi
