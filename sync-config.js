const fs = require('fs');
const path = require('path');

class ConfigSync {
    constructor() {
        this.config = null;
    }

    loadConfig() {
        try {
            const configPath = path.join(__dirname, 'config.json');
            const configData = fs.readFileSync(configPath, 'utf8');
            this.config = JSON.parse(configData);
            return this.config;
        } catch (error) {
            console.error('Error loading config:', error);
            throw error;
        }
    }

    updateIndexTest() {
        const indexPath = path.join(__dirname, 'index-test.html');
        let content = fs.readFileSync(indexPath, 'utf8');
        
        // Update default theme
        const theme = this.config.styling.theme;
        content = content.replace(
            /const defaultTheme = '[^']*'/,
            `const defaultTheme = '${theme}'`
        );
        
        // Update default font based on config
        const fontMap = {
            'Cormorant Garamond': 'cormorant',
            'Inter': 'inter',
            'Roboto': 'roboto',
            'Open Sans': 'opensans',
            'Lato': 'lato',
            'Source Sans Pro': 'source'
        };
        
        const defaultFont = fontMap[this.config.styling.font_family] || 'opensans';
        content = content.replace(
            /const defaultFont = '[^']*'/,
            `const defaultFont = '${defaultFont}'`
        );
        
        // Update body class
        content = content.replace(
            /<body class="theme-[^"]*">/,
            `<body class="theme-${theme}">`
        );
        
        // Update dropdown selections
        content = content.replace(
            /<option value="[^"]*" selected>Ocean Theme<\/option>/,
            `<option value="${theme}" selected>${theme.charAt(0).toUpperCase() + theme.slice(1)} Theme</option>`
        );
        
        content = content.replace(
            /<option value="[^"]*" selected>Open Sans \+ Poppins<\/option>/,
            `<option value="${defaultFont}" selected>${this.config.styling.font_family} + ${this.config.styling.accent_font}</option>`
        );
        
        fs.writeFileSync(indexPath, content, 'utf8');
        console.log('✅ Updated index-test.html');
    }

    sync() {
        try {
            this.loadConfig();
            this.updateIndexTest();
            console.log('🎯 Config synced successfully!');
            console.log(`📝 Theme: ${this.config.styling.theme}`);
            console.log(`📝 Font: ${this.config.styling.font_family} + ${this.config.styling.accent_font}`);
        } catch (error) {
            console.error('❌ Sync failed:', error.message);
        }
    }
}

// Run sync if this script is executed directly
if (require.main === module) {
    const sync = new ConfigSync();
    sync.sync();
}

module.exports = ConfigSync; 