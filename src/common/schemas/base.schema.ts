import { Prop } from "@nestjs/mongoose";
import {Types} from 'mongoose';
import { v4 } from 'uuid';

export abstract class BaseSchema {
    @Prop({
        required: false,
        type: Types.UUID,
        default: () => v4(),
    })
    uuid: string;

    @Prop({ type: Date, default: new Date() })
    createdAt: Date;

    @Prop({ type: Date, default: new Date() })
    modifiedAt: Date;

    @Prop({  type : Boolean, required: false, default: false })
    isDeleted: boolean;

    @Prop({ type: Date, required: false })
    deletedAt: Date;
}
