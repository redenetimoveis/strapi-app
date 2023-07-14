
import contentTypeBuilder from '../../../node_modules/@strapi/plugin-content-type-builder/strapi-admin.js';
import email from '../../../node_modules/@strapi/plugin-email/strapi-admin.js';
import upload from '../../../node_modules/@strapi/plugin-upload/strapi-admin.js';
import boldTitleEditor from '../../../node_modules/@ef2/strapi-plugin-bold-title-editor/strapi-admin.js';
import colorPicker from '../../../node_modules/@strapi/plugin-color-picker/strapi-admin.js';
import i18N from '../../../node_modules/@strapi/plugin-i18n/strapi-admin.js';
import usersPermissions from '../../../node_modules/@strapi/plugin-users-permissions/strapi-admin.js';
import multiSelect from '../../../node_modules/strapi-plugin-multi-select/strapi-admin.js';
import sitemap from '../../../node_modules/strapi-plugin-sitemap/strapi-admin.js';
import wysiwygReactMdEditor from '../../../node_modules/strapi-plugin-wysiwyg-react-md-editor/strapi-admin.js';


const plugins = {
  'content-type-builder': contentTypeBuilder,
  'email': email,
  'upload': upload,
  'bold-title-editor': boldTitleEditor,
  'color-picker': colorPicker,
  'i18n': i18N,
  'users-permissions': usersPermissions,
  'multi-select': multiSelect,
  'sitemap': sitemap,
  'wysiwyg-react-md-editor': wysiwygReactMdEditor,
};

export default plugins;
