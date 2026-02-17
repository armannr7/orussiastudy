import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'اوروسیا استادی - دانشگاه‌های روسیه و خدمات تحصیلی',
  description: 'پلتفرم معتبر برای تحصیل در روسیه - ۲۰۰ دانشگاه برتر، مشاوره رایگان، و خدمات آموزشی',
  keywords: 'تحصیل در روسیه, دانشگاه روسی, کارت خدمات, مشاوره تحصیلی, بورس تحصیلی',
  authors: [{ name: 'اوروسیا استادی' }],
  openGraph: {
    title: 'اوروسیا استادی',
    description: 'بهترین پلتفرم برای تحصیل در روسیه',
    type: 'website',
    locale: 'fa_IR',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://orussiastudy.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'اوروسیا استادی',
              url: 'https://orussiastudy.com',
              description: 'پلتفرم آموزشی برای تحصیل در روسیه',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Support',
                telephone: '+98-xxx-xxxxx',
              },
            }),
          }}
        />
      </head>
      <body className="bg-gray-50 text-gray-900">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}