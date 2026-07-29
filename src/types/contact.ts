export interface OfficeAddress {
  label: string;
  address: string;
}

export interface ContactNavigationGroup {
  title: string;
  links: ReadonlyArray<{
    label: string;
    href: string;
  }>;
}
