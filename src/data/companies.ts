export interface Company {
  name: string;
  logoUrl: string;
  website: string;
}

// -----------------------------------------------------------------------------
// COMPANIES USING GO
// -----------------------------------------------------------------------------
// Add new companies below. 
// Place their logo image in the public/ folder and reference it like "/logo.png".

export const companies: Company[] = [
  {
    name: "Lunar",
    logoUrl: "/lunar.png",
    website: "https://lunar.app/"
  },
  {
    name: "UNIwise",
    logoUrl: "/uniwise.svg",
    website: "https://uniwise.eu/"
  },
  {
    name: "Uber",
    logoUrl: "/uber.png",
    website: "https://www.uber.com/"
  }
];
