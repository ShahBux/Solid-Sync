import heroBg from "@/assets/hero-bg.jpg";

interface PageBannerProps {
  title: string;
  subtitle?: string;
}

const PageBanner = ({ title, subtitle }: PageBannerProps) => {
  return (
    <div
      className="page-banner"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="page-banner-overlay" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-primary text-lg max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default PageBanner;
