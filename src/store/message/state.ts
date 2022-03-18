export interface Message {
  isSender: boolean;
  messagerName: string;
  avatar: string;
  text: string;
  stamp: string;
}

export interface MessageStateInterface {
  messages: Message[];
}

function state(): MessageStateInterface {
  return {
    messages: [
      {
        isSender: true,
        messagerName: 'Jakub',
        avatar: 'https://cdn.quasar.dev/img/avatar1.jpg',
        text: 'ahojte',
        stamp: '18.3.2022 at 12:22'
      },
      {
        isSender: false,
        messagerName: 'Martin',
        avatar: 'https://cdn.quasar.dev/img/avatar4.jpg',
        text: 'čau',
        stamp: '18.3.2022 at 12:30'
      }
    ]
  };
}

export default state;
