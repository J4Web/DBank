import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'compound' : ActorMethod<[], undefined>,
  'readData' : ActorMethod<[], number>,
  'topup' : ActorMethod<[number], undefined>,
  'withDraw' : ActorMethod<[number], undefined>,
}
