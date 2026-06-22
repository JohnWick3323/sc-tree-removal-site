# ANTIGRAVITY FINAL MASTER PROMPT
## Complete Service Architecture Implementation for southcarolinatreeremovalexperts.com

---

## 🎯 **GOAL**

> **Implement the complete production-ready service architecture** in a single atomic run:
> - 13 flat-URL service pages via single universal template
> - All 9 content-rich services populated from Markdown (Tree Removal ×5, Emergency ×4)
> - 4 Land Clearing services as framework-only with professional placeholders
> - Mega menu navigation (3-column, auto-generated from `services.ts`)
> - 301 redirects for legacy URLs
> - Location pages template (auto-generates 13 × ~50 pages)
> - Full schema (BreadcrumbList, Service, FAQPage, hasOfferCatalog on pillars)
> - Build passes with zero errors

**Success = `npm run build` ✅ + all 13 service pages render + mega menu works + schema valid + redirects work**

---

## 📁 **FILES TO CREATE / MODIFY**

### **1. `src/data/services.ts`** ✅ **ALREADY DONE**
- Complete with all 13 services, real content for 9, placeholders for 4
- Fields: `slug, name, category, isPillar, parentPillar, clusterOrder, hasContent, image, description, metaDescription, heroHeading, features, longContent, faqs`
- **DO NOT MODIFY** — content is finalized

### **2. `public/_redirects`** (CREATE)
```
/services/residential-tree-removal/    /services/tree-removal/    301
/services/residential-tree-removal/*   /services/tree-removal/:splat  301
/services/land-clearing-grading/       /services/land-clearing/   301
/services/land-clearing-grading/*      /services/land-clearing/:splat  301
```

### **3. `src/pages/services/[service].astro`** (REPLACE — universal template)
```astro
---
import { services } from '../../data/services';
import { locations } from '../../data/locations';
import { site } from '../../data/site';
import BaseLayout from '../../layouts/BaseLayout.astro';
import Header from '../../components/Header.astro';
import Footer from '../../components/Footer.astro';
import ContactForm from '../../components/ContactForm.astro';
import { Phone, CheckCircle, ShieldCheck, MapPin, HelpCircle, ArrowRight, TreePine, AlertTriangle, HardHat } from 'lucide-react';

export async function getStaticPaths() {
  return services.map(s => ({ params: { service: s.slug }, props: { service: s } }));
}

const { service } = Astro.props;
const isPillar = service.isPillar;
const parentPillar = services.find(s => s.slug === service.parentPillar);
const pillarName = parentPillar?.name || service.name;
const pillarSlug = service.parentPillar || service.slug;

const siblings = services.filter(s => 
  s.category === service.category && 
  s.slug !== service.slug && 
  !s.isPillar
).slice(0, 3);

const serviceLocations = locations.slice(0, 12);

const placeholders = {
  intro: `Professional ${service.name} services across South Carolina. Our experienced crews deliver safe, efficient results for homeowners and businesses statewide.`,
  methodology: `Our ${service.name.toLowerCase()} process follows industry best practices with safety as the top priority. We assess each project individually and deploy the right equipment and techniques.`,
  localAdvice: `South Carolina's varied terrain — from coastal Lowcountry to Upstate hills — requires local expertise. Our crews understand regional soil conditions, native tree species, and weather patterns.`,
  seasonalConsiderations: `We operate year-round across SC. Hurricane season (Jun–Nov) and Upstate ice storms create peak demand; scheduling ahead ensures availability.`,
  homeownerProblems: `Common issues we solve: overgrown vegetation near structures, drainage problems from poor grading, storm damage cleanup, and invasive species management.`
};

const C = (key: keyof typeof placeholders) => service.hasContent ? service.longContent[key] : placeholders[key];

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services/' },
  { name: pillarName, href: `/services/${pillarSlug}/` },
  { name: service.name, href: `/services/${service.slug}/` }
];

const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": breadcrumbs.map((b,i)=>({"@type":"ListItem","position":i+1,"name":b.name,"item":`${site.url}${b.href}`})) };

const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service",
  "name": service.name, "description": service.metaDescription,
  "provider": {"@type":"LocalBusiness","name":site.name,"telephone":site.phone,"url":site.url},
  "areaServed": {"@type":"State","name":"South Carolina"},
  "serviceType": service.name, "url": `${site.url}/services/${service.slug}/`
};

if (isPillar) {
  const clusterServices = services.filter(s => s.category === service.category && !s.isPillar);
  (serviceSchema as any).hasOfferCatalog = {
    "@type": "OfferCatalog", "name": `${service.name} Services`,
    "itemListElement": clusterServices.map((s,i)=>({"@type":"Offer","itemOffered":{"@type":"Service","name":s.name,"url":`${site.url}/services/${s.slug}/`}}))
  };
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": service.faqs.map(f=>({"@type":"Question","name":f.question,"acceptedAnswer":{"@type":"Answer","text":f.answer}})) };
---

<BaseLayout title={`${service.name} | South Carolina Tree Removal Experts`} description={service.metaDescription}>
  <script type="application/ld+json" set:html={JSON.stringify(breadcrumbSchema)} />
  <script type="application/ld+json" set:html={JSON.stringify(serviceSchema)} />
  <script type="application/ld+json" set:html={JSON.stringify(faqSchema)} />
  <Header slot="header" />

  <!-- HERO -->
  <section class="relative pt-32 pb-24 md:pt-48 md:pb-36 bg-neutral-900 overflow-hidden">
    <div class="absolute inset-0">
      <img src={service.image || `/images/services/${service.slug}.webp`} alt={service.name} class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-primary-900/80 backdrop-blur-sm" />
    </div>
    <div class="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-center text-white">
      <nav class="flex justify-center mb-8 text-sm font-medium text-primary-300">
        <ol class="flex items-center gap-2">
          {breadcrumbs.map((b,i)=>(<li class="flex items-center gap-2"><a href={b.href} class="hover:text-white">{b.name}</a>{i<breadcrumbs.length-1&&<span>/</span>}</li>))}
        </ol>
      </nav>
      <h1 class="text-4xl md:text-6xl font-bold font-heading mb-8 leading-tight max-w-4xl mx-auto">{service.heroHeading}</h1>
      <p class="text-xl text-primary-50 max-w-2xl mx-auto leading-relaxed mb-12">{service.description}</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/contact/" class="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-xl">Request Free Quote</a>
        <a href={`tel:${site.phone}`} class="bg-white text-primary-700 px-8 py-4 rounded-md font-bold text-lg transition-all flex items-center justify-center gap-2"><Phone size={20} /> {site.phone}</a>
      </div>
    </div>
  </section>

  <!-- MAIN CONTENT GRID -->
  <section class="py-24 bg-white">
    <div class="container mx-auto px-4 md:px-8 max-w-7xl">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <!-- LEFT: Article -->
        <div class="lg:col-span-2 prose prose-lg prose-primary max-w-none">
          <h2>Professional {service.name} Overview</h2>
          <p>{C('intro')}</p>

          <div class="my-12 p-8 bg-neutral-50 rounded-3xl border border-neutral-100 italic">
            <p class="mb-0 text-neutral-700"><strong>Looking for this service in a specific area?</strong> We provide {' '}
              <a href={`/services/${service.slug}/columbia/`} class="text-primary-600 font-bold underline">{service.name} in Columbia</a>{' '}
              , <a href={`/services/${service.slug}/charleston/`} class="text-primary-600 font-bold underline">Charleston</a>{' '}
              , and across South Carolina.
            </p>
          </div>

          <h2>Our {service.name} Methodology</h2>
          <p>{C('methodology')}</p>

          <h2>South Carolina Specific Arborist Advice</h2>
          <p>{C('localAdvice')}</p>

          <h2>Seasonal Considerations for {service.name}</h2>
          <p>{C('seasonalConsiderations')}</p>

          <h2>Common Problems We Solve</h2>
          <p>{C('homeownerProblems')}</p>
        </div>

        <!-- RIGHT: Sticky Sidebar -->
        <div class="space-y-12">
          <div class="bg-neutral-50 p-8 rounded-3xl border border-neutral-100 sticky top-32">
            <h3 class="text-xl font-bold mb-6 text-neutral-900">Key Service Features</h3>
            <ul class="space-y-4">
              {service.features.map(f => <li class="flex items-start gap-3"><CheckCircle size={18} class="text-primary-600 shrink-0 mt-1" /><span class="text-neutral-700 font-medium">{f}</span></li>)}
            </ul>
          </div>

          <div class="sticky top-32">
            <ContactForm title={`Professional ${service.name} Quote`} subtitle="Certified arborist assessment scheduled in hours." isDark={true} />
          </div>

          <div class="grid grid-cols-1 gap-4">
            <div class="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm flex items-center gap-4">
              <ShieldCheck size={32} class="text-primary-600" />
              <div><p class="font-bold text-neutral-900">Fully Insured</p><p class="text-xs text-neutral-500">Protection for every project</p></div>
            </div>
            <div class="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm flex items-center gap-4">
              <Phone size={32} class="text-primary-600" />
              <div><p class="font-bold text-neutral-900">24/7 Availability</p><p class="text-xs text-neutral-500">Emergency storm response</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- LOCATION VARIANTS -->
  <section class="py-24 bg-neutral-50">
    <div class="container mx-auto px-4 md:px-8 max-w-7xl">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold font-heading text-neutral-900 mb-6">Local {service.name} Experts Near You</h2>
        <p class="text-lg text-neutral-600 max-w-2xl mx-auto">Providing specialized arborist-led services across South Carolina.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceLocations.map(loc => <a href={`/services/${service.slug}/${loc.slug}/`} class="group bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 hover:border-primary-500 hover:shadow-xl transition-all"><div class="flex items-center gap-2 mb-3"><MapPin size={18} class="text-primary-600" /><h3 class="font-bold group-hover:text-primary-700 transition-colors">{service.name} in {loc.name}</h3></div><p class="text-neutral-500 text-xs line-clamp-2">Serving {loc.county} and surrounding areas.</p></a>)}
      </div>
      <div class="text-center mt-12"><a href="/locations/" class="text-primary-600 font-bold hover:underline">View All Service Locations →</a></div>
    </div>
  </section>

  <!-- RELATED SERVICES (SAME CLUSTER ONLY) -->
  <section class="py-24 bg-white border-t border-neutral-100">
    <div class="container mx-auto px-4 md:px-8 max-w-7xl text-center">
      <h2 class="text-3xl font-bold font-heading text-neutral-900 mb-12">Related {pillarName} Services</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {siblings.map(s => <a href={`/services/${s.slug}/`} class="group p-8 rounded-3xl bg-neutral-50 border border-neutral-100 hover:bg-white hover:shadow-2xl hover:border-primary-200 transition-all"><h3 class="text-xl font-bold mb-4 group-hover:text-primary-600">{s.name}</h3><p class="text-neutral-600 text-sm mb-6 line-clamp-3">{s.description}</p><span class="text-primary-600 font-bold flex items-center gap-2 text-sm">Service Details <ArrowRight size={16} /></span></a>)}
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="py-24 bg-neutral-900 text-white">
    <div class="container mx-auto px-4 md:px-8 max-w-4xl">
      <div class="text-center mb-16">
        <div class="bg-primary-600/20 p-4 rounded-full text-primary-400 inline-flex mb-6 border border-primary-500/30"><HelpCircle size={32} /></div>
        <h2 class="text-3xl md:text-4xl font-bold font-heading mb-6">Frequently Asked Questions</h2>
        <p class="text-lg text-neutral-400">{service.name}-specific arborist insights for South Carolina property owners.</p>
      </div>
      <div class="space-y-6">
        {service.faqs.map(faq => <div class="bg-neutral-800 rounded-2xl border border-neutral-700 overflow-hidden"><div class="p-8"><h3 class="text-xl font-bold font-heading text-white mb-4 flex items-start gap-3"><span class="text-primary-500 mt-1 shrink-0">Q.</span>{faq.question}</h3><p class="text-neutral-400 leading-relaxed flex items-start gap-3"><span class="text-primary-500 mt-1 font-bold shrink-0">A.</span>{faq.answer}</p></div></div>)}
      </div>
    </div>
  </section>

  <!-- FINAL CTA -->
  <section class="py-24 bg-primary-600 text-white relative overflow-hidden">
    <div class="container mx-auto px-4 md:px-8 max-w-5xl relative z-10 text-center">
      <h2 class="text-3xl md:text-5xl font-bold font-heading mb-8">Ready to Get Started with Your {service.name}?</h2>
      <p class="text-xl text-primary-50 mb-12 leading-relaxed max-w-3xl mx-auto">Our expert arborist team is ready to assess your property anywhere in South Carolina. Clear, written estimates and guaranteed zero-impact cleanup.</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/contact/" class="bg-white text-primary-700 px-10 py-5 rounded-md font-bold text-xl hover:bg-primary-50 transition-all shadow-xl">Free Estimate</a>
        <a href={`tel:${site.phone}`} class="bg-primary-700 text-white border border-primary-500 px-10 py-5 rounded-md font-bold text-xl hover:bg-primary-800 transition-all flex items-center justify-center gap-3"><Phone size={24} /> {site.phone}</a>
      </div>
    </div>
  </section>

  <Footer slot="footer" />
</BaseLayout>
```

### **4. `src/pages/services/[service]/[...city].astro`** (UPDATE — location template)
```astro
---
import { locations } from '../../../data/locations';
import { services } from '../../../data/services';
import { combinations } from '../../../data/combinations';
import { site } from '../../../data/site';
import { AnimatedIcon } from '../../../components/AnimatedIcon';
import BaseLayout from '../../../layouts/BaseLayout.astro';
import Header from '../../../components/Header.astro';
import Footer from '../../../components/Footer.astro';
import ContactForm from '../../../components/ContactForm.astro';
import { Phone, CheckCircle, ShieldCheck, Zap, HardHat, MapPin, Star, Award, Clock, HelpCircle, ArrowRight, TreePine, Construction, AlertTriangle, CloudLightning } from 'lucide-react';

export async function getStaticPaths() {
  const paths = [];
  for (const location of locations) {
    for (const service of services) {
      const combo = combinations.find(c => c.serviceSlug === service.slug && c.locationSlug === location.slug);
      paths.push({
        params: { service: service.slug, city: location.slug || undefined },
        props: { location, service, combo }
      });
    }
  }
  return paths;
}

const { location, service, combo } = Astro.props;
const parentPillar = services.find(s => s.slug === service.parentPillar);
const pillarName = parentPillar?.name || service.name;
const pillarSlug = service.parentPillar || service.slug;

const nearbyAreas = locations.filter(l => l.county === location.county && l.slug !== location.slug).slice(0, 6);
const relatedServices = services.filter(s => s.category === service.category && s.slug !== service.slug && !s.isPillar).slice(0, 3);

const placeholders = {
  intro: `Professional ${service.name} services in ${location.name}, SC. Our experienced crews deliver safe, efficient results.`,
  methodology: `Our ${service.name.toLowerCase()} process follows industry best practices with safety as the top priority.`,
  localAdvice: `${location.name}'s local conditions require specialized expertise. Our crews understand regional soil, species, and weather patterns.`,
  seasonalConsiderations: `We operate year-round in ${location.name}. Hurricane season and ice storms create peak demand; early scheduling recommended.`,
  homeownerProblems: `Common issues in ${location.name}: overgrown vegetation, drainage problems, storm damage, invasive species.`
};

const C = (key: keyof typeof placeholders) => service.hasContent ? service.longContent[key] : placeholders[key];

const localizedIntro = combo?.uniqueIntro || C('intro');
const allFaqs = [...(service.faqs.slice(0, 3)), ...(combo?.uniqueFaqs || [])];

const pageTitle = `Professional ${service.name} in ${location.name}, SC | South Carolina Tree Removal Experts`;
const pageDesc = `Expert ${service.name.toLowerCase()} in ${location.name}, SC. ISA-Certified Arborists, 24/7 emergency response, guaranteed safety for your ${location.county} property. Call today for a free estimate!`;

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services/' },
  { name: pillarName, href: `/services/${pillarSlug}/` },
  { name: service.name, href: `/services/${service.slug}/` },
  { name: `${service.name} in ${location.name}`, href: `/services/${service.slug}/${location.slug}/` }
];

const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": breadcrumbs.map((b,i)=>({"@type":"ListItem","position":i+1,"name":b.name,"item":`${site.url}${b.href}`})) };

const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service",
  "name": `${service.name} in ${location.name}, SC`,
  "description": pageDesc,
  "provider": {"@type":"LocalBusiness","name":site.name,"telephone":site.phone,"url":site.url},
  "areaServed": {"@type":"City","name":location.name,"containedInPlace":{"@type":"State","name":"South Carolina"}},
  "serviceType": service.name,
  "url": `${site.url}/services/${service.slug}/${location.slug}/`
};

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": allFaqs.map(f=>({"@type":"Question","name":f.question,"acceptedAnswer":{"@type":"Answer","text":f.answer}})) };

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "LocalBusiness",
  "name": `South Carolina Tree Removal Experts - ${location.name}`,
  "image": service.image, "telephone": site.phone, "url": `${site.url}/services/${service.slug}/${location.slug}`,
  "address": {"@type":"PostalAddress","addressLocality":location.name,"addressRegion":"SC","addressCountry":"US"},
  "geo": {"@type":"GeoCoordinates","latitude":location.geo.lat,"longitude":location.geo.lng},
  "areaServed": location.name
};
---

<BaseLayout title={pageTitle} description={pageDesc}>
  <script type="application/ld+json" set:html={JSON.stringify(breadcrumbSchema)} />
  <script type="application/ld+json" set:html={JSON.stringify(serviceSchema)} />
  <script type="application/ld+json" set:html={JSON.stringify(faqSchema)} />
  <script type="application/ld+json" set:html={JSON.stringify(localBusinessSchema)} />
  <Header slot="header" />

  <section class="relative pt-32 pb-24 bg-neutral-900 overflow-hidden text-white">
    <div class="absolute inset-0 z-0">
      <img src={service.image || `/images/services/${service.slug}.webp`} alt={`${service.name} in ${location.name}, SC`} class="w-full h-full object-cover opacity-40" />
      <div class="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent"></div>
    </div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl">
        <nav class="flex mb-8 text-sm font-medium text-primary-400/80 gap-2 items-center">
          <a href="/" class="hover:text-primary-300">Home</a><span>/</span>
          <a href="/services/" class="hover:text-primary-300">Services</a><span>/</span>
          <span class="text-white">{service.name} {location.name}</span>
        </nav>
        <h1 class="text-5xl md:text-7xl font-bold font-heading mb-8 leading-tight">Reliable {service.name} <br/>in <span class="text-primary-400">{location.name}, SC</span></h1>
        <p class="text-xl text-neutral-300 mb-12 leading-relaxed max-w-2xl">Certified Arborist-led {service.name.toLowerCase()} for <strong>{location.name}</strong> homes and businesses. 24/7 emergency response and zero-impact property protection guaranteed.</p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a href={`tel:${site.phone}`} class="bg-primary-600 hover:bg-primary-700 text-white px-10 py-5 rounded-md font-bold text-xl transition-all flex items-center justify-center gap-3 shadow-xl hover:-translate-y-1 text-center"><AnimatedIcon client:load icon={Phone} size={24} animation="shake" /> {site.phone}</a>
          <a href="/contact/" class="bg-white text-neutral-900 px-10 py-5 rounded-md font-bold text-xl hover:bg-neutral-100 transition-all text-center">Free Online Estimate</a>
        </div>
      </div>
    </div>
  </section>

  <section class="py-24 bg-white">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-20">
        <div class="lg:col-span-2 prose prose-lg text-neutral-600 max-w-none prose-headings:font-heading prose-headings:text-neutral-900 prose-strong:text-neutral-900 prose-a:text-primary-600">
          <h2>Expert {service.name} Solutions for {location.name} Property Owners</h2>
          <p>{localizedIntro}</p>
          <p>Properties in <strong>{location.name}</strong> and throughout <strong>{location.county}</strong> often face challenges related to <strong>{location.soilType}</strong>. This soil composition can lead to specific root instability issues, especially during South Carolina's intense hurricane seasons. Our team of Arborist-led professionals understands exactly how to manage {service.name.toLowerCase()} in these local conditions, ensuring that your property remains safe and your landscape's value is preserved.</p>
          <div class="my-12 p-8 bg-neutral-50 rounded-3xl border border-neutral-100 italic"><p class="mb-0 text-neutral-700"><strong>Related Coverage:</strong> We also provide <a href={`/services/${service.slug}/columbia/`} class="text-primary-600 font-bold underline">{service.name} in Columbia</a>, <a href={`/services/${service.slug}/charleston/`} class="text-primary-600 font-bold underline">{service.name} in Charleston</a>, and <a href={`/services/${service.slug}/greenville/`} class="text-primary-600 font-bold underline">{service.name} in Greenville</a>.</p></div>
          <div class="my-16 p-10 bg-primary-900 rounded-[2rem] text-white not-prose relative overflow-hidden"><div class="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8"><div class="text-center md:text-left"><h3 class="text-3xl font-bold mb-2">Need {service.name} Fast?</h3><p class="text-primary-200">Our local crews are currently serving {location.name}.</p></div><a href={`tel:${site.phone}`} class="bg-primary-500 hover:bg-primary-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-2"><Zap size={20} /> Request Priority Service</a></div><div class="absolute -right-10 -bottom-10 opacity-10"><TreePine size={200} /></div></div>
          <div class="my-12 rounded-3xl overflow-hidden shadow-xl border border-neutral-200"><img src={service.image} alt={`Professional ${service.name} project in ${location.name}, SC`} class="w-full h-auto" /><div class="bg-neutral-50 p-4 text-center"><p class="text-sm text-neutral-500 italic mb-0 font-medium">Professional {service.name} in action — {location.name}, SC</p></div></div>
          <h3>Our Detailed {service.name} Process</h3>
          <p>{C('methodology')}</p>
          <p>In <strong>{location.name}</strong>, we take extra precautions to identify underground utilities before any heavy work begins. Given the density of neighborhoods like <strong>{location.neighborhoods.slice(0, 2).join(' and ')}</strong>, our zero-impact rigging is essential for protecting structures and power lines.</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 not-prose">
            <div class="bg-neutral-50 p-8 rounded-2xl border border-neutral-100"><div class="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-6"><CloudLightning size={24} /></div><h4 class="text-xl font-bold text-neutral-900 mb-4">Seasonal Factors in {location.name}</h4><p class="text-neutral-600 leading-relaxed text-sm">{C('seasonalConsiderations')}</p></div>
            <div class="bg-neutral-50 p-8 rounded-2xl border border-neutral-100"><div class="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-6"><AlertTriangle size={24} /></div><h4 class="text-xl font-bold text-neutral-900 mb-4">Common {location.name} Problems</h4><p class="text-neutral-600 leading-relaxed text-sm">{C('homeownerProblems')}</p></div>
          </div>
          <h3>Local {location.name} Arborist Advice</h3>
          <p>{C('localAdvice')}</p>
          <p>If you live near <strong>{location.landmarks[0]?.name || 'the local city center'}</strong>, you may have specific municipal or HOA requirements for tree maintenance. Our team is well-versed in <strong>{location.hoaNotes}</strong> and the local <strong>{location.waterRestrictions}</strong> that may affect your post-service landscaping.</p>
          <h3 id="faqs" class="mt-16">Frequently Asked Questions in {location.name}</h3>
          <div class="not-prose space-y-4">{allFaqs.map(faq => <details class="group border border-neutral-200 rounded-2xl p-6 bg-neutral-50 [&_summary::-webkit-details-marker]:hidden"><summary class="flex items-center justify-between cursor-pointer"><h4 class="font-bold text-neutral-900 flex gap-3 text-lg"><HelpCircle size={22} class="text-primary-600 shrink-0" /> {faq.question}</h4><span class="ml-4 flex-shrink-0 transition duration-300 group-open:-rotate-180"><ArrowRight size={20} /></span></summary><p class="mt-4 text-neutral-600 pl-8 leading-relaxed">{faq.answer}</p></details>)}</div>
        </div>

        <div class="space-y-12">
          <div class="sticky top-32"><ContactForm title={`Get a Local Quote`} subtitle={`Rapid Arborist response in ${location.name}.`} isDark={true} /></div>
          <div class="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm"><h3 class="text-xl font-bold mb-6 text-neutral-900">Area Service Info</h3><div class="space-y-4"><div class="flex justify-between items-center text-sm border-b border-neutral-100 pb-2"><span class="text-neutral-500">County</span><span class="font-bold text-neutral-900">{location.county}</span></div><div class="flex justify-between items-center text-sm border-b border-neutral-100 pb-2"><span class="text-neutral-500">Soil Anchor</span><span class="font-bold text-neutral-900 text-right ml-4">{location.soilType}</span></div></div></div>
          <div class="bg-white p-8 rounded-3xl border border-neutral-200"><h3 class="text-xl font-bold mb-6 text-neutral-900">Related Arborist Services</h3><div class="space-y-4">{relatedServices.map(rs => <a href={`/services/${rs.slug}/${location.slug}/`} class="flex items-center justify-between p-4 bg-neutral-50 rounded-xl hover:bg-primary-50 transition-colors group"><span class="font-medium text-neutral-700 group-hover:text-primary-700">{rs.name}</span><ArrowRight size={16} class="text-neutral-400 group-hover:text-primary-600" /></a>)}</div></div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-24 bg-neutral-50 border-y border-neutral-200"><div class="container mx-auto px-4 max-w-7xl"><div class="text-center mb-12"><h2 class="text-3xl font-bold font-heading text-neutral-900 mb-4">Nearby Communities We Also Serve</h2><p class="text-neutral-600">Local Arborist expertise for {location.county} and surrounding areas.</p></div><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">{nearbyAreas.map(area => <a href={`/services/${service.slug}/${area.slug}/`} class="px-4 py-3 bg-white border border-neutral-200 rounded-xl text-center text-sm font-bold text-neutral-700 hover:border-primary-500 hover:text-primary-700 transition-all shadow-sm">{area.name}</a>)}</div></div></section>

  <section class="py-24 bg-primary-600 text-white relative overflow-hidden"><div class="container mx-auto px-4 relative z-10 text-center"><h2 class="text-3xl md:text-6xl font-bold font-heading mb-8">Ready to Secure Your {location.name} Property?</h2><p class="text-xl text-primary-100 mb-12 max-w-2xl mx-auto leading-relaxed">Our certified Arborists provide the highest level of safety and care for <strong>{location.name}</strong> property owners. Schedule your free evaluation today.</p><div class="flex flex-col sm:flex-row justify-center gap-6"><a href={`tel:${site.phone}`} class="inline-flex items-center gap-3 bg-white text-primary-700 px-10 py-5 rounded-md font-bold text-xl hover:bg-primary-50 transition-all shadow-2xl"><Phone size={24} /> {site.phone}</a><a href="/contact/" class="inline-flex items-center gap-3 bg-primary-800 text-white border border-primary-400 px-10 py-5 rounded-md font-bold text-xl hover:bg-primary-900 transition-all">Schedule Free Quote</a></div></div><div class="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"><div class="absolute top-10 left-10"><TreePine size={120} /></div><div class="absolute bottom-10 right-10"><Construction size={120} /></div></div></section>

  <Footer slot="footer" />
</BaseLayout>
```

### **5. `src/pages/services/index.astro`** (UPDATE — grouped by category)
```astro
---
import { site } from "../../data/site";
import { services } from '../../data/services';
import BaseLayout from '../../layouts/BaseLayout.astro';
import Header from '../../components/Header.astro';
import Footer from '../../components/Footer.astro';
import ContactForm from '../../components/ContactForm.astro';
import { Phone, CheckCircle, ShieldCheck, HardHat, MapPin, Leaf, ChevronDown, Award, Users, AlertTriangle } from 'lucide-react';

const nonStumpServices = services.filter(s => s.slug !== 'stump-grinding');
const pillars = nonStumpServices.filter(s => s.isPillar);
const supportingByCategory = nonStumpServices.filter(s => !s.isPillar).reduce((acc, s) => {
  if (!acc[s.category]) acc[s.category] = [];
  acc[s.category].push(s);
  return acc;
}, {} as Record<string, typeof nonStumpServices>);

const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Services', href: '/services/' }];
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": breadcrumbs.map((bc, idx) => ({ "@type": "ListItem", "position": idx + 1, "name": bc.name, "item": `${site.url}${bc.href}` })) };
const itemListSchema = { "@context": "https://schema.org", "@type": "ItemList", "name": "Tree Removal Services in South Carolina", "itemListElement": nonStumpServices.map((s, idx) => ({ "@type": "ListItem", "position": idx + 1, "url": `${site.url}/services/${s.slug}/`, "name": s.name })) };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How much does tree removal cost in South Carolina?", "acceptedAnswer": { "@type": "Answer", "text": "On average, homeowners pay between $385 and $2,000 for professional tree extraction. Small trees under 30 feet sit at the lower end, while massive 80-foot specimens requiring crane assistance sit at the top." } }, { "@type": "Question", "name": "Do I need a permit to remove a tree in South Carolina?", "acceptedAnswer": { "@type": "Answer", "text": "Permit requirements are governed locally by individual municipalities. Cities like Charleston and Mount Pleasant protect 'Grand Trees' (24+ inches DBH) and require an official arborist report before removal approval." } }, { "@type": "Question", "name": "What should I do when a tree falls on my house?", "acceptedAnswer": { "@type": "Answer", "text": "Immediately evacuate and call emergency services if utility lines are compromised. Take extensive photos of the structural impact and contact an emergency tree service provider to stabilize the timber and tarp the roof." } }, { "@type": "Question", "name": "Does homeowners insurance cover tree removal in South Carolina?", "acceptedAnswer": { "@type": "Answer", "text": "According to the South Carolina Department of Insurance, policies generally cover removal costs if the tree falls due to a covered peril (like windstorms) and impacts a covered structure. Trees fallen harmlessly in the yard are typically classified as maintenance and not covered." } }, { "@type": "Question", "name": "Is there a 24-hour emergency tree removal service?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, our emergency crews operate continuously day and night, 365 days a year across South Carolina. We maintain fully equipped crews on standby for high-liability situations like trees blocking roads or impacting roofs." } }, { "@type": "Question", "name": "Can you remove a tree close to my house safely?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We use high-capacity mobile cranes and specialized rigging systems to segment and hoist heavy timber away from your roofline without dropping debris onto your lawn or hardscapes." } }] };
---

<BaseLayout title="Tree Removal in South Carolina | South Carolina Tree Removal Experts" description="Need professional tree removal in South Carolina? South Carolina Tree Removal Experts has 38 years of experience. Licensed & insured. Free quotes. Call (888) 643-4199.">
  <script type="application/ld+json" set:html={JSON.stringify(breadcrumbSchema)} />
  <script type="application/ld+json" set:html={JSON.stringify(itemListSchema)} />
  <script type="application/ld+json" set:html={JSON.stringify(faqSchema)} />
  <Header slot="header" />

  <section class="relative pt-32 pb-24 md:pt-48 md:pb-36 bg-neutral-900 overflow-hidden">
    <div class="absolute inset-0 z-0"><div class="absolute inset-0 bg-primary-900/85 backdrop-blur-sm z-10"></div><img src="/images/optimized/hero-services.webp" alt="South Carolina Tree Removal Experts at Work" class="w-full h-full object-cover" /></div>
    <div class="container mx-auto px-4 md:px-8 max-w-5xl relative z-20 text-center text-white">
      <nav class="flex justify-center mb-8"><ol class="flex items-center gap-2 text-sm font-medium text-primary-200">{breadcrumbs.map((bc, idx) => (<li class="flex items-center gap-2"><a href={bc.href} class="hover:text-white transition-colors">{bc.name}</a>{idx < breadcrumbs.length - 1 && <span class="text-primary-500">/</span>}</li>))})</ol></nav>
      <h1 class="text-4xl md:text-6xl font-bold font-heading mb-8 leading-tight">South Carolina's Most Trusted Tree Removal Experts &mdash; <span class="text-primary-400">Serving the Entire State for 38 Years</span></h1>
      <p class="text-xl text-primary-50 max-w-3xl mx-auto leading-relaxed mb-12">Licensed. Insured. Local. Available 24/7 for Emergency Tree Removal Across All of South Carolina.</p>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-3 mb-12 max-w-4xl mx-auto">
        <div class="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-3 text-center"><span class="block text-xs font-bold text-primary-300">38 Years</span><span class="block text-xs text-white/70">Experience</span></div>
        <div class="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-3 text-center"><span class="block text-xs font-bold text-primary-300">Licensed</span><span class="block text-xs text-white/70">&amp; Insured</span></div>
        <div class="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-3 text-center"><span class="block text-xs font-bold text-primary-300">Free</span><span class="block text-xs text-white/70">Estimates</span></div>
        <div class="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-3 text-center"><span class="block text-xs font-bold text-primary-300">24/7</span><span class="block text-xs text-white/70">Emergency Response</span></div>
        <div class="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-3 text-center col-span-2 md:col-span-1"><span class="block text-xs font-bold text-primary-300">Serving</span><span class="block text-xs text-white/70">All of SC</span></div>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="/contact/" class="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">Get Your Free Estimate Today</a><a href={`tel:${site.phone}`} class="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-md font-bold text-lg transition-all text-center flex items-center justify-center gap-3"><Phone size={20} /> {site.phone}</a></div>
    </div>
  </section>

  <section class="py-24 bg-white"><div class="container mx-auto px-4 md:px-8 max-w-5xl">
    <h2 class="text-4xl md:text-5xl font-bold font-heading text-neutral-900 mb-10 text-center">Professional Tree Removal Services Across All of South Carolina</h2>
    <p class="text-lg text-neutral-600 mb-6 leading-relaxed">South Carolina Tree Removal Experts has been serving homeowners, businesses, and property managers across the Palmetto State for over 38 years. We are a licensed and insured tree removal company built on a reputation for safe, efficient, and professional work on every single job.</p>
    <p class="text-lg text-neutral-600 mb-6 leading-relaxed">From Columbia and Charleston to Greenville, Myrtle Beach, and everywhere in between, our experienced crews are ready to handle any tree removal challenge. Whether it is a single hazardous tree in your backyard or a full commercial land clearing project, we have the equipment, the expertise, and the experience to get it done right.</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
      <div><h3 class="text-2xl font-bold font-heading text-neutral-900 mb-4">What We Do</h3><p class="text-neutral-600 mb-4 leading-relaxed">We specialize exclusively in tree removal, emergency tree response, land and lot clearing, and commercial tree services. Every job is handled by trained, local crews who know South Carolina's tree landscape better than anyone.</p></div>
      <div><h3 class="text-2xl font-bold font-heading text-neutral-900 mb-4">Who We Serve</h3><p class="text-neutral-600 mb-4 leading-relaxed">We work with homeowners dealing with dead, damaged, or dangerous trees. We also serve property managers, business owners, developers, and contractors who need reliable, large-scale tree removal and land clearing.</p></div>
    </div>

    <div class="mt-16 bg-neutral-50 rounded-2xl border border-neutral-100 p-8 md:p-10">
      <h3 class="text-2xl font-bold font-heading text-neutral-900 mb-6">Our Services at a Glance</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {pillars.map(pillar => {
          const siblings = supportingByCategory[pillar.category] || [];
          return (
            <a href={`/services/${pillar.slug}/`} class="flex items-start gap-4 p-4 bg-white rounded-xl border border-neutral-100 hover:border-primary-500 hover:shadow-md transition-all group">
              <div class="bg-primary-50 p-3 rounded-lg text-primary-600 shrink-0">{pillar.category === 'tree-removal' && <Leaf size={22} />}{pillar.category === 'emergency' && <AlertTriangle size={22} />}{pillar.category === 'land-clearing' && <HardHat size={22} />}</div>
              <div>
                <span class="font-bold text-neutral-900 group-hover:text-primary-700 transition-colors">{pillar.name}</span>
                <p class="text-sm text-neutral-500 mt-1">{pillar.description}</p>
                <div class="mt-2 flex flex-wrap gap-2">
                  {siblings.sort((a,b)=>a.clusterOrder-b.clusterOrder).map(s => <span class="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full">{s.name}</span>)}
                </div>
              </div>
            </a>
          )})}
      </div>
    </div>
  </div></section>

  <!-- FAQ Section (same as current) -->
  <section class="py-24 bg-white border-t border-neutral-100"><div class="container mx-auto px-4 md:px-8 max-w-4xl"><h2 class="text-4xl font-bold font-heading text-neutral-900 mb-16 text-center">Frequently Asked Questions About Tree Removal in South Carolina</h2><div class="space-y-4">{[
    { q: 'How much does tree removal cost in South Carolina?', a: 'Tree removal costs vary depending on the size of the tree, its location, proximity to structures, and the method required. We always provide a free, transparent on-site estimate so you know exactly what to expect before any work begins.' },
    { q: 'Do you offer free estimates?', a: 'Yes &mdash; South Carolina Tree Removal Experts provides free on-site estimates on every job, with no obligation and no pressure. Simply call (888) 643-4199 and we will schedule a visit.' },
    { q: 'Are you licensed and insured in South Carolina?', a: 'Yes &mdash; we are fully licensed and insured on every job we perform, carrying complete liability coverage and workers\\' compensation so you are fully protected.' },
    { q: 'How quickly can you respond to a tree emergency?', a: 'We operate 24/7 for emergency tree removal. We prioritize emergency calls and dispatch a crew as quickly as possible across the state.' },
    { q: 'Do you work with insurance claims for storm damage?', a: 'Yes. We document the removal process thoroughly and provide the paperwork and photos your insurance company may require to support your claim.' },
    { q: 'What size trees can you remove?', a: 'We remove trees of every size &mdash; from small ornamentals to massive Loblolly Pines, Water Oaks, and Southern Live Oaks. We use crane-assisted equipment for oversized or hard-to-access trees.' }
  ].map(faq => (<details class="group bg-neutral-50 rounded-2xl border border-neutral-200 [&_summary::-webkit-details-marker]:hidden"><summary class="flex cursor-pointer items-center justify-between p-6 md:p-8 text-neutral-900 font-bold text-lg">{faq.q}<span class="transition duration-300 group-open:-rotate-180 text-primary-600 bg-white p-2 rounded-full shadow-sm flex-shrink-0 ml-4"><ChevronDown size={22} /></span></summary><div class="px-6 pb-6 md:px-8 md:pb-8 text-neutral-600 leading-relaxed">{faq.a}</div></details>))}</div><div class="mt-12 bg-primary-50 rounded-2xl border border-primary-100 p-6 text-center"><p class="font-bold text-neutral-900 text-lg">Still Have Questions? Call (888) 643-4199 &mdash; We Are Happy to Help.</p></div></div></section>

  <section class="py-24 bg-primary-600 relative overflow-hidden"><div class="absolute inset-0 bg-neutral-900/10 z-0"></div><div class="absolute bottom-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div><div class="container mx-auto px-4 md:px-8 max-w-4xl relative z-10 text-center"><h2 class="text-3xl md:text-5xl font-bold font-heading text-white mb-8 leading-tight">Need a Tree Removed in South Carolina? We Are Ready.</h2><p class="text-lg text-primary-50 mb-10 max-w-2xl mx-auto leading-relaxed">When a tree becomes a problem &mdash; whether it is dead, damaged, dangerous, or simply in the wrong place &mdash; South Carolina Tree Removal Experts is the team to call. We have been serving South Carolina homeowners, businesses, and property managers for over 38 years.</p><div class="flex flex-col sm:flex-row gap-4 justify-center mb-12"><a href={`tel:${site.phone}`} class="bg-white text-primary-700 px-10 py-5 rounded-md font-bold text-xl hover:bg-primary-50 transition-all shadow-xl flex items-center justify-center gap-3"><Phone size={24} /> Call (888) 643-4199 for a Free Quote</a><a href="/contact/" class="bg-primary-800 text-white border border-primary-500 px-10 py-5 rounded-md font-bold text-xl hover:bg-primary-900 transition-all text-center">Request a Free Estimate Online</a></div><div class="bg-primary-700/50 backdrop-blur-sm border border-primary-500/40 rounded-2xl p-8 mb-8"><p class="font-bold text-white text-xl mb-3">&#128680; Dealing With a Tree Emergency Right Now?</p><p class="text-primary-100 mb-4">Do not wait &mdash; call us immediately.</p><a href={`tel:${site.phone}`} class="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-md font-bold text-lg hover:bg-primary-50 transition-all"><Phone size={20} /> 24/7 Emergency &mdash; Call (888) 643-4199 Now</a><p class="text-primary-200 text-sm mt-3">We serve all of South Carolina around the clock.</p></div><p class="text-white font-bold text-lg mb-2">South Carolina Tree Removal Experts</p><p class="text-primary-200 text-sm mb-4">Licensed, Insured, and Proud to Serve South Carolina for Over 38 Years.</p><p class="text-primary-300 text-xs">South Carolina Tree Removal Experts &mdash; (888) 643-4199</p></div></section>

  <Footer slot="footer" />
</BaseLayout>
```

### **6. `src/components/Header.astro`** (REPLACE desktop nav with mega menu)
```astro
---
import { site } from '../data/site';
import { services } from '../data/services';

interface Props { transparent?: boolean; }
const { transparent = true } = Astro.props;
---

<header id="site-header" data-transparent={transparent.toString()} class={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-18 md:h-20 ${transparent ? 'bg-transparent text-white' : 'bg-white text-neutral-900 shadow-md'}`}>
  <div class="container mx-auto px-4 md:px-8 max-w-7xl h-full flex items-center justify-between">
    <a href="/" class="shrink-0 flex items-center transition-transform hover:scale-105">
      <img src={transparent ? "/images/logo.png" : "/images/logo-dark.png"} alt={site.name} class="h-10 md:h-12 w-auto" id="header-logo" />
    </a>

    <nav class="hidden lg:flex items-center gap-10">
      <div class="relative group">
        <button class="flex items-center gap-1 font-medium hover:text-primary-500 transition-colors py-2 text-sm xl:text-base" aria-haspopup="true" aria-expanded="false" aria-label="Services menu">
          Services <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mt-0.5 group-hover:rotate-180 transition-transform"><path d="m6 9 6 6 6-6"/></svg>
        </button>

        <!-- MEGA MENU PANEL -->
        <div class="absolute left-0 top-full w-full max-w-5xl bg-white shadow-xl rounded-lg opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 border border-neutral-100 mt-2 overflow-hidden z-50 p-6 md:p-8" role="menu">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- COLUMN 1: TREE REMOVAL -->
            <div class="space-y-3" role="none">
              <h4 class="font-bold text-neutral-900 flex items-center gap-2 pb-2 border-b border-neutral-100" role="none"><span class="text-primary-600" aria-hidden="true">🌳</span> Tree Removal</h4>
              {services.filter(s=>s.category==='tree-removal').sort((a,b)=>a.clusterOrder-b.clusterOrder).map(s => <a href={`/services/${s.slug}/`} class="block px-2 py-2 text-sm transition-colors {s.isPillar ? 'font-bold text-neutral-900' : 'text-neutral-700 hover:text-primary-700'}" role="menuitem">{s.name}</a>)}
            </div>
            <!-- COLUMN 2: EMERGENCY -->
            <div class="space-y-3" role="none">
              <h4 class="font-bold text-neutral-900 flex items-center gap-2 pb-2 border-b border-neutral-100" role="none"><span class="text-primary-600" aria-hidden="true">⚡</span> Emergency Tree Removal</h4>
              {services.filter(s=>s.category==='emergency').sort((a,b)=>a.clusterOrder-b.clusterOrder).map(s => <a href={`/services/${s.slug}/`} class="block px-2 py-2 text-sm transition-colors {s.isPillar ? 'font-bold text-neutral-900' : 'text-neutral-700 hover:text-primary-700'}" role="menuitem">{s.name}</a>)}
            </div>
            <!-- COLUMN 3: LAND CLEARING -->
            <div class="space-y-3" role="none">
              <h4 class="font-bold text-neutral-900 flex items-center gap-2 pb-2 border-b border-neutral-100" role="none"><span class="text-primary-600" aria-hidden="true">🏗️</span> Land & Lot Clearing</h4>
              {services.filter(s=>s.category==='land-clearing').sort((a,b)=>a.clusterOrder-b.clusterOrder).map(s => <a href={`/services/${s.slug}/`} class="block px-2 py-2 text-sm transition-colors {s.isPillar ? 'font-bold text-neutral-900' : 'text-neutral-700 hover:text-primary-700'}" role="menuitem">{s.name}</a>)}
            </div>
          </div>
        </div>
      </div>

      <a href="/locations/" class="font-medium hover:text-primary-500 transition-colors text-sm xl:text-base">Service Areas</a>
      <a href="/about/" class="font-medium hover:text-primary-500 transition-colors text-sm xl:text-base">About Us</a>
      <a href="/contact/" class="font-medium hover:text-primary-500 transition-colors text-sm xl:text-base">Contact</a>
    </nav>

    <div class="flex items-center gap-4">
      <a href={`tel:${site.phone}`} class="hidden md:flex items-center gap-2 text-sm font-semibold hover:text-primary-400 transition-colors group">
        <div class="text-primary-500 animate-pulse group-hover:animate-bounce"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
        {site.phone}
      </a>
      <a href="/contact/" class="bg-primary-600 hover:bg-primary-700 text-white px-5 md:px-7 py-2 md:py-2.5 rounded-md font-semibold text-sm xl:text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap">Free Estimate</a>
      <button id="mobile-menu-toggle" class="lg:hidden p-1.5 text-inherit" aria-label="Toggle Menu"><svg id="menu-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg><svg id="close-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hidden"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></button>
    </div>
  </div>

  <!-- MOBILE MENU (UPDATE CONTENT TO MATCH MEGA MENU) -->
  <div id="mobile-menu" class="fixed inset-0 top-[64px] md:top-[72px] bg-white text-neutral-900 z-40 lg:hidden opacity-0 pointer-events-none transition-all duration-300">
    <div class="container mx-auto px-6 py-10 flex flex-col gap-8 h-full overflow-y-auto">
      <div class="space-y-6"><p class="text-xs font-bold text-neutral-400 uppercase tracking-widest border-b border-neutral-100 pb-2">Main Menu</p><ul class="space-y-5"><li><a href="/" class="text-2xl font-bold font-heading hover:text-primary-600">Home</a></li><li><a href="/services/" class="text-2xl font-bold font-heading hover:text-primary-600">Services</a></li><li><a href="/locations/" class="text-2xl font-bold font-heading hover:text-primary-600">Service Areas</a></li><li><a href="/about/" class="text-2xl font-bold font-heading hover:text-primary-600">About Us</a></li><li><a href="/contact/" class="text-2xl font-bold font-heading hover:text-primary-600">Contact</a></li></ul></div>
      <div class="space-y-6"><p class="text-xs font-bold text-neutral-400 uppercase tracking-widest border-b border-neutral-100 pb-2">Our Core Services</p>{['tree-removal','emergency','land-clearing'].map(cat => <div key={cat} class="space-y-3"><h4 class="font-bold text-neutral-900">{cat === 'tree-removal' && 'Tree Removal'}{cat === 'emergency' && 'Emergency Tree Removal'}{cat === 'land-clearing' && 'Land & Lot Clearing'}</h4><ul class="space-y-2">{services.filter(s=>s.category===cat).sort((a,b)=>a.clusterOrder-b.clusterOrder).map(s => <li key={s.slug}><a href={`/services/${s.slug}/`} class="block px-2 py-2 text-lg {s.isPillar ? 'font-bold text-neutral-900' : 'text-neutral-700'}">{s.name}</a></li>)}</ul></div>)}</div>
      <div class="mt-auto pb-10 space-y-6"><div class="p-6 bg-primary-600 rounded-xl text-white"><p class="font-bold text-lg mb-2">Need Help Now?</p><p class="text-primary-100 text-sm mb-4">Emergency storm response crews available 24/7 across South Carolina.</p><a href={`tel:${site.phone}`} class="flex items-center justify-center gap-3 bg-white text-primary-700 py-3 rounded-lg font-bold group"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:animate-bounce"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>{site.phone}</a></div></div>
    </div>
  </div>
</header>

<script>
  // ... existing scroll + mobile toggle scripts (keep as-is)
</script>
```

---

## ✅ **VERIFICATION CHECKLIST (RUN AFTER IMPLEMENTATION)**

```bash
# 1. Type check
npx astro check

# 2. Build
npm run build

# 3. Verify generated routes
ls dist/services/ | wc -l        # Should be 13
ls dist/services/tree-removal/   # index.html exists
ls dist/services/tree-removal/columbia/  # location page exists

# 4. Spot-check rendered HTML (open dist/services/tree-removal/index.html)
# - BreadcrumbList has 4 items: Home → Services → Tree Removal → Tree Removal
# - Service schema has hasOfferCatalog with 4 siblings
# - Dead Tree Removal page: BreadcrumbList → Home → Services → Tree Removal → Dead Tree Removal
#   - NO hasOfferCatalog on supporting page
# - ContactForm iframe loads
# - Mega menu renders 3 columns with correct services
# - Land Clearing pages show placeholders (no empty sections)
# - Stump Grinding page renders correctly
```

---

## 🚫 **DO NOT**

- ❌ Create separate `.astro` files per service
- ❌ Modify `services.ts` — content is finalized
- ❌ Put `hasOfferCatalog` on supporting pages
- ❌ Leave empty sections on Land Clearing pages
- ❌ Nest URLs (`/tree-removal/dead-tree/`)
- ❌ Stop at partial implementation — run full verification

---

## 📦 **DELIVERABLES**

When complete, confirm:
- [ ] `public/_redirects` created with 4 rules
- [ ] `src/pages/services/[service].astro` universal template works for all 13
- [ ] `src/pages/services/[service]/[...city].astro` updated
- [ ] `src/pages/services/index.astro` grouped by category
- [ ] `src/components/Header.astro` mega menu working (desktop + mobile)
- [ ] `npm run build` passes with zero errors
- [ ] All 13 service pages render with correct schema
- [ ] Location pages generate for all services
- [ ] Old URLs redirect correctly

---

**EXECUTE FULLY. REPORT COMPLETE WITH VERIFICATION RESULTS.**