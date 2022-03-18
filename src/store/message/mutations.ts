import { MutationTree } from 'vuex';
import { Message, MessageStateInterface } from './state';

const mutation: MutationTree<MessageStateInterface> = {
  setMessages (state: MessageStateInterface, messages: Message[]) {
    state.messages = messages;
  },

  addMessage (state: MessageStateInterface, message: Message) {
    state.messages.push(message)
  }
};

export default mutation;
