JAVI RUSH - Grunge Chrome Landing Page
🎨 New Aesthetic
Full grunge/industrial cyber aesthetic with:

Pure black backgrounds with your photo as the base
Metallic chrome/silver accents only (no colors)
Distressed, gritty, raw industrial feel
Scanline texture overlay for grunge effect
Uppercase typography for aggressive branding
📸 IMPORTANT: Add Your Background Photo
Step 1: Add Your Photo
Place your photo in the same folder as your HTML files
Name it something like your-photo.jpg or background.jpg
Step 2: Update the CSS
Open style.css and find line 28:

css
background-image: url('your-photo.jpg'); /* REPLACE WITH YOUR PHOTO */
Change 'your-photo.jpg' to your actual filename:

css
background-image: url('my-photo.jpg');
Photo Recommendations:
High resolution: At least 1920x1080px
Portrait orientation works best
Well-lit photo - the CSS will darken it automatically
Strong contrast - will look better when blurred
✨ Scroll Effect Explained
How It Works:
Top of page: Your photo appears in FULL COLOR with slight blur and darkening
When you scroll down (after 100px):
Photo becomes BLACK & WHITE
Blur increases dramatically (20px blur)
Brightness drops significantly
Creates a cinematic fade effect
Customizing the Effect:
In app.js, find the initScrollBlur() function:

javascript
const blurThreshold = 100; // Change this number
Lower number = blur kicks in sooner
Higher number = blur kicks in later
In style.css, adjust the blur amount on line 34-35:

css
filter: grayscale(0%) blur(0px) brightness(0.7);
/* Starts as: color, no blur, 70% brightness */
And line 39:

css
filter: grayscale(100%) blur(20px) brightness(0.3);
/* Becomes: B&W, 20px blur, 30% brightness */
🎭 Color Scheme
Metallic Chrome Only:
#000000 - Pure black
#808080 - Medium chrome
#c0c0c0 - Bright chrome
#ffffff - Pure chrome highlight
Grayscale - All text is monochrome
NO COLORS - Pure industrial aesthetic
🔧 File Structure
your-project/
├── index.html       # HTML structure
├── config.js        # Your links & settings
├── app.js          # Logic + scroll effect
├── style.css       # Grunge styling
├── your-photo.jpg  # YOUR BACKGROUND IMAGE
└── README.md       # This file
🚀 Deploy Checklist
✅ Add your background photo to the folder
✅ Update style.css line 28 with your photo filename
✅ Update all links in config.js
✅ Add your actual profile photo to config (optional)
✅ Test the scroll effect
✅ Upload all files to hosting
💡 Features
Grunge Elements:
Scanline texture overlay
Distressed borders
Industrial typography (uppercase, wide letter-spacing)
Raw, unpolished aesthetic
High contrast black/chrome scheme
Chrome Effects:
Animated chrome shine on name
Metallic borders on avatar
Chrome gleam on button hover
Reflective surfaces with inset highlights
Liquid metal animations
Interaction:
Scroll-triggered photo blur/desaturation
Chrome sweep on button hover
Metallic glow on all interactive elements
Press effect on buttons (pressed metal look)
🎯 Brand Alignment
This design matches a dark, mysterious, edgy brand persona:

Industrial/underground aesthetic
High-fashion grunge
Cyber-gothic meets minimalism
Raw but polished
Aggressive yet sophisticated
Perfect for your "soft, sweet, dominant twink with a mysterious edge" brand — the grunge keeps it edgy and raw, while the chrome keeps it premium and polished.

