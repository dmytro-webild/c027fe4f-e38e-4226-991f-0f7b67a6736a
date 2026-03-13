"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import ContactText from '@/components/sections/contact/ContactText';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { ChefHat, Heart, Sparkles } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="mediumLarge"
      background="floatingGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Bella Italia"
          navItems={[
            { name: "Menu", id: "products" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Reserve Table", href: "#contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Authentic Italian Cuisine, Timeless Tradition"
          description="Experience the flavors of Italy in an elegant setting. From handmade pasta to wood-fired specialties, every dish celebrates generations of culinary heritage and the warmth of Italian hospitality."
          background={{ variant: "floatingGradient" }}
          tag="Est. 2005"
          tagIcon={Sparkles}
          imageSrc="http://img.b2bpic.net/free-photo/chef-making-pasta-near-rolling-pin_23-2148360859.jpg"
          imageAlt="Italian restaurant dining room with warm ambiance"
          buttons={[
            { text: "Make Reservation", href: "#contact" },
            { text: "View Menu", href: "#products" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="Our Story"
          tagIcon={Heart}
          title="A passion for authentic Italian flavors passed down through family traditions. We source the finest ingredients and honor time-tested recipes to create unforgettable dining moments."
          useInvertedBackground={true}
          buttons={[
            { text: "Learn More", href: "#" }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Signature Dishes"
          description="Discover our most beloved Italian specialties, crafted with fresh ingredients and traditional techniques"
          tag="Chef's Selection"
          tagIcon={ChefHat}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          products={[
            {
              id: "1",              name: "Pasta Carbonara",              price: "$22",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-ramen-noodles-raised-fork-black-plate-dark-brown-table_140725-144992.jpg",              imageAlt: "Creamy pasta carbonara with pancetta and parmesan"
            },
            {
              id: "2",              name: "Risotto ai Frutti di Mare",              price: "$28",              imageSrc: "http://img.b2bpic.net/free-photo/bowl-hot-leek-cheese-soup-with-croutons-bacon-wooden-table-cheesy-leek-soup_127032-3022.jpg",              imageAlt: "Creamy seafood risotto with shrimp and squid"
            },
            {
              id: "3",              name: "Tiramisu",              price: "$9",              imageSrc: "http://img.b2bpic.net/free-photo/sided-view-cook-preparing-tiramisu_23-2149549732.jpg",              imageAlt: "Traditional tiramisu with mascarpone and cocoa"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardFourteen
          title="A legacy built on excellence and authentic Italian tradition"
          tag="Our Impact"
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",              value: "19",              description: "Years of family-owned excellence, serving authentic Italian cuisine to our beloved guests."
            },
            {
              id: "2",              value: "10K+",              description: "Satisfied guests who have experienced our culinary artistry and warm Italian hospitality."
            }
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTen
          title="Loved by Our Guests"
          description="Discover what our valued guests have to say about their unforgettable dining experiences at Bella Italia"
          textboxLayout="default"
          useInvertedBackground={true}
          testimonials={[
            {
              id: "1",              title: "An authentic taste of Italy",              quote: "Every bite transported us to Rome. The pasta was perfectly al dente, and the service made us feel like family. We've been back every month since!",              name: "Maria Rossi",              role: "Regular Guest",              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-eating-pasta-cafe_1303-25264.jpg",              imageAlt: "Maria Rossi"
            },
            {
              id: "2",              title: "Simply extraordinary",              quote: "The attention to detail in every dish is remarkable. You can taste the passion and authentic Italian heritage in every flavor. A true gem in the city.",              name: "Antonio Marchetti",              role: "Food Critic",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-woman-with-smartphone-beer_23-2147680764.jpg",              imageAlt: "Antonio Marchetti"
            },
            {
              id: "3",              title: "Perfect for special occasions",              quote: "We celebrated our anniversary here and couldn't have asked for a better experience. The ambiance, the food, the staff—everything was perfect. Highly recommended!",              name: "Elena & Marco Colombo",              role: "Anniversary Celebration",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-holding-her-husband-s-hand_23-2148435761.jpg",              imageAlt: "Elena and Marco Colombo"
            },
            {
              id: "4",              title: "Worth every visit",              quote: "The handmade pasta is incredible. You can tell they use only the finest ingredients. This is what real Italian food should taste like.",              name: "Francesco Gallo",              role: "Food Enthusiast",              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-with-delicious-cocktail_23-2150166118.jpg",              imageAlt: "Francesco Gallo"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSixteen
          title="Why Choose Bella Italia"
          description="Experience the difference between ordinary dining and authentic Italian excellence"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          negativeCard={{
            items: [
              "Mass-produced frozen ingredients",              "Generic chain restaurant atmosphere",              "Rushed service and impersonal experience",              "Artificial flavors and shortcuts"
            ]
          }}
          positiveCard={{
            items: [
              "Fresh, locally sourced premium ingredients",              "Intimate, warm family-owned ambiance",              "Personalized service from passionate staff",              "Authentic traditional Italian recipes",              "Carefully curated wine selection"
            ]
          }}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to experience authentic Italian cuisine? Reserve your table today and join us for an unforgettable evening of flavors, warmth, and Italian hospitality."
          animationType="background-highlight"
          background={{ variant: "plain" }}
          useInvertedBackground={true}
          buttons={[
            { text: "Call Us: (555) 123-4567", href: "tel:+15551234567" },
            { text: "Email: info@bellaitalia.com", href: "mailto:info@bellaitalia.com" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Bella Italia"
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "Terms of Service", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}
