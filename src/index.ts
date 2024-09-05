import { createPiece } from '@activepieces/pieces-framework'
import { outputQrcodeAction } from './lib/actions/output-qrcode-action'

export const qrcode = createPiece({
  displayName: 'QR Code',
  logoUrl: 'https://github.com/MrMYHuang/pieces-qrcode/blob/main/qrcode.png?raw=true',
  actions: [
    outputQrcodeAction,
  ],
  triggers: [
  ]
})
