#!/bin/bash

echo "Enviando alterações para o GitHub..."

git push https://engphb:$GITHUB_PERSONAL_ACCESS_TOKEN@github.com/engphb/laboptima-labios-website.git main

if [ $? -eq 0 ]; then
  echo ""
  echo "Pronto! Site atualizado com sucesso."
  echo "Em cerca de 2 minutos a nova versão estará disponível em:"
  echo "https://engphb.github.io/laboptima-labios-website/"
else
  echo ""
  echo "Erro ao enviar. Verifique se o token GITHUB_PERSONAL_ACCESS_TOKEN está configurado."
fi
