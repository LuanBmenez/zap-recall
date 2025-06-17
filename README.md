# Zap Recall 🎯

Web app de flashcards com técnicas de **Active Recall** e **Spaced Repetition**, criada em React durante o **Driven Education Bootcamp** :contentReference[oaicite:0]{index=0}.

Acesse a versão online disponível no Vercel:  
👉 **https://zap-recall-uxvz.vercel.app/**

---

## 📌 Sobre o Projeto

O Zap Recall permite ao usuário:

- Selecionar um deck de flashcards;
- Visualizar uma pergunta e virar o card para ver a resposta;
- Marcar cada resposta como: "Não lembrei", "Quase não lembrei" ou “Zap!”;
- Acompanhar o progresso e sequência de respostas em tempo real.

---

## 🛠 Tecnologias

- React
- Vite
- styled‑components
- ESLint (configuração de linting)

---

## 🚀 Como rodar localmente

```bash
git clone [URL_DO_SEU_REPO]
cd zap-recall

# opcional: remova instalações anteriores
# no Linux/macOS:
rm -rf node_modules package-lock.json
# no Windows PowerShell:
Remove-Item -Recurse -Force node_modules, package-lock.json

npm install
npm run dev
