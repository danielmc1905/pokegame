# 🎮 Pokegame Angular 20

> A “¿Quién es este Pokémon?” guessing game built entirely with **Angular 20 (standalone components)** and the [PokéAPI](https://pokeapi.co/).  
> Players must guess the Pokémon from its silhouette — just like the classic Pokédex TV segment!

---

## 🧩 Features

- ⚡ Built with **Angular 20** using the modern standalone component architecture  
- 🔍 Fetches Pokémon data dynamically from **PokéAPI**
- 🖤 Displays silhouette until player selects an answer
- ✅ Instant feedback for correct / wrong answers
- 🔁 “Siguiente” button to load a new Pokémon
- 🧱 Simple, modular structure — no Tailwind, no external CSS frameworks

---

## 🧱 Tech Stack

| Tech | Description |
|------|--------------|
| **Angular 20** | Framework for building modern web apps |
| **PokéAPI** | Free RESTful Pokémon API |
| **TypeScript** | Strongly typed JavaScript |

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/danielmc1905/pokegame.git
cd pokegame-angular
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run the Development Server
```bash
ng serve
```

## Open your browser and go to:
```bash
👉 http://localhost:4200
```

## 🧠 How It Works

1. A random Pokémon ID (1–150) is selected.
2. The app fetches its data and four random name options.
3. The Pokémon image is shown as a silhouette (dark filter).
4. When the user selects an answer:
5. The Pokémon is revealed.
6. A message displays whether the guess was correct.
7. The user can click "Siguiente" to play again.

## 🧰 Key Files
`pokemon.service.ts`
Handles all API calls to PokéAPI and generates Pokémon image URLs.

`pokemon-game.component.ts`
Contains the core game logic — randomization, API calls, state management, and UI handling.

`app.component.ts`
Root container that displays the game component.