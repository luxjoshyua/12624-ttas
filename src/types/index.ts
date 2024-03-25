import { RefObject } from "react";

export type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  "data-scroll"?: boolean;
  "data-scroll-speed"?: string;
  index?: number;
};

export type ArtistObject = {
  heroGallery: JSX.Element;
  name: string;
  medium: string;
  bio: string;
  aiOutput: string;
  instagram?: string;
  prompt?: string;
};

export type ArtistBlockImagesType = {
  matchedArtist: ArtistObject | undefined;
};

export type ArtistBlockTextType = {
  matchedArtist: ArtistObject | undefined;
};

export type LocomotiveScrollProps = {
  locoScrollRef: RefObject<HTMLElement>;
  children: React.ReactNode;
};
