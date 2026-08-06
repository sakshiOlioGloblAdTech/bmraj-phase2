// Brand logos for the "trusted by" scrolling strip.
//
// Single source of truth — used by the home page carousel and the industry
// pages. Previously this list was duplicated in both places and drifted apart.
//
// The logos are imported statically rather than referenced by path string so
// Next.js hands us each file's intrinsic width/height at build time. The
// carousel uses those to size every logo to the same optical weight — the source
// files range from 0.79:1 (Amul, taller than wide) to 4.46:1 (BL, a wide
// wordmark), so a single fixed width or height would make some look far larger
// than others. Add new logos here and they get normalised automatically.

import amul from '../../public/company-logos/amul-cm-logo.png';
import atul from '../../public/company-logos/atul-cm-logo.png';
import bharatPetroleum from '../../public/company-logos/bharatP-cm-logo.png';
import bl from '../../public/company-logos/bl-cm-logo.png';
import gacl from '../../public/company-logos/gacl-cm-logo.png';
import gnfc from '../../public/company-logos/gnfc-cm-logo.png';
import gpPetroleums from '../../public/company-logos/gp-petroleums-cm-logo.png';
import gujarat from '../../public/company-logos/gujarat-cm-logo.png';
import gulf from '../../public/company-logos/gulf-cm-logo.png';
import heranba from '../../public/company-logos/heranba-cm-logo.png';
import jeetsons from '../../public/company-logos/jeetsons-cm-logo.png';
import khemani from '../../public/company-logos/khemani-cm-logo.png';
import klj from '../../public/company-logos/klj-cm-logo.png';
import meliora from '../../public/company-logos/meliora-cm-logo.png';
import navinFluorine from '../../public/company-logos/navin-fluorine-cm-logo.png';
import npl from '../../public/company-logos/npl-cm-logo.png';
import payal from '../../public/company-logos/payal.g-cm-logo.png';
import rcg from '../../public/company-logos/rcg-cm-logo.png';
import rossari from '../../public/company-logos/rossari-cm-logo.png';

export const companyLogos = [
  { name: 'Amul', logo: amul, alt: 'Amul Logo' },
  { name: 'Atul', logo: atul, alt: 'Atul Logo' },
  { name: 'Bharat Petroleum', logo: bharatPetroleum, alt: 'Bharat Petroleum Logo' },
  { name: 'BL', logo: bl, alt: 'BL Logo' },
  { name: 'GACL', logo: gacl, alt: 'GACL Logo' },
  { name: 'GNFC', logo: gnfc, alt: 'GNFC Logo' },
  { name: 'GP Petroleums', logo: gpPetroleums, alt: 'GP Petroleums Logo' },
  { name: 'Gujarat', logo: gujarat, alt: 'Gujarat Logo' },
  { name: 'Gulf', logo: gulf, alt: 'Gulf Logo' },
  { name: 'Heranba', logo: heranba, alt: 'Heranba Logo' },
  { name: 'Jeetsons', logo: jeetsons, alt: 'Jeetsons Logo' },
  { name: 'Khemani Group', logo: khemani, alt: 'Khemani Group Logo' },
  { name: 'KLJ', logo: klj, alt: 'KLJ Logo' },
  { name: 'Meliora', logo: meliora, alt: 'Meliora Logo' },
  // Two-line wordmark — the second line is small, so it needs a nudge above
  // what the area calculation gives it to stay readable in the strip.
  { name: 'Navin Fluorine', logo: navinFluorine, alt: 'Navin Fluorine International Limited Logo', scale: 1.22 },
  { name: 'NPL', logo: npl, alt: 'NPL Logo' },
  { name: 'Payal', logo: payal, alt: 'Payal Logo' },
  { name: 'RCG', logo: rcg, alt: 'RCG Logo' },
  { name: 'Rossari', logo: rossari, alt: 'Rossari Logo' },
];
