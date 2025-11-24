// ============================================
// JAVI RUSH - LANDING PAGE CONFIGURATION
// ============================================

const CONFIG = {
    // Profile Information
    profile: {
        name: "JAVI RUSH",
        tagline: "Pretty Faced Twink-Dom",
        avatar: {
            type: "initials", // Options: "initials" or "image"
            initials: "JR",
            imageSrc: "" // If type is "image", add your image path here
        }
    },

    // Social Links Configuration
    links: [
        {
            id: "onlyfans",
            title: "OnlyFans",
            url: "https://onlyfans.com/javirushxxx",
            icon: "onlyfans",
            className: "link-onlyfans",
            enabled: true
        },
        {
            id: "twitter",
            title: "Twitter",
            url: "https://x.com/javirushxxx?s=21",
            icon: "twitter",
            className: "link-twitter",
            enabled: true
        },
        {
            id: "instagram",
            title: "Instagram",
            url: "https://www.instagram.com/javirushx?igsh=MXdsY3R5Z2pxeXdjNA==",
            icon: "instagram",
            className: "link-instagram",
            enabled: true
        },
        {
            id: "cashapp",
            title: "Cash App",
            url: "https://cash.app/$javirushxxx",
            icon: "cashapp",
            className: "link-cashapp",
            enabled: true
        },
        {
            id: "reddit",
            title: "Reddit",
            url: "https://www.reddit.com/u/NeighborhoodCool9238/s/StFC8Qw8rc",
            icon: "reddit",
            className: "link-reddit",
            enabled: false
        },
        {
            id: "bluesky",
            title: "Bluesky",
            url: "https://bsky.app/profile/javirushxxx.bsky.social",
            icon: "bluesky",
            className: "link-bluesky",
            enabled: false
        }
    ],

    // Footer Configuration
    footer: {
        text: "© 2024 Javi Rush. All rights reserved.",
        year: new Date().getFullYear() // Auto-updates year
    },

    // Theme Colors (optional - can override in style.css)
    theme: {
        primary: "#808080",
        secondary: "#c0c0c0",
        accent: "#ffffff"
    },

    // Analytics (optional)
    analytics: {
        enabled: false,
        trackClicks: true
    }
};

// SVG Icons Library
const ICONS = {
    onlyfans: `<svg class="link-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.2c4.861 0 8.8 3.939 8.8 8.8 0 4.861-3.939 8.8-8.8 8.8-4.861 0-8.8-3.939-8.8-8.8 0-4.861 3.939-8.8 8.8-8.8z"/>
    </svg>`,
    
    twitter: `<svg class="link-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>`,
    
    instagram: `<svg class="link-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>`,
    
    cashapp: `<svg class="link-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.59 3.475a5.1 5.1 0 0 0-3.05-3.05c-1.87-.5-9.16-.5-9.16-.5s-7.29 0-9.16.5a5.1 5.1 0 0 0-3.05 3.05c-.5 1.87-.5 5.78-.5 5.78s0 3.91.5 5.78a5.1 5.1 0 0 0 3.05 3.05c1.87.5 9.16.5 9.16.5s7.29 0 9.16-.5a5.1 5.1 0 0 0 3.05-3.05c.5-1.87.5-5.78.5-5.78s0-3.91-.5-5.78zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>`,
    
    reddit: `<svg class="link-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
    </svg>`,
    
    bluesky: `<svg class="link-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z"/>
    </svg>`,
    
    email: `<svg class="link-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>`,
    
    link: `<svg class="link-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
    </svg>`
};