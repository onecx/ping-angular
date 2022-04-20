import { PortalDTO } from '../api';
import { Portal } from 'portal-lib/lib/api/model/portal';

const mockPortals: PortalDTO[] = [
  {
    address: {
      street: 'Kolorowa',
      streetNo: '5',
    },
    companyName: 'Çapgemini',
    themeName: 'cg',
    description: 'test description',
    guid: '435sdf-6g2d1',
    id: 'test-portal',
    rssFeedUrl: 'test-rss-url/feed',
  },
];
const copyObject = (object: unknown) => {
  if (object == null || object !== typeof Object) {
    return object;
  }

  if (object instanceof Date) {
    return new Date(object.getTime());
  }

  if (object instanceof Array) {
    return object.forEach(field => copyObject(field));
  }

  if (object instanceof Object) {
    return { ...object };
  }
};
export const testPortals: PortalDTO[] = copyObject(mockPortals);
