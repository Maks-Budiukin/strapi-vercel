import type { Schema, Attribute } from '@strapi/strapi';

export interface GalleryGalleryItem extends Schema.Component {
  collectionName: 'components_gallery_gallery_items';
  info: {
    displayName: 'GalleryItem';
  };
  attributes: {
    SkillName: Attribute.String;
    SkillIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface GallerySkillsGallery extends Schema.Component {
  collectionName: 'components_gallery_skills_galleries';
  info: {
    displayName: 'SkillsGallery';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    SkillGallery: Attribute.Component<'gallery.gallery-item', true>;
  };
}

export interface WhateverTestComponent extends Schema.Component {
  collectionName: 'components_whatever_test_components';
  info: {
    displayName: 'test-component';
    icon: 'information';
  };
  attributes: {
    rich: Attribute.RichText;
    subheader: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'gallery.gallery-item': GalleryGalleryItem;
      'gallery.skills-gallery': GallerySkillsGallery;
      'whatever.test-component': WhateverTestComponent;
    }
  }
}
