# Student Council Website

A modern, responsive website for the BITS Pilani Dubai Campus Student Council. This site showcases council members, announcements, contact forms, and more, with a beautiful and interactive UI.

## Features
- Hero landing section
- Council members with interactive cards and social links
- Announcements and events
- Contact form (integrated with Google Sheets via Apps Script)
- Responsive design for all devices
- Modern UI with Tailwind CSS and Framer Motion animations

## Tech Stack
- **React** (with Vite)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Google Apps Script** (for contact form backend)
- **Lucide React** (icons)

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm (v8+ recommended)

### Installation
1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd <repo-folder>
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```

### Development
To start the development server:
```sh
npm run dev
```
- The site will be available at `http://localhost:5173` (or as shown in your terminal).

### Building for Production
To build the site for production:
```sh
npm run build
```
The output will be in the `dist/` folder.

### Linting
To run the linter:
```sh
npm run lint
```

## Contact Form Integration
- The contact form submits data to a Google Apps Script endpoint, which writes to a Google Sheet.
- For local development, CORS limitations apply (see code comments for details).
- For production, use a backend proxy for secure and robust form handling.

## Deployment
You can deploy the site to platforms like **Vercel**, **Netlify**, or your own server. For backend proxy deployment, see the `/council-backend` example in the docs or ask for a template.

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License
This project is for educational and student council use. For other uses, please contact the maintainers.

---


