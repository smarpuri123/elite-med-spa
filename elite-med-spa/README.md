# Élite Med Spa Miami — website revision

Responsive React + Vite + Tailwind website with custom editorial styling.

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Revision highlights

- Fixed manifesto decoration so it stays on the portrait side and is layered behind the portrait, away from the headline.
- Increased body, navigation, eyebrow, form, footer, card and secondary text sizes; improved keyboard focus visibility.
- Uses deep purple on light surfaces and pale lavender on dark surfaces.
- Replaced the spa still-life in the medical weight-loss section with a clinician/patient consultation image.
- Added a provider section with clearly marked placeholders. Stock portraits are not real team identities; replace them with clinic-supplied headshots and verify names, credentials, Florida license numbers and medical-director details before publishing.
- Replaced unsupported satisfaction and patient-count claims with clinic-published 12.4% cohort figure and website-displayed review data. These remain clinic-reported and need clinic confirmation and methodology before launch.
- Added a named public review excerpt from the clinic website, with a link to more reviews. Do not add patient photos without permission.
- Added consultation CTA placements, WhatsApp/call links, sticky mobile booking bar, hours, address and directions.
- Enlarged form controls and added a privacy warning. The preview form does not transmit data and is not a HIPAA-compliant intake form.
- Added LocalBusiness/MedicalBusiness JSON-LD and basic social metadata.
- Gallery is explicitly described as a photo slideshow rather than a video.

## Required clinic sign-off before launch

1. Replace stock photography, especially provider portraits, with licensed clinic-owned photography. Do not imply stock portraits are actual clinicians.
2. Confirm all clinician names, credentials, Florida license numbers, medical director information and scope of practice.
3. Confirm the 12.4% result, cohort (312 completers), protocol and 2024–2025 timeframe. The site copy is clinic-reported and not independently audited.
4. Confirm current review rating/count and obtain consent before publishing patient images or before/after results.
5. Connect booking to the clinic's approved scheduler/CRM and replace the preview form with an approved secure intake workflow. Add the clinic's privacy notice and HIPAA disclosures as applicable.
6. Confirm treatment descriptions, pricing, eligibility, risks, contraindications and all medical advertising claims with the clinic's compliance lead.

## Performance note

Images currently use remote image URLs. Before production, move approved compressed WebP/AVIF assets to a CDN or local asset directory and use `<img loading="lazy">` for below-the-fold imagery. Run Lighthouse and a WCAG 2.2 AA audit after real assets and integrations are in place.
