import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import DashboardLayout from "@/components/DashboardLayout";
import NotFound from "@/pages/NotFound";
import Dashboard from "@/pages/Dashboard";
import Home from "@/pages/Home";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import ModulePage, { LessonPage } from "@/pages/ModulePage";
import ExercisePage from "@/pages/ExercisePage";
import FinalProjectPage from "@/pages/FinalProjectPage";

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/module/:slug/lesson/:lessonSlug" component={LessonPage} />
    <Route path="/module/:slug/exercise" component={ExercisePage} />
    <Route path="/module/:slug/final-project" component={FinalProjectPage} />
    <Route path="/module/:slug" component={ModulePage} />
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch>;
}

function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}

export default App;
