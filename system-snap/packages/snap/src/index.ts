import { OnRpcRequestHandler } from '@metamask/snaps-types';
import { panel, text,  } from '@metamask/snaps-ui';

/**
 * Handle incoming JSON-RPC requests, sent through `wallet_invokeSnap`.
 *
 * @param args - The request handler args as object.
 * @param args.origin - The origin of the request, e.g., the website that
 * invoked the snap.
 * @param args.request - A validated JSON-RPC request object.
 * @returns The result of `snap_dialog`.
 * @throws If the request method is not valid for this snap.
 */
export const onRpcRequest: OnRpcRequestHandler = ({ origin, request }) => {
  switch (request.method) {
    case 'generate_qrcode':
        return snap.request({
          method: 'snap_dialog',
          params: {
            type: 'Alert',
            content: panel([
              text(`Aqui deverá consultar os dados na Metamask necessários para geração do QR Code`),
            ]),
          },
        });
    default:
      throw new Error('Method not found.');
  }
};
