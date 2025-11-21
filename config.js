// ============================================
// JAVI RUSH - LANDING PAGE CONFIGURATION
// ============================================

const CONFIG = {
    // Profile Information
    profile: {
        name: "JAVI RUSH",
        tagline: "Soft • Dominant • Mysterious",
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
            url: "https://onlyfans.com/yourhandle",
            icon: "onlyfans",
            className: "link-onlyfans",
            enabled: true
        },
        {
            id: "twitter",
            title: "Twitter",
            url: "https://twitter.com/yourhandle",
            icon: "twitter",
            className: "link-twitter",
            enabled: true
        },
        {
            id: "rentmen",
            title: "RentMen",
            url: "https://rentmen.com/yourhandle",
            icon: "user",
            className: "link-rentmen",
            enabled: true
        },
        {
            id: "instagram",
            title: "Instagram",
            url: "https://instagram.com/yourhandle",
            icon: "instagram",
            className: "link-instagram",
            enabled: true
        },
        {
            id: "reddit",
            title: "Reddit",
            url: "https://reddit.com/u/yourhandle",
            icon: "reddit",
            className: "link-reddit",
            enabled: false // Set to true to enable
        },
        {
            id: "email",
            title: "Email Me",
            url: "mailto:your@email.com",
            icon: "email",
            className: "link-email",
            enabled: true
        },
        {
            id: "custom1",
            title: "Custom Link",
            url: "#",
            icon: "link",
            className: "link-custom",
            enabled: false // Set to true to enable
        }
    ],

    // Footer Configuration
    footer: {
        text: "© 2024 Javi Rush. All rights reserved.",
        year: new Date().getFullYear() // Auto-updates year
    },

    // Theme Colors (optional - can override in style.css)
    theme: {
        primary: "#9333ea",
        secondary: "#ec4899",
        accent: "#06b6d4"
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
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
    </svg>`,
    
    twitter: `<svg class="link-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>`,
    
    user: `<svg class="link-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
    </svg>`,
    
    instagram: `<svg class="link-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>`,
    
    reddit: `<svg class="link-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.5 11c-.55 0-1 .45-1 1 0 1.16-.94 2.1-2.1 2.1-.34 0-.66-.08-.94-.23.44-.49.71-1.13.71-1.87 0-1.52-1.23-2.75-2.75-2.75s-2.75 1.23-2.75 2.75c0 .74.27 1.38.71 1.87-.28.15-.6.23-.94.23-1.16 0-2.1-.94-2.1-2.1 0-.55-.45-1-1-1s-1 .45-1 1c0 2.27 1.83 4.1 4.1 4.1.71 0 1.38-.18 1.96-.5.58.32 1.25.5 1.96.5s1.38-.18 1.96-.5c.58.32 1.25.5 1.96.5 2.27 0 4.1-1.83 4.1-4.1 0-.55-.45-1-1-1zM10 12.5c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm3 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1z"/>
    </svg>`,
    
    email: `<svg class="link-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>`,
    
    link: `<svg class="link-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
    </svg>`
};