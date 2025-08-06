# iTunes Search Frontend

Podbay Clone

## Features

- 🔍 **Auto-search with debouncing** - Search triggers automatically as you type (1-second delay)
- 📱 **Responsive design** - With Tailwind CSS and dark theme
- 🎨 **Modern interface** - Sidebar navigation, header search, and organized content sections
- 📊 **Grouped results** - Content organized by type (Podcasts, Movies & TV, Others)
- 🖼️ **Rich content display** - Artwork, titles, artists, and genre information
- 🔄 **Layout switching** - Toggle between list and grid views for each section
- ⚡ **Built with Next.js 15** - App Router, TypeScript, and React 19

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Main application page
│   ├── layout.tsx         # Root layout with fonts and metadata
│   └── globals.css        # Global styles and Tailwind CSS
├── components/
│   ├── Header.tsx         # Top navigation with branding
│   ├── SearchInput.tsx    # Debounced search input component
│   ├── Sidebar.tsx        # Left navigation sidebar
│   ├── PodbayContent.tsx  # Main content area orchestrator
│   ├── Section.tsx        # Content category sections
│   ├── ContentCard.tsx    # Individual content item cards
│   └── LayoutSwitcher.tsx # List/Grid view toggle
├── hooks/
│   └── useDebounce.ts     # Custom debounce hook
├── lib/
│   └── api.ts            # iTunes API integration
└── types/
    └── search.ts         # TypeScript type definitions
```

## API Integration

The application integrates directly with the iTunes Search API:

- **Endpoint:** `https://itunes.apple.com/search`
- **Parameters:** Search term, media types, limits
- **Response:** Grouped results by content type (podcasts, movies, others)
- **Features:** Built-in error handling, loading states, and response transformation

## Usage

1. **Search:** Start typing in the search bar - results appear automatically after 1 second
2. **Browse:** Results are organized into sections (Podcasts, Movies & TV, Others)
3. **View Options:** Toggle between list and grid layouts for each section
4. **Navigation:** Use the sidebar for future navigation features

## Development

- **Build:** `npm run build`
- **Start production:** `npm start`
- **Lint:** `npm run lint`

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with improved performance
- **TypeScript 5** - Full type safety and modern language features
- **Tailwind CSS 4** - Utility-first CSS framework with dark theme
- **Custom Hooks** - Debounced search and state management
- **iTunes Search API** - Direct integration for content search

## Architecture Highlights

### Component Structure
- **Modular Design** - Each component has a single responsibility
- **Reusable Components** - SearchInput, ContentCard, Section can be used anywhere
- **Clean Separation** - UI, logic, and data layers are properly separated
- **TypeScript Integration** - Full type safety across all components

### Performance Features
- **Debounced Search** - Reduces API calls with 1-second delay
- **Memoized Components** - Prevents unnecessary re-renders
- **Optimized Images** - Proper error handling and fallbacks
- **Responsive Design** - Efficient CSS with Tailwind utilities
