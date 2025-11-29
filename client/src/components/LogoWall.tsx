import { SiVercel, SiAmazon, SiGoogle, SiApple, SiStripe, SiShopify } from 'react-icons/si';

const logos = [
  { name: 'Vercel', Icon: SiVercel },
  { name: 'AWS', Icon: SiAmazon },
  { name: 'Google', Icon: SiGoogle },
  { name: 'Apple', Icon: SiApple },
  { name: 'Stripe', Icon: SiStripe },
  { name: 'Shopify', Icon: SiShopify },
];

export function LogoWall() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity">
      {logos.map(({ name, Icon }) => (
        <div key={name} className="grayscale hover:grayscale-0 transition-all">
          <Icon className="h-12 w-12" />
        </div>
      ))}
    </div>
  );
}
