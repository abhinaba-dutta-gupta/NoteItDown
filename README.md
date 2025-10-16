# NoteItDown

A **notes app** built with **React Native** (using Expo), optimized for easy and organized note-taking on mobile devices.

## Features

- Create, edit, and delete notes with a clean, intuitive UI
- Categorize notes for improved organization
- Persistent local storage of notes
- Themed UI with light/dark support

## Folder Structure

- **/app**
  - **(tabs)**: Tab navigation components and layouts (`_layout.tsx`, `index.tsx`, `two.tsx`)
  - **components**: Core UI components for the main app experience (e.g., `CategoryList.tsx`, `NoteCard.tsx`, `NoteForm.tsx`)
  - **screens**: Main application screens (`HomeScreen.tsx`, `NoteDetailScreen.tsx`)
  - **utils**: Utility functions (e.g., `CategoryUtils.tsx` for category management, `StorageUtils.tsx` for local data handling)
- **/assets**
  - **fonts**: Font files for custom typography
  - **images**: App images and icons (adaptive, favicon, splash, etc.)
- **/components**: Shared/common components, theming (e.g., `EditScreenInfo.tsx`, `StyledText.tsx`, `Themed.tsx`, custom hooks)
- **/constants**: Project-wide constants (`Colors.ts` for theming)
- **/package.json**, **/app.json**, **/tsconfig.json**: Project configuration

## Getting Started

1. **Clone this repository:**
   ```bash
   git clone https://github.com/abhinaba-dutta-gupta/NoteItDown.git
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start the Expo development server:**
   ```bash
   npm start
   # or
   expo start
   ```
   Then, open the app with the Expo Go app or your emulator.

## Technology Stack

- **React Native** (Expo)
- **TypeScript**
- Custom theming and category management
- Persistent local storage
