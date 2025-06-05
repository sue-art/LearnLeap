import React from 'react';
import { Link } from 'react-router-dom';
// Manually import the cn utility, assuming src/lib/utils.js was created
// import { cn } from '@/lib/utils'; // This alias might not work in subtask shell, use relative path
import { cn } from '../lib/utils';


// Placeholder for a Button component's styles (if we were to create a Button.jsx)
// For now, we'll apply classes directly.
// These classes are typical for a Shadcn UI button.
const buttonVariants = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
  outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  link: 'text-primary underline-offset-4 hover:underline',
};

const buttonSize = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 rounded-md px-3',
  lg: 'h-11 rounded-md px-8',
  icon: 'h-10 w-10',
};

export default function HomePage() {
  return (
    <div className='container mx-auto p-4'>
      {/* Welcome Section */}
      <section className='text-center my-8'>
        <h1 className='text-4xl font-bold mb-4'>Welcome to the Children's Learning App!</h1>
        <p className='text-lg text-muted-foreground'>
          An engaging platform for kids to learn and grow with fun activities,
          phonics, writing practice, and much more.
        </p>
      </section>

      {/* Featured Learning Modules Section (Placeholder) */}
      <section className='my-8'>
        <h2 className='text-2xl font-semibold mb-4'>Featured Learning Modules</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {/* Placeholder Module Card 1 */}
          <div className='border rounded-lg p-4 shadow'>
            <h3 className='text-xl font-medium mb-2'>Module 1: Fun with Phonics</h3>
            <p className='text-sm text-muted-foreground mb-2'>Learn letter sounds and basic words.</p>
            <div className='bg-gray-200 h-32 rounded mb-2'></div> {/* Placeholder for image/icon */}
            <button
              className={cn(
                'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                buttonVariants.outline, // Example: using outline style
                buttonSize.default
              )}
            >
              Start Learning
            </button>
          </div>
          {/* Placeholder Module Card 2 */}
          <div className='border rounded-lg p-4 shadow'>
            <h3 className='text-xl font-medium mb-2'>Module 2: Writing Adventures</h3>
            <p className='text-sm text-muted-foreground mb-2'>Practice letters and simple sentences.</p>
            <div className='bg-gray-200 h-32 rounded mb-2'></div> {/* Placeholder for image/icon */}
            <button
              className={cn(
                'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                buttonVariants.outline,
                buttonSize.default
              )}
            >
              Start Writing
            </button>
          </div>
          {/* Placeholder Module Card 3 (Optional) */}
          <div className='border rounded-lg p-4 shadow'>
            <h3 className='text-xl font-medium mb-2'>Module 3: Math Magic</h3>
            <p className='text-sm text-muted-foreground mb-2'>Introduction to numbers and counting.</p>
            <div className='bg-gray-200 h-32 rounded mb-2'></div> {/* Placeholder for image/icon */}
             <button
              className={cn(
                'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                buttonVariants.outline,
                buttonSize.default
              )}
            >
              Start Counting
            </button>
          </div>
        </div>
      </section>

      {/* Recent Activities Section (Placeholder) */}
      <section className='my-8'>
        <h2 className='text-2xl font-semibold mb-4'>Recent Activities</h2>
        <div className='border rounded-lg p-4 shadow'>
          <p className='text-muted-foreground'>Your recent activities will appear here.</p>
          {/* Example Activity Item */}
          <div className='mt-2 p-2 border-t'>
            <p className='text-sm'>Completed: Phonics Basics - Lesson 1</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className='text-center my-8 py-8 bg-secondary/50 rounded-lg'>
        <h2 className='text-2xl font-semibold mb-4'>Ready to Start Learning?</h2>
        <p className='text-muted-foreground mb-6'>Join us today and unlock a world of knowledge and fun!</p>
        <Link
          to='/login'
          className={cn(
            'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
            buttonVariants.default, // Using primary button style
            buttonSize.lg // Using large size
          )}
        >
          Register or Login
        </Link>
      </section>
    </div>
  );
}
