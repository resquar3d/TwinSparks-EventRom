# EventRom - TwinSparks Event Management

A modern, responsive event management platform built with React and Vite. Discover, create, and manage events with a sleek, intuitive interface.

## 🚀 Features

- **Event Discovery**: Browse and search through a wide variety of events
- **Event Creation**: Create and manage your own events with ease
- **Responsive Design**: Beautiful UI that works on all devices
- **Real-time Search**: Instant filtering and search capabilities
- **Category Management**: Organize events by categories
- **User-friendly Interface**: Modern glassmorphism design with smooth animations

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: CSS-in-JS with CSS Variables
- **Icons**: Custom SVG components
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/eventrom-app.git
cd eventrom-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── assets/
│   └── icons.jsx           # SVG icon components
├── components/
│   ├── EventForm.jsx       # Event creation/editing modal
│   ├── Footer.jsx          # Footer component
│   ├── Modal.jsx           # Confirmation modals
│   ├── Navbar.jsx          # Navigation component
│   └── Notification.jsx    # Toast notifications
├── context/
│   └── AppContext.jsx      # Global state management
├── pages/
│   └── EventPage.jsx       # Individual event view
├── utils/
│   └── api.js              # Mock API functions
├── App.css                 # Component styles
├── App.jsx                 # Main application component
├── index.css               # Global styles and CSS variables
└── main.jsx                # Application entry point
```

## 🎨 Design System

The application uses a modern dark theme with:
- **Primary Colors**: Gradient from cyan (#00c2ff) to mint green (#00ffa3)
- **Background**: Dark blue-gray (#0d1117)
- **Glass Effects**: Semi-transparent panels with backdrop blur
- **Typography**: System font stack with proper hierarchy
- **Animations**: Smooth transitions and hover effects

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a Vite project
3. Deploy with default settings

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider

## 🌟 Key Features Explained

### Event Management
- Create events with detailed information including images, dates, locations
- Edit and delete existing events
- Real-time form validation

### Search & Filtering
- Instant search across event titles and descriptions
- Category-based filtering
- Responsive search interface

### Modern UI/UX
- Glassmorphism design elements
- Smooth animations and transitions
- Mobile-responsive layout
- Intuitive navigation

## 📱 Mobile Responsive

The application is fully responsive and includes:
- Mobile navigation menu
- Responsive grid layouts
- Touch-friendly interactions
- Optimized typography scaling

## 🔧 Customization

### Adding New Categories
Edit the categories array in `src/context/AppContext.jsx`:

```javascript
const categoriesData = [
  'Technology', 'Music', 'Art', 'Food', 
  // Add your custom categories here
];
```

### Styling Modifications
The design system uses CSS variables defined in `src/index.css`. Modify these to customize the appearance:

```css
:root {
  --brand: #00c2ff;
  --brand-secondary: #00ffa3;
  --bg: #0d1117;
  /* Modify other variables as needed */
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **TwinSparks Development Team** - *Initial work*

## 🙏 Acknowledgments

- Images provided by Unsplash
- Icons inspired by Feather Icons
- Design inspiration from modern web applications

## 📞 Support

For support, email support@twinsparks.dev or join our Slack channel.

---

**Built with ❤️ by TwinSparks Development**