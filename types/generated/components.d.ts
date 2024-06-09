import type { Schema, Attribute } from '@strapi/strapi';

export interface RoleBlockRoleBlock extends Schema.Component {
  collectionName: 'components_role_block_role_blocks';
  info: {
    displayName: 'RoleBlock';
    icon: 'apps';
    description: '';
  };
  attributes: {
    roleHeader: Attribute.String;
    role: Attribute.Component<'role-component.role', true>;
  };
}

export interface RoleComponentRole extends Schema.Component {
  collectionName: 'components_role_component_roles';
  info: {
    displayName: 'Role';
    description: '';
  };
  attributes: {
    roleTitle: Attribute.String;
    roleDescription: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'role-block.role-block': RoleBlockRoleBlock;
      'role-component.role': RoleComponentRole;
    }
  }
}
