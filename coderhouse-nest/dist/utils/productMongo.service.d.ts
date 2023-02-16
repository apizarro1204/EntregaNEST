import mongoose from 'mongoose';
import { CreateProductDto } from 'src/product/dto/create-product.dto';
export declare class ProductMongo {
    private mongodb;
    private url;
    constructor();
    save(prod: any): Promise<any>;
    createData(prod: CreateProductDto): Promise<any>;
    getById(id: string): Promise<mongoose.Document<unknown, any, {
        title: string;
        price: number;
        stock: number;
        thumbnail: string;
    }> & {
        title: string;
        price: number;
        stock: number;
        thumbnail: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>;
    getAll(): Promise<(mongoose.Document<unknown, any, {
        title: string;
        price: number;
        stock: number;
        thumbnail: string;
    }> & {
        title: string;
        price: number;
        stock: number;
        thumbnail: string;
    } & {
        _id: mongoose.Types.ObjectId;
    })[]>;
    put(id: string, prod: CreateProductDto): Promise<mongoose.Document<unknown, any, {
        title: string;
        price: number;
        stock: number;
        thumbnail: string;
    }> & {
        title: string;
        price: number;
        stock: number;
        thumbnail: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>;
    delete(id: string): Promise<mongoose.Document<unknown, any, {
        title: string;
        price: number;
        stock: number;
        thumbnail: string;
    }> & {
        title: string;
        price: number;
        stock: number;
        thumbnail: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>;
}
