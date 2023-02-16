"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMongo = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const product_model_1 = require("../product/models/product.model");
let ProductMongo = class ProductMongo {
    constructor() {
        this.url = process.env.DB_MONGO;
        this.mongodb = mongoose_1.default.connect;
    }
    async save(prod) {
        try {
            await this.mongodb(this.url);
            const result = await prod.save();
            console.log(`result ${result}`);
            return result;
        }
        catch (err) {
            return err;
        }
    }
    async createData(prod) {
        try {
            await this.mongodb(this.url);
            const newProduct = await this.save(new product_model_1.ProductModel({
                title: prod.title,
                price: prod.price,
                stock: prod.stock,
                thumbnail: prod.thumbnail,
            }));
            console.log(`newProduct ${newProduct}`);
            return await newProduct;
        }
        catch (err) {
            console.log(err);
        }
    }
    async getById(id) {
        try {
            await this.mongodb(this.url);
            const productId = new mongoose_1.default.Types.ObjectId(id);
            return await product_model_1.ProductModel.findByIdAndDelete(productId);
        }
        catch (error) {
            throw { error: 'Producto no existe' };
        }
    }
    async getAll() {
        try {
            await this.mongodb(this.url);
            return await product_model_1.ProductModel.find();
        }
        catch (err) {
            throw { error: 'No existen productos' };
        }
    }
    async put(id, prod) {
        try {
            await this.mongodb(this.url);
            const productId = new mongoose_1.default.Types.ObjectId(id);
            return await product_model_1.ProductModel.findByIdAndUpdate(productId, prod);
        }
        catch (err) {
            console.log(err);
        }
    }
    async delete(id) {
        try {
            await this.mongodb(this.url);
            const productId = new mongoose_1.default.Types.ObjectId(id);
            return await product_model_1.ProductModel.findByIdAndDelete(productId);
        }
        catch (err) {
            throw { error: 'No existen productos' };
        }
    }
};
ProductMongo = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ProductMongo);
exports.ProductMongo = ProductMongo;
//# sourceMappingURL=productMongo.service.js.map