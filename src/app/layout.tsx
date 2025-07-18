import Header from '../components/Header'
import Footer from '../components/Footer'
import Script from 'next/script'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
        <meta name="custom-check" content="from-layout-tsx" />
        <meta name="description" content=""/>
        <meta name="keywords" content=""/>
        {/* Favicons */}
        <link href="/assets/img/favicon.png" rel="icon" />
        <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

        {/* Fonts */}
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Raleway&family=Nunito+Sans&display=swap" rel="stylesheet" />

        {/* Vendor CSS */}
        <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
        <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />

        {/* Main CSS */}
        <link href="/assets/css/main.css" rel="stylesheet" />

   
      </head>
      <body suppressHydrationWarning={true}>

        <Header />
        {children}
        <Footer />
     
        <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        {/* Vendor JS */}
        <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" async />
        <script src="/assets/vendor/php-email-form/validate.js" async />
        <script src="/assets/vendor/aos/aos.js" async />
        <script src="/assets/vendor/swiper/swiper-bundle.min.js" async/>
        <script src="/assets/vendor/glightbox/js/glightbox.min.js" async />
        <script src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js" async />
        <script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" async />

        {/* Main JS */}
        <script src="/assets/js/main.js" async/>
      </body>
    </html>
  )
}
