// @generated by protobuf-ts 2.9.1 with parameter client_none,generate_dependencies
// @generated from protobuf file "cat.proto" (package "spec", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message spec.ListKittsRequest
 */
export interface ListKittsRequest {
    /**
     * if id is empty, then kitts will be returned from the beginning
     *
     * @generated from protobuf field: int32 cat_id = 1;
     */
    catId: number;
}
/**
 * @generated from protobuf message spec.ListKittsResponse
 */
export interface ListKittsResponse {
    /**
     * @generated from protobuf field: repeated spec.GetKittResponse kitts = 1;
     */
    kitts: GetKittResponse[];
}
/**
 * @generated from protobuf message spec.CreateKittRequest
 */
export interface CreateKittRequest {
    /**
     * @generated from protobuf field: string content = 1;
     */
    content: string;
    /**
     * @generated from protobuf field: int32 cat_id = 2;
     */
    catId: number;
}
/**
 * @generated from protobuf message spec.CreateKittResponse
 */
export interface CreateKittResponse {
    /**
     * @generated from protobuf field: int32 id = 1;
     */
    id: number;
}
/**
 * @generated from protobuf message spec.GetKittRequest
 */
export interface GetKittRequest {
    /**
     * @generated from protobuf field: int32 id = 1;
     */
    id: number;
}
/**
 * @generated from protobuf message spec.GetKittResponse
 */
export interface GetKittResponse {
    /**
     * @generated from protobuf field: int32 id = 1;
     */
    id: number;
    /**
     * @generated from protobuf field: string content = 2;
     */
    content: string;
    /**
     * @generated from protobuf field: string created_at = 3;
     */
    createdAt: string;
    /**
     * @generated from protobuf field: int32 cat_id = 4;
     */
    catId: number;
}
/**
 * @generated from protobuf message spec.LoginCatRequest
 */
export interface LoginCatRequest {
    /**
     * @generated from protobuf field: string username = 1;
     */
    username: string;
    /**
     * @generated from protobuf field: string password = 2;
     */
    password: string;
}
/**
 * @generated from protobuf message spec.LoginCatResponse
 */
export interface LoginCatResponse {
    /**
     * @generated from protobuf field: int32 id = 1;
     */
    id: number;
}
/**
 * GetCatRequest is data for getting a cat
 *
 * @generated from protobuf message spec.GetCatRequest
 */
export interface GetCatRequest {
    /**
     * id is an id of a cat
     *
     * @generated from protobuf field: int32 id = 1;
     */
    id: number;
}
/**
 * GetCatResponse is answer of service during getting a cat
 *
 * @generated from protobuf message spec.GetCatResponse
 */
export interface GetCatResponse {
    /**
     * id is an id of a cat, it is unique
     *
     * @generated from protobuf field: int32 id = 1;
     */
    id: number;
    /**
     * name is a name of a cat
     *
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * usename is unchangable username of a cat
     *
     * @generated from protobuf field: string username = 3;
     */
    username: string;
    /**
     * bio is optional description of a cat
     *
     * @generated from protobuf field: optional string bio = 4;
     */
    bio?: string;
}
/**
 * RegisterCatRequest is data for creating a cat
 *
 * @generated from protobuf message spec.RegisterCatRequest
 */
export interface RegisterCatRequest {
    /**
     * name is a name of a cat
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * usename is unchangable username of a cat
     *
     * @generated from protobuf field: string username = 2;
     */
    username: string;
    /**
     * bio is optional description of a cat
     *
     * @generated from protobuf field: optional string bio = 3;
     */
    bio?: string;
    /**
     * @generated from protobuf field: string password = 4;
     */
    password: string;
}
/**
 * RegisterCatResponse is answer of service during creating a cat
 *
 * @generated from protobuf message spec.RegisterCatResponse
 */
export interface RegisterCatResponse {
    /**
     * id is an id of a cat, it is unique
     *
     * @generated from protobuf field: int32 id = 1;
     */
    id: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ListKittsRequest$Type extends MessageType<ListKittsRequest> {
    constructor() {
        super("spec.ListKittsRequest", [
            { no: 1, name: "cat_id", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<ListKittsRequest>): ListKittsRequest {
        const message = { catId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ListKittsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListKittsRequest): ListKittsRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 cat_id */ 1:
                    message.catId = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ListKittsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 cat_id = 1; */
        if (message.catId !== 0)
            writer.tag(1, WireType.Varint).int32(message.catId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message spec.ListKittsRequest
 */
export const ListKittsRequest = new ListKittsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ListKittsResponse$Type extends MessageType<ListKittsResponse> {
    constructor() {
        super("spec.ListKittsResponse", [
            { no: 1, name: "kitts", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GetKittResponse }
        ]);
    }
    create(value?: PartialMessage<ListKittsResponse>): ListKittsResponse {
        const message = { kitts: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ListKittsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListKittsResponse): ListKittsResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated spec.GetKittResponse kitts */ 1:
                    message.kitts.push(GetKittResponse.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ListKittsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated spec.GetKittResponse kitts = 1; */
        for (let i = 0; i < message.kitts.length; i++)
            GetKittResponse.internalBinaryWrite(message.kitts[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message spec.ListKittsResponse
 */
export const ListKittsResponse = new ListKittsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateKittRequest$Type extends MessageType<CreateKittRequest> {
    constructor() {
        super("spec.CreateKittRequest", [
            { no: 1, name: "content", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "cat_id", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<CreateKittRequest>): CreateKittRequest {
        const message = { content: "", catId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CreateKittRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateKittRequest): CreateKittRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string content */ 1:
                    message.content = reader.string();
                    break;
                case /* int32 cat_id */ 2:
                    message.catId = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CreateKittRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string content = 1; */
        if (message.content !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.content);
        /* int32 cat_id = 2; */
        if (message.catId !== 0)
            writer.tag(2, WireType.Varint).int32(message.catId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message spec.CreateKittRequest
 */
export const CreateKittRequest = new CreateKittRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateKittResponse$Type extends MessageType<CreateKittResponse> {
    constructor() {
        super("spec.CreateKittResponse", [
            { no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<CreateKittResponse>): CreateKittResponse {
        const message = { id: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CreateKittResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateKittResponse): CreateKittResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 id */ 1:
                    message.id = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CreateKittResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, WireType.Varint).int32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message spec.CreateKittResponse
 */
export const CreateKittResponse = new CreateKittResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetKittRequest$Type extends MessageType<GetKittRequest> {
    constructor() {
        super("spec.GetKittRequest", [
            { no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<GetKittRequest>): GetKittRequest {
        const message = { id: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetKittRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetKittRequest): GetKittRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 id */ 1:
                    message.id = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetKittRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, WireType.Varint).int32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message spec.GetKittRequest
 */
export const GetKittRequest = new GetKittRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetKittResponse$Type extends MessageType<GetKittResponse> {
    constructor() {
        super("spec.GetKittResponse", [
            { no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "content", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "created_at", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "cat_id", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<GetKittResponse>): GetKittResponse {
        const message = { id: 0, content: "", createdAt: "", catId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetKittResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetKittResponse): GetKittResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 id */ 1:
                    message.id = reader.int32();
                    break;
                case /* string content */ 2:
                    message.content = reader.string();
                    break;
                case /* string created_at */ 3:
                    message.createdAt = reader.string();
                    break;
                case /* int32 cat_id */ 4:
                    message.catId = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetKittResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, WireType.Varint).int32(message.id);
        /* string content = 2; */
        if (message.content !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.content);
        /* string created_at = 3; */
        if (message.createdAt !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.createdAt);
        /* int32 cat_id = 4; */
        if (message.catId !== 0)
            writer.tag(4, WireType.Varint).int32(message.catId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message spec.GetKittResponse
 */
export const GetKittResponse = new GetKittResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LoginCatRequest$Type extends MessageType<LoginCatRequest> {
    constructor() {
        super("spec.LoginCatRequest", [
            { no: 1, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "password", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<LoginCatRequest>): LoginCatRequest {
        const message = { username: "", password: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<LoginCatRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LoginCatRequest): LoginCatRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string username */ 1:
                    message.username = reader.string();
                    break;
                case /* string password */ 2:
                    message.password = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: LoginCatRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string username = 1; */
        if (message.username !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.username);
        /* string password = 2; */
        if (message.password !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.password);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message spec.LoginCatRequest
 */
export const LoginCatRequest = new LoginCatRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LoginCatResponse$Type extends MessageType<LoginCatResponse> {
    constructor() {
        super("spec.LoginCatResponse", [
            { no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<LoginCatResponse>): LoginCatResponse {
        const message = { id: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<LoginCatResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LoginCatResponse): LoginCatResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 id */ 1:
                    message.id = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: LoginCatResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, WireType.Varint).int32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message spec.LoginCatResponse
 */
export const LoginCatResponse = new LoginCatResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCatRequest$Type extends MessageType<GetCatRequest> {
    constructor() {
        super("spec.GetCatRequest", [
            { no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<GetCatRequest>): GetCatRequest {
        const message = { id: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetCatRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCatRequest): GetCatRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 id */ 1:
                    message.id = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetCatRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, WireType.Varint).int32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message spec.GetCatRequest
 */
export const GetCatRequest = new GetCatRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCatResponse$Type extends MessageType<GetCatResponse> {
    constructor() {
        super("spec.GetCatResponse", [
            { no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "bio", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<GetCatResponse>): GetCatResponse {
        const message = { id: 0, name: "", username: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetCatResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCatResponse): GetCatResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 id */ 1:
                    message.id = reader.int32();
                    break;
                case /* string name */ 2:
                    message.name = reader.string();
                    break;
                case /* string username */ 3:
                    message.username = reader.string();
                    break;
                case /* optional string bio */ 4:
                    message.bio = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetCatResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, WireType.Varint).int32(message.id);
        /* string name = 2; */
        if (message.name !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.name);
        /* string username = 3; */
        if (message.username !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.username);
        /* optional string bio = 4; */
        if (message.bio !== undefined)
            writer.tag(4, WireType.LengthDelimited).string(message.bio);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message spec.GetCatResponse
 */
export const GetCatResponse = new GetCatResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RegisterCatRequest$Type extends MessageType<RegisterCatRequest> {
    constructor() {
        super("spec.RegisterCatRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "bio", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "password", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<RegisterCatRequest>): RegisterCatRequest {
        const message = { name: "", username: "", password: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RegisterCatRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RegisterCatRequest): RegisterCatRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* string username */ 2:
                    message.username = reader.string();
                    break;
                case /* optional string bio */ 3:
                    message.bio = reader.string();
                    break;
                case /* string password */ 4:
                    message.password = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: RegisterCatRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* string username = 2; */
        if (message.username !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.username);
        /* optional string bio = 3; */
        if (message.bio !== undefined)
            writer.tag(3, WireType.LengthDelimited).string(message.bio);
        /* string password = 4; */
        if (message.password !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.password);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message spec.RegisterCatRequest
 */
export const RegisterCatRequest = new RegisterCatRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RegisterCatResponse$Type extends MessageType<RegisterCatResponse> {
    constructor() {
        super("spec.RegisterCatResponse", [
            { no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<RegisterCatResponse>): RegisterCatResponse {
        const message = { id: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RegisterCatResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RegisterCatResponse): RegisterCatResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 id */ 1:
                    message.id = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: RegisterCatResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, WireType.Varint).int32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message spec.RegisterCatResponse
 */
export const RegisterCatResponse = new RegisterCatResponse$Type();
/**
 * @generated ServiceType for protobuf service spec.Catter
 */
export const Catter = new ServiceType("spec.Catter", [
    { name: "Register", options: {}, I: RegisterCatRequest, O: RegisterCatResponse },
    { name: "Login", options: {}, I: LoginCatRequest, O: LoginCatResponse },
    { name: "GetCat", options: {}, I: GetCatRequest, O: GetCatResponse },
    { name: "CreateKitt", options: {}, I: CreateKittRequest, O: CreateKittResponse },
    { name: "GetKitt", options: {}, I: GetKittRequest, O: GetKittResponse },
    { name: "ListKitts", options: {}, I: ListKittsRequest, O: ListKittsResponse }
]);