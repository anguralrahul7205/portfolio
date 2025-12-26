import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import ThreeBackground from "@/components/ThreeBackground";

// Pages
import Home from "@/pages/Home";
import Education from "@/pages/Education";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

// Wrapper to handle page transitions
function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Switch location={location} key={location}>
        <Route path="/">
          <PageWrapper>
            <Home />
          </PageWrapper>
        </Route>
        <Route path="/education">
          <PageWrapper>
            <Education />
          </PageWrapper>
        </Route>
        <Route path="/skills">
          <PageWrapper>
            <Skills />
          </PageWrapper>
        </Route>
        <Route path="/projects">
          <PageWrapper>
            <Projects />
          </PageWrapper>
        </Route>
        <Route path="/contact">
          <PageWrapper>
            <Contact />
          </PageWrapper>
        </Route>
        <Route>
          <PageWrapper>
            <NotFound />
          </PageWrapper>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen text-foreground font-body overflow-x-hidden">
        {/* Global Background */}
        <ThreeBackground />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main>
          <Router />
        </main>

        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
