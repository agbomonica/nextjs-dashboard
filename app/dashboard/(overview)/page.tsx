import { Suspense } from 'react';
import { Metadata } from 'next';

import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from '@/app/ui/skeletons';

import { lusitana } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'Overview',
};

const Page = async () => {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>

        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
};

export default Page;

//////////////////////////////////////////////////////
/* KEY CONCEPTS LEARNT
/////////////////////////////////////////////////////
- Frequently used Terminologies: 
React Server component 
React Server action         <form action={action}>
React Client component      "use client"
Server function             "use server"
Rendering                   data fetching & rendering
Pre-rendering (static)      
Dynamic rendering
Data Fetching
Accessibility
Authentication vs Authorization
Build time: when application code is built for production
Request time: when a route is visited.
Runtime 
Compiling
Bundling
Minifying


- Next.js font CSS variable usage: inter.variable in a JSX file OR var(--font-inter) in a CSS file

- Request waterfall - making sequential network requests. FIX (Promise.all(), Promise.allSettled())

-   a. Static (pre-rendering & caching)

    b. Dynamic rendering: de-caching routes with Next.js no-store function 
        Improving user experience with dynamic rendering
          - Stream individual components with React Suspense | streaming an entire Page.tsx with Next.js loading.tsx
          - Data fetching in individual components & streaming with Suspense boundary | data fetching in Page.tsx & streaming with loading.tsx

    c. Partial pre-rendering - most web applications are either STATIC or DYNAMIC by default, Next.js experimental feature allow us to make our applications a combination of both.

- Next.js Route groups - creating folders with parenthesis for logical grouping into sections

- Suspense boundary does not make a page dynamic but separates dynamic content from static contents of a page.

- You can only use event listeners and hooks inside a client component and never fetch data on a client component if you are not using an API layer.

- Managing search and pagination state using URL search params instead of client side state.

- Debouncing: controlling the number of times a function is executed.

- Using Next.js default eslint-plugin-jsx-a11y, React useFormState hook for error handling for implementing serve-side validation.

- Metadata can ONLY be defined in layout.tsx and page.tsx


- Next.js Hooks: usePathname(), useRouter(), useSearchParams()
- Next.js Functions: notFound(), redirect(), revalidatePath()
- Next.js Components: Link, Image
- Metadata default files
  favicon.ico, apple-icon.jpg, and icon.jpg: Utilized for favicons and icons
  opengraph-image.jpg and twitter-image.jpg: Employed for social media images
  robots.txt: Provides instructions for search engine crawling
  sitemap.xml: Offers information about the website's structure

- React hooks: useFormState(), useFormStatus()
- React Components: Suspense
 */
