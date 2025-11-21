// ============================================
// JAVI RUSH - MAIN APPLICATION LOGIC
// ============================================

// Initialize the app when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initProfile();
    initLinks();
    initFooter();
    initInteractions();
    initAnalytics();
});

// ============================================
// PROFILE INITIALIZATION
// ============================================
function initProfile() {
    const { profile } = CONFIG;
    
    // Set name
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        nameElement.textContent = profile.name;
    }
    
    // Set tagline
    const taglineElement = document.querySelector('.tagline');
    if (taglineElement) {
        taglineElement.textContent = profile.tagline;
    }
    
    // Set avatar
    const avatarContent = document.getElementById('avatarContent');
    if (avatarContent) {
        if (profile.avatar.type === 'image' && profile.avatar.imageSrc) {
            avatarContent.innerHTML = `<img src="${profile.avatar.imageSrc}" alt="${profile.name}" style="width: 100%; height: 100%; object-fit: cover;">`;
        } else {
            avatarContent.textContent = profile.avatar.initials;
        }
    }
}

// ============================================
// LINKS GENERATION
// ============================================
function initLinks() {
    const linksContainer = document.getElementById('linksContainer');
    if (!linksContainer) return;
    
    // Filter enabled links
    const enabledLinks = CONFIG.links.filter(link => link.enabled);
    
    // Generate link elements
    enabledLinks.forEach((link, index) => {
        const linkItem = createLinkElement(link, index);
        linksContainer.appendChild(linkItem);
    });
}

function createLinkElement(link, index) {
    // Create container
    const linkItem = document.createElement('div');
    linkItem.className = 'link-item';
    linkItem.style.animationDelay = `${(index + 1) * 0.1}s`;
    
    // Create anchor
    const anchor = document.createElement('a');
    anchor.href = link.url;
    anchor.className = `link-btn ${link.className}`;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.dataset.linkId = link.id;
    
    // Add icon
    const icon = ICONS[link.icon] || ICONS.link;
    anchor.innerHTML = icon;
    
    // Add title
    const titleSpan = document.createElement('span');
    titleSpan.textContent = link.title;
    anchor.appendChild(titleSpan);
    
    // Append to container
    linkItem.appendChild(anchor);
    
    return linkItem;
}

// ============================================
// FOOTER INITIALIZATION
// ============================================
function initFooter() {
    const footerText = document.getElementById('footerText');
    if (footerText) {
        footerText.textContent = `© ${CONFIG.footer.year} Javi Rush. All rights reserved.`;
    }
}

// ============================================
// INTERACTIVE ELEMENTS
// ============================================
function initInteractions() {
    // Parallax effect on mouse move
    document.addEventListener('mousemove', handleMouseMove);
    
    // Click tracking for analytics
    if (CONFIG.analytics.trackClicks) {
        const links = document.querySelectorAll('.link-btn');
        links.forEach(link => {
            link.addEventListener('click', handleLinkClick);
        });
    }
    
    // Add glitch effect to name on hover
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        nameElement.addEventListener('mouseenter', () => {
            nameElement.classList.add('glitch-active');
        });
        nameElement.addEventListener('animationend', () => {
            nameElement.classList.remove('glitch-active');
        });
    }
}

// ============================================
// MOUSE PARALLAX EFFECT
// ============================================
function handleMouseMove(e) {
    const orbs = document.querySelectorAll('.orb');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 10;
        const xMove = (x - 0.5) * speed;
        const yMove = (y - 0.5) * speed;
        orb.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });
}

// ============================================
// ANALYTICS & TRACKING
// ============================================
function handleLinkClick(e) {
    const linkId = e.currentTarget.dataset.linkId;
    const linkTitle = e.currentTarget.textContent.trim();
    
    // Log to console (replace with your analytics service)
    console.log('Link clicked:', {
        id: linkId,
        title: linkTitle,
        url: e.currentTarget.href,
        timestamp: new Date().toISOString()
    });
    
    // Example: Send to Google Analytics
    // if (window.gtag) {
    //     gtag('event', 'click', {
    //         event_category: 'outbound_link',
    //         event_label: linkTitle,
    //         link_id: linkId
    //     });
    // }
    
    // Example: Send to custom analytics endpoint
    // fetch('/api/analytics', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ linkId, linkTitle, timestamp: Date.now() })
    // });
}

function initAnalytics() {
    if (!CONFIG.analytics.enabled) return;
    
    // Track page view
    console.log('Page view:', {
        timestamp: new Date().toISOString(),
        referrer: document.referrer,
        userAgent: navigator.userAgent
    });
    
    // Add your analytics initialization here
    // Example: Google Analytics, Plausible, etc.
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Smooth scroll to section (if you add more sections)
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard:', text);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Check if device is mobile
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// ============================================
// EXPORT FOR TESTING (Optional)
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initProfile,
        initLinks,
        initFooter,
        handleLinkClick
    };
}