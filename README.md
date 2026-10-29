# POLVO · Carreiras

Página de vagas e banco de talentos da POLVO Consultoria de Carreira, publicada pelo GitHub Pages.

## Como funciona

1. A pessoa preenche a candidatura e anexa o currículo.
2. Ao clicar em **Enviar candidatura**, a página manda tudo automaticamente (via FormSubmit) para `polvorh.talentos@gmail.com`, com o currículo anexado e o código da candidatura.
3. O POLVO Recruiter lê esses e-mails a cada 30 minutos e cria o talento no Banco de talentos (ou na vaga).

## Atualizar as vagas

As vagas vêm do arquivo `vagas.json`, gerado pelo POLVO Recruiter (tela Vagas → **Enviar para o site**). O botão copia o conteúdo novo e abre este arquivo no editor do GitHub: cole, clique em **Commit changes** e o GitHub Pages republica em cerca de 1 minuto. O Banco de Talentos fica sempre aberto e está dentro do `index.html`.

## Ativação (uma vez só)

A primeira candidatura enviada dispara um e-mail da FormSubmit para `polvorh.talentos@gmail.com` pedindo ativação. Clique em **Activate Form**. Depois disso, as candidaturas chegam direto.
