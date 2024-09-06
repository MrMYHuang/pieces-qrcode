import { createPiece, PieceAuth } from '@activepieces/pieces-framework'
import { outputQrcodeAction } from './lib/actions/output-qrcode-action'

export const qrcode = createPiece({
  auth: PieceAuth.None(),
  displayName: 'QR Code',
  logoUrl: 'https://github.com/MrMYHuang/pieces-qrcode/blob/main/qrcode.png?raw=true',
  actions: [
    outputQrcodeAction,
  ],
  triggers: [
  ],
  authors: ['Meng-Yuan Huang'],
})
