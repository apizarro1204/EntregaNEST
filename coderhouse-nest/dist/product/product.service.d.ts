import { CreateProductDto } from './dto/create-product.dto';
import { ProductInterface } from './interface/product.interface';
import { ProductMongo } from 'src/utils/productMongo.service';
export declare class ProductService {
    private readonly productMongo;
    constructor(productMongo: ProductMongo);
    createProduct(product: CreateProductDto): Promise<ProductInterface>;
    getAll(): Promise<ProductInterface[]>;
    getById(id: string): Promise<ProductInterface>;
    delete(id: string): Promise<ProductInterface>;
}
