import { Contact } from './models/contact'

export const CONTACTS: Contact[]= [
  {
    picUrl:'../../assets/images/contact-icon.fw.png',
    isOnline:false,
    name: 'Kristen McKellar',
    location: 'Cape Town, RSA',
    phone: '072 143 9920',
    birthDate: 'July 12,1988',
    gender: 'Female',
    language: 'English'  ,
    media: 'Messenger'
  },
  {
    picUrl:'../../assets/images/contact-no-picture-icon.fw.png',
    isOnline:true,
    name: 'Matt Thompson',
    location: 'Moskow, Russia',
    phone: '55 1846 54 1',
    birthDate: 'October 20,1980',
    gender: 'Male',
    language: 'Ruski'  ,
    media: 'Skyper'
  },
  {
    picUrl:'../../assets/images/contact-no-picture-icon.fw.png',
    isOnline:false,
    name: 'Claire Sharwood',
    location: 'Londra, England',
    phone: '472 116 3220',
    birthDate: 'September 31,1997',
    gender: 'Female',
    language: 'English'  ,
    media: 'Phone'
  },
  {
    picUrl:'../../assets/images/contact-no-picture-icon.fw.png',
    isOnline:true,
    name: 'Shaun Gardner',
    location: 'Paris, Frans',
    phone: '270 341 0299',
    birthDate: 'Jun 2,1958',
    gender: 'Male',
    language: 'French'  ,
    media: 'whatsapp'
  }
];
