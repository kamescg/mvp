import { svg, icons } from 'assets'

export default [
 {
  title: 'Block Analysis',
  to: '/dashboard/blocks',
  svg: svg.dataMining,
  childrenItems: [
    {
      title: 'Generate Block',
      to: '/dashboard/block/create',
      svg: svg.financialFolder,
      gradient: 'crimson',
      titleWrap: {
        bg:'white',
        px: [10,15],
      },
        wrapper: {
        display: 'flex',
        align: 'center',
      },
    }
  ]
},
{
  title: 'Wallet Tools',
  to: '/dashboard/wallet',
  svg: svg.dataEncryption,
},
{
  title: 'Smart Contracts',
  to: '/dashboard/smart-contract',
  svg: svg.economyDigitalTransaction,
},
{
  title: 'Planetary File System',
  to: '/dashboard/files',
  svg: icons.powerPlant,
},
{
  title: 'Ethereum Name System',
  to: '/dashboard/ens',
  svg: svg.commerceKiosk,
},
{
  title: 'Settings',
  to: '/dashboard/settings',
  svg: svg.cog,
},
]