export interface BusinessCapability {
  title: string;
  description: string;
  chips: string[];
  icon: string;
  href: string;
  featured?: boolean;
}

export interface TechnologyPartner {
  name: string;
  logo: string;
  href: string;
  width: number;
  height: number;
}
