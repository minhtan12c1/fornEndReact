import imageApi from '@/api/image';
import componentName from '@/components/component-name';

const FIELD_NAMES = imageApi.FIELD_NAMES;

const dataModel = {
  getObjectModel() {
    return {
      name: 'image',
      fields: [
        {
          ...FIELD_NAMES.image_name,
        },
        
        {
          ...FIELD_NAMES.image_url,
        },
      ],
    };
  },
  getDataTableModel() {
    return {
      visibleDataHeader: [
        {
          ...FIELD_NAMES.image_id,
        },
        {
          ...FIELD_NAMES.image_name,
        },
        {
          ...FIELD_NAMES.image_url,
          component: componentName.MY_IMAGE,
        },
      ],
    };
  },
  getTableProfile() {
    return {
      name: 'image',
      api: imageApi,
      tableToolbar: {
        deleteSelected: {
          enable: true,
        },
        add: {
          enable: true,
        },
      },
      rowAction: {
        delete: {
          enable: true,
        },
        modify: {
          enable: true,
        },
      },
      customObjectDialog: componentName.UPLOAD_IMAGE_DIALOG,
    };
  },
};

export default { dataModel };
