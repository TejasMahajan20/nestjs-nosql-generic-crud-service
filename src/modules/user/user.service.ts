import { Injectable } from '@nestjs/common';
import { GenericCrudService } from 'src/common/services/generic-crud.service';
import { User, UserDocument } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService extends GenericCrudService<UserDocument> {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
        super(userModel);
    }
}