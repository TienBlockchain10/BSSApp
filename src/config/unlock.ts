// export const paywallConfig: Record<string, unknown> = {
//   "icon": "https://gateway.pinata.cloud/ipfs/QmZybHbp7uTguzkcFaZRtg2Pde1bWfiq37nz2bLPrdQTxa",
//   "locks": {
//     "0xf88f3765d08d674f464efa72a6866b1e965d3698": {
//       "name": "",
//       "promo": false,
//       "network": 5,
//       "dataBuilder": "",
//       "emailRequired": true,
//       "maxRecipients": null,
//       "skipRecipient": true
//     }
//   },
//   "title": "Claim Your Digital Collectible",
//   "pessimistic": true,
//   "skipRecipient": true
// };



export const paywallConfig: Record<string, unknown> = {
  locks: {
    "0x77d11b698808eef99e32d3273dc88cc34097786f": {
      network: 5,
      name: "wonderwomancode",
    },
  },
  pessimistic: false,
  title: "Super Hero Zone",
  icon: "https://pin.ski/3Fc5Dqa",
  persistentCheckout: false,
};