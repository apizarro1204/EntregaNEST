import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductInterface } from './interface/product.interface';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): Promise<ProductInterface>;
    getAll(): Promise<ProductInterface[]>;
    getById(id: string): Promise<ProductInterface>;
    delete(id: string): Promise<ProductInterface>;
}
