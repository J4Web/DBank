import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'readData' : ActorMethod<[], bigint>,
  'topup' : ActorMethod<[bigint], undefined>,
  'withDraw' : ActorMethod<[bigint], undefined>,
}
