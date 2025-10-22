# Frontend Wizards — Stage 1 Task

## Overview

A three-page responsive web application including a profile card, contact form with validation, and about page. Built with vanilla HTML, CSS, and JavaScript following accessibility and semantic web standards.

## Live Demo

[View Demo](https://profile-card-chi-orcin.vercel.app/)

## Features

- Profile card from Stage 0 with real-time timestamp
- Contact Us form with client-side validation and toast notifications
- About Me page with semantic sections
- Responsive design for mobile, tablet, and desktop
- Accessible navigation and form controls
- BEM methodology for CSS
- No frameworks or dependencies

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

## Project Structure

```
profile-card/
├── index.html
├── contact.html
├── about.html
├── style.css
├── script.js
├── Profile.jpg
└── README.md
```

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/ISyncPlus/profile-card.git
```

2. Navigate to project directory:

```bash
cd profile-card
```

3. Open any HTML file in your browser or use a local server:

```bash
# Using Python
python -m http.server 3000

# Using Node.js
npx serve
```

## Testing

The application includes data-testid attributes for automated testing:

**Profile Card:**

- test-profile-card
- test-user-avatar
- test-user-name
- test-user-bio
- test-user-time
- test-user-social-links
- test-user-hobbies
- test-user-dislikes

**Contact Form:**

- test-contact-page
- test-contact-name
- test-contact-email
- test-contact-subject
- test-contact-message
- test-contact-submit
- test-contact-success
- test-contact-error-\* (for validation errors)

**About Page:**

- test-about-page
- test-about-bio
- test-about-goals
- test-about-confidence
- test-about-future-note
- test-about-extra

## Author

Ebube Emmanuel Ezedimbu  
[GitHub](https://github.com/ISyncPlus)
