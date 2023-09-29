import {
  Field,
  ImageField,
  ImageFieldValue,
  LinkFieldValue,
  RichTextField,
  TextField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

export type HeaderProps = ComponentProps & {
  fields: {
    data: {
      fields: {
        fields: Field<string>[];
        HeaderNavs: {
          data: Navs[];
        };
        HeaderLogoLink: {
          data: LinkFieldValue;
        };
      };
    };
  };
  sitecoreContext: {
    itemPath: string;
  };
};

export type Footerprops = ComponentProps & {
  fields: {
    FooterLinksLabel: Field<string>;
    FooterCopyrightLabel: Field<string>;
    FooterContactUsLabel: Field<string>;
    FooterContactAddress: Field<string>;
    FooterContactNumber: Field<string>;
    FooterContactMail: Field<string>;
    FooterNewsletterLabel: Field<string>;
    FooterSocialIcons: Icons[];
    FooterLinks: Navs[];
    FooterLogo: Field<string>;
    FooterDescription: Field<string>;
    FooterSubscribeCTA: LinkFieldValue;
    FooterSubscribeCTAText: Field<string>;
  };
};

export type Icons = {
  fields: {
    SocialMediaName: {
      value?: string | null;
    };
    SocialMediaLink: LinkFieldValue;
  };
};

export type Navs = {
  fields: {
    NavLink: Field<LinkFieldValue>;
    NavTitle: Field<string>;
  };
};

export type BannerProps = ComponentProps & {
  fields: {
    BannerBackgroundImage: Field<ImageFieldValue>;
    BannerCarousels: BannerCarousel[];
  };
};

export type BannerCarousel = {
  fields: {
    BannerCarouselTitle: RichTextField;
    BannerCarouselDescription: Field<string>;
    BannerCarouselReadMoreCTA: Field<LinkFieldValue>;
    BannerCarouselQuoteCTA: Field<LinkFieldValue>;
    BannerCarouselReadMoreCTAText: Field<string>;
    BannerCarouselQuoteCTAText: Field<string>;
  };
};

export type AboutProps = ComponentProps & {
  fields: {
    fields: {
      fields: {
        fields: {
          data: Field<string> | ImageField | Field<LinkFieldValue> | Field<TextField>;
        }[];
      };
    };
  };
};

export type ServicesProps = ComponentProps & {
  fields: {
    data: {
      fields: {
        fields: Field<string>[];
        ServicesList: {
          data: Service[];
        };
      };
    };
  };
};

export type Service = {
  fields: {
    ServiceLogo: ImageField;
    ServiceTitle: Field<string>;
    ServiceDescription: Field<string>;
    ServiceCTA: Field<LinkFieldValue>;
    ServiceCTAText: Field<string>;
  };
};

export type ClientsProps = ComponentProps & {
  results: {
    results: {
      fields: {
        fields: Field<string>[];
        ClientsList: {
          data: Client[];
        };
      };
    };
  };
};

export type Client = {
  fields: {
    ClientImage: ImageField;
    ClientName: Field<string>;
    ClientDescription: Field<string>;
  };
};

export type ContactUsProps = ComponentProps & {
  fields: {
    ContactUsHeading: Field<string>;
    ContactUsNamePlaceholder: Field<string>;
    ContactUsEmailPlaceholder: Field<string>;
    ContactUsNumberPlaceholder: Field<string>;
    ContactUsMessagePlaceholder: Field<string>;
    ContactUsCTA: Field<LinkFieldValue>;
    ContactUsCTAText: Field<string>;
    ContactUsBackgroundImage: ImageField;
  };
};

export type GuardsProps = ComponentProps & {
  fields: {
    GuardsHeading: Field<string>;
    GuardsDescription: Field<string>;
    GuardsList: Guard[];
    GuardsCTA: LinkFieldValue;
    GuardsCTAText: Field<string>;
  };
};

export type Guard = {
  fields: {
    GuardImage: ImageField;
    GuardName: Field<string>;
    GuardDesignation: Field<string>;
  };
};
