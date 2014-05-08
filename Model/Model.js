var Product;
var Category;
var Store;
var Stock;
var EventEntity;

function loadModel(){ 
    
    persistence.store.websql.config(persistence, 'EasyLab', 'EasyLab database', 5*1024*1024);
    
    Product = persistence.define("Product", {
        Name : "TEXT",
        Identification : "TEXT",
        Description : "TEXT",
        Lapsing : "DATE"
        
    });
    
    Category = persistence.define("Category", {
        Name : "TEXT",
        Identification : "TEXT",
        Description : "TEXT"        
    
    });
        
    Store = persistence.define("Store", {
        Name : "TEXT",
        Identification : "TEXT",
        Description : "TEXT",
        
    });
    
    Stock = persistence.define("Stock",{
        Identification : "TEXT",
        NbrProduct : "INT",
        Inventary : "BOOL"
    });
    
    EventEntity = persistence.define("EventEntity", {
        Created : "DATE",
        Updated : "DATE",
        Disabled : "BOOL"        
    });
    
    Product.hasMany("categories", Category, "products");
    //Product.hasMany("products", Product, "store");
    //Product.hasMany("products", Product, "")
    persistence.schemaSync();
}