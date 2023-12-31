/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface Friend_techInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "buyShares"
      | "getBuyPrice"
      | "getBuyPriceAfterFee"
      | "getPrice"
      | "getSellPrice"
      | "getSellPriceAfterFee"
      | "owner"
      | "protocolFeeDestination"
      | "protocolFeePercent"
      | "renounceOwnership"
      | "sellShares"
      | "setFeeDestination"
      | "setProtocolFeePercent"
      | "setSubjectFeePercent"
      | "sharesBalance"
      | "sharesSupply"
      | "subjectFeePercent"
      | "transferOwnership"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "OwnershipTransferred" | "Trade"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "buyShares",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBuyPrice",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBuyPriceAfterFee",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPrice",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSellPrice",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSellPriceAfterFee",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "protocolFeeDestination",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "protocolFeePercent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sellShares",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeDestination",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setProtocolFeePercent",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSubjectFeePercent",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sharesBalance",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sharesSupply",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "subjectFeePercent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "buyShares", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getBuyPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBuyPriceAfterFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSellPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSellPriceAfterFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "protocolFeeDestination",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "protocolFeePercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sellShares", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFeeDestination",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProtocolFeePercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSubjectFeePercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sharesBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sharesSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "subjectFeePercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TradeEvent {
  export type InputTuple = [
    trader: AddressLike,
    subject: AddressLike,
    isBuy: boolean,
    shareAmount: BigNumberish,
    ethAmount: BigNumberish,
    protocolEthAmount: BigNumberish,
    subjectEthAmount: BigNumberish,
    supply: BigNumberish
  ];
  export type OutputTuple = [
    trader: string,
    subject: string,
    isBuy: boolean,
    shareAmount: bigint,
    ethAmount: bigint,
    protocolEthAmount: bigint,
    subjectEthAmount: bigint,
    supply: bigint
  ];
  export interface OutputObject {
    trader: string;
    subject: string;
    isBuy: boolean;
    shareAmount: bigint;
    ethAmount: bigint;
    protocolEthAmount: bigint;
    subjectEthAmount: bigint;
    supply: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Friend_tech extends BaseContract {
  connect(runner?: ContractRunner | null): Friend_tech;
  waitForDeployment(): Promise<this>;

  interface: Friend_techInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  buyShares: TypedContractMethod<
    [sharesSubject: AddressLike, amount: BigNumberish],
    [void],
    "payable"
  >;

  getBuyPrice: TypedContractMethod<
    [sharesSubject: AddressLike, amount: BigNumberish],
    [bigint],
    "view"
  >;

  getBuyPriceAfterFee: TypedContractMethod<
    [sharesSubject: AddressLike, amount: BigNumberish],
    [bigint],
    "view"
  >;

  getPrice: TypedContractMethod<
    [supply: BigNumberish, amount: BigNumberish],
    [bigint],
    "view"
  >;

  getSellPrice: TypedContractMethod<
    [sharesSubject: AddressLike, amount: BigNumberish],
    [bigint],
    "view"
  >;

  getSellPriceAfterFee: TypedContractMethod<
    [sharesSubject: AddressLike, amount: BigNumberish],
    [bigint],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  protocolFeeDestination: TypedContractMethod<[], [string], "view">;

  protocolFeePercent: TypedContractMethod<[], [bigint], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  sellShares: TypedContractMethod<
    [sharesSubject: AddressLike, amount: BigNumberish],
    [void],
    "payable"
  >;

  setFeeDestination: TypedContractMethod<
    [_feeDestination: AddressLike],
    [void],
    "nonpayable"
  >;

  setProtocolFeePercent: TypedContractMethod<
    [_feePercent: BigNumberish],
    [void],
    "nonpayable"
  >;

  setSubjectFeePercent: TypedContractMethod<
    [_feePercent: BigNumberish],
    [void],
    "nonpayable"
  >;

  sharesBalance: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [bigint],
    "view"
  >;

  sharesSupply: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  subjectFeePercent: TypedContractMethod<[], [bigint], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "buyShares"
  ): TypedContractMethod<
    [sharesSubject: AddressLike, amount: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "getBuyPrice"
  ): TypedContractMethod<
    [sharesSubject: AddressLike, amount: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getBuyPriceAfterFee"
  ): TypedContractMethod<
    [sharesSubject: AddressLike, amount: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPrice"
  ): TypedContractMethod<
    [supply: BigNumberish, amount: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSellPrice"
  ): TypedContractMethod<
    [sharesSubject: AddressLike, amount: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSellPriceAfterFee"
  ): TypedContractMethod<
    [sharesSubject: AddressLike, amount: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "protocolFeeDestination"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "protocolFeePercent"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "sellShares"
  ): TypedContractMethod<
    [sharesSubject: AddressLike, amount: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "setFeeDestination"
  ): TypedContractMethod<[_feeDestination: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setProtocolFeePercent"
  ): TypedContractMethod<[_feePercent: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setSubjectFeePercent"
  ): TypedContractMethod<[_feePercent: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "sharesBalance"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "sharesSupply"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "subjectFeePercent"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Trade"
  ): TypedContractEvent<
    TradeEvent.InputTuple,
    TradeEvent.OutputTuple,
    TradeEvent.OutputObject
  >;

  filters: {
    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Trade(address,address,bool,uint256,uint256,uint256,uint256,uint256)": TypedContractEvent<
      TradeEvent.InputTuple,
      TradeEvent.OutputTuple,
      TradeEvent.OutputObject
    >;
    Trade: TypedContractEvent<
      TradeEvent.InputTuple,
      TradeEvent.OutputTuple,
      TradeEvent.OutputObject
    >;
  };
}
