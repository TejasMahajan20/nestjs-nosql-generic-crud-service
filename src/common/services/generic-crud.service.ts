import { Injectable } from '@nestjs/common';
import { Model, Document, FilterQuery } from 'mongoose';

@Injectable()
export class GenericCrudService<T extends Document> {
    constructor(protected readonly model: Model<T>) { }

    async create(data: Partial<T>): Promise<T> {
        const newDocument = new this.model(data);
        return await newDocument.save();
    }

    async createMany(data: Partial<T>[]) {
        return await this.model.insertMany(data);
    }

    async findOne(
        filter: FilterQuery<T>,
        projection?: string[]
    ): Promise<T | null> {
        return await this.model.findOne(filter, projection).exec();
    }

    async findOneBy(
        id: string,
        projection?: string[]
    ): Promise<T | null> {
        return await this.model.findById(id, projection).exec();
    }

    async findAll(
        filter: FilterQuery<T>,
        projection?: string[]
    ): Promise<T[]> {
        return await this.model.find(filter, projection).exec();
    }

    async update(id: string, data: Partial<T>): Promise<T | null> {
        return await this.model.findByIdAndUpdate(id, data, { new: true }).exec();
    }

    async delete(id: string): Promise<T | null> {
        return await this.model.findByIdAndDelete(id).exec();
    }
}
