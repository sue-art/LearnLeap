import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Github, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const MainNav = () => {
  return (
    <div className="flex items-center">
      <Link to="/" className="mr-6 flex items-center space-x-2">
        <span className="font-bold text-xl">LearnLeap</span>
      </Link>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/" className="px-4 py-2">
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/dashboard" className="px-4 py-2">
                Dashboard
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/about" className="px-4 py-2">
                About
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/learning-list" className="px-4 py-2">
                Learning List
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <div className="px-7">
          <Link to="/" className="flex items-center">
            <span className="font-bold">YourApp</span>
          </Link>
        </div>
        <Separator className="my-4" />
        <div className="flex flex-col space-y-3 px-7">
          <Link to="/" className="text-sm font-medium">
            Home
          </Link>
          <Link to="/dashboard" className="text-sm font-medium">
            Dashboard
          </Link>
          <Link to="/about" className="text-sm font-medium">
            About
          </Link>
          <Link to="/learning-list" className="text-sm font-medium">
            Learning List
          </Link>
          <Link to="/login" className="text-sm font-medium">
            Login
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const ThemeToggle = () => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <MainNav />
        <MobileNav />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Button>
          <Button asChild className="hidden md:flex">
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

const Sidebar = ({ className }) => {
  return (
    <div className={`pb-12 ${className}`}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 text-lg font-semibold">Documentation</h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <Link to="/docs/introduction">Introduction</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Link to="/docs/installation">Installation</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Link to="/docs/components">Components</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Link to="/docs/themes">Themes</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Layout = ({ children, showSidebar = false }) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <div className="container w-full flex flex-col">
          {showSidebar && <Sidebar className="hidden md:block" />}
          <main className="flex-1 py-6 px-4 md:px-8">{children}</main>
        </div>
      </div>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            Built with shadcn/ui. The source code is available on GitHub.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
