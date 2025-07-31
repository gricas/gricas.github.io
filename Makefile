.PHONY: build sync dev preview clean help

# Default target
help:
	@echo "Available commands:"
	@echo "  make build    - Build the static HTML from config.json"
	@echo "  make sync     - Sync config.json to all files"
	@echo "  make dev      - Start local development server"
	@echo "  make preview  - Build and start preview server"
	@echo "  make clean    - Remove generated files"
	@echo "  make help     - Show this help message"

# Build the static HTML
build:
	@echo "Building resume from config.json..."
	@node build.js

# Sync config to all files
sync:
	@echo "Syncing config.json to all files..."
	@node sync-config.js

# Start development server
dev:
	@echo "Starting development server at http://localhost:8000"
	@echo "Press Ctrl+C to stop"
	@python -m http.server 8000

# Build and preview
preview: build
	@echo "Starting preview server at http://localhost:8000"
	@echo "Press Ctrl+C to stop"
	@python -m http.server 8000

# Clean generated files
clean:
	@echo "Cleaning generated files..."
	@rm -f index.html

# Install dependencies (if using npm)
install:
	@echo "Installing dependencies..."
	@npm install

# Watch for changes and rebuild
watch:
	@echo "Watching for changes in config.json..."
	@echo "Press Ctrl+C to stop"
	@npx nodemon --watch config.json --exec 'node build.js' 