import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import AppRoutes from '@/routes';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="tradevista-theme">
      <Router>
        <div className="min-h-screen bg-background flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
        </div>
        <Toaster />
      </Router>
    </ThemeProvider>
  );
}

export default App;