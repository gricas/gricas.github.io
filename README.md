# Parameterized Resume Website

A modern, responsive resume website that can be easily customized through a configuration file. Features multiple color themes, dynamic content loading, and a clean, professional design.

## Features

- 📝 **Parameterized Content**: All information stored in `config.json`
- 🎨 **Multiple Themes**: 5 built-in color themes (Default, Dark, Nature, Ocean, Sunset)
- 📱 **Responsive Design**: Works perfectly on all devices
- ⚡ **Fast Loading**: Static HTML generation for optimal performance
- 🖨️ **Print Friendly**: Optimized for printing
- 🔧 **Easy Customization**: Simple JSON configuration

## Quick Start

### 1. Customize Your Information

Edit `config.json` with your personal information:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Software Engineer",
    "email": "your.email@example.com",
    "phone": "+1 (555) 123-4567",
    "location": "San Francisco, CA",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/yourusername"
  }
}
```

### 2. Build the Website

```bash
# Install dependencies (optional, for development)
npm install

# Build the static HTML
npm run build
```

### 3. Preview Locally

```bash
# Start a local server
npm run dev

# Or build and preview
npm run preview
```

## Configuration

### Personal Information

Update the `personal` section in `config.json`:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Professional Title",
    "email": "your.email@example.com",
    "phone": "+1 (555) 123-4567",
    "location": "City, State",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/yourusername",
    "website": "https://yourwebsite.com" // Optional
  }
}
```

### Skills

Organize your skills into categories:

```json
{
  "skills": {
    "programming_languages": [
      "JavaScript",
      "Python",
      "Go"
    ],
    "frameworks_tools": [
      "React",
      "Node.js",
      "Docker"
    ],
    "soft_skills": [
      "Team Leadership",
      "Problem Solving"
    ]
  }
}
```

### Experience

Add your work experience:

```json
{
  "experience": [
    {
      "title": "Senior Software Engineer",
      "company": "Tech Company Inc.",
      "start_date": "2022",
      "end_date": "Present",
      "achievements": [
        "Led development of microservices architecture",
        "Mentored junior developers",
        "Improved team productivity by 25%"
      ]
    }
  ]
}
```

### Projects

Showcase your projects:

```json
{
  "projects": [
    {
      "name": "E-commerce Platform",
      "description": "Full-stack e-commerce platform with payment processing.",
      "link": "https://github.com/yourusername/project",
      "technologies": ["React", "Node.js", "PostgreSQL"]
    }
  ]
}
```

### Custom Styling

Customize colors and fonts:

```json
{
  "styling": {
    "primary_color": "#667eea",
    "secondary_color": "#764ba2",
    "accent_color": "#f093fb",
    "text_color": "#333333",
    "background_color": "#fafafa",
    "header_gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  }
}
```

## Available Themes

1. **Default**: Professional blue gradient
2. **Dark**: Modern dark theme
3. **Nature**: Green and earthy tones
4. **Ocean**: Blue and teal colors
5. **Sunset**: Warm orange and red tones

## File Structure

```
├── config.json          # Your personal information
├── build.js            # Build script
├── resume.css          # Styling with themes
├── index.html          # Static version (generated)
├── index-dynamic.html  # Dynamic version with theme switcher
└── README.md           # This file
```

## Usage Options

### Option 1: Static Build (Recommended for GitHub Pages)

1. Edit `config.json` with your information
2. Run `npm run build`
3. Upload `index.html`, `resume.css`, and `config.json` to GitHub Pages

### Option 2: Dynamic Version

1. Use `index-dynamic.html` instead
2. Includes a theme switcher
3. Loads content dynamically from `config.json`

### Option 3: Development Mode

```bash
# Watch for changes and auto-rebuild
npm run watch
```

## GitHub Pages Setup

1. Create a new repository on GitHub
2. Upload your files:
   - `index.html` (or `index-dynamic.html`)
   - `resume.css`
   - `config.json`
3. Go to Settings → Pages
4. Select "Deploy from a branch"
5. Choose your main branch
6. Your resume will be available at `https://yourusername.github.io/repository-name`

## Customization Tips

### 🎯 Easy Theme/Font Changes

**Option 1: Single Source of Truth (Recommended)**
1. **Edit only `config.json`**:
   ```json
   {
     "styling": {
       "theme": "ocean",           // Change this
       "font_family": "Open Sans", // Change this
       "accent_font": "Poppins"    // Change this
     }
   }
   ```
2. **Run sync command**:
   ```bash
   npm run sync
   # or
   make sync
   ```
3. **Build for production**:
   ```bash
   npm run build
   ```

**Option 2: Interactive Testing**
1. Open `index-test.html` in browser
2. Use dropdowns to test themes/fonts
3. When satisfied, update `config.json` and run `npm run sync`

**Option 3: Manual Updates**
If you prefer manual control, update these files:
- `config.json` - Main configuration
- `build.js` - Build script defaults
- `index-test.html` - Test file defaults

### Adding New Sections

1. Update the template in `build.js`
2. Add corresponding data to `config.json`
3. Style the new section in `resume.css`

### Creating Custom Themes

Add new theme classes to `resume.css`:

```css
.theme-custom {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  /* ... other variables */
}
```

### Modifying Layout

The layout uses CSS Grid. Main containers:
- `.container`: Main grid layout
- `.sidebar`: Left sidebar with contact and skills
- `.main-content`: Right content area

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support

## License

MIT License - feel free to use and modify as needed.

## Contributing

Feel free to submit issues and enhancement requests! 