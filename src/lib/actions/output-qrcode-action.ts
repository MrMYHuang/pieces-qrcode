import {
  createAction,
} from '@activepieces/pieces-framework'
import { assertNotNullOrUndefined } from '@activepieces/shared';
import { text } from '../common/props';
import { toBuffer } from 'qrcode';
import { v4 as uuidv4 } from 'uuid';

export const outputQrcodeAction = createAction({
  name: 'text_to_qrcode',
  displayName: 'Text to QR Code',
  description: 'Convert text to QR code',
  props: {
    text,
  },
  async run(context) {
    const { text } = context.propsValue

    assertNotNullOrUndefined(text, 'text')

    const qrcodeBuffer = await toBuffer(text);

    return 'memory://' + JSON.stringify({
      fileName: `${uuidv4()}.png`,
      data: qrcodeBuffer.toString('base64'),
    });
  },
})
