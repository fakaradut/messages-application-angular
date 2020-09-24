import { Contact } from './models/contact';
import {Message} from './models/message';

export const MESSAGES:Message[] = [
  {
    message:'Thanks again you have been great to me.',
    status:'incoming',
    time:'21:32',
    toWho: 'admin',
    whom: 'Matt Thompson'
  },
  {
    message:'My selfie game is lacking can you support me to picture myself?',
    status:'incoming',
    time:'10:22',
    toWho: 'admin',
    whom: 'Claire Sharwood'
  },
  {
    message:'Where is the nearest place to make party?',
    status:'incoming',
    time:'05:46',
    toWho: 'admin',
    whom: 'Kristen McKellar'
  },
  {
    message:"I don't know. But can i offer something different?",
    status:'send',
    time:'21:32',
    toWho: 'Kristen McKellar',
    whom: 'admin'
  },
  {
    message:"Angular is a wonderful framework!",
    status:'send',
    time:'21:32',
    toWho: 'admin',
    whom: 'Shaun Gardner'
  }
]
