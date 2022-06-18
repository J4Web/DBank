export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'readData' : IDL.Func([], [IDL.Nat], ['query']),
    'topup' : IDL.Func([IDL.Nat], [], ['oneway']),
    'withDraw' : IDL.Func([IDL.Nat], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
